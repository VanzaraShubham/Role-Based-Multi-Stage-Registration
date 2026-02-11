### Role-Based Registration (React)

A dynamic multi-step role-based registration system built using React, React Router, and Tailwind CSS.
The application provides a structured wizard flow with real-time validation, protected routing, and a dynamic progress bar.

🚀 Features

🔄 Multi-step registration flow (Stage 1 → Stage 3)
👤 Role-based dynamic form fields
📊 Smart progress bar (33% → 66% → 99% → 100%)
🎨 Color-changing progress indicator
✅ Real-time email validation
🔒 Route protection (cannot skip steps)
⛔ Browser back button blocking
⏳ Dynamic countdown before redirect
📦 Clean derived-state architecture (no manual progress setting)

🏗 Registration Flow
🟢 Stage 1 – Role Selection
User selects one of:
Student
Teacher
Professor

Progress → 33%

🔵 Stage 2 – Role-Specific Fields
Role	Required Fields
Student	School, Grade
Teacher	Subject, Experience
Professor	Department, Research Area

Progress increases incrementally → up to 66%

🟣 Stage 3 – Final Details

Email (validated format)
Terms & Conditions checkbox

Behavior:
Valid email → progress increases
Checkbox checked → progress becomes 99%
Submit → progress becomes 100%

✅ Success Page
Displays submitted details
5-second countdown
Auto redirect to Welcome page

📊 Progress Logic

The progress bar is calculated dynamically using useMemo() based on:
Selected role
Filled role-specific fields
Valid email format
Checkbox agreement
Submission state
No manual progress updates are used.

🔐 Route Protection
Cannot access Stage 2 without Stage 1
Cannot access Stage 3 without Stage 2
Cannot refresh Success/Welcome without completing flow
Back button navigation is restricted during registration

🛠 Tech Stack
React
React Router DOM
Tailwind CSS
Custom Hooks
useMemo (derived state)
useEffect (route guarding)

📁 Project Structure
src/
│
├── components/
│   └── ProgressBar.jsx
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── pages/
│   ├── Stage1.jsx
│   ├── Stage2.jsx
│   ├── Stage3.jsx
│   ├── Success.jsx
│   └── Welcome.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   └── RegisterRoute.jsx
│
├── hooks/
│   └── useBlockBack.js
│
└── theme.js
