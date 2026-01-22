import {PostMessageToAIForInsight} from "./api"


const BASE_URL = "http://localhost:3001";



export const FetchDashboardData = async () => {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${BASE_URL}/api/dashboard/data/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server error while fetching dashboard:", errorData);
      
      if (response.status === 401) {
        FetchLogoutData();
      }
      
      throw new Error(errorData.error || "Failed to fetch dashboard data");
    }
    
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};



export const getUserDataName = async () => {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error("No authentication token found");
    }
    
    const response = await fetch(`${BASE_URL}/api/dashboard/data/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server error while fetching user data:", errorData);
      
      if (response.status === 401) {
        FetchLogoutData();
      }
      
      throw new Error(errorData.error || "Failed to fetch user data");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getUserData = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No auth token found (user not logged in)");

    const res = await fetch(`${BASE_URL}/api/dashboard/form`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errBody = await res.json().catch(()=> ({}));
      throw new Error(errBody.message || "Failed to fetch user data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getHealthInsights = async (healthData) => {
  try {
    const messages = [
      { role: "user", content: "Please analyze my health data and provide  three health insights. 1. What’s Looking Good.  2. Areas to Improve   3. Today’s Top Recommendations" },
    ];
    const response = await PostMessageToAIForInsight(messages, healthData);
  
    return response.raw; 
  } catch (error) {
    console.error("Error fetching AI insights:", error);
    throw error;
  }
};
