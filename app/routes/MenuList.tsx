import React from 'react'
import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { client } from '~/lib/sanity';
import { Product } from '~/lib/interface';
import '../styles/menulist.css'

interface iAppProps {
    products: Product[];
}
 

// Filtering the data from sanity DB
export async function loader({}: LoaderArgs) {
    const query = `*[_type == 'product']{
      price,
      name,
      brand,
      slug,
      "imageUrl": image[1].asset->url
    }`;
    const products = await client.fetch(query);
  
    return json({ products });
}

const MenuList = () => {
    const { products } = useLoaderData<typeof loader>() as iAppProps;
  return (
    <div className="main">
        {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <Link 
            to={`/product/${product.slug.current}`}
            >
                <div className="menu-grid">
                    <div className='menu-top'>
                        <img src={product.imageUrl} alt="/" />
                    </div>
                    <div className='menu-name'>
                        <div className='menu-rightside'>
                            <h3>{product.name}</h3>
                            <p>{product.brand}</p>
                        </div>
                        <div className='menu-leftside'>
                            <h3>${product.price}</h3>
                        </div>
                    </div>
                    
                </div>
            </Link>
        ))}
    </div>
  )
}

export default MenuList