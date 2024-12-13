# Farm-to-Table E-commerce Platform

An e-commerce website developed for the Department of Agriculture (DA) to facilitate direct transactions between farmers and consumers. This project emphasizes the "farm-to-table" movement, fostering a more sustainable and efficient food distribution system.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Usage Guidelines](#usage-guidelines)
- [Database Structure](#database-structure)
- [Screenshots](#screenshots)
- [Milestones](#milestones)
- [Team](#team)
- [Progress](progress.md)

## Features
### User Types and Accounts
- **Customer Users**: 
  - Register using an email (no OTP verification required).
  - Login/Logout functionality.
  - Browse and purchase products.
  - Manage shopping cart and orders.
- **Administrator (DA)**:
  - Manage user accounts.
  - Oversee product listings (add, update, delete).
  - Confirm and fulfill orders.
  - Generate sales reports (weekly, monthly, annual summaries).

### E-commerce Management
- **Product Listings**:
  - Products categorized as `crops` or `poultry`.
  - Attributes include name, type, description, price, and quantity.
  - Sorting by name, type, price, or quantity.
- **Order Fulfillment**:
  - Customers can place, cancel (if pending), and confirm orders.
  - Default payment mode: Cash-on-delivery.
- **Sales Reports**:
  - Summary of transactions with total income per product and time frame.

### Shop for Customers
- Add/remove items from the shopping cart.
- Real-time cart total and item count.
- Place and track orders.

---

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB

---

## Usage Guidelines
- **Administrator**: Use pre-assigned credentials to log in and manage the system.
- **Customer**: Register an account to browse and purchase products.
- **Authentication**: Certain routes and actions are restricted based on user type.

---

## Database Structure
### Collections
1. **Users**
   - First Name, Middle Name (optional), Last Name
   - User Type (`Customer` or `Administrator`)
   - Email, Password
2. **Products**
   - Product ID, Name, Description
   - Type (`1` for Crops, `2` for Poultry)
   - Quantity, Price
3. **Order Transactions**
   - Transaction ID, Product ID
   - Order Quantity, Status (`0` Pending, `1` Completed, `2` Canceled)
   - Associated User Email
   - Date and Time Ordered

---

## Screenshots
*(Add screenshots of key UI pages such as login, product listing, shopping cart, admin dashboard, etc.)*

---

## Milestones
1. **November 18, 2024**: MongoDB setup and API implementation.
2. **November 25, 2024**: Backend routing and endpoints.
3. **December 2, 2024**: Frontend development.
4. **December 9, 2024**: Full integration of frontend and backend.
5. **December 16, 2024**: Final project presentation.

---

## Team
- [Diocadiz, Gabrielle Therese](https://github.com/GabDiocadiz)
- [Estares, Frederick Emmanuel](https://github.com/emanestares)
- [Gabinete, Keith Ginoel](https://github.com/krispypatata)
- [Soriano, Gennalyn](https://github.com/energenski)