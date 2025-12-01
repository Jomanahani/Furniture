import React from 'react'
import Layout from '../../Components/Layout'
import SecTitle from '../../Components/SecTitle'
import SupTitle from '../../Components/SupTitle'
import Area from '../../Components/Area'
import Dining from '../../Assets/Dining.png'
import Living from '../../Assets/Living.png'
import Bedroom from '../../Assets/Bedroom.png'

const Gallery = () => {
  return (
    <Layout>
        <SecTitle title={'Browse The Range'}/>
        <SupTitle supTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
        <div className='flex justify-between px-12'>
            <Area img={Dining} areaName={'Dining'}/>
            <Area img={Living} areaName={'Living'}/>
            <Area img={Bedroom} areaName={'Bedroom'}/>
            </div>
    </Layout>
  )
}

export default Gallery