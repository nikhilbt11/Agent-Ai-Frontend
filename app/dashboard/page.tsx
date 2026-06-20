"use client";

import { useEffect, useState } from "react";

import StatCard from "@/components/dashboard/StatCard";

import { getDashboardStats } from "@/services/dashboard.service";

export default function DashboardPage() {
  const [stats, setStats] =
    useState({
      totalLeads: 0,
      newLeads: 0,
      convertedLeads: 0,
      totalConversations: 0,
      totalMessages: 0,
    });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data =
        await getDashboardStats();

      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        <StatCard
          title="Total Leads"
          value={stats.totalLeads}
        />

        <StatCard
          title="New Leads"
          value={stats.newLeads}
        />

        <StatCard
          title="Converted"
          value={
            stats.convertedLeads
          }
        />

        <StatCard
          title="Conversations"
          value={
            stats.totalConversations
          }
        />

        <StatCard
          title="Messages"
          value={
            stats.totalMessages
          }
        />
      </div>
    </div>
  );
}