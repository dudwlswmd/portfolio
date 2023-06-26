import React from 'react'

const Visual = () => {
     return (
          <div className='visual'>
               {/* <div class="glitch" data-text="GLITCH">CREATIVE</div>  */}
               <div className="container">
                    <div className="glitch" data-text="CREATIVE">CREATIVE</div>
                    <div className="glow">CREATIVE</div>
                    <p className="subtitle">크리에이티브한 프론트엔드 송영진</p>
                    <p className='tape_img left'><img src="/img/tape_left.webp" alt="테이프이미지" /></p>
                    <p className='tape_img right'><img src="/img/tape_right.webp" alt="테이프이미지" /></p>
               </div>
          </div>
     )
}

export default Visual