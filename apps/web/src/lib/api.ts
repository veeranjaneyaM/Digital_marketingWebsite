import { siteConfig } from "@/lib/data";

type RequestOptions = {
  method?: "GET" | "POST";
  body?: Record<string, unknown>;
};

export async function apiRequest(path: string, options: RequestOptions = {}) {
  const response = await fetch(`${siteConfig.apiUrl}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`API request failed for ${path}`);
  }

  return response.json();
}
