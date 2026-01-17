const BASE_URL = "http://localhost:3001";

export const saveHealthProfile = async (data) => {
  const token = localStorage.getItem("authToken");

  const res = await fetch(`${BASE_URL}/api/health-profile-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (res.status === 401) {
    throw new Error("Unauthorized");
  }

  return res.json();
};

export const getHealthProfile = async () => {
  const token = localStorage.getItem("authToken");

  const res = await fetch(`${BASE_URL}/api/health-profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
