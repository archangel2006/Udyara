const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function askAgent(question) {
  const response = await fetch(`${API_URL}/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    throw new Error("Backend error");
  }

  return response.json();
}

export async function healthCheck() {
  try {
    const res = await fetch(`${API_URL}/health`);
    if (!res.ok) return false;
    return true;
  } catch {
    return false;
  }
}
