import React from 'react' 

import './main.css'
import compass from '../../../assets/compass_icon.png'
import bulb from '../../../assets/bulb_icon.png'
import code from '../../../assets/code_icon.png'
import message from '../../../assets/message_icon.png'
import usericon from '../../../assets/user_icon.png'
import gallery from '../../../assets/gallery_icon.png'
import mic from '../../../assets/mic_icon.png'
import send from '../../../assets/send_icon.png'

const Main = () => {
  return (
    <div className='main'>
      <div className='nav'>
            <p>Gemini</p>
            <img src={usericon} alt="" />
      </div>
      <div className="main-container">
        <div className='greet'>
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className='cards'>
            <div className='card'>
                <p>Suggest me anything</p>
                <img src={compass} alt="" />
            </div>
            <div className='card'>
                <p>Suggest me gym exercises</p>
                <img src={bulb} alt="" />
            </div>
            <div className='card'>
                <p>Suggest me anything</p>
                <img src={code} alt="" />
            </div>
            <div className='card'>
                <p>Suggest me anything</p>
                <img src={message} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt...' />
                <div className='flex items-center space-x-3'>
                    <img src={gallery} alt="" />
                    <img src={mic} alt="" />
                    <img src={send} alt="" />
                </div>
            </div>
            <div className='h-8'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
