import React, { useState } from 'react'

import Modal from './Modal'
import './style/App.css'

function App() {
  const [modal, setModal] = useState(false)
  const onClickHandler = () => {
    setModal(true)
  }

  return (
    <div className="v-header">
      <div className="fullscreen-video-wrap">
        <video playsInline loop autoPlay muted poster="./media/renterii_190505_landingpg_bg.jpg">
            <source src={require("./media/renterii-web-720cmp.mp4")} type="video/mp4" />
            <source src={require("./media/renterii-web-720cmp.webm")} type="video/webm" />
            <source src={require("./media/renterii-web-720cmp.ogv")} type="video/ogg" />
            <img src={require("./media/renterii_190505_landingpg_bg.jpg")} alt=""/>
            Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>            
      </div>
      <Modal isOpen={modal} setModal={setModal} />
      <div className="menu">
        <img 
          className={`logo ${modal && "invisible"}`}
          src={require("./media/Renterii_logo_w.png")} 
          alt="renterii logo"
        />
        <div 
          className={`notify ${modal && "invisible"}`}
          onClick={onClickHandler}
        >
          NOTIFY ME WHEN RENTERII LAUNCHES
        </div>
        <div className={`social-media ${modal && "invisible"}`}>
          <i className={`fab fab fa-facebook-f ${modal && "invisible"}`} style={{color: "white", fontSize: 18 }}></i>
          <i className={`fab fa-instagram ${modal && "invisible"}`} style={{color: "white", fontSize: 20 }}></i>
          <i className={`fab fa-twitter ${modal && "invisible"}`} style={{color: "white", fontSize: 20 }}></i>
        </div>
      </div>
    </div>
  )
}

export default App;

