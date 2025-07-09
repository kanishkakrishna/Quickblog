# 🚀 QuickBlog – AI Powered MERN Stack Blogging Platform

QuickBlog is a full-stack blogging application that uses **Gemini AI** to generate SEO-friendly blog content automatically. It features a modern admin dashboard, rich text editing, image upload via **ImageKit.io**, and secure JWT-based authentication.

> ✨ Perfect for content creators, admins, or anyone looking to simplify the blog publishing process using AI.

---

## 📸 Live Demo

🔗 [https://quickblog-mu.vercel.app](https://quickblog-mu.vercel.app)

---

## 🧰 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **AI Integration**: Google Gemini API
- **Image Hosting**: ImageKit.io
- **Authentication**: JWT (JSON Web Token)
- **Editor**: Quill Rich Text Editor

---

## 🔐 Admin Login (for testing)

> Use these credentials to access the admin dashboard:

```env
Email: pardeshiveer007@gmail.com  
Password: Ganesh@2025


✨ Features
✅ Generate blog content using Gemini AI

📝 Rich text editor with HTML support

📂 Blog categories and publish toggle

🔒 Admin panel with JWT authentication

📷 Image upload and optimization via ImageKit.io

💡 Clean and responsive UI with Tailwind CSS

📁 Folder Structure
java
Copy
Edit
QuickBlog/
├── client/        → React frontend (Vite)
├── server/        → Express backend
├── README.md


⚙️ Getting Started (Local Development)
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/8767059947/Quickblog.git
cd Quickblog
2. Setup Backend
bash
Copy
Edit
cd server
npm install
➕ Create a .env file inside server/:
env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
3. Run Backend
bash
Copy
Edit
npm start
4. Setup Frontend
bash
Copy
Edit
cd ../client
npm install
➕ Create a .env file inside client/:
env
Copy
Edit
VITE_BASE_URL=http://localhost:5000
5. Run Frontend
bash
Copy
Edit
npm run dev

🌐 API Endpoints (Backend)
Method	Endpoint	Description
POST	/api/blog/generate	Generate blog via Gemini AI
GET	/api/blog	Fetch all blogs
POST	/api/admin/login	Admin login
POST	/api/blog/add	Add a new blog
PUT	/api/blog/:id	Update blog status or content
DELETE	/api/blog/:id	Delete a blog

💡 Future Improvements
Add user registration & login

Enable likes, comments, and tags

Blog search and filtering

Dark mode toggle

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License
This project is open-source and free to use.

🙋‍♂️ Author
Veer Pardeshi
🔗 LinkedIn
📫 Reach me: pardeshiveer007@gmail.com

yaml
Copy
Edit

---

