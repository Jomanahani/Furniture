import React from 'react'
import SecTitle from '../../Components/SecTitle'
import SupTitle from '../../Components/SupTitle'
import Collection1 from '../../Assets/Collection1.png'
import Collection2 from '../../Assets/Collection2.png'
import Collection3 from '../../Assets/Collection3.png'
import Layout from '../../Components/Layout'

const Collection = () => {
  return (
    <Layout className='m-auto'>
      <SecTitle title={'Inspiration Collection'}/>
      <SupTitle supTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
      <div className='flex gap-20 items-center justify-around p-8 pb-0'>
        <img alt='Collection' src={Collection1} className='rounded-tl-[5rem] ' />
        <img alt='Collection' src={Collection2} className='pb-16'/>
        <img alt='Collection' src={Collection3} className='rounded-br-[5rem]'/>
      </div>
    </Layout>
  )
}

export default Collection