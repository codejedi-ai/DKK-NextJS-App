"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function signInWithDiscord(baseUrl: string, windowLocationHref?: string) {
  const supabase = await createClient()
  
  if (windowLocationHref) {
    console.log('Discord login - window.location.href:', windowLocationHref)
  }
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: `${baseUrl}/auth/callback?next=/dashboard`
    }
  })

  if (error) {
    console.error('Discord sign in error:', error)
    redirect('/?error=' + encodeURIComponent(error.message))
  }

  if (data.url) {
    redirect(data.url)
  }
}

export async function signInWithEmail(email: string, password: string, windowLocationHref?: string) {
  const supabase = await createClient()
  
  if (windowLocationHref) {
    console.log('Email login - window.location.href:', windowLocationHref)
  }
  
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/?error=' + encodeURIComponent(error.message))
  }

  redirect('/dashboard')
}

export async function signUp(email: string, password: string, windowLocationHref?: string) {
  const supabase = await createClient()
  
  if (windowLocationHref) {
    console.log('Sign up - window.location.href:', windowLocationHref)
  }
  
  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect('/?error=' + encodeURIComponent(error.message))
  }

  redirect('/?message=' + encodeURIComponent('Check your email to confirm your account'))
}

export async function signOut() {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Sign out error:', error)
  }

  redirect('/')
}

