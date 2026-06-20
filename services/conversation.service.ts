import { api } from "@/lib/api";

export const getConversations = async () => {
  const response = await api.get(
    "/conversations"
  );

  return response.data.data;
};

export const getMessages = async (
  conversationId: string
) => {
  const response = await api.get(
    `/conversations/${conversationId}/messages`
  );

  return response.data.data;
};