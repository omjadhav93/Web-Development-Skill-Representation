/* Using async/await to waiting for the response from server for fetch request. */

async function fetchOrders() {
    try {
        const response = await fetch('/api/orders'); // Adjust the URL as needed
        const orders = await response.json();
        displayOrders(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}
