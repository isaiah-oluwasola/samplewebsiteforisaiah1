function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("user", message);
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage("bot", reply);
  }, 300); // slight delay to feel like typing
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! How can I help you?";
  } else if (message.includes("your name")) {
    return "I'm a simple chatbot made with JavaScript!";
  } else if (message.includes("how are you")) {
    return "I'm doing great, thanks for asking!";
  } else if (message.includes("bye")) {
    return "Goodbye! Have a nice day!";
  } else {
    return "Sorry, I didn't understand that.";
  }
}




