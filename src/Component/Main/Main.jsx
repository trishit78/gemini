import React, { useContext } from 'react' 

import './main.css'
import compass from '../../../assets/compass_icon.png'
import bulb from '../../../assets/bulb_icon.png'
import code from '../../../assets/code_icon.png'
import message from '../../../assets/message_icon.png'
import usericon from '../../../assets/user_icon.png'
import gallery from '../../../assets/gallery_icon.png'
import mic from '../../../assets/mic_icon.png'
import send from '../../../assets/send_icon.png'
import gemini from '../../../assets/gemini_icon.png'
import { Context } from '../../context/Context'
import BeatLoader from "react-spinners/BeatLoader";

const Main = () => {


    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);


  return (
    <div className='main'>
      <div className='nav'>
            <p>Gemini</p>
            <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
      </div>


      <div className="main-container">
        
{
    !showResult ? (
      <>
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
      </>  
    ):
        <>
        <div className='result'>
            <div className="result-title">
            <img
            className='h-10'
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={gemini} alt="" />
                {
                    loading ? (
                        <>

    <BeatLoader className='w-full items-center h-[50vh] justify-center' color="#36d7b7" />

                        </>
                    ):(
<>

<p dangerouslySetInnerHTML={{__html:resultData}}></p>
</>
                    )
                }
            </div>
        </div>
        
        </>
    
}

       
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt...' />
                <div className='flex items-center space-x-3'>
                    <img src={gallery} alt="" />
                    <img src={mic} alt="" />
                    <img 
                    onClick={()=>onSent()}
                    src={send} alt="" />
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
