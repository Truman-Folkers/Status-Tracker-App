const BACKEND_URL = "https://trumanfolkers-backend.vercel.app";
import { status } from "../app/index";

export async function createStatus(status: number, name: string) {
  const response = await fetch(`${BACKEND_URL}/api/statuses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, status: status }),
  });
  if (!response.ok) throw new Error("failed to create status");
  return response.json();
}

export async function fetchStatuses(): Promise<status[]> {
  const response = await fetch(`${BACKEND_URL}/api/statuses`);
  if (!response.ok) throw new Error("Failed to fetch statuses");
  return response.json();
}
