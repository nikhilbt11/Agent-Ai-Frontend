import { api } from "@/lib/api";
import {
  BusinessPayload,
  WhatsAppPayload,
} from "@/types/settings";

export const getBusiness = async () => {
  const res = await api.get("/business");
  return res.data.data;
};

export const updateBusiness = async (
  payload: BusinessPayload
) => {
  const res = await api.put(
    "/business",
    payload
  );

  return res.data.data;
};

export const getWhatsappAccount =
  async () => {
    const res = await api.get(
      "/whatsapp/account"
    );

    return res.data.data;
  };

export const updateWhatsappAccount =
  async (
    payload: WhatsAppPayload
  ) => {
    const res = await api.put(
      "/whatsapp/account",
      payload
    );

    return res.data.data;
  };