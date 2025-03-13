import React from "react";
import DashboardHeader from "../components/dashboard-header";

export default function SettingsPage() {
  return (
    <div>
      <DashboardHeader
        title="Account Settings"
        description="Manage your account settings"
      />

      <section className="space-y-6 p-6">
        <div className="bg-white dark:border-neutral-800 dark:bg-transparent rounded-md border">
          <div className="border-b px-4 py-2 sm:px-6 md:py-3 dark:bg-neutral-900/50 bg-neutral-50 rounded-t-md">
            <span className="text-base sm:text-lg font-medium mb-4">
              Manage Subscription
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
