import React from 'react'
import Service from '../../Components/Service'
import { TbTruckDelivery ,TbHours24 } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import Layout from '../../Components/Layout';
  
const Services = () => {
  return (
    <Layout className='flex justify-between items-center bg-Secondary h-40'>
      <Service Icon={TbTruckDelivery} title={'Free Delivery'} desc={'Lorem ipsum dolor sit amet.'} />
      <Service Icon={TbHours24} title={'Support 24/7'} desc={'Lorem ipsum dolor sit amet.'} />
      <Service Icon={LuShieldCheck} title={'100% Authentic'} desc={'Lorem ipsum dolor sit amet.'} />
    </Layout>
  )
}

export default Services