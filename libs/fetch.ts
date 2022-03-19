const API_UID =
  "c9888ee65a7ef8c94d998465ea37c602ae5ff8281dacc42b9dc6f35d26185bc0";
const API_SECRET =
  "6967697a927fb6b29a658c321458b657d6dbd7e27012f7b670a7453e3e19a37d";

async function httperr(res: Response) {
  return Error(`${res.status} ${await res.text()}`);
}

export async function jsonfetch(url: string, options?: RequestInit) {
  const res = await fetch(url, options);
  if (!res.ok) throw httperr(res);
  const text = await res.text();
  if (text) return JSON.parse(text);
}

export async function fetch42(path: string) {
  const base = "https://api.intra.42.f";
  return await jsonfetch(`${base}${path}`);
}
