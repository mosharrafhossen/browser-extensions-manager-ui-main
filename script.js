


const extensions=[
{name:'DevLens',
  logo:'assets/images/logo-devlens.svg',
  desc:'Quickly inspect page layouts and visualize element boundaries.',
  active:true
},

{name:'StyleSpy',
  logo:'assets/images/logo-style-spy.svg',
  desc:'Instantly analyze and copy CSS from any webpage element.',
  active:true
},

{name:'SpeedBoost',
  logo:'assets/images/logo-speed-boost.svg',
  desc:'Optimizes browser resource usage to accelerate page loading.',
  active:false
},

{name:'JSONWizaJSONWizardrd',
  logo:'assets/images/logo-json-wizard.svg',
  desc:'Formats, validates, and prettifies JSON responses in-browser.',
  active:true
},

{name:'TabMaster Pro',
  logo:'assets/images/logo-tab-master-pro.svg',
  desc:'Organizes browser tabs into groups and sessions.',
  active:true
},

{name:'ViewportBuddy',
  logo:'assets/images/logo-viewport-buddy.svg',
  desc:'Simulates various screen resolutions directly within the browser.',
  active:false
},

{name:'Markup Notes',
  logo:'assets/images/logo-markup-notes.svg',
  desc:'Enables annotation and notes directly onto webpages for collaborative debugging.',
  active:true
},

{name:'GridGuides',
  logo:'assets/images/logo-grid-guides.svg',
  desc:'Overlay customizable grids and alignment guides on any webpage.',
  active:false
},

{name:'Palette Picker',
  logo:'assets/images/logo-palette-picker.svg',
  desc:'Instantly extracts color palettes from any webpage.',
  active:true
},

{name:'LinkChecker',
  logo:'assets/images/logo-link-checker.svg',
  desc:'Scans and highlights broken links on any page.',
  active:true
},

{name:'DOM Snapshot',
  logo:'assets/images/logo-dom-snapshot.svg',
  desc:'Capture and export DOM structures quickly.',
  active:false
},

{name:'ConsolePlus',
  logo:'assets/images/logo-console-plus.svg',
  desc:'Enhanced developer console with advanced filtering and logging.',
  active:true
}
];



const grid=document.getElementById('grid')

function render(list){
 grid.innerHTML=''

 list.forEach(ext=>{

 const card=document.createElement('div')
 card.className='card'
 card.dataset.state=ext.active?'active':'inactive'

 card.innerHTML=`
 <div class="card-top">
   <img src="${ext.logo}">
   <div>
     <h4>${ext.name}</h4>
     <p>${ext.desc}</p>
   </div>
 </div>

 <div class="card-bottom">
   <button class="remove">Remove</button>

   <label class="switch">
     <input type="checkbox" ${ext.active?'checked':''} onchange="toggleState(this)">
     <span class="slider"></span>
   </label>
 </div>
 `

 grid.appendChild(card)

 card.querySelector(".remove").onclick=()=>{
 card.remove()
 }

 })

}

function toggleState(el){
 const card=el.closest('.card')
 card.dataset.state=el.checked?'active':'inactive'
}

function filter(type,btn){
 document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'))
 btn.classList.add('active')

 document.querySelectorAll('.card').forEach(card=>{
   if(type==='all') card.style.display='flex'
   else if(card.dataset.state===type) card.style.display='flex'
   else card.style.display='none'
 })
}

function toggleTheme(){
document.body.classList.toggle("dark")
document.body.classList.toggle("light")
}

render(extensions)


