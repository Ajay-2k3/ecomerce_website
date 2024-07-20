// components/WomenCategoriesTooltip.jsx
import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="tooltip-content">
      <ul className="list-none p-2">
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/women/dresses">Dresses</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/women/tops">Tops</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/women/skirts">Skirts</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/women/shoes">Shoes</Link>
        </li>
        <li className="py-1 px-2 rounded-md hover:text-blue-500 text-black hover:font-semibold">
          <Link href="/women/accessories">Accessories</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
