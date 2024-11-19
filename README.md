# Plan Your Trip

Plan Your Trip is a comprehensive travel management application that allows both users and admins to manage trip bookings efficiently. The platform enables users to create accounts, book trips, and cancel bookings, while providing admins with powerful tools for managing trips and user data.

## Key Features

- **User Account Management**: 
  - Users can create accounts, book trips, and cancel bookings with ease.
  
- **Role-Based Access Control (RBAC)**: 
  - Admins can manage trips and user data through JWT-based authentication and authorization.

- **Scalable Backend**: 
  - Developed using **Spring Boot** for scalable and secure backend services.

- **Responsive Frontend**: 
  - Built with **Angular** for a modern, user-friendly interface.
  
- **Efficient Data Storage**: 
  - Integrated with **MySQL** for reliable and efficient data storage.

## Tech Stack

- **Backend**: Spring Boot
- **Frontend**: Angular
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites

Ensure you have the following installed:

- [Java 8+](https://adoptopenjdk.net/)
- [Node.js and npm](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

### Setup Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/plan-your-trip.git
   cd plan-your-trip
   ```

2. **Backend (Spring Boot)**:
   - Navigate to the backend folder and run the Spring Boot application:
   
     ```bash
     cd backend
     mvn spring-boot:run
     ```
   
   - Make sure your MySQL database is running, and update the `application.properties` file with your database details.

3. **Frontend (Angular)**:
   - Navigate to the frontend folder and install the dependencies:
   
     ```bash
     cd frontend
     npm install
     ```

   - After installation, run the Angular app:
   
     ```bash
     ng serve
     ```

   - The application will be available at `http://localhost:4200`.
