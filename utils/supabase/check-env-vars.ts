// This check can be removed
// it is just for tutorial purposes

export const hasEnvVars = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Provide fallback values for build time
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xnjqckplnufgsrwngofj.supabase.co"
export const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuanFja3BsbnVmZ3Nyd25nb2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0ODkyOTMsImV4cCI6MjA1MDA2NTI5M30.wYaYsi6yb-Dr_r3Uakvt2PSOltZVQnBGc8V40zlFMcU"
