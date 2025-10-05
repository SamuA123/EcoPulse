EcoPulse

EcoPulse is an interactive Earth observation application designed to monitor global flowering phenology using NASA satellite data. Developed for the 2025 NASA Space Apps Challenge, EcoPulse visualizes when and where plants bloom, providing insights into ecosystems, agriculture, pollination, biodiversity, and the impacts of climate change.

Table of Contents

Demo

Features

Technologies

Installation

Usage

Project Structure

Contributing

License

Demo

Home Page:

Interactive map centered on the Valley of California

Global vegetation data with satellite imagery

Key flora points highlighted with popups and images

Features

Interactive NASA GIBS Map: Zoom, pan, and explore Earth’s vegetation.

Phenology Visualization: Track flowering events globally.

Key Flora Points: Squares on the map with detailed info and images.

Timeline Control: View changes over time (monthly from existing satellite data).

Responsive UI: Works across devices with modern, clean design.

Technologies

React.js – Frontend framework

TailwindCSS – Styling and responsive design

Leaflet.js – Interactive map visualization

NASA GIBS WMTS – Satellite imagery API

JavaScript / HTML / CSS – Core web technologies

Installation

Clone the repository

git clone https://github.com/yourusername/ecopulse.git
cd ecopulse


Install dependencies

npm install


Run the development server

npm run dev


Open your browser at http://localhost:5173 (or the address provided in the terminal).

Usage

Home Page: View interactive map with timeline and highlighted flora points.

Cards: Navigate to Vegetation, Agriculture, and Phenology pages for detailed information.

Map Interaction: Click on green squares to view flora images and descriptions.

Timeline: Adjust the date to see historical satellite data of flowering events.

Project Structure
src/
├── components/
│   ├── NasaMap.jsx         # Map component with markers and satellite imagery
│   ├── Timeline.jsx        # Timeline component to select dates
├── pages/
│   ├── Home.jsx            # Landing page with map and cards
│   ├── Vegetation.jsx      # Vegetation & Climate information page
│   ├── Agriculture.jsx     # Agriculture & Crops information page
│   └── Phenology.jsx       # Phenology in Plants information page
├── App.jsx                 # Main router and layout
└── index.jsx               # App entry point

Contributing

Contributions are welcome! If you want to improve EcoPulse:

Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-name)

Open a Pull Request

License

This project is open-source and available under the MIT License.