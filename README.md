# 🧠 Dynamic DevBoard

A dynamic and responsive DevBoard website built using **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript (DOM manipulation)**. This project is optimized for **desktop devices only** and is designed to manage and track daily development tasks interactively.

## 🔗 Live Preview

🌐 [View Live Site](https://rb.gy/686d28)

📁 [GitHub Repository](https://github.com/noyonhassan586/Programming-Hero-Assignment-5)

---

## 🚀 Features

### ✅ Navbar with Dynamic Task Status
- Shows a dynamic checklist of completed tasks.
- Includes a **theme toggle** button to switch between different visual themes.

### 📝 Task Assignment Tracker
- Displays a **"Total Tasks Assigned"** section with a **static limit of 6 tasks**.
- Every completed task decreases the count dynamically.

### 🧭 Discover Section
- A prominent **"Discover Something New Today"** button redirects users to a dedicated **Q&A page**.
- The **"Back to Desk"** button lets users return to the main DevBoard.

### 📅 Real-Time Date Display
- Always shows the **current date**, updated dynamically via JavaScript.

### ✅ Task Completion Workflow
Each task comes with a **Complete** button that triggers:
- ✅ An **alert** saying: _"Board Updates Successfully!"_
- ✅ A log entry in the **Activity Log** showing:
  - Task name
  - Time of completion
- ✅ Disables the button after the first click

### 🎉 Completion Notification
- Once all six tasks are completed, an alert is shown:
  > _"Congrats! You've Completed All the Tasks"_

### 🧹 Clear History
- A **Clear History** button allows users to wipe all entries from the Activity Log instantly.

---

## 🛠️ Technologies Used

- **HTML5**
- **Tailwind CSS**
- **JavaScript (DOM Manipulation)**

---

## 📂 Folder Structure (optional)

```plaintext
📁 root
├── index.html
├── style.css (optional if you extended Tailwind)
├── script.js
├── /images or /assets
