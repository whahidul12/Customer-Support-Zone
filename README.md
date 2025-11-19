# Customer Support Zone 🛎️

Customer Support Zone is a full-stack customer support ticket management platform. Users can create tickets, track support responses, and manage issues efficiently. Admins or support agents can view, reply, update, and close tickets from a centralized dashboard.

---

## 🚀 Live Demo
**Live URL:** https://customer-support-zone-ph12.netlify.app/

---

## ✨ Features

- 📝 Create support tickets  
- 📂 Category & priority-based ticket system  
- 👤 User login & ticket history  
- 🎧 Support agent dashboard  
- 🔍 Search, filter & sort tickets  
- 🔐 Role-based access control  
- ⚡ Fast backend API with Express  
- 📱 Fully responsive UI  

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- React Router  
- Axios  
- Tailwind CSS  

### **Backend**
- Node.js  
- Express.js  
- MongoDB / Mongoose  
- JWT Authentication  

---

## 📦 Installation & Setup

Follow these steps to run the project locally.

---

### **1. Clone the Repository**

```bash
git clone https://github.com/whahidul12/Customer-Support-Zone.git
cd Customer-Support-Zone
```

---

### **2. Install Dependencies**

If it's a single-repo structure:

```bash
npm install
```

If the project has separate folders (`client/` and `server/`):

```bash
cd server
npm install

cd ../client
npm install
```

---

### **3. Environment Variables**

Create a `.env` file inside the **server** folder with:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

If your frontend needs API base URL, add a `.env` inside **client**:

```
REACT_APP_API_URL=http://localhost:5000
```

---

### **4. Start the Project**

#### If separate client & server:

Start backend:

```bash
cd server
npm run dev
```

Start frontend:

```bash
cd ../client
npm start
```

#### If single command:

```bash
npm run dev
```

---

## 📁 Project Structure

```
Customer-Support-Zone/
│
├── client/                 # Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
│   └── public/
│
├── server/                 # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── server.js
│
├── package.json
└── README.md
```

---

## 📚 Learning Outcomes

- Building scalable API routes  
- Implementing JWT authentication  
- Managing user roles & permissions  
- Creating CRUD-based ticket system  
- Designing dashboard UI  
- Structuring client–server projects  

---

## 🤝 Contributing

1. Fork the repository  
2. Create a branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m "Add new feature"`  
4. Push: `git push origin feature-name`  
5. Open a Pull Request  

---

## 👤 Author

**Whahidul Islam**  
📧 Email: `whahid.cnits@email.com`  
🌐 GitHub: https://github.com/whahidul12  

---

## 📄 License

Licensed under the **MIT License**.

---

Thank you for using **Customer Support Zone**! 🙏  
Feel free to contribute, suggest improvements, or star the repo.
