import React from 'react'
import Barwin from '../assets/images/Barwin-Profile.png'
import Resume from '../assets/pdf/Barwin-Resume.pdf'

const HomeContent=()=>{
    return(
        <>
            <div className="content">
            <div className="me">
                <h1 className="h1_1">I'm</h1><h1 className="h1_2">Barwin Raj</h1>
                <p className="homepara">This is my official portfolio website to showcase my all works related to web development and UI design.</p><br></br>
                <a href={Resume} style={{textDecoration:"none"}} download="Barwin-Resume.pdf" className="download-btn">Download CV</a>
            </div>
            <div className="barwin">
                <img className="img" src={Barwin}></img>
            </div>
            </div>
        </>
    )
}

export default HomeContent