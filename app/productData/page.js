// Example usage in a Next.js component or page
'use client'
import React, { useState } from 'react';

function page() {
    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        email: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/storeData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Data stored successfully:', data);
            // Handle success, update UI, etc.
        } catch (error) {
            console.error('Error storing data:', error);
            // Handle error, show message to user, etc.
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default page;


