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
