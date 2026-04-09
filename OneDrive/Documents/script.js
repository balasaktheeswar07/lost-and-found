const lostBtn = document.getElementById("lost-btn");
const foundBtn = document.getElementById("found-btn");

const lostSound = document.getElementById("lost-sound");
const foundSound = document.getElementById("found-sound");

// optional volume control
lostSound.volume = 0.35;
foundSound.volume = 0.35;

lostBtn.addEventListener("click", () => {
  lostSound.currentTime = 0;
  lostSound.play();

  alert("Lost item report page will open here.");
});

foundBtn.addEventListener("click", () => {
  foundSound.currentTime = 0;
  foundSound.play();

  alert("Found item report page will open here.");
});
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

const API_KEY = "YOUR_GEMINI_API_KEY";

chatToggle.addEventListener("click", () => {
  chatContainer.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
  chatContainer.classList.add("hidden");
});

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function addTyping() {
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("typing");
  typingDiv.id = "typing-indicator";
  typingDiv.textContent = "AI is typing...";
  chatBody.appendChild(typingDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById("typing-indicator");
  if (typing) typing.remove();
}

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";
  addTyping();

  try {
    const prompt = `
You are an AI assistant for a Lost and Found website.

Your job:
- Help users report lost items
- Help users report found items
- Help users search for missing belongings
- Explain how to claim an item
- Be short, helpful, and student-friendly
- If item is important like ID card, wallet, keys, documents, tell them to also contact admin/security

User message: ${message}
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    removeTyping();

    const botReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that. Please try again.";

    addMessage(botReply, "bot");
  } catch (error) {
    removeTyping();
    addMessage("Error connecting to Gemini AI. Check your API key or internet.", "bot");
    console.error(error);
  }
}
