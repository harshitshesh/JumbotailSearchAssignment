# JumbotailSearchAssignment
This project implements a search engine microservice for an electronics e-commerce platform The service allows storing products, updating metadata, and searching products based on user queries with ranking logic



## 🚀 Features

✅ Product catalog with 1000+ generated products  
✅ Search API with ranking algorithm  
✅ Keyword-based query understanding (English + Hinglish)  
✅ Ranking based on:
- Brand match
- Category match
- Price intent (cheap/premium)
- Rating
- Stock availability
- Discount

✅ Metadata support (RAM, Storage, Battery, Camera, Color etc.)  
✅ Exception handling  
✅ Fast in-memory search (<1000ms latency)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- In-memory data store (JS array)

---

## ⚙️ How to Run Project

### 1️⃣ Clone repo

```bash
git clone <your_repo_link>
cd project-folder

2️⃣ Install dependencies
npm install

3️⃣ Start server
npm start

Server will run on:

http://localhost:3000