// app/components/addToCartButton/page.js
import axios from 'axios';

const page = async (productId, quantity) => {
  try {
    const response = await axios.post('/api/cart/add', { productId, quantity });
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export default page;
