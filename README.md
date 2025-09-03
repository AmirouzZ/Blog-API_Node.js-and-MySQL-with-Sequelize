# 📝 Blog API - Node.js & MySQL with Sequelize

A RESTful API for a blog application built with Node.js, Express, MySQL, and Sequelize ORM.

## 🚀 Features

- **User Authentication** (JWT-based)
- **CRUD Operations** for blog posts
- **Category Management**
- **Comment System**
- **MySQL Database** with Sequelize ORM
- **RESTful API** design

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AmirouzZ/Blog-API_Node.js-and-MySQL-with-Sequelize.git
cd Blog-API_Node.js-and-MySQL-with-Sequelize
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Set up the database:
```bash
# Create MySQL database manually then run:
npx sequelize-cli db:migrate
```

5. Start the server:
```bash
npm start
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create a new post |
| GET | `/api/posts/:id` | Get single post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **Sequelize** - ORM
- **JWT** - Authentication
- **bcrypt** - Password hashing

## 📁 Project Structure

```
src/
├── config/          # Database configuration
├── controllers/     # Route controllers
├── models/          # Sequelize models
├── routes/          # API routes
├── middleware/      # Custom middleware
└── migrations/      # Database migrations
```

## 🔐 Environment Variables

Create a `.env` file with:

```
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
PORT=3000
```

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**AmirouzZ** - [GitHub Profile](https://github.com/AmirouzZ)
