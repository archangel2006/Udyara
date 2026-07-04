const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function askAgent(question) {
  // 120s timeout — Render free tier can take ~60-90s to cold-start
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 120000);

  try {
    const response = await fetch(`${API_URL}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.detail || `Backend error (${response.status})`);
    }

    return response.json();
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === "AbortError") {
      throw new Error("Request timed out — the server may be waking up. Please try again.");
    }
    throw err;
  }
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
