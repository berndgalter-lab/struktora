import { redirect } from "next/navigation";

// Redirect to profile settings
export default function SettingsPage() {
  redirect("/dashboard/settings/profile");
}

