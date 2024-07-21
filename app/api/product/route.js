/* eslint-disable no-unused-vars */
// app/api/product/route.js
import { apiClient } from '@/lib/commercetools';

export async function GET(req, res) {
  const { client, requestBuilder } = apiClient;

  try {
    const productsUri = requestBuilder.productProjections
      .perPage(30)
      .withTotal()
      .build();

    const productsRequest = {
      uri: productsUri,
      method: 'GET',
    };

    const response = await client.execute(productsRequest);
    const products = await response.body.results;

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);


    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}