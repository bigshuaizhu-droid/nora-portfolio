import{r as t,j as e}from"./index-C97t5XgG.js";function S(){const[n,c]=t.useState(0),[h,m]=t.useState(!1),[x,p]=t.useState(!0),i=t.useRef(0),s=t.useRef(0),u=t.useRef(0),l=t.useRef(),o=t.useRef(),w=t.useMemo(()=>[{label:"Home",pct:0},{label:"About",pct:18},{label:"Capabilities",pct:38},{label:"Works",pct:56},{label:"Approach",pct:78},{label:"Contact",pct:96}],[]);t.useEffect(()=>{k()},[]),t.useEffect(()=>{const a=()=>{const r=document.documentElement.scrollHeight-window.innerHeight;s.current=r>0?window.scrollY/r*100:0};a(),i.current=s.current,c(s.current);const f=()=>{a();const r=window.scrollY>u.current;p(r),m(!0),clearTimeout(l.current),l.current=setTimeout(()=>m(!1),250),u.current=window.scrollY},g=()=>{const r=s.current-i.current;Math.abs(r)>.03&&(i.current+=r*.12,c(i.current)),o.current=requestAnimationFrame(g)};return o.current=requestAnimationFrame(g),window.addEventListener("scroll",f,{passive:!0}),()=>{window.removeEventListener("scroll",f),clearTimeout(l.current),o.current&&cancelAnimationFrame(o.current)}},[]);const y=Math.max(2,Math.min(98,n));return e.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 pointer-events-none h-12 md:h-14",children:e.jsxs("div",{className:"absolute bottom-4 md:bottom-5 left-6 right-6 md:left-16 md:right-16 lg:left-24 lg:right-24",children:[e.jsx("div",{className:"relative h-px bg-[#E5E5E7] w-full",children:w.map(a=>e.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#C5C5C7]",style:{left:`${a.pct}%`},title:a.label},a.label))}),e.jsx("div",{className:"absolute transition-none",style:{bottom:"4px",left:`${y}%`,transform:`translateX(-50%) scaleX(${x?1:-1})`},children:e.jsx(b,{isRunning:h})})]})})}function b({isRunning:n}){return e.jsxs("svg",{width:"22",height:"28",viewBox:"0 0 22 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:n?"animate-character-bounce":"animate-character-idle","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"6",r:"5.5",fill:"#1D1D1F"}),e.jsx("rect",{x:"7.5",y:"12",width:"7",height:"9",rx:"3.5",fill:"#1D1D1F"}),e.jsx("line",{x1:"9",y1:"20",x2:"7.5",y2:"27",stroke:"#1D1D1F",strokeWidth:"2",strokeLinecap:"round",className:"origin-leg-left",style:{transformOrigin:"9px 20px"}}),e.jsx("line",{x1:"13",y1:"20",x2:"14.5",y2:"27",stroke:"#1D1D1F",strokeWidth:"2",strokeLinecap:"round",className:"origin-leg-right",style:{transformOrigin:"13px 20px"}}),e.jsx("line",{x1:"8",y1:"15",x2:"4",y2:"12",stroke:"#1D1D1F",strokeWidth:"1.8",strokeLinecap:"round",className:"origin-arm-left",style:{transformOrigin:"8px 15px"}}),e.jsx("line",{x1:"14",y1:"15",x2:"18",y2:"12",stroke:"#1D1D1F",strokeWidth:"1.8",strokeLinecap:"round",className:"origin-arm-right",style:{transformOrigin:"14px 15px"}})]})}let d=!1;function k(){if(!d){d=!0;try{const n=document.createElement("style");n.textContent=`
      @keyframes charBounce {
        0%, 100% { transform: translateY(0); }
        30%      { transform: translateY(-2.5px); }
        60%      { transform: translateY(-1px); }
      }
      @keyframes charIdle {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-1px); }
      }
      @keyframes leftLegSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(18deg); }
        75%      { transform: rotate(-18deg); }
      }
      @keyframes rightLegSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(-18deg); }
        75%      { transform: rotate(18deg); }
      }
      @keyframes leftArmSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(-15deg); }
        75%      { transform: rotate(15deg); }
      }
      @keyframes rightArmSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(15deg); }
        75%      { transform: rotate(-15deg); }
      }
      .animate-character-bounce {
        animation: charBounce 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-leg-left {
        animation: leftLegSwing 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-leg-right {
        animation: rightLegSwing 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-arm-left {
        animation: leftArmSwing 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-arm-right {
        animation: rightArmSwing 0.35s ease-in-out infinite;
      }
      .animate-character-idle {
        animation: charIdle 2.5s ease-in-out infinite;
      }
    `,document.head.appendChild(n)}catch{}}}export{S as default};
