import { api } from "@/lib/api";

export const getLeads = async () => {
  const response = await api.get("/leads");

  return response.data.data;
};