"use client";

import { useState } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import { updateWhatsappAccount } from "@/services/settings.service";
import { toast } from "sonner";

interface Props {
  account: {
    whatsappNumber: string;
    phoneNumberId: string;
    accessToken: string;
    isActive: boolean;
  };
}

export default function WhatsAppSettingsCard({ account }: Props) {
  const [form, setForm] = useState(account);

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateWhatsappAccount({
        accessToken: form.accessToken,
        isActive: form.isActive,
      });

      toast.success("WhatsApp settings updated.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update WhatsApp settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>WhatsApp Configuration</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <Label>WhatsApp Number</Label>

          <Input value={form.whatsappNumber} disabled />
        </div>

        <div>
          <Label>Phone Number ID</Label>

          <Input value={form.phoneNumberId} disabled />
        </div>

        <div>
          <Label>Access Token</Label>

          <Input
            type="password"
            value={form.accessToken}
            onChange={(e) =>
              setForm({
                ...form,
                accessToken: e.target.value,
              })
            }
          />
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3">
          <Label>WhatsApp Enabled</Label>

          <Switch
            checked={form.isActive}
            onCheckedChange={(checked) =>
              setForm({
                ...form,
                isActive: checked,
              })
            }
          />
        </div>

        <Button disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </CardContent>
    </Card>
  );
}
