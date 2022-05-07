import { React, useState } from "react";

export default function MessageUnread() {
  const [messages, setMessages] = useState(["a", "b"]);

  return (
    <div>
      <h1>Message unread example:</h1>
      {messages.length === 0 ? (
        <h1>You are all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}
        </h1>
      )}
    </div>
  );
}
