import React from 'react'
import './WorkVisual.scss';


const WorkVisual = () => {

     return (
          <div className='WorkVisual'>
               <p className='sun'><img src="/img/retro/sun.png" alt="태양" /></p>
               <p className='sun on'><img src="/img/retro/sunOn.png" alt="태양 온" /></p>
               <div className='title'>
                    <span><img src="/img/retro/bottomRight.webp" alt="빛" /></span>
                    <p>CREATIVE WEBSITES</p>
               </div>
               <div className='subTitle'>
                    <dl>
                         <dt>Project Work</dt>
                         <dd></dd>
                    </dl>
               </div>
               <div className='treeOneG'><p className='treeOne'><img src="/img/retro/palms.webp" alt="야자수하나" /></p></div>
               <div className='treeOneG two'><p className='treeOne'><img src="/img/retro/palms.webp" alt="야자수하나" /></p></div>
               <div className="SliderCity Bg">
                    <img src="/img/retro/city8-3t.webp" alt="도시이미지 그림자" />
                    <img src="/img/retro/city8-3t.webp" alt="도시이미지 그림자" />
                    <img src="/img/retro/city8-3t.webp" alt="도시이미지 그림자" />
                    <img src="/img/retro/city8-3t.webp" alt="도시이미지 그림자" />
                    <img src="/img/retro/city8-3t.webp" alt="도시이미지 그림자" />
                    <img src="/img/retro/city8-3t.webp" alt="도시이미지 그림자" />
               </div>
               <p className='shadow'></p>
               <p className='shadow two'></p>
               <p className='shadow top'></p>
               <p className='shadow bottom'></p>
               <div className="SliderCity">
                    <img src="/img/retro/cityRight.webp" alt="도시이미지" />
                    <img src="/img/retro/cityRight.webp" alt="도시이미지" />
                    <img src="/img/retro/cityRight.webp" alt="도시이미지" />
                    <img src="/img/retro/cityRight.webp" alt="도시이미지" />
                    <img src="/img/retro/cityRight.webp" alt="도시이미지" />
                    <img src="/img/retro/cityRight.webp" alt="도시이미지" />
               </div>
               <div className='SliderTreeG'>
                    <div className="SliderCity SliderTree">
                         <img src="/img/retro/palmsGroup.webp" alt="야자수 그룹" />
                         <img src="/img/retro/palmsGroup.webp" alt="야자수 그룹" />
                         <img src="/img/retro/palmsGroup.webp" alt="야자수 그룹" />
                         <img src="/img/retro/palmsGroup.webp" alt="야자수 그룹" />
                         <img src="/img/retro/palmsGroup.webp" alt="야자수 그룹" />
                         <img src="/img/retro/palmsGroup.webp" alt="야자수 그룹" />
                    </div>
               </div>
               <div className='FloorTrans'>
                    <div className='FloorGroup'>
                         <div className="SliderCity floor">
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                              <img src="/img/retro/asphalt6t.webp" alt="바닥" />
                         </div>
                    </div>
               </div>
               {/* FloorTrans : END */}
               <p className='car'>
                    <img className='carImg' src="/img/retro/delorean-purple.png" alt="자동차" />
                    <img className='leftRim' src="/img/retro/rim.webp" alt="자동차" />
                    <img className='rightRim' src="/img/retro/rim.webp" alt="자동차" />
               </p>
          </div>
     )
}

export default WorkVisual