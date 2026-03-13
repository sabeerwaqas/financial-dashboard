# Full Stack Practice Project

A full-stack web application practice project consisting of a frontend interface and a backend API.

## 🚀 Technologies Used

### Frontend

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React](https://react.dev/) 19
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database Access:** `postgres`
- **Validation:** [Zod](https://zod.dev/)
- **Icons:** Heroicons
- **Other utilities:** `bcrypt`, `clsx`, `use-debounce`

### Backend

- **Framework:** [Spring Boot](https://spring.io/projects/spring-boot) 3.3.5
- **Language:** Java 17
- **Build Tool:** Maven
- **Data Access:** Spring Data JPA (Hibernate)
- **Database:** PostgreSQL (Supabase)
- **Deployment Tool:** Azure WebApp Maven Plugin

---

## 📂 Project Structure

```text
full-stack-practice-project/
├── frontend/                 # Next.js frontend application
│   ├── package.json          # Frontend dependencies and scripts
│   └── ...
├── backend/                  # Spring Boot backend application
│   ├── src/                  # Java source code for backend
│   ├── pom.xml               # Backend dependencies (Maven)
│   └── ...
└── README.md                 # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Java 17](https://jdk.java.net/17/) or higher
- [Maven](https://maven.apache.org/) (or use the included wrapper)
- A running PostgreSQL database instance (Supabase is supported out of the box).

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
2. **Configure environment variables:**
   Ensure your PostgreSQL (Supabase) connection string and other required credentials are set up appropriately in `application.properties`, `application.yml`, or `.env`.

3. **Run the Spring Boot application using Maven Wrapper:**
   On Windows:
   ```bash
   .\mvnw.cmd spring-boot:run
   ```
   On macOS/Linux:
   ```bash
   ./mvnw spring-boot:run
   ```
   The backend API will typically be accessible on `http://localhost:8080`.

---

## 📜 License

_Specify license here if applicable._
