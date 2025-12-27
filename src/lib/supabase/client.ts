import { createBrowserClient } from "@supabase/ssr";

// Browser client for Client Components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createClient = (): any => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
