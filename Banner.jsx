import React from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const style = {
    width:"100%",
    aspectRatio:"21/9"
}

function Banner(){
    return(
        <div className='banner'>
            <div style ={center}>
                <img style={style} 
                src="https://marketplace.canva.com/EAFCnik_MDQ/1/0/1600w/canva-blue-modern-tips-business-banner-VHNzQqV1ShE.jpg" alt="library"></img>
            </div>
        </div>
    )
}

export default Banner;