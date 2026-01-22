const BASE_URL = "http://localhost:3001";


export const FetchLogInDataPost = async (loginData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/login/data/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server error while logging in:", errorData);
      throw new Error(errorData.error || "Failed to log in");
    }
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("authToken", data.token);
    }
    return data;
  } catch (error) {
    console.error("Error posting login data to backend:", error);
    throw error;
  }
};

export const FetchSignUpDataPost = async (signUpData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/sign-up/data/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server error while signing up:", errorData);
      throw new Error(errorData.error || "Failed to sign up");
    }
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("authToken", data.token);
    }
    return data;
  } catch (error) {
    console.error("Error posting sign-up data to backend:", error);
    throw error;
  }
};

// src/utils/logout.js
export const logout = async () => {
  const token = localStorage.getItem("authToken");

  try {
    await fetch("http://localhost:3001/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.error("Logout failed:", err);
  } finally {
    // Always remove token
    localStorage.removeItem("authToken");
  }
};



export const isLoggedIn = async () => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) return false;

    const response = await fetch(
      "http://localhost:3001/api/auth/verify",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      localStorage.removeItem("authToken");
      return false;
    }

    const data = await response.json();
    return data.ok === true;
  } catch (error) {
    console.error("Auth check failed:", error);
    localStorage.removeItem("authToken");
    return false;
  }
};
