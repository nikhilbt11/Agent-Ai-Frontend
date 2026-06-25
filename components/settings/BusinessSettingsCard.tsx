"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { updateBusiness } from "@/services/settings.service";

interface Props {
  business: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}

export default function BusinessSettingsCard({ business }: Props) {
  const [form, setForm] = useState(business);

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateBusiness(form);

      toast.success("Business updated successfully");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="Business Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <Input
          placeholder="Phone"
          value={form.phoneNumber}
          onChange={(e) =>
            setForm({
              ...form,
              phoneNumber: e.target.value,
            })
          }
        />
        <Button disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </CardContent>
    </Card>
  );
}
