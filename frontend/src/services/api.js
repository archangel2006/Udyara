const BASE_URL = "http://127.0.0.1:8000";

export async function askAgent(question) {
  const res = await fetch(`${BASE_URL}/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  if (!res.ok) {
    throw new Error("Server error");
  }

  return res.json();
}
