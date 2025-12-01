import React from 'react'

import Layout from '../../Components/Layout'
import SecTitle from '../../Components/SecTitle'
import SupTitle from '../../Components/SupTitle'
import Step from '../../Components/Step'

import Purchase from '../../Assets/Purchase.png'
import Warehouse from '../../Assets/Warehouse.png'
import Collection1 from '../../Assets/Collection1.png'

const Steps = () => {
  return (
    <Layout className="border-t-[1px] border-gray-300 pt-12">
      <div className=''></div>
        <SecTitle title={'How It Works'}/>
        <SupTitle supTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
        <div className='flex justify-between px-12'>
            <Step img={Purchase} areaName={'Purchase Securely'} number={'1'}/>
            <Step img={Warehouse} areaName={'Ships From Warehouse'} number={'2'}/>
            <Step img={Collection1} areaName={'Style Your Room'} number={'3'}/>
            </div>
    </Layout>
  )
}

export default Steps