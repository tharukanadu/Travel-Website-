import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import OrderPopup from '../components/Popup/OrderPopup'

function Layout() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet/>
      <Footer/>
     <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default Layout
