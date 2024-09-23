# NodeJS Database Integration

This section showcases how I integrated MongoDB with Node.js to manage complex user interactions, such as handling user carts, products, and orders in an E-Commerce platform.

---

## File Structure

- [**user_cart.js**](./user_cart.js): Manages the user's shopping cart, allowing them to add, view, and remove products.
- [**product.js**](./product.js): Manages product details, orders, and order status, allowing users to view products, place orders, and cancel them.

---

## Backend Program Breakdown

### 1. [**`user_cart.js`**](./user_cart.js)

**Purpose**: This file handles the functionality of a user's cart by allowing them to add products, view their cart, and remove items from it. The data is integrated with MongoDB collections such as **Cart** and **Product**.

#### Key Features:

- **Fetching User Cart** (`GET /cart`):
  - Retrieves the user's cart using the `fetchUser` middleware.
  - If the user doesn't have an existing cart, a new cart is created.
  - Fetches product details from the database for items in the user's cart and renders the cart page.

- **Adding Products to Cart** (`POST /cart`):
  - Adds a product to the user's cart by accepting a `model-number` from the request body.
  - If the product already exists in the cart, it avoids duplication.
  - Redirects the user to the product's detail page after adding it to the cart.

- **Removing Products from Cart** (`POST /cart/remove`):
  - Removes a product from the user's cart based on the `model-number` received from the request body.
  - Redirects the user back to the cart page after removing the product.

#### Middleware Used:
- `fetchUser`: Verifies the user's authentication status before proceeding.

#### Collections Used:
- **User**: For storing user details (excluding passwords).
- **Cart**: For storing a user's cart data, including the list of products (model numbers).
- **Product**: For fetching product details based on the model number in the cart.

---

### 2. [**`product.js`**](./product.js)

**Purpose**: This file handles product viewing, ordering, and order cancellation for the platform. It integrates with MongoDB collections such as **Products**, **Orders**, **Favourite**, and **CancleOrder**.

#### Key Features:

- **Viewing a Product** (`GET /product`):
  - Allows users to view product details by accepting a `modelNo` query parameter.
  - Increments the product's visitor count on each view.
  - If the user is logged in, checks if the product is in the user's favorite list.
  - Renders the product detail page with relevant data.

- **Placing an Order** (`GET /product/order` & `POST /product/order`):
  - Displays the order form for a specific product and color.
  - When an order is submitted, it saves the order in the **Order** collection with details like receiver's name, phone number, address, and selected product.
  - Updates the product's buyer count.

- **Viewing Order Status** (`GET /order/status`):
  - Retrieves the current status of an order by accepting an `orderId` query parameter.
  - If the order is canceled, redirects the user to the product page.
  - Renders the order status page, showing order details and images.

- **Cancelling an Order** (`POST /order/cancle`):
  - Cancels an order by moving it to the **CancleOrder** collection and setting the order's stage to 0.
  - Updates the product's buyer count, decreasing it by one.

#### Middleware Used:
- `fetchCheckUser`: Used to check the user's login status without enforcing it.
- `fetchUser`: Used to ensure the user is logged in before placing or canceling orders.

#### Collections Used:
- **User**: For storing user data (without passwords).
- **Products**: For storing and retrieving product details such as model number, color, and images.
- **Order**: For managing user orders, including details about the product, color, and address.
- **Favourite**: For managing users' favorite product lists.
- **CancleOrder**: For storing details of canceled orders.

---

## Key Features of the Programs:

- **Session & Cart Management**: Efficiently manages user sessions and allows for cart creation, item addition/removal, and viewing.
- **Database Operations**: Interacts with MongoDB to fetch, update, and manage data, including user details, product listings, orders, and canceled orders.
- **Middleware for Authentication**: Uses custom middleware (`fetchUser`, `fetchCheckUser`) to ensure only authenticated users can perform sensitive operations like placing or canceling orders.
- **Error Handling**: Catches and logs errors effectively, providing appropriate responses for internal server issues.

---

These backend programs demonstrate how I manage user data, handle product and cart functionalities, and integrate database operations in a scalable E-Commerce platform using Node.js and MongoDB.
