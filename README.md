To-Do Application
This project is a full-stack To-Do application built with Node.js, Express, MongoDB (backend), and React (frontend). The application allows users to add, edit, mark complete/incomplete, and delete tasks.

Backend
Node.js
Express.js
MongoDB
CORS
Body-parser

Install dependencies:
cd todo-backend
npm install
Start the server:
npm start
The server will start on http://localhost:5000.

API Endpoints
Base URL: http://localhost:5000/tasks
Method	Endpoint	Description
GET :	/tasks	Get all tasks
POST :	/tasks	Create a new task
PUT :	/tasks/:id	Update a task’s title
PATCH :	/tasks/:id	Toggle task completion
DELETE :	/tasks/:id	Delete a task

Frontend
Technologies Used (Frontend)
React
Axios (for making API requests)
CSS

Setup (Frontend)
cd todo-frontend
npm install
npm start
The application will open at http://localhost:3000.

Features
Add Task: Allows users to add a new task to the list.
Edit Task: Edit the title of an existing task.
Delete Task: Remove a task from the list.
Toggle Completion: Mark tasks as complete or incomplete.
Fetch All Tasks: Fetch and display all tasks from the backend.

Frontend Deploy Link :https://culture-linkr-full-stack-challange.vercel.app/

Photos Demo:
 First Interface Frontend
![image alt](https://github.com/Kurubasaipraveen/CultureLinkr-FullStack-challange/blob/c10350fc6a36619a8185b2c6dca2525dde85127f/todo-frontend/screencapture-culture-linkr-full-stack-challange-vercel-app-2024-10-27-09_48_33.png)
2.Adding task to the Todo and saved in Backend we can refresh the page still show on the webn page
![image alt](https://github.com/Kurubasaipraveen/CultureLinkr-FullStack-challange/blob/c10350fc6a36619a8185b2c6dca2525dde85127f/todo-frontend/screencapture-culture-linkr-full-stack-challange-vercel-app-2024-10-27-09_49_07.png)
3.When user complete the task click on the provided the button complete click the line was formed in the test in todo and save store the backend 
![image alt](https://github.com/Kurubasaipraveen/CultureLinkr-FullStack-challange/blob/c10350fc6a36619a8185b2c6dca2525dde85127f/todo-frontend/screencapture-culture-linkr-full-stack-challange-vercel-app-2024-10-27-09_49_37.png)
4.Removed from the backend when completing the task
![image alt](https://github.com/Kurubasaipraveen/CultureLinkr-FullStack-challange/blob/c10350fc6a36619a8185b2c6dca2525dde85127f/todo-frontend/screencapture-culture-linkr-full-stack-challange-vercel-app-2024-10-27-09_49_51.png)
