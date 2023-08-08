// /* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react'
// import '../styles/productslug.css'
// import { ProductId } from '~/lib/interface';
// import { LoaderArgs, json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { client } from '~/lib/sanity';
// import { urlFor } from '~/lib/sanityImageUrl';
// import { Tab } from "@headlessui/react";


// interface iAppProps {
//     data: ProductId;
//   }

// //Getting the data
// export async function loader({ params }: LoaderArgs) {
//     const query = `*[_type == "product" && slug.current == '${params.slug}'][0]`;
  
//     const data = await client.fetch(query);
  
//     return json({ data });
// }

// //Function fro the image selected state
// function classNames(...classes: any) {
//     return classes.filter(Boolean).join(" ");
//   }

// const ProductSlug = () => {
//     const { data } = useLoaderData<typeof loader>() as iAppProps;
//   return (
//     <div className='ProductInfo section__padding'>
//         <div className='ProductLeft'>
//         <Tab.Group as="div" className="MainTab">
//           {/* Image Selector */}
//           <div className="">
//             <Tab.List className="ImageTabList">
//               {data.image.map((image) => (
//                 <Tab
//                   key={image._key}
//                   className="ImageTabListWrapper"
//                 >
//                   {/* The selected state tells us which image is currently selected */}
//                   {({ selected }) => (
//                     <>
//                       <span className="ImageTabListSpan">
//                         <img
//                           src={urlFor(image).url()}
//                           alt="Product Image"
//                           className="ImageTabListSpanImg"
//                         />
//                       </span>
//                       {/* Styling this span based on the selected state */}
//                       <span
//                         className={classNames(
//                           selected ? "ring-indigo" : "ring-transparent",
//                           "ImageTabListSpanImgSe"
//                         )}
//                       ></span>
//                     </>
//                   )}
//                 </Tab>
//               ))}
//             </Tab.List>
//           </div>

//           <Tab.Panels className="bigImg">
//             {data.image.map((image) => (
//               <Tab.Panel key={image._key}>
//                 <img
//                   src={urlFor(image).url()}
//                   alt="Product Image"
//                   className=""
//                 />
//               </Tab.Panel>
//             ))}
//           </Tab.Panels>
//         </Tab.Group>
//         </div>

//         <div className='ProductRight'>
//           <h1>The right side yunno</h1>
//         </div>
//     </div>
//   )
// }

// export default ProductSlug