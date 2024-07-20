import { apiClient } from '@/lib/commercetools';

export async function POST(req) {
  const { client } = apiClient;

  try {
    const { email, firstName, lastName } = await req.json(); // Parse JSON from the request body

    if (!email || !firstName || !lastName) {
      return new Response(JSON.stringify({ message: 'Email, first name, and last name are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await client.execute({
      uri: `/customers`,
      method: 'POST',
      body: {
        email,
        firstName,
        lastName,
      },
    });

    return new Response(JSON.stringify(response.body), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding customer:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
