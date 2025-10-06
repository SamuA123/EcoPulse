🌍 EcoPulse Frontend – NASA Space Apps Challenge 2025

EcoPulse is a web application built as part of the NASA Space Apps Challenge 2025, focused on monitoring global blooming phenology using NASA Earth observation data.

The frontend provides an interactive and educational experience, allowing users to explore vegetation, agriculture, and plant phenology patterns across time through satellite data visualizations.

It also includes a chatbot powered by AI (EcoPulse Assistant) that offers information and guidance related to sustainability, climate, and ecosystems.

🚀 Features

🌱 Interactive NASA map displaying blooming and vegetation data

🧠 AI-powered Chatbot (EcoPulse Assistant) connected to the backend

🧭 Multi-page navigation using React Router

📅 Phenology timeline with seasonal date selection

🪄 Smooth animations and modern UI built with TailwindCSS

⚡ Fast development powered by Vite

🔍 Modular component-based structure for scalability

🛠️ Tech Stack
Technology	Purpose
React 19	Frontend framework for building the UI
Vite	Fast build tool and development server
React Router DOM	Client-side routing for multi-page navigation
TailwindCSS	Utility-first CSS framework for styling
Leaflet	Interactive mapping library for NASA data visualization
React Markdown + Remark GFM	Render Markdown content with GitHub-style formatting
📦 Installation and Setup
1. Clone the repository
git clone https://github.com/yourusername/ecopulse-frontend.git
cd ecopulse-frontend

2. Install dependencies
npm install

3. Run the development server
npm run dev


Then open the app in your browser at:
👉 http://localhost:5173

4. Build for production
npm run build

5. Preview the production build
npm run preview

🧩 Project Structure
📂 fe_EcoPulse
 ├── 📄 package.json           # Project configuration and dependencies
 ├── 📄 vite.config.js         # Vite build configuration
 ├── 📄 tailwind.config.js     # Tailwind CSS setup
 ├── 📄 postcss.config.js      # PostCSS setup
 ├── 📁 src/
 │    ├── 📄 App.jsx           # Root component with routes
 │    ├── 📁 components/       # Reusable UI components (Layout, Map, Timeline, etc.)
 │    ├── 📁 pages/            # Page views (Home, Learning, Vegetation, etc.)
 │    ├── 📁 assets/           # Images and static files
 │    └── 📄 main.jsx          # Application entry point
 └── 📄 README.md              # Documentation

🧭 Application Routes
Route	Page	Description
/	Home	Overview of EcoPulse and introduction to phenology monitoring
/learning	Learning	Educational content about sustainability and climate
/vegetation	Vegetation & Climate	Visualization of vegetation patterns
/agriculture	Agriculture & Crops	Insights on how agriculture is affected by seasonal change
/phenology	Plant Phenology	Details on plant blooming cycles and biodiversity
/chatbot	Chatbot	Dedicated page for the EcoPulse AI Assistant

Additionally, a Floating Chatbot component is accessible from anywhere on the site 🌿.

🖼️ Main Page Overview (Home)

The Home Page (Home.jsx) includes:

A hero banner introducing the project

Three interactive cards leading to different knowledge sections:

🌿 Vegetation & Climate

🌾 Agriculture & Crops

🌸 Phenology in Plants

A dynamic NASA map integrated with a timeline selector for date-based data visualization

Each card and section is animated for a modern, smooth user experience.

🤖 Chatbot Integration

The chatbot communicates with the backend’s /chat endpoint via Server-Sent Events (SSE), enabling real-time AI responses.

The assistant, EcoPulse, provides clear and educational answers on sustainability and environmental topics.

Example:

“Learn how seasonal changes affect ecosystems and discover ways to reduce your environmental impact.”

🎨 Styling and UI

The app uses TailwindCSS for rapid, responsive, and modern UI design.
It also includes custom animations for card transitions, timeline updates, and floating elements.

Example styling used:

<div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-500">
  ...
</div>

📜 Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Create a production build
npm run preview	Preview the production build locally
npm run lint	Run ESLint to check for code quality issues
⚙️ Environment Variables

If your chatbot connects to the backend API, ensure you set the appropriate environment variable for the backend URL in a .env file (for example):

VITE_API_URL=http://localhost:5000


Then in your frontend code, you can use:

const API_URL = import.meta.env.VITE_API_URL;

💡 Future Enhancements

🛰️ Integration with live NASA APIs for up-to-date vegetation indices

📈 Historical bloom data comparison

🧬 AI-powered predictions for phenology patterns

🌐 Multi-language support (English / Spanish)

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it with proper credit to the original authors.

💚 Authors

Developed by Supernova Sparks
🌍 Project: EcoPulse – Tracking Blooming with NASA Satellite Data
🛰️ NASA Space Apps Challenge 2025 Submission.