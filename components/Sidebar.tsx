import { headers } from "next/headers"
import { Home, Sparkles, FolderKanban, Users, Wrench, Code } from "lucide-react"
import SidebarClient from "./SidebarClient"

export default async function Sidebar({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get("x-pathname") || "/dashboard"

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/connections", label: "Connections", icon: Users },
    { href: "/hackathons", label: "Hackathons", icon: Sparkles },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/skillsets", label: "Skill Sets", icon: Code },
    { href: "/builderspaces", label: "Builder Spaces", icon: Wrench },
  ]

  return (
    <SidebarClient navItems={navItems} isActive={isActive}>
      {children}
    </SidebarClient>
  )
}
