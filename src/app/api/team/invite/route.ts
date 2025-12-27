import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";
import { randomBytes } from "crypto";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Invite POST] Auth user:", user?.id, "Error:", authError?.message);

    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 });
    }

    // Use service client to bypass RLS
    const serviceClient = createServiceClient();

    // Get user's team ID and role
    const { data: userData, error: userError } = await serviceClient
      .from("users")
      .select("team_id, role")
      .eq("id", user.id)
      .single();

    console.log("[Invite POST] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json(
        { error: "Kein Team zugeordnet" },
        { status: 400 }
      );
    }

    // Only admins can invite
    if (userData.role !== "admin") {
      return NextResponse.json(
        { error: "Keine Berechtigung" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { email } = body;

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "E-Mail ist erforderlich" },
        { status: 400 }
      );
    }

    // Check if user already exists in team
    const { data: existingUser } = await serviceClient
      .from("users")
      .select("id")
      .eq("email", email.toLowerCase())
      .eq("team_id", userData.team_id)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: "Diese Person ist bereits im Team" },
        { status: 400 }
      );
    }

    // Check if invite already exists
    const { data: existingInvite } = await serviceClient
      .from("team_invites")
      .select("id")
      .eq("email", email.toLowerCase())
      .eq("team_id", userData.team_id)
      .gt("expires_at", new Date().toISOString())
      .single();

    if (existingInvite) {
      return NextResponse.json(
        { error: "Eine Einladung wurde bereits gesendet" },
        { status: 400 }
      );
    }

    // Generate invite token
    const token = randomBytes(32).toString("hex");

    // Create invite
    const { data: invite, error } = await serviceClient
      .from("team_invites")
      .insert({
        team_id: userData.team_id,
        email: email.toLowerCase(),
        token,
        invited_by: user.id,
      })
      .select("id")
      .single();

    if (error) throw error;

    // TODO: Send email with invite link
    // For now, just return success
    // The invite link would be: ${process.env.NEXT_PUBLIC_APP_URL}/invite/${token}

    return NextResponse.json({
      success: true,
      inviteId: invite.id,
    });
  } catch (error) {
    console.error("Invite POST Error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
