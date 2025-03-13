"use client";

import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Home,
  Users,
  LayoutDashboard,
  FileText,
  CreditCard,
  Package,
  PieChart,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2 py-6">
          <h2 className="text-lg font-semibold">Company name</h2>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                <Link href="/dashboard">
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/customers"}>
                <Link href="/customers">
                  <Users className="h-4 w-4" />
                  Customers
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === "/schedules"}>
                  <LayoutDashboard className="h-4 w-4" />
                  Schedules
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === "/credit-notes"}>
                  <FileText className="h-4 w-4" />
                  Credit Notes
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === "/invoices"}>
                  <CreditCard className="h-4 w-4" />
                  Invoices
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === "/products"}>
                  <Package className="h-4 w-4" />
                  Products
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === "/insights"}>
                  <PieChart className="h-4 w-4" />
                  Insights
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === "/plans"}>
                  <Package className="h-4 w-4" />
                  Plans
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === "/billing"}>
                  <CreditCard className="h-4 w-4" />
                  Billing
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/settings"}>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="text-red-600"
              onClick={() => {
                signOut();
              }}
            >
              <LogOut className="h-4 w-4" />
              Log out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
