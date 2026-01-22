const BASE_URL = "http://localhost:3001";

export const PostMessageToAIBackend = async (messages, healthData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/ai-chat/post/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages, healthData }), 
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server error:", errorData);
      throw new Error(errorData.error || "Network response was not ok");
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error posting message to AI backend:", error);
    throw error;
  }
};

export const PostMessageToAIForInsight = async (messages, healthData) => {

  try {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No auth token found. Please login.");

    const response = await fetch(`${BASE_URL}/api/ai-chat/post/insight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify({ messages, healthData }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server error:", errorData);
      throw new Error(errorData.error || "Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting message to AI backend:", error);
    throw error;
  }
};
