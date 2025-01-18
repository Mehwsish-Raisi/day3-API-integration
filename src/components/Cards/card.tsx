import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface Product {
    id:number;
    tag: string;
    title: string;
    category?: string ;
    color: string;
    price: string;
    imageUrl: string;
  };
  
const cardPage: React.FC<Product> = ({
  id,
  tag,
  title,
  category,
  color,
  price,
  imageUrl,
}) => {
      
  return (
    <div className='mb-6 md:mb-8    '>
      <Link className="" href={`/All-Products/${id}`}>
      <Image src={imageUrl} alt={title} width={348} height={348} />
      <div className="py-4">
        <h4 className="text-[#9E3500]">{tag}</h4>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-slate-500">{category}</p>
        <p className="text-slate-500">{color}</p>
      </div>
      <h3 className="font-semibold">{price}</h3>
      </Link>
    </div>
  )
}

export default cardPage
