import { api } from "@/lib/api";

export const getKnowledgeBase =
  async () => {
    const response =
      await api.get(
        "/knowledge-base"
      );

    return response.data.data;
  };

export const createKnowledge =
  async (payload: any) => {
    const response =
      await api.post(
        "/knowledge-base",
        payload
      );

    return response.data.data;
  };

export const deleteKnowledge =
  async (id: string) => {
    const response =
      await api.delete(
        `/knowledge-base/${id}`
      );

    return response.data;
  };