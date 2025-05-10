import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

// Message and user types
interface ChatMessage {
  username: string;
  message: string;
  fromBot?: boolean;
}

export default function AiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [prompted, setPrompted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Prompt for username once on mount
  useEffect(() => {
    if (!prompted && !username) {
      let name = prompt("Enter your username");
      if (name) {
        setUsername(name);
        setPrompted(true);
      }
      // If user cancels, do not set prompted, so prompt will show again on next mount
    }
  }, [prompted, username]);

  // User list: always show current user and Bot
  const userList = username ? [username, "Bot"] : ["Bot"];

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() && username) {
      const userMsg: ChatMessage = { username, message: input };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { username: "Bot", message: getBotResponse(input), fromBot: true },
        ]);
      }, 600);
    }
  }

  function getBotResponse(userInput: string) {
    if (/hello|hi/i.test(userInput)) return "Hello! How can I help you today?";
    if (/help/i.test(userInput)) return "I'm here to help! Ask me anything.";
    return "I'm a simple bot. Try saying 'hello' or 'help'.";
  }

  if (!username) return null;

  return (
    <div id="content" className={styles.content}>
      <div id="view" className={styles.view}>
        <div id="online" className={styles.online}>
          <h3 style={{
            textAlign: "center",
            margin: "1rem",
            }}>Online</h3>
          <ul id="userList" className={styles.userList}>
            {userList.map((user) => (
              <li key={user} style={{
                position: "relative",
                padding: "0.5rem 0 0.5rem 2.2em", // increased left padding for dot spacing
                borderBottom: "1px solid #eee",
                fontWeight: user === username ? 600 : 400,
                display: "flex",
                alignItems: "center"
              }}>
                {user === username && (
                  <span style={{
                    display: "inline-block",
                    position: "absolute",
                    left: "0.75em", // move dot 8px from the left edge
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#4caf50",
                    borderRadius: "50%",
                    width: 10,
                    height: 10
                  }} />
                )}
                {user}
              </li>
            ))}
          </ul>
        </div>
        <div id="chat" className={styles.chat} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <ul id="messages" className={styles.messages} style={{ flex: 1, overflowY: "auto", margin: 0, padding: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            {messages.map((msg, i) => (
              <li key={i}>
                <strong>{msg.username}:</strong> {msg.message}
              </li>
            ))}
            <div ref={messagesEndRef} />
          </ul>
        </div>
      </div>
      <form id="form" className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          id="input"
          className={styles.input}
          autoComplete="off"
          value={input}
          onChange={handleInputChange}
          disabled={!username}
        />
        <button type="submit" disabled={!input.trim() || !username}>
          Send
        </button>
      </form>
    </div>
  );
}
