import React from 'react'
import './WorkSection1.scss';


const WorkSection1 = () => {

     return (
          <div className='WorkSection1'>
               <div className='containerSection'>
                    <div className='left'>
                         <h2>DORTMUND</h2>
                         <dl>
                              <dt>A Website Improved Based On Cloning</dt>
                              <dd>
                                   Responsive Web Design
                              </dd>
                         </dl>
                    </div>
                    <div className='right'>
                         <dl>
                              <dt>
                                   클론 코딩 프로젝트 확장 버전
                              </dt>
                              <dd>
                                   "이 웹사이트는 독일 축구 클럽 도르트문트의 클론 사이트를 기반으로 
                                   개선된 버전입니다. 원본 사이트를 클론하면서 디자인을 제 입맛에 맞게 
                                   커스터마이징하고, 시각적으로 매력적인 콘텐츠 몇 가지를 추가했습니다."
                                   <br /><br />
                                   "Gnb 바 또는 탭 메뉴와 같은 기능들은 JavaScript를 이용하여 구현했고, 
                                   <span>선수 정보 슬라이드는 JSON을 활용하여</span> Swiper를 통해 선수 정보를 보여주도록 
                                   제작했습니다."
                              </dd>
                              <dd>
                                   <a href="https://dudwlswmd.github.io/Dortmund/" target="_blank" rel="noopener noreferrer">
                                        Web Site GO!!
                                   </a>
                              </dd>
                         </dl>
                    </div>
               </div>

               <div className='containerSection two'>
                    <div className='left'>
                         <h2>YG FAMILY</h2>
                         <dl>
                              <dt>Developed A Completely New Website</dt>
                              <dd>
                                   Responsive Web Design
                              </dd>
                         </dl>
                    </div>
                    <div className='right'>
                         <dl>
                              <dt>
                                   사이트를 새롭게 재구성
                              </dt>
                              <dd>
                                   "기존 사이트의 디자인을 완전히 개선하고, 
                                   메뉴와 컨텐츠를 완전히 새롭게 재구성했습니다. 
                                   사용자 경험과 시각적 효과에 중점을 두어 웹사이트를 현대적이고 
                                   매력적으로 만들었습니다. 기존 사이트의 단점을 보완하고, 
                                   사용자들이 쉽게 탐색하고 콘텐츠를 소비할 수 있도록 신중한 디자인과 직관적인 메뉴를 구현했습니다. 
                                   이 프로젝트를 통해 제 프론트엔드 개발 역량을 입증하고, <br />사용자 중심의 웹사이트 디자인과 개발에 
                                   대한 전문성을 보여드리고자 합니다."
                                   <br /><br /><br />
                                   <p>정보를 보여주는 모든 컨텐츠는 JSON으로 제작,</p> 
                                   <p>today 메뉴의 호버시 나오는 사진은 <span>'domUpdate'</span> 함수 내에서 마우스의 좌표를 감지하고, 해당 위치에 따라 커서의 위치를 조정하게 제작</p>
                                   <p>뉴스 피드,SNS는 <span>Masonry라는 JavaScript 라이브러리를</span> 이용해서 반응형 일때 적절한 간격과 정렬로 배치할 수 있게 제작</p>
                                   <p>SELECT 탭 메뉴에서는 JSON 파일 배열안에 있는 객체들을 탭 형식으로 제작</p>
                              </dd>
                              <dd>
                                   <a href="https://dudwlswmd.github.io/YG/" target="_blank" rel="noopener noreferrer">
                                        Web Site GO!!
                                   </a>
                              </dd>
                         </dl>
                    </div>
               </div>

               <div className='containerSection'>
                    <div className='left'>
                         <h2>POP MART</h2>
                         <dl>
                              <dt>PopMart Recommender</dt>
                              <dd>
                              Discover Collectible Figures Based on Your Tastes
                              </dd>
                         </dl>
                    </div>
                    <div className='right'>
                         <dl>
                              <dt>
                                   추천 시스템 웹앱 개발
                              </dt>
                              <dd>
                                   PopMart Recommender는 사용자들에게 개인 맞춤형 피규어 추천을 제공합니다. 
                                   사용자는 자신의 취향과 관심사를 입력하고, 
                                   웹앱은 그에 기반하여 사용자에게 가장 적합한 피규어를 추천해줍니다.
                                   <br /><br /><br />
                                   <p>정보를 보여주는 모든 컨텐츠는 JSON으로 제작</p> 
                                   <p>추천 결과와 사용자의 취향을 <span>로컬 스토리지에 배열 형태로</span> 저장하여 보여준다.</p> 
                                   <p><span>랜덤 함수를</span> 사용해서 추천시스템 제작, 같은 컨텐츠의 사진을 많이 누를수록 해당 컨텐츠의 추천확률이 올라가는 시스템으로 제작</p>
                                   <p>HOME에서는 추천 결과와 사용자의 취향을 기반으로 맞는 카테고리를 추천하여 표시합니다.</p>
                                   <p>검색하면 키워드에 맞춰서 <span>JSON에 저장된 카테고리별로</span> 보여준다</p>
                                   <p>클릭을 많이 받은 아이템들은 <span>카운트가</span> 증가되어 랭킹 시스템으로 구현</p>
                                   <p>장바구니,마이페이지 구현완료</p>
                              </dd>
                              <dd>
                                   <a href="https://dudwlswmd.github.io/popmart/" target="_blank" rel="noopener noreferrer">
                                        Web Site GO!!
                                   </a>
                              </dd>
                         </dl>
                    </div>
               </div>

          </div>
     )
}

export default WorkSection1