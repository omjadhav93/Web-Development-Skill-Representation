# API Development

This folder showcases my API development skills, specifically focusing on building RESTful APIs to support dynamic and user-specific features for an E-Commerce platform. The APIs developed here are designed to handle various data-fetching and user-interaction tasks, such as loading product lists, managing user orders, and fetching favorite items.

## File Structure

- **API E-Commerce**: A collection of APIs designed to handle different aspects of the E-Commerce platform, including lazy loading product data, fetching favorite products, and managing user orders.

---

### API Overview:

1. **Lazy Loading Product Lists**: Efficiently loading data on demand, such as frequently purchased, low-price, or top-design products, to enhance the user experience on the index page.
2. **User Profile Data**: Serving user-specific data, such as the list of favorite products and order history, with user authentication using middleware.

---

### Example API Endpoints

#### 1. Lazy Loading Product Lists

- **Endpoint: `/frequent`**
    - Fetches a list of frequently purchased products.
    - Status: `200 OK` on success, or `500 Internal Server Error` on failure.
  
- **Endpoint: `/lessPrice`**
    - Fetches a list of low-price products for budget-conscious customers.
    - Status: `200 OK` on success, or `500 Internal Server Error` on failure.
  
- **Endpoint: `/topDesign`**
    - Fetches a list of products with the most popular designs.
    - Status: `200 OK` on success, or `500 Internal Server Error` on failure.

- **Endpoint: `/brands`**
    - Fetches the list of available brands in the store.
    - Data is sorted by the most recently updated brands.
    - Status: `200 OK` on success, or `500 Internal Server Error` on failure.

#### 2. Profile Page Data
- **Endpoint: `/favourite`**
    - Fetches the list of products marked as favorites by the logged-in user.
    - Uses fetchUser middleware to authenticate the user.
    - Status: 200 OK on success, or 500 Internal Server Error on failure.

- **Endpoint: `/orders`**
    - Retrieves the order history for the logged-in user.
    - Orders are sorted by the most recent first.
    - Status: 200 OK on success, or 500 Internal Server Error on failure.

---

### Key Features
- **Middleware Authentication**: Uses the fetchUser middleware to authenticate requests and ensure only logged-in users can access profile data like favorite products and order history.

- **Efficient Data Handling**: The APIs are optimized to handle frequent data retrieval operations, ensuring fast and reliable responses to the client.

- **Error Handling**: Each API is designed to handle errors gracefully, providing meaningful error messages like "Internal Server Error" to help with debugging and improving user experience.
