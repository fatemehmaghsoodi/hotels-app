import React, { useState } from 'react'
import PagesHeader from '../component/PagesHeader'
import MainSectionLayout from '../component/MainSectionLayout'
import HomeHotelsSection from '../component/HomeHotelsSection'
import PageInfo from '../component/PageInfo'
function Home() {
    const [info, setInfo] = useState(true);
    
    return (
        <>
        {info && <PageInfo onClose={()=>setInfo(false)}>
          برای نمایش کامل عکس ها لطفا از vpn استفاده بفرمایید
          </PageInfo>
          }
        <MainSectionLayout/>
        <PagesHeader title="hotels"/>
        <HomeHotelsSection/>
        </>
  )
}

export default Home