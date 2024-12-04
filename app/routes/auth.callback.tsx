import { redirect, type LoaderFunctionArgs } from "@remix-run/node"
import { createServerClient } from "@supabase/auth-helpers-remix"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = new Response()
  const url = new URL('https://studr-ai-six.vercel.app/')
  const code = url.searchParams.get("code")

  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { request, response }
    )

    await supabase.auth.exchangeCodeForSession(code)
  }

  return redirect("https://studr-ai-six.vercel.app/", {
    headers: response.headers,
  })
}