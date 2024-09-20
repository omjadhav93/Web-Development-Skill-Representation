
# JavaScript Integration with APIs

API (Application Programming Interface) integration is crucial for enabling communication between different services or components of a web application. This folder demonstrates examples of client-side JavaScript interacting with backend APIs, allowing dynamic data manipulation and user interaction.

## What’s Covered

In this folder, you will find examples of how JavaScript can be used to interact with APIs in a variety of scenarios, from loading data on demand to enabling user actions like liking or disliking products.

### [Example 1: Like/Dislike a Product](./like_products_with_api.js)
In this example, users can quickly like or dislike a product using API calls. The example shows how to send a POST request from the client side to a server-side API to add or remove a product from the user's favorites list.

#### Code Overview
- **Like a Product:**

The addLike() function sends a POST request to the /api/addFav endpoint to add a product to the favorites list.
Upon success, the button changes to indicate that the product has been liked, and further interactions switch to the dislike functionality.
- **Dislike a Product:**

The removeLike() function sends a POST request to the /api/removeFav endpoint to remove a product from the favorites list.
Upon success, the button is updated to reflect the removal of the product from the list.

### [Example 2: Lazy Loading Product Sections](./lazy_loading_products.js)
Lazy loading defers the loading of non-critical resources at the start, only loading them when they are needed. This reduces the initial load time and helps with overall page performance.

#### Code Overview
This example demonstrates the implementation of lazy loading for three product sections on an E-Commerce website landing page:

- Frequently Purchased Products
- Top Designs Products
- Less In Price

Instead of loading all the products at once when the page loads, the products are fetched and displayed only when the respective section comes into view, thanks to the Intersection Observer API.

#### How It Works:
- **Product Fetching**: Each product section dynamically loads product data from the server via an API call when the section becomes visible to the user.

- **Intersection Observer**: This API is used to monitor when the product sections scroll into view. Upon detection, the respective products are fetched and displayed. This ensures that only the necessary content is loaded, reducing the initial page load time.

- **Efficient Product Rendering**: Each product is represented as a div element containing its image and a clickable box leading to the product details.

