import React from 'react'
import Header from '../Header';

const Aboutus = () => {
  return (
    <div>
      <Header/>
    <div className='aboutusContainer'>
        <div>About us</div>
        <div className='aboutusHeaderContainer'>
            <div style={{flex:7, fontSize:35, fontWeight:"bold"}}>We do things differently.......</div>
            <div style={{flex:3, height:"10ch"}}>Learn more about the company, the team behind it and how we think</div>
        </div>

      <div className='aboutusHeaderContainer'>
      <div style={{flex:1, maxWidth:"25ch"}}>
        <div className='aboutusNumbers'>400+</div>
        <div className='aboutusHeader'>Projects completed</div>
        <div style={{fontSize:15}}>We've helped build over 400 amazing</div>
      </div>
      <div style={{flex:1, marginLeft:90}}>
        <div className='aboutusNumbers'>600%</div>
        <div className='aboutusHeader'>Return on investment</div>
        <div style={{fontSize:15}}>Our customers have reported on average of -600% ROI.</div>
      </div>
      <div style={{flex:1, marginLeft:90}}>
        <div className='aboutusNumbers'>10k</div>
        <div className='aboutusHeader'>Global downloads</div>
        <div style={{fontSize:15}}>Our free UI kit has been downloaded over 100k times.</div>
      </div>
      <div style={{flex:1, marginLeft:90}}>
        <div className='aboutusNumbers'>200+</div>
        <div className='aboutusHeader'>5-star reviews</div>
        <div style={{fontSize:15}}>We're proud of our 5-star rating with over 200 reviews.</div>
      </div>
    </div>
    
    <div className='aboutHeader'>From our team</div>

    <div style ={{}}>
      <div className='aboutusText'>Untitled truly values work-life balance. We work hard and deliver, but at the end of the day you can switch off.</div>
      {/* <div>Web developer</div> */}
    </div>



    </div>




    
    </div>
  )
}

export default Aboutus



