import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
const App = () => {
const [showContent, setshowContent] = useState(false)
useGSAP(()=>{
  const tl = gsap.timeline();

  tl.to('.vi-mask-group',{
rotate:25,
duration:2,
ease:'power4.easeinOut',
transformOrigin:'50% 50%'
  })
  .to('.vi-mask-group',{
    scale:10,
    duration:2,
    delay:-1.5,
    ease:'expo.easeinOut',
    transformOrigin:'50% 50%',
    opacity:0,
    onUpdate:function(){
      if(this.progress() >= .9 ){
        document.querySelector('.svg').remove();
        setshowContent(true);
        this.kill();
      }
    }
  })
})


useGSAP(()=>{
  if(!showContent)return;

gsap.to('.main',{
  rotate:0,
  scale:1,
  duration:2,
  ease:'expo.easeinOut',
  delay:'-0.8'
})

gsap.to('.sky',{
  rotate:0,
  scale:1.2,
  duration:2,
  ease:'expo.easeinOut',
  delay:'-1'
})

gsap.to('.bg',{
  rotate:0,
  scale:1.2,
  duration:2,
  ease:'expo.easeinOut',
  delay:'-1'
})

gsap.to('.textarea',{
  rotate:0,
  scale:1.2,
  duration:2,
  ease:'expo.easeinOut',
  delay:'-1'
})

gsap.to('.char',{
  rotate:0,
  bottom:'-50%',
  x:'-50%',
  scale:'0.9',
  duration:2,
  ease:'expo.easeinOut',
  delay:'-1'
})

  const main = document.querySelector(".main");

  main?.addEventListener('mousemove',function(e){
const Xmove =( e.clientX / window.innerWidth - 0.5)*40;

gsap.to('.imagediv .textarea',{
  x:`${Xmove * 0.5}%`
});

gsap.to('.sky',{
  x: Xmove,
});

gsap.to('.bg',{
  x: Xmove * 1.8,
});

  })
},[showContent])






  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 z-[10] w-full px-7 py-7 '>
              <div className='logo flex gap-7 items-center'>
              <div className='lines flex flex-col gap-1'>
                <div className='line w-10 h-1 bg-white '></div>
                <div className='line w-8 h-1 bg-white '></div>
                <div className='line w-6 h-1 bg-white '></div>
              </div>
              <h3 className='navbar text-4xl text-white'>ROCKSTAR</h3>
              </div>
            </div>


            <div className='imagediv overflow-hidden relative w-full h-full'>
              <img className=' absolute sky  top-0 left-0 scale-[1.8] rotate-[-20deg] w-full h-full object-cover' src="./sky.png" alt="" />
              <img className='absolute bg  scale-[1.8] rotate-[-5deg] top-0 left-0  w-full h-full object-cover' src="./bg.png" alt=""/>

              <div className='textarea absolute flex flex-col top-10 left-[50%] -translate-x-[50%] rotate-[-20deg] scale-[1.5] text-white gap-3'>
                <h2 className='text-[8rem] leading-none  -ml-40'>Grand</h2>
                <h2 className='text-[8rem] leading-none  ml-20'>Theaf</h2>
                <h2 className='text-[8rem] leading-none  -ml-40'>Auto</h2>
              </div>
              
              <img src="./ps5.png" alt="" className='absolute z-10 h-[46px] bottom-[8%] left-[48%] -translate-x-[50%] translate-y-[50%]' />
              <img className='absolute char -bottom-[350%] overflow-hidden  left-1/2 -translate-x-1/2 scale-[4] rotate-[-50deg]' src="girlbg.png" alt="" />

              <div className='btmbar absolute bottom-[5%] left-[8%] flex gap-4 items-center'>
                <div className='text-white text-3xl'><i className="ri-arrow-down-line"></i></div>
                <h3 className='text-white text-xl'>scroll down</h3>
              </div>
            </div>

           

            <div className='btmbar bottom-0 left-0 absolute w-full px-10 py-17 bg-gradient-to-t from-black to-transparent'>
            </div>
          </div>

<div className=' w-full h-full bg-black flex items-center justify-center'>
  <div className='cntener w-full h-full flex items-center'>
    <div className='limage ml-[5vh]'>
    <img src="./imag.png" alt="" />
    </div>

    <div className='rimage w-[40%] h-[60%] ml-[15vh] text-white flex flex-col gap-3'>
      <div className='p-2'>
          <h1 className='text-7xl'>STILL RUNING,</h1>
          <h1 className='text-6xl'>NOT HUNTING</h1>
          </div>
          <p className='text-[12px] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veniam corrupti tenetur aliquam excepturi nesciunt consequuntur, cumque incidunt soluta nulla eveniet vel voluptates iure iste numquam, quo, nisi itaque voluptas ipsa voluptatum illum! Architecto quaerat fugiat error quibusdam. In esse voluptatem quae ipsam vitae dolorum blanditiis rem quam assumenda totam enim nesciunt, libero aspernatur magni et vel atque qui magnam necessitatibus odio non laborum sed.</p>

          <p className='text-[12px] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veniam corrupti tenetur aliquam excepturi nesciunt consequuntur, cumque incidunt soluta nulla eveniet vel voluptates iure iste numquam, quo, nisi itaque voluptas ipsa voluptatum illum! Architecto quaerat fugiat error quibusdam. In esse voluptatem quae ipsam vitae dolorum blanditiis rem quam assumenda totam enim nesciunt, libero aspernatur magni et vel atque qui magnam necessitatibus odio non laborum sed.</p>

          <button className='w-[20vh] h-[7vh] bg-amber-500 text-3xl text-black ml-5'>downlode</button>
    </div>
  </div>
</div>

        </div>
      )}
</>



  );
}

export default App