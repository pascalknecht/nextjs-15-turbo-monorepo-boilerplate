import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "@/navigation";
import {
  ChartBar,
  HeartPulse,
  LayoutDashboard,
  Lightbulb,
  Users,
} from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import QueryClientProviderWrapper from "./query-client-provider";

interface BackendLayoutProps {
  params: { locale: string };
  children?: React.ReactNode;
}

export default async function BackendLayout({
  params: { locale },
  children,
}: BackendLayoutProps) {
  const user = await getCurrentUser();
  const messages = await getMessages();

  if (!user) {
    redirect("/login");
  }

  return (
    <NextIntlClientProvider messages={messages}>
      <QueryClientProviderWrapper>
        <SidebarProvider>
          <AppSidebar
            user={{
              name: user?.name ?? "",
              email: user?.email ?? "",
              image: user?.image ?? "",
            }}
          />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </QueryClientProviderWrapper>
    </NextIntlClientProvider>
  );
}

export const dynamic = "force-dynamic";
