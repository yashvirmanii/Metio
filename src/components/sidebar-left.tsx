"use client"

import * as React from "react"
import {
  Command,
  Home,
  Inbox
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  teams: [
    {
      name: "Metio Inc",
      logo: Command,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Home",
      url: "",
      icon: Home,
      isActive: true,
    },
    {
      title: "My Meetings",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
}

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarRail />
    </Sidebar>
  )
}
