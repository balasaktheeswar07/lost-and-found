// ===== DATA MANAGEMENT =====
const STORAGE_KEY = 'lostFoundItems';

// Sample initial items
const sampleItems = [
  {
    id: 1,
    type: 'lost',
    category: 'wallet',
    name: 'Black Leather Wallet',
    description: 'Contains ID and credit cards. Very important.',
    location: 'Library 3rd Floor',
    date: '2026-04-07',
    contact: '555-0101',
    createdAt: new Date().getTime()
  },
  {
    id: 2,
    type: 'found',
    category: 'phone',
    name: 'Silver iPhone 15',
    description: 'Found with cracked screen protector',
    location: 'Cafeteria',
    date: '2026-04-06',
    contact: '555-0102',
    createdAt: new Date().getTime()
  },
  {
    id: 3,
    type: 'found',
    category: 'id',
    name: 'Student ID Card',
    description: 'Name: John Smith, ID: 2024001',
    location: 'Parking Area',
    date: '2026-04-05',
    contact: '555-0103',
    createdAt: new Date().getTime()
  }
];

// Initialize storage
function initializeStorage() {
  const items = localStorage.getItem(STORAGE_KEY);
  if (!items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleItems));
  }
}

function getItems() {
  const items = localStorage.getItem(STORAGE_KEY);
  return items ? JSON.parse(items) : [];
}

function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// ===== DOM ELEMENTS =====
const reportBtn = document.getElementById('report-btn');
const reportModal = document.getElementById('report-modal');
const closeModal = document.querySelector('.close-modal');
const reportForm = document.getElementById('report-form');
const itemsContainer = document.getElementById('items-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const noItems = document.getElementById('no-items');
const notification = document.getElementById('notification');

const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const closeChat = document.getElementById('close-chat');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// ===== MODAL FUNCTIONALITY =====
reportBtn.addEventListener('click', () => {
  reportModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
  reportModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});

reportModal.addEventListener('click', (e) => {
  if (e.target === reportModal) {
    reportModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
});

// ===== FORM HANDLING =====
reportForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newItem = {
    id: Date.now(),
    type: document.getElementById('item-type').value,
    category: document.getElementById('item-category').value,
    name: document.getElementById('item-name').value,
    description: document.getElementById('item-description').value,
    location: document.getElementById('item-location').value,
    date: document.getElementById('item-date').value,
    contact: document.getElementById('item-contact').value,
    createdAt: new Date().getTime()
  };

  const items = getItems();
  items.unshift(newItem);
  saveItems(items);

  // Show notification
  showNotification('✅ Item reported successfully!', 'success');

  // Reset form and close modal
  reportForm.reset();
  reportModal.classList.add('hidden');
  document.body.style.overflow = 'auto';

  // Refresh items display
  displayItems(items);
});

// ===== DISPLAY ITEMS =====
function displayItems(itemsToDisplay) {
  itemsContainer.innerHTML = '';

  if (itemsToDisplay.length === 0) {
    noItems.style.display = 'block';
    return;
  }

  noItems.style.display = 'none';

  itemsToDisplay.forEach((item) => {
    const card = createCard(item);
    itemsContainer.appendChild(card);
  });
}

function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card';
  
  const dateObj = new Date(item.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const badge = `<span class="badge ${item.type}">${item.type.toUpperCase()}</span>`;
  
  card.innerHTML = `
    ${badge}
    <h3>${escapeHtml(item.name)}</h3>
    <p><strong>Category:</strong> ${item.category}</p>
    <p><strong>Description:</strong> ${escapeHtml(item.description)}</p>
    <div class="card-meta">
      <span class="card-location">📍 ${escapeHtml(item.location)}</span>
      <span class="card-date">📅 ${formattedDate}</span>
    </div>
    <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
      <strong>Contact:</strong> ${escapeHtml(item.contact)}
    </p>
  `;

  card.addEventListener('click', () => {
    showNotification(`📱 Contact: ${item.contact}`, 'success');
  });

  return card;
}

// ===== SEARCH & FILTER =====
let currentFilter = 'all';

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);

function applyFilters() {
  const items = getItems();
  let filtered = items;

  // Apply type filter
  if (currentFilter !== 'all') {
    filtered = filtered.filter((item) => item.type === currentFilter);
  }

  // Apply search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.location.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      );
    });
  }

  displayItems(filtered);
}

// ===== CHATBOT FUNCTIONALITY =====
chatToggle.addEventListener('click', () => {
  chatContainer.classList.toggle('hidden');
  if (!chatContainer.classList.contains('hidden')) {
    userInput.focus();
  }
});

closeChat.addEventListener('click', () => {
  chatContainer.classList.add('hidden');
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Add user message
  addChatMessage(message, 'user');
  userInput.value = '';

  // Show typing indicator
  addChatMessage('...', 'bot', true);

  // Simulate bot response delay
  setTimeout(() => {
    removeLastChatMessage();
    const response = generateBotResponse(message);
    addChatMessage(response, 'bot');
  }, 600);
}

function addChatMessage(text, sender, isTyping = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  
  if (isTyping) {
    messageDiv.classList.add('typing');
  }
  
  messageDiv.textContent = text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeLastChatMessage() {
  const lastMessage = chatBody.lastChild;
  if (lastMessage) {
    lastMessage.remove();
  }
}

function generateBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  // Check for common keywords
  if (msg.includes('report') || msg.includes('lost') || msg.includes('found')) {
    return '📝 To report an item, click "Start Reporting" button in the hero section and fill out the form with details like location, date, and description.';
  }

  if (msg.includes('search') || msg.includes('find')) {
    return '🔍 Scroll down to the "Browse Items" section where you can search by item name or location, and filter by "Lost" or "Found" items.';
  }

  if (msg.includes('category') || msg.includes('type')) {
    return '📂 We support various categories: Wallet, Phone, Keys, ID/Document, Bag, Clothing, Accessory, and Other items.';
  }

  if (msg.includes('contact') || msg.includes('call') || msg.includes('phone')) {
    return '📞 When you find an item you\'re looking for, click on the item card to see the contact information of who reported it.';
  }

  if (msg.includes('safe') || msg.includes('privacy') || msg.includes('secure')) {
    return '🔐 Your personal information is handled securely. Direct contact is only made when you interact with specific items.';
  }

  if (msg.includes('how') && msg.includes('work')) {
    return '⚙️ How it works:\n1. Report a lost or found item\n2. Provide details (location, date, contact)\n3. Browse other reports\n4. Contact someone if you find a match\n5. Reunite belongings!';
  }

  if (msg.includes('thank') || msg.includes('thanks')) {
    return '😊 You\'re welcome! We\'re happy to help reunite people with their lost items!';
  }

  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
    return '👋 Hello! I\'m here to help. You can ask me about reporting items, searching, or how the platform works.';
  }

  // Default response
  return '💡 I can help with reporting items, searching for lost/found belongings, or answering questions about the platform. What would you like to know?';
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'success') {
  notification.textContent = message;
  notification.className = `notification ${type}`;
  notification.classList.remove('hidden');

  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initializeStorage();
  displayItems(getItems());
});
