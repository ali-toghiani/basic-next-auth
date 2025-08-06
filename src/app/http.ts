import { UserResponse } from '@/types/User';


export async function fetchRandomUser(): Promise<UserResponse> {
  const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
  if (!response.ok) {
    throw new Error('Failed to fetch random user');
  }
  const data = await response.json();
  return data;
}