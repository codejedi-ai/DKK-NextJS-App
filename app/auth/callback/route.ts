import { NextResponse, type NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const { searchParams } = requestUrl
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/dashboard"

  if (code) {
    // Ensure we only redirect to the same origin as the request
    // This prevents redirects to production when running on localhost
    const redirectUrl = new URL(next, requestUrl.origin)
    
    // Safety check: ensure redirect URL matches request origin
    if (redirectUrl.origin !== requestUrl.origin) {
      console.warn(`Redirect origin mismatch: ${redirectUrl.origin} !== ${requestUrl.origin}`)
      const fallbackRedirect = new URL("/", requestUrl.origin)
      return NextResponse.redirect(fallbackRedirect)
    }
    
    console.log("Request URL:", requestUrl.toString())
    console.log("Redirect URL:", redirectUrl.toString())
    console.log("Next path:", next)
    let response = NextResponse.redirect(redirectUrl)

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              request.cookies.set({
                name,
                value,
                ...options,
              })
            })
            response = NextResponse.redirect(redirectUrl)
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set({
                name,
                value,
                ...options,
              })
            })
          },
        },
      }
    )

    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data.session) {
      // Verify user is authenticated
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        console.log("Redirecting to:", redirectUrl.toString())
        return response
      }
    } else {
      console.error("Error exchanging code for session:", error)
    }
  }

  const fallbackRedirect = new URL("/", requestUrl.origin)
  console.log("Fallback redirect to:", fallbackRedirect.toString())
  return NextResponse.redirect(fallbackRedirect)
}

