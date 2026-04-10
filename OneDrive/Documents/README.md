# Lost & Found Application

A community-based platform to report and find lost belongings with AI assistance.

## Project Structure

- **index.html** - Main application interface with navbar, hero section, report form, item browsing, and chat assistant
- **style.css** - Complete responsive design system with CSS variables, grid layouts, and component styling
- **script.js** - Client-side logic for item management, search/filter, localStorage persistence, and chatbot
- **server.js** - Express server for serving static files and providing API endpoints
- **package.json** - Project dependencies (Express, CORS)

## Installation & Setup

1. **Navigate to project directory:**
   ```bash
   cd "C:\Users\256 NEW\OneDrive\Documents"
   ```

2. **Dependencies are already installed** (or run if needed):
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Open browser to: `http://localhost:3000`
   - The app will serve the Lost & Found platform

## Features

- **Report Items** - Submit lost or found items with details (type, category, location, date, contact)
- **Search & Filter** - Browse items by type (All/Lost/Found) and search by name, location, category
- **AI Assistant** - Chat interface with keyword-based bot responses for guidance
- **Local Storage** - Items persist in browser localStorage for demo purposes
- **API Support** - Backend endpoints for items management and search
- **Responsive Design** - Works on desktop and mobile devices

## API Endpoints

- `GET /api/items` - Retrieve all items
- `POST /api/items` - Add a new item
- `GET /api/items/search?query=text&filter=lost/found/all` - Search items with filters

## Key Styling

- **CSS Variables**: Color scheme, spacing, shadows, and transitions
- **Layouts**: Flexbox navbar, CSS Grid hero section, responsive card grids
- **Components**: Modal forms, filter buttons, chat container, item cards
- **Colors**: Blue (#2563eb) primary, with status badges (Found: green, Lost: red)

## Notes

- Data is stored in memory on the server (can be extended with a database)
- Client-side app also has localStorage for offline demo mode
- No external API calls required - fully self-contained
