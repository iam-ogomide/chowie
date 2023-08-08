import React from 'react'
import About from '~/components/About';
import Chef from '~/components/Chef';
import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Roll from '~/components/Roll';
import Serve from '~/components/Serve';
// import Subscribe from '~/components/Subscribe';
import  "~/styles/navbar.css";
// import Footer from '../components/Footer';



// export function links() {
//     return [{ rel: "stylesheet", href: styles }];
// }


const IndexPage = () => {
  return (
    <div className=''>
      <Header />
      <Serve />
      <Menu />
      <About />
      <Roll />
      <Chef />
      {/* <Subscribe /> */}
      
    </div>
  )
}

export default IndexPage