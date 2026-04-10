const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// In-memory storage for items (or use a database)
let items = [
  {
    id: 1,
    type: "found",
    title: "Silver iPhone 15",
    category: "phone",
    description: "Found near the cafeteria with a cracked screen protector. Has Apple Watch paired with it.",
    location: "Cafeteria",
    date: "2026-04-06",
    contact: "555-0102"
  },
  {
    id: 2,
    type: "lost",
    title: "Black Leather Wallet",
    category: "wallet",
    description: "Contains ID, credit cards, and a few receipts. Monogram initials \"JD\" inside.",
    location: "Library 3rd Floor",
    date: "2026-04-07",
    contact: "555-0101"
  },
  {
    id: 3,
    type: "found",
    title: "Campus Key Set",
    category: "keys",
    description: "Silver key ring with two house keys and a blue fob.",
    location: "Main Entrance",
    date: "2026-04-15",
    contact: "674-573-6334"
  },
  {
    id: 4,
    type: "lost",
    title: "Blue AirPods Pro",
    category: "accessory",
    description: "Lost during campus tour. One earbud has a small scratch.",
    location: "Science Building",
    date: "2026-04-08",
    contact: "555-0103"
  },
  {
    id: 5,
    type: "found",
    title: "Red Umbrella",
    category: "accessory",
    description: "Found in the parking lot near entrance B. Has black wooden handle.",
    location: "Parking Lot B",
    date: "2026-04-09",
    contact: "555-0104"
  },
  {
    id: 6,
    type: "lost",
    title: "Student ID Card",
    category: "id",
    description: "Purple student ID, valid until 2026. Name: Alex Rivera.",
    location: "Gymnasium",
    date: "2026-04-05",
    contact: "555-0105"
  },
  {
    id: 7,
    type: "found",
    title: "Silver Watch",
    category: "accessory",
    description: "Rolex-style watch found in the quad. Minimal scratches on glass.",
    location: "Central Quad",
    date: "2026-04-10",
    contact: "555-0106"
  },
  {
    id: 8,
    type: "lost",
    title: "MacBook Pro 14\"",
    category: "phone",
    description: "Space gray laptop with stickers on the back. Very important data inside.",
    location: "Coffee Shop",
    date: "2026-04-09",
    contact: "555-0107"
  },
  {
    id: 9,
    type: "found",
    title: "Backpack",
    category: "bag",
    description: "Navy blue North Face backpack with multiple pockets.",
    location: "Sports Center",
    date: "2026-04-08",
    contact: "555-0108"
  },
  {
    id: 10,
    type: "lost",
    title: "Passport",
    category: "id",
    description: "Blue passport, international travel document. Very urgent!",
    location: "Airport Shuttle",
    date: "2026-04-06",
    contact: "555-0109"
  },
  {
    id: 11,
    type: "found",
    title: "Gold Wedding Ring",
    category: "accessory",
    description: "Found in the restroom. Beautiful gold band with diamond.",
    location: "Student Center",
    date: "2026-04-07",
    contact: "555-0110"
  },
  {
    id: 12,
    type: "lost",
    title: "Purple Jacket",
    category: "clothing",
    description: "Winter parka with internal pockets. Zip broken on left side.",
    location: "Math Building",
    date: "2026-04-04",
    contact: "555-0111"
  },
  {
    id: 13,
    type: "found",
    title: "Samsung Galaxy Tablet",
    category: "phone",
    description: "Found with protective case on. Battery is functional.",
    location: "Library Ground Floor",
    date: "2026-04-09",
    contact: "555-0112"
  },
  {
    id: 14,
    type: "lost",
    title: "Prescription Glasses",
    category: "accessory",
    description: "Black rectangular frames, very important for vision.",
    location: "Dormitory Building A",
    date: "2026-04-05",
    contact: "555-0113"
  },
  {
    id: 15,
    type: "found",
    title: "Leather Briefcase",
    category: "bag",
    description: "Brown leather briefcase with business documents inside.",
    location: "Administration Building",
    date: "2026-04-08",
    contact: "555-0114"
  },
  {
    id: 16,
    type: "lost",
    title: "White Sneakers",
    category: "clothing",
    description: "Nike Air Max shoes, size 10. Lost during gym session.",
    location: "Gymnasium Locker Room",
    date: "2026-04-06",
    contact: "555-0115"
  },
  {
    id: 17,
    type: "found",
    title: "Casio Wrist Watch",
    category: "accessory",
    description: "Digital watch with calculator function. Black band.",
    location: "Cafeteria Tables",
    date: "2026-04-09",
    contact: "555-0116"
  },
  {
    id: 18,
    type: "lost",
    title: "Credit Card",
    category: "wallet",
    description: "VISA card from First National Bank. Card has been canceled.",
    location: "Bus Stop",
    date: "2026-04-07",
    contact: "555-0117"
  },
  {
    id: 19,
    type: "found",
    title: "Textbook Set",
    category: "other",
    description: "Biology and Chemistry textbooks with notes inside. 2026 edition.",
    location: "Library Reading Room",
    date: "2026-04-08",
    contact: "555-0118"
  },
  {
    id: 20,
    type: "lost",
    title: "Car Keys",
    category: "keys",
    description: "Black key fob with silver Toyota logo. Car parked nearby.",
    location: "Parking Lot A",
    date: "2026-04-05",
    contact: "555-0119"
  },
  {
    id: 21,
    type: "found",
    title: "Airpods Max",
    category: "accessory",
    description: "Premium headphones in original case. Functional and charged.",
    location: "Auditorium",
    date: "2026-04-10",
    contact: "555-0120"
  }
];

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Get all items
app.get("/api/items", (req, res) => {
  res.json({ items });
});

// Add a new item
app.post("/api/items", (req, res) => {
  const { type, title, category, description, location, date, contact } = req.body;

  if (!type || !title || !category || !location || !date || !contact) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newItem = {
    id: Date.now(),
    type,
    title,
    category,
    description: description || "",
    location,
    date,
    contact
  };

  items.unshift(newItem);
  res.status(201).json({ message: "Item added successfully", item: newItem });
});

// Search items
app.get("/api/items/search", (req, res) => {
  const { query, filter } = req.query;
  let filtered = items;

  if (filter && filter !== "all") {
    filtered = filtered.filter((item) => item.type === filter);
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter((item) =>
      [item.title, item.category, item.location, item.description].some((value) =>
        value.toLowerCase().includes(q)
      )
    );
  }

  res.json({ items: filtered });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Lost & Found server running on http://localhost:${PORT}`);
});