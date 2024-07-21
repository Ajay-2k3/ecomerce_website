'use client'
// components/MenCategoriesTooltip.jsx
import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="tooltip-content ">
      <ul className="list-none p-2">
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/men/boy">Boy</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/men/shirts">Girl</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/men/pants">trending</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/men/shoes">Shoes</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/men/accessories">Accessories</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;