# 💰 BondTrack

BondTrack is a smart investment tracking frontend built with **React + Vite** that helps you visualize your fixed income investments.
It uses **4 Web APIs** and supports **auto Dark Mode**, modern UI, and responsive design.

---

## 🚀 Features

* 📍 **Geolocation API** – To detect user's location and personalize the experience.
* 🧠 **Intersection Observer API** – To lazy-load charts and enhance performance.
* 🌐 **Network Information API** – Displays user's network status.
* 🎨 **Canvas API** – Custom ROI chart rendered manually on canvas.
* 🌙 **Auto Dark Mode** – Detects user's system theme.

---

## 📁 Folder Structure

```
bondtrack/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components (routing)
│   ├── App.jsx           # Root App component with router
│   ├── main.jsx          # Vite entry point
│   └── App.css           # Global styling
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bondtrack.git
cd bondtrack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

The static site will be built in the `dist/` directory.

---

## 🌍 Deployment (Netlify / Vercel / GitHub Pages)

* **Build Command:** `npm run build`
* **Publish Directory:** `dist`

📝 Example for Netlify:

```
Build command: npm run build
Publish directory: dist
```

---

## 📚 Technologies

* React + Vite
* HTML5 Canvas API
* Geolocation API
* Network Info API
* Intersection Observer API
* Responsive CSS (custom)
* React Router DOM

---

## 👨‍💻 Author

Made by **Nitesh Khandelwal** 🇮🇳
Feel free to contribute, fork, or reach out!

---

## 📜 License

MIT License – feel free to use, modify, and share.
