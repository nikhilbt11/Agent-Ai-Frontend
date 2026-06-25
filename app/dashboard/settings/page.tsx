"use client";

import { useEffect, useState } from "react";

import BusinessSettingsCard from "@/components/settings/BusinessSettingsCard";
import { getBusiness } from "@/services/settings.service";
import WhatsAppSettingsCard from "@/components/settings/WhatsAppSettingsCard";
import { getWhatsappAccount } from "@/services/settings.service";

export default function SettingsPage() {
  const [business, setBusiness] = useState<any>(null);
  const [account, setAccount] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const business = await getBusiness();

    const account = await getWhatsappAccount();

    setBusiness(business);
    setAccount(account);
  };

  if (!business || !account) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <BusinessSettingsCard business={business} />

      <WhatsAppSettingsCard account={account} />
    </div>
  );
}
