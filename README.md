# BrandPeek

A polished React Native app built with **Expo** that simulates a “Brand Discovery” experience.  
It demonstrates **gradient styling**, **API integration**, and a **minimal clean UI** inspired by [nurdd.club](https://www.nurdd.club).

---

## ✨ Features
- 🎨 Radial gradient background (bright deep blue glow → black edges) using **react-native-svg**
- 🏷️ Home Screen: Displays “Top Brands Today” and fetches 5–10 brands (logo, name, one-liner) from backend API
- 📱 Tap a brand → Navigate to **Brand Detail Screen** with full brand info
- 🔘 Includes a “Follow” button (UI only)
- 📂 Modular folder structure for maintainability
- 🚀 Built with **Expo**, sharable via ExpoGo or APK

---

## 📂 Folder Structure


/components → Reusable UI components
/screens → HomeScreen, BrandDetailScreen
/assets → Logos, images, icons
/services → API service functions
/navigation → AppNavigator
/constants → Colors, styles
/utils → Helper functions
App.js → Entry point


---

## ⚡ Tech Stack
- **React Native** (Expo)
- **React Navigation**
- **react-native-svg** (for radial gradient)
- **Axios / Fetch API**
- **MockAPI** (for backend data)

---

## 🛠️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/brandpeek.git
   cd brandpeek
Install dependencies:

npm install


Start the Expo development server:

npx expo start


Run the app:

Scan the QR code in Expo Go (Android/iOS)

Or run on emulator using a (Android) or i (iOS)
🌐 Backend

MockAPI used to fetch brand data (list + details)

API Endpoints:

GET /brands → Fetch list of brands

GET /brands/:id → Fetch details of a brand by ID

📲 Live Project

ExpoGo Link: [Add your link here]

APK Download (Optional): [Add APK link here]

QR Code: [Add QR code here]

📑 Submission Notes

Backend: MockAPI (free API service)

Project structured in a modular, scalable way with clear folder separation

Gradient UI styled with react-native-svg RadialGradient

📸 Screenshots (Optional)

Add screenshots of your Home Screen & Brand Detail Screen here

👨‍💻 Author

Harshad More
React Native Internship Assignment — BrandPeek


---

👉 I recommend:  
1. Copy the **Description** into GitHub repo description field.  
2. Add the above **README.md** to your project root before pushing.  

Would you like me to also **generate a sample `services/api.js` file with MockAPI endpoints** so you can copy-paste it and the evaluator sees a clean API service layer?
