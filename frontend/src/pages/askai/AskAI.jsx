import { useState, useEffect, useRef } from "react";
import "./AskAI.css";

import { PostMessageToAIBackend } from "../../services/api";
import Navbar from "../../components/dashboard/navbar/Navbar";

export default function AskAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = {
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setInput("");

    setIsLoading(true);

    try {
      // Send the full conversation history + new message
      const response = await PostMessageToAIBackend([...messages, userMessage]);

      const aiReply =
        response.response || response.message?.content || "No reply received";

      const aiMessage = {
        role: "assistant",
        content: aiReply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to get AI response:", error);

      const errorMessage = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <Navbar />
      <div className="chat-page">
        <div className="chat-container">
          <header className="chat-header">
            <h1>Health AI Assistant</h1>
            <p>Your personal health data companion</p>
          </header>

          <div className="messages-container">
            {messages.length === 0 && (
              <div className="empty-state">
                <p> Loading your health data...</p>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.role === "user" ? "user-message" : "ai-message"
                }`}
              >
                <div className="message-content">{msg.content}</div>
              </div>
            ))}

            {isLoading && (
              <div className="message ai-message">
                <div className="message-content typing">Thinking...</div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about your sleep, heart rate, stress, steps..."
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="send-btn"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
