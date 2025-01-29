# 🚀 A Simple & Efficient Task Manager

**Website Live Here:** [Your Live Website Link Here] 🌐


## 📌 Quick Start Guide

### 🔹 Step 1: Clone This Repository

* git clone https://github.com/<your_github_username>/task-master.git


### 🔹 Step 2: Backend Setup 🛠️

* cd backend
* npm install

**📌Set up the database in `.env`:**

 * MONGODB_URI="mongodb+srv://<your_connection_string>"

**📌Start the server:**
 * npm run dev

### 🔹 Step 3: Frontend Setup 🎨

* cd frontend
* npm install
* npm start


## 🔧 Tech Stack & Tools

- 🖥 **Frontend:** React.js, Axios  
- ⚙️ **Backend:** Node.js, Express.js  
- 🛢 **Database:** MongoDB & Mongoose  
- 📡 **REST API:** CRUD operations on tasks
  

## 🚀 Features That Power Your Productivity

- ✔️ Create, Read, Update, Delete (CRUD) Tasks  
- ⚡Fast & Responsive UI  
- 🔗 Seamless API Connectivity  
- 💾 Persistent Data Storage (MongoDB)  



## 📡 API Endpoints

| Method  | Endpoint     | Description        |
|---------|------------|------------------|
| GET     | `/tasks`    | 🔍 Fetch all tasks |
| POST    | `/tasks`    | ➕ Create a new task |
| GET     | `/tasks/:id` | 🆔 Get task details |
| PUT     | `/tasks/:id` | ✏️ Update task |
| DELETE  | `/tasks/:id` | ❌ Delete a task |



## 🖥 Frontend Overview

### 🗂 Core Components:

- 📋 **TaskList.js** → Renders list of tasks  
- ✏️ **TaskForm.js** → Create a new task  
- ⚡ **EditTaskForm.js** → Update existing tasks  
- 🌍 **App.js** → Manages global state
  

### 🛠 How API Calls Are Managed?

`api.js` centralizes all API calls using Axios:
`
- getTasks()
- createTask(text)
- updateTask(id, text, completed)
- deleteTask(id)
`

## 👥 Contributors

- 🎯 **Giri Naik** → [GitHub](https://github.com/Mudavath-Giri-Naik)
- 💡 **Gauri Shirke** → [GitHub](https://github.com/GauriShirke12)  
