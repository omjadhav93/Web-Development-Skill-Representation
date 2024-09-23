# Server-Side Development

This folder showcases my skills in developing and managing server-side logic to efficiently handle requests and responses for an E-Commerce platform. The examples demonstrate setting up an Express server, managing sessions, and handling product-specific requests with dynamic user-based logic.

## File Structure

- **basic_request_handling.js**: Demonstrates setting up a basic Express server with session management and Pug as the templating engine for rendering dynamic views.
- **product_get_request.js**: Handles a GET request to serve product details, with personalized features like favorite lists and visitor count updates.

---

### Example 1: `basic_request_handling.js`

This example demonstrates how I set up a basic Node.js server using Express. It includes:

- **Session Management**: Secure user session handling using `express-session`.
- **Pug Templating Engine**: The server uses Pug to render dynamic HTML pages.
- **Static File Serving**: Static files (CSS, images, JS) are served through the `/static` folder.
- **Form Data Handling**: It handles both JSON and URL-encoded data.

#### Code Highlights:
- The server listens on a specified `PORT`, rendering the home page (`index.pug`) when accessed at the root URL (`/`).
- This setup is foundational for building scalable web applications that include session-based authentication and dynamic content rendering.

```javascript
// Server Start
app.listen(PORT, () => {
    console.log(`The App Start On Port : ${PORT}`);
});
```

### Example 2: `product_get_request.js`

This example demonstrates how I handled a GET request for product information. The server fetches the product details based on a model number from the database and renders the appropriate page with dynamic content depending on the user's login status.

#### Key Features:
- **Middleware for Authentication**: The fetchUser middleware ensures that the request is processed with proper user authentication.
- **Database Queries**: Mongoose is used to query the MongoDB database for user and product information.
- **Visitor Count**: The visitor count for the product is incremented each time a product is viewed.
- **User-Specific Rendering**: The page is customized for logged-in users, showing whether the product is in their favorites list.

#### Code Overview:
- The server responds to a GET request at /product, using a query parameter (modelNo) to retrieve the specific product from the database.
- If the user is logged in, the response includes personalized information, such as whether the product is in their favorites list.
- If the user is not logged in, the server still renders the product page, but without the personalized data (e.g., favorites list).
