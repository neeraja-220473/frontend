# 📄 Product Requirement Document (PRD)

## Project Title
**Inventory Billing System**

---

## 1️⃣ Project Overview

The Inventory Billing System is a web-based application designed to help small and medium businesses manage their inventory, suppliers, billing, and sales reports efficiently.

The system allows users to:
- Manage products and stock
- Generate purchase and sales invoices
- Calculate GST automatically
- Track low-stock alerts
- View sales reports

The goal is to simplify inventory management and billing operations.

---

## 2️⃣ Problem Statement

Small businesses often manage inventory manually using notebooks or spreadsheets, which can cause:
- Inventory mismanagement
- Billing errors
- Difficulty in tracking sales
- No automatic tax calculation
- Lack of reporting

The proposed system solves these issues through automation and centralized management.

---

## 3️⃣ Objectives

The main objectives of the system are:
- Provide an easy interface to manage inventory
- Generate automated invoices
- Calculate GST automatically
- Track stock levels
- Provide sales insights through reports

---

## 4️⃣ Target Users

**Primary users:**
- Small shop owners
- Wholesale traders
- Retail businesses
- Small distributors

---

## 5️⃣ Key Features

### 5.1 User Authentication
Users must log in to access the system.

**Features:**
- User registration
- Secure login
- JWT authentication
- Logout functionality

### 5.2 Product Management
Users can manage inventory items.

**Functions:**
- Add new product
- Edit product details
- Delete product
- View product list
- Track available stock

**Product Fields:**
| Field | Description |
|-------|-------------|
| Product ID | Unique identifier |
| Product Name | Name of the product |
| Category | Product category |
| Price | Unit price |
| Quantity | Available stock |
| Supplier | Associated supplier |

### 5.3 Supplier Management
Users can manage suppliers.

**Functions:**
- Add supplier
- Edit supplier details
- Delete supplier
- View supplier list

**Supplier Fields:**
| Field | Description |
|-------|-------------|
| Supplier ID | Unique identifier |
| Supplier Name | Name of supplier |
| Phone Number | Contact number |
| Email | Email address |
| Address | Physical address |

### 5.4 Purchase Management
Users can record purchases made from suppliers.

**Functions:**
- Create purchase invoice
- Update stock automatically
- Save purchase history

### 5.5 Sales / Billing System
Users can generate sales invoices.

**Functions:**
- Create invoice
- Add multiple products
- Calculate totals
- Apply GST automatically
- Print or download invoice

**Invoice Fields:**
| Field | Description |
|-------|-------------|
| Invoice ID | Unique identifier |
| Customer Name | Name of customer |
| Products | List of products |
| Quantity | Quantity per product |
| Price | Price per product |
| GST | Tax amount |
| Total Amount | Final payable amount |
| Date | Invoice date |

### 5.6 GST / Tax Calculation
The system automatically calculates GST.

```
Subtotal = Sum of product prices
GST      = 18% of Subtotal
Total    = Subtotal + GST
```

### 5.7 Low Stock Alerts
The system warns users when product stock is low.

> If stock < minimum level → show alert

### 5.8 Sales Reports
Users can view reports such as:
- Daily sales
- Monthly sales
- Top selling products
- Total revenue

Reports may be displayed using charts.

---

## 6️⃣ Functional Requirements

| ID | Requirement |
|----|-------------|
| FR1 | User should register and login |
| FR2 | User should manage products |
| FR3 | User should manage suppliers |
| FR4 | User should create purchase invoices |
| FR5 | User should generate sales invoices |
| FR6 | System should calculate GST automatically |
| FR7 | System should show low stock alerts |
| FR8 | System should generate sales reports |

---

## 7️⃣ Non-Functional Requirements

### Performance
- System should respond within 2 seconds.

### Security
- Password encryption
- JWT authentication
- Secure database connection

### Usability
- Simple UI
- Easy navigation

### Scalability
- System should support multiple users.

---

## 8️⃣ Technology Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React.js, HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB / MySQL |
| Tools | Postman (API testing), GitHub (version control) |

---

## 9️⃣ System Architecture

```
Frontend (React)
        ↓
Backend (Node.js / Express)
        ↓
Database (MongoDB / MySQL)
```

---

## 🔟 Database Tables

### Users
- user_id
- name
- email
- password

### Products
- product_id
- name
- price
- quantity
- supplier_id

### Suppliers
- supplier_id
- name
- phone
- email

### Invoices
- invoice_id
- date
- total_amount

### Invoice_Items
- invoice_item_id
- invoice_id
- product_id
- quantity

---

## 1️⃣1️⃣ Future Enhancements

Possible improvements:
- Barcode scanning
- Mobile app
- Payment gateway integration
- Multi-store support
- AI sales prediction

---

## 1️⃣2️⃣ Success Criteria

The system will be successful if:
- Users can easily manage inventory
- Billing becomes faster
- Stock tracking becomes accurate
- Reports help in business decisions
