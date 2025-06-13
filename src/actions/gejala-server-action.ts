"use server";
import { cookies } from "next/headers";
import {
  fetchAllGejala,
  createGejala,
  editGejala,
  deleteGejala,
  GejalaPayload,
} from "@/services/gejala-service";

export async function getGejalaServer() {
  const token = (await cookies()).get("api_token")?.value || "";
  return await fetchAllGejala(token);
}

export async function createGejalaServer(payload: GejalaPayload) {
  const token = (await cookies()).get("api_token")?.value || "";
  return await createGejala(payload, token);
}

export async function editGejalaServer(id: number, payload: GejalaPayload) {
  const token = (await cookies()).get("api_token")?.value || "";
  return await editGejala(id, payload, token);
}

export async function deleteGejalaServer(id: number) {
  const token = (await cookies()).get("api_token")?.value || "";
  return await deleteGejala(id, token);
}
