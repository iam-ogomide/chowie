/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../styles/productslug.css'
import { ProductId } from '~/lib/interface';
import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from '~/lib/sanity';
import { urlFor } from '~/lib/sanityImageUrl';
import { Tab } from "@headlessui/react";
import { AiFillStar } from 'react-icons/ai'
import { useCartState } from '~/lib/useCart';

interface iAppProps {
    data: ProductId;
  }

//Getting the data
export async function loader({ params }: LoaderArgs) {
    const query = `*[_type == "product" && slug.current == '${params.slug}'][0]`;
  
    const data = await client.fetch(query);
  
    return json({ data });
}

//Function fro the image selected state
function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

 

const ProductSlug = () => {
    const { data } = useLoaderData<typeof loader>() as iAppProps;
    const addToCart = useCartState((state) => state.addToCart);
  return (
    <div className='ProductInfo section__padding'>
        <div className='ProductLeft'>
        <Tab.Group as="div" className="MainTab">
          {/* Image Selector */}
          <div className="">
            <Tab.List className="ImageTabList">
              {data.image.map((image) => (
                <Tab
                  key={image._key}
                  className="ImageTabListWrapper"
                >
                  {/* The selected state tells us which image is currently selected */}
                  {({ selected }) => (
                    <>
                      <span className="ImageTabListSpan">
                        <img
                          src={urlFor(image).url()}
                          alt="Product Image"
                          className="ImageTabListSpanImg"
                        />
                      </span>
                      {/* Styling this span based on the selected state */}
                      <span
                        className={classNames(
                          selected ? "" : "",
                          "ImageTabListSpanImgSe"
                        )}
                      ></span>
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels className="bigImg">
            {data.image.map((image) => (
              <Tab.Panel key={image._key}>
                <img
                  src={urlFor(image).url()}
                  alt="Product Image"
                  className=""
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        </div>

        <div className='ProductRight'>
          <div>
            <h1>{data.name}</h1>
          </div>

          <div className="">
            <div >
              <AiFillStar color='#FFD700'/>
              <AiFillStar color='#FFD700'/>
              <AiFillStar color='#FFD700'/>
              <AiFillStar color='#FFD700'/>
              <AiFillStar color='#FFD700'/>
            </div>
            <div className="">| 300+ reviews</div>
          </div>

          <div>
            <h1>${data.price}</h1>
            <p>{data.description}</p>
          </div>

          <div className="">
          <div className="btn-container">
              <button className='primary-button' onClick={() => addToCart(data)}>Order Now </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductSlug