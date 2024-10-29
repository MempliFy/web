"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Bird, Home, History } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "History",
    url: "#",
    icon: History,
  },
];

export const AppSidebar: React.FC = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <div className="flex items-center gap-2 p-2">
            <Bird />
            <h1 className="text-lg font-bold">MempliFy</h1>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-row items-center gap-2">
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
