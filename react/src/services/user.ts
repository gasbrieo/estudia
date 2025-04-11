import { apiClient } from "@/libs/axios";
import { UserProfile } from "@/types/user";

export const getUserProfile = async (username: string): Promise<UserProfile> => {
  const response = await apiClient.get(`/users/${username}/profile`);
  return response.data;
};
