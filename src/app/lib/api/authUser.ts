// lib/api/auth.ts

export type RegisterPayload = {
  email: string;
  password: string;
  name: string;
};

export const register = async (
  payload: RegisterPayload
): Promise<{ message?: string; error?: string }> => {
  console.log('payload', payload)
  try {
    const res = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();

      if (!res.ok) {
        return { error: data.error || "Erreur lors de l'inscription" };
      }

      return data;
    } else {
      const text = await res.text();
      console.error("Réponse non-JSON du backend:", text);
      return { error: "La réponse du serveur n'est pas du JSON." };
    }
  } catch (error) {
    return { error: (error as Error).message };
  }
};

