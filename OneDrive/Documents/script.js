const reportBtn = document.querySelector('.cta-button');
const reportModal = document.getElementById('report-modal');
const closeModal = document.querySelector('.close-modal');
const reportForm = document.getElementById('report-form');
const itemsContainer = document.getElementById('items-container');
const noItems = document.getElementById('no-items');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const openChatButton = document.getElementById('open-chat');

const sampleItems = [
  {
    id: 1,
    type: 'found',
    title: 'Silver iPhone 15',
    category: 'phone',
    description: 'Found near the cafeteria with a cracked screen protector. Has Apple Watch paired with it.',
    location: 'Cafeteria',
    date: '2026-04-06',
    contact: '555-0102'
  },
  {
    id: 2,
    type: 'lost',
    title: 'Black Leather Wallet',
    category: 'wallet',
    description: 'Contains ID, credit cards, and a few receipts. Monogram initials "JD" inside.',
    location: 'Library 3rd Floor',
    date: '2026-04-07',
    contact: '555-0101'
  },
  {
    id: 3,
    type: 'found',
    title: 'Campus Key Set',
    category: 'keys',
    description: 'Silver key ring with two house keys and a blue fob.',
    location: 'Main Entrance',
    date: '2026-04-15',
    contact: '674-573-6334'
  },
  {
    id: 4,
    type: 'lost',
    title: 'Blue AirPods Pro',
    category: 'accessory',
    description: 'Lost during campus tour. One earbud has a small scratch.',
    location: 'Science Building',
    date: '2026-04-08',
    contact: '555-0103'
  },
  {
    id: 5,
    type: 'found',
    title: 'Red Umbrella',
    category: 'accessory',
    description: 'Found in the parking lot near entrance B. Has black wooden handle.',
    location: 'Parking Lot B',
    date: '2026-04-09',
    contact: '555-0104'
  },
  {
    id: 6,
    type: 'lost',
    title: 'Student ID Card',
    category: 'id',
    description: 'Purple student ID, valid until 2026. Name: Alex Rivera.',
    location: 'Gymnasium',
    date: '2026-04-05',
    contact: '555-0105'
  },
  {
    id: 7,
    type: 'found',
    title: 'Silver Watch',
    category: 'accessory',
    description: 'Rolex-style watch found in the quad. Minimal scratches on glass.',
    location: 'Central Quad',
    date: '2026-04-10',
    contact: '555-0106'
  },
  {
    id: 8,
    type: 'lost',
    title: 'MacBook Pro 14"',
    category: 'phone',
    description: 'Space gray laptop with stickers on the back. Very important data inside.',
    location: 'Coffee Shop',
    date: '2026-04-09',
    contact: '555-0107'
  },
  {
    id: 9,
    type: 'found',
    title: 'Backpack',
    category: 'bag',
    description: 'Navy blue North Face backpack with multiple pockets.',
    location: 'Sports Center',
    date: '2026-04-08',
    contact: '555-0108'
  },
  {
    id: 10,
    type: 'lost',
    title: 'Passport',
    category: 'id',
    description: 'Blue passport, international travel document. Very urgent!',
    location: 'Airport Shuttle',
    date: '2026-04-06',
    contact: '555-0109'
  },
  {
    id: 11,
    type: 'found',
    title: 'Gold Wedding Ring',
    category: 'accessory',
    description: 'Found in the restroom. Beautiful gold band with diamond.',
    location: 'Student Center',
    date: '2026-04-07',
    contact: '555-0110'
  },
  {
    id: 12,
    type: 'lost',
    title: 'Purple Jacket',
    category: 'clothing',
    description: 'Winter parka with internal pockets. Zip broken on left side.',
    location: 'Math Building',
    date: '2026-04-04',
    contact: '555-0111'
  },
  {
    id: 13,
    type: 'found',
    title: 'Samsung Galaxy Tablet',
    category: 'phone',
    description: 'Found with protective case on. Battery is functional.',
    location: 'Library Ground Floor',
    date: '2026-04-09',
    contact: '555-0112'
  },
  {
    id: 14,
    type: 'lost',
    title: 'Prescription Glasses',
    category: 'accessory',
    description: 'Black rectangular frames, very important for vision.',
    location: 'Dormitory Building A',
    date: '2026-04-05',
    contact: '555-0113'
  },
  {
    id: 15,
    type: 'found',
    title: 'Leather Briefcase',
    category: 'bag',
    description: 'Brown leather briefcase with business documents inside.',
    location: 'Administration Building',
    date: '2026-04-08',
    contact: '555-0114'
  },
  {
    id: 16,
    type: 'lost',
    title: 'White Sneakers',
    category: 'clothing',
    description: 'Nike Air Max shoes, size 10. Lost during gym session.',
    location: 'Gymnasium Locker Room',
    date: '2026-04-06',
    contact: '555-0115'
  },
  {
    id: 17,
    type: 'found',
    title: 'Casio Wrist Watch',
    category: 'accessory',
    description: 'Digital watch with calculator function. Black band.',
    location: 'Cafeteria Tables',
    date: '2026-04-09',
    contact: '555-0116'
  },
  {
    id: 18,
    type: 'lost',
    title: 'Credit Card',
    category: 'wallet',
    description: 'VISA card from First National Bank. Card has been canceled.',
    location: 'Bus Stop',
    date: '2026-04-07',
    contact: '555-0117'
  },
  {
    id: 19,
    type: 'found',
    title: 'Textbook Set',
    category: 'other',
    description: 'Biology and Chemistry textbooks with notes inside. 2026 edition.',
    location: 'Library Reading Room',
    date: '2026-04-08',
    contact: '555-0118'
  },
  {
    id: 20,
    type: 'lost',
    title: 'Car Keys',
    category: 'keys',
    description: 'Black key fob with silver Toyota logo. Car parked nearby.',
    location: 'Parking Lot A',
    date: '2026-04-05',
    contact: '555-0119'
  },
  {
    id: 21,
    type: 'found',
    title: 'Airpods Max',
    category: 'accessory',
    description: 'Premium headphones in original case. Functional and charged.',
    location: 'Auditorium',
    date: '2026-04-10',
    contact: '555-0120'
  }
];

let activeFilter = 'all';
let items = [];

function init() {
  items = loadItems();
  displayItems();
  attachEvents();
}

function loadItems() {
  const saved = JSON.parse(localStorage.getItem('lostFoundItems') || 'null');
  return Array.isArray(saved) && saved.length ? saved : sampleItems;
}

function saveItems() {
  localStorage.setItem('lostFoundItems', JSON.stringify(items));
}

function attachEvents() {
  reportBtn.addEventListener('click', openReportModal);
  openChatButton.addEventListener('click', openChat);
  closeModal.addEventListener('click', closeReportModal);
  reportForm.addEventListener('submit', handleReportSubmit);
  searchInput.addEventListener('input', displayItems);
  filterButtons.forEach((button) => button.addEventListener('click', handleFilterClick));
  chatToggle.addEventListener('click', toggleChat);
  closeChat.addEventListener('click', closeChatWindow);
  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendMessage();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeReportModal();
      closeChatWindow();
    }
  });
}

function openReportModal() {
  reportModal.classList.remove('hidden');
}

function closeReportModal() {
  reportModal.classList.add('hidden');
}

function handleReportSubmit(event) {
  event.preventDefault();
  const newItem = {
    id: Date.now(),
    type: document.getElementById('item-type').value,
    title: document.getElementById('item-name').value.trim(),
    category: document.getElementById('item-category').value,
    description: document.getElementById('item-description').value.trim(),
    location: document.getElementById('item-location').value.trim(),
    date: document.getElementById('item-date').value,
    contact: document.getElementById('item-contact').value.trim()
  };

  if (!newItem.type || !newItem.title || !newItem.location || !newItem.date || !newItem.contact) {
    alert('Please fill all required fields.');
    return;
  }

  items.unshift(newItem);
  saveItems();
  displayItems();
  reportForm.reset();
  closeReportModal();
}

function handleFilterClick(event) {
  filterButtons.forEach((button) => button.classList.remove('active'));
  event.currentTarget.classList.add('active');
  activeFilter = event.currentTarget.dataset.filter;
  displayItems();
}

function displayItems() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = items.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    const matchesQuery = [item.title, item.category, item.location, item.description]
      .some((value) => value.toLowerCase().includes(query));
    return matchesFilter && matchesQuery;
  });

  itemsContainer.innerHTML = '';

  if (!filtered.length) {
    noItems.classList.remove('hidden');
    return;
  }

  noItems.classList.add('hidden');

  filtered.forEach((item) => {
    itemsContainer.insertAdjacentHTML('beforeend', createCard(item));
  });
}

function createCard(item) {
  return `
    <article class="card">
      <span class="badge ${item.type}">${item.type.toUpperCase()}</span>
      <h3>${item.title}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p>${item.description || 'No description provided.'}</p>
      <div class="card-meta">
        <span>${item.location}</span>
        <span>${formatDate(item.date)}</span>
      </div>
      <p><strong>Contact:</strong> ${item.contact}</p>
    </article>
  `;
}

function formatDate(dateString) {
  if (!dateString) return 'Date unknown';
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function toggleChat() {
  chatContainer.classList.toggle('hidden');
}

function openChat() {
  chatContainer.classList.remove('hidden');
}

function closeChatWindow() {
  chatContainer.classList.add('hidden');
}

function addMessage(text, sender) {
  const message = document.createElement('div');
  message.className = sender === 'user' ? 'user-message' : 'bot-message';
  
  if (sender === 'bot') {
    // Format bot messages for better readability
    message.innerHTML = `<p>${text}</p>`;
  } else {
    message.textContent = text;
  }
  
  document.getElementById('chat-body').appendChild(message);
  document.getElementById('chat-body').scrollTop = document.getElementById('chat-body').scrollHeight;
}

function showTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.innerHTML = '<span></span><span></span><span></span>';
  typing.id = 'typing-indicator';
  document.getElementById('chat-body').appendChild(typing);
  document.getElementById('chat-body').scrollTop = document.getElementById('chat-body').scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById('typing-indicator');
  if (typing) typing.remove();
}

function getBotResponse(message) {
  const text = message.toLowerCase();
  
  // Report lost item
  if (text.includes('lost') && !text.includes('found')) {
    return 'I can help you report a lost item! Click the "Report Item" button, select "Lost Item" as the type, and provide details about where and when you lost it. Include a clear description and your contact information so others can help you find it.';
  }
  
  // Report found item
  if (text.includes('found')) {
    return 'Great! To report a found item, click "Report Item", select "Found Item" as the type, describe what you found, where it was found, and provide your contact information. This helps the owner get their belongings back quickly!';
  }
  
  // Search/browse
  if (text.includes('search') || text.includes('browse') || text.includes('find')) {
    return 'You can search through all lost and found items using the search bar. Filter by "Lost" or "Found" to see specific items. Use keywords like location, item name, or category to narrow down your search.';
  }
  
  // Claim item
  if (text.includes('claim') || text.includes('pickup') || text.includes('contact')) {
    return 'To claim or pickup an item you found, use the contact information (phone/email) provided in the item listing. Reach out directly to the person who posted it, and arrange a safe meeting location to exchange the item.';
  }
  
  // How to use
  if (text.includes('help') || text.includes('how') || text.includes('guide')) {
    return 'Here\'s how to use our platform:\n1. Report Lost Items - Provide location, date, and description\n2. Browse Items - Search or filter past reports\n3. Claim Items - Contact the person directly using provided info\n4. Ask Me - I\'m here to help with any questions!';
  }
  
  // Categories
  if (text.includes('category') || text.includes('type')) {
    return 'We accept reports for: Wallets, Phones, Keys, IDs, Bags, Clothing, Accessories, and Other items. Select the appropriate category when reporting to help others find items more easily.';
  }
  
  // Safety/meeting
  if (text.includes('safe') || text.includes('meet') || text.includes('location')) {
    return 'Always meet in a public, safe location (like a coffee shop or campus center) to exchange items. During daytime is recommended. Never share personal information beyond what\'s necessary for the exchange.';
  }

  // Default
  return 'I\'m here to help! Try asking me about:\n• How to report lost/found items\n• How to search for items\n• What item categories we accept\n• How to safely claim an item';
}

function sendMessage() {
  const value = userInput.value.trim();
  if (!value) return;
  
  addMessage(value, 'user');
  userInput.value = '';
  userInput.focus();
  
  // Show typing indicator and get response with delay
  setTimeout(() => {
    showTypingIndicator();
  }, 300);
  
  setTimeout(() => {
    removeTypingIndicator();
    addMessage(getBotResponse(value), 'bot');
  }, 1500);
}

init();
