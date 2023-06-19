import React from 'react'
import bg1 from '../assets/project2.webp'
import bg2 from '../assets/project3.webp'
import bg3 from '../assets/project4.webp'
import bg4 from '../assets/project5.webp'
import bg5 from '../assets/project6.webp'
import bg6 from '../assets/project7.webp'
import bg7 from '../assets/project8.webp'
import bg8 from '../assets/project9.webp'
import bg9 from '../assets/project10.webp'
import bg10 from '../assets/project11.webp'
import bg11 from '../assets/project12.webp'
import bg12 from '../assets/project14.webp'
import bg13 from '../assets/project15.webp'
import bg14 from '../assets/project16.webp'
import bg15 from '../assets/project17.webp'
import bg16 from '../assets/project13.webp'
import bg17 from '../assets/project18.webp'
import bg18 from '../assets/project19.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const handleProjectHover = (e) => {
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    cursorOutline.style.transform = 'scale(3)';
    cursorOutline.innerHTML = "view";
    cursorOutline.style.fontSize = "6px";
    cursorOutline.style.color = "white";
    cursorOutline.style.padding = "10px";
    cursorOutline.style.textAlign = "center";
    cursorOutline.style.margin = "15px";
    cursorOutline.style.display = "flex";
    cursorOutline.style.justifyContent = "center";
    cursorOutline.style.alignItems = "center";
    cursorOutline.style.fontSize = "6px";


  };

  const handleProjectLeave = (e) => {
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    cursorOutline.style.transform = 'scale(1)';
    cursorOutline.innerHTML=""
    cursorOutline.style.fontSize=""
    cursorOutline.style.padding=""
    cursorOutline.style.textAlign="";
    cursorOutline.style.paddingTop=""

  };
    const [selectedFilter, setSelectedFilter] = React.useState('all');
    React.useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration in milliseconds
          offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
          easing: 'ease-in-out', // Easing function for animations
          once: true // Whether to only animate elements once
        });
      
        // Rest of the code...
      }, []);

    const handleFilterChange = (filter) => {
      setSelectedFilter(filter);
    };
    const projects = [
        { title: 'Live chat',
        title2:"Live chat",
        img:bg1,

        new:"New",
        category: 'insurance' },
        { title: 'Insurance',
        title2:"Insurance",
        img:bg2,
        category: 'insurance' },
        { title: 'Agency',
        title2:"Digital Agency",
        img:bg3,        
        category: 'agency' },
        { title: 'Seo Demo',
        title2:"Seo Agency",
        img:bg4,
        category: 'agency' },
        { title: 'Agency',
        title2: "Startup Agency",
        img: bg5,
         category: 'agency' },
        { title: 'Shopify',
        title2:"Shopify",
        img: bg6,
         category: 'agency' },
        { title: 'App store',
        title2:"App Store",
        img: bg7,
         category: 'app' },
        { title: 'Marketing',
        title2:"Digital Marketing",
        img: bg8,
         category: 'marketing' },
        { title: 'Finance App',
        new:"New",
        title2:'Digital Payment',
        img: bg9,
         category: 'payment' },
        { title: 'Payment',
        title2:"Online Payment",
        img:bg10,
         category: 'payment' },
        { title: 'Fintech',
        title2:"Fintech",
        img:bg11,
         category: 'crypto' },
        { title: 'Crypto',
        title2 :"Crypto Currency",
        img:bg12,
         category: 'crypto' },
        { title: 'IT solution',
        title2:"IT solution",
        img:bg13,
        new:"New",
         category: 'saas' },
        { title: 'IT solution',
        title2:"IT solution Two",
        img: bg14,
        category: 'saas' },
        { title: 'Saas',
        title2:"Saas Startup",
        img: bg15,
        new:"New",
         category: 'saas' },
        { title: 'Help Desk',
        title2:"IT Solution Helpdesk",
        img:bg16, category: 'saas' },
        { title: 'NFT',
        title2:"NFT Landing",
        img:bg17,New:"New",
         category: 'nft' },
        { title: 'RTL Demo',
        title2:"Ximsa",
        img:bg18,
         category: 'rtl' },
      ];
      const projectCounts = {
        all: projects.length,
        insurance: projects.filter((project) => project.category === 'insurance').length,
        agency: projects.filter((project) => project.category === 'agency').length,
        app: projects.filter((project) => project.category === 'app').length,
        marketing: projects.filter((project) => project.category === 'marketing').length,
        payment: projects.filter((project) => project.category === 'payment').length,
        crypto: projects.filter((project) => project.category === 'crypto').length,
        saas: projects.filter((project) => project.category === 'saas').length,
        nft: projects.filter((project) => project.category === 'nft').length,
        rtl: projects.filter((project) => project.category === 'rtl').length,
      };
      const filteredProjects = selectedFilter === 'all' ? projects : projects.filter((project) => project.category === selectedFilter);

  return (
   <React.Fragment>
 <div className="Projects" id='Demos'>
 <div className='name' data-ios="fade-left">All Demos</div>
 <div className='ProjectTitle' data-aos="fade-right">18 Stunning Demos</div>
      <div className="filter" data-aos="fade-right">
        <button className={selectedFilter === 'all' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('all')}>
          All ({projectCounts.all})
        </button>
        <button className={selectedFilter === ' insurance' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('insurance')}>
          Insurance ({projectCounts.insurance})
        </button>
        <button className={selectedFilter === 'agency' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('agency')}>
          Agency ({projectCounts.agency})
        </button>
        <button className={selectedFilter === 'app' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('app')}>
          App ({projectCounts.app})
        </button>
        <button className={selectedFilter === 'marketing' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('marketing')}>
          Marketing ({projectCounts.marketing})
        </button>
        <button className={selectedFilter === 'payment' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('payment')}>
          Payment ({projectCounts.payment})
        </button>
        <button className={selectedFilter === 'crypto' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('crypto')}>
          Crypto ({projectCounts.crypto})
        </button>
        <button className={selectedFilter === 'saas' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('saas')}>
          Saas ({projectCounts.saas})
        </button>
        <button className={selectedFilter === 'nft' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('nft')}>
          NFT ({projectCounts.nft})
        </button>
        <button className={selectedFilter === 'rtl' ? 'button1 active' : 'button1'} onClick={() => handleFilterChange('rtl')}>
          RTL ({projectCounts.rtl})
        </button>
      </div>
      <div className="project-lists">
        {filteredProjects.map((project, index) => (
            <div className='box '    onMouseEnter={handleProjectHover}
            onMouseLeave={handleProjectLeave} key={index} data-aos="fade-top">
     {project.new &&  <button className="free">{project.new}</button>}
     <div data-aos="fade-right">    
      <span>.</span>
        <span>.</span>
        <span>.</span>
       </div>
        <img src={project.img} alt="" className='projectImg' />
        <div className='tit1' data-aos="fade-right">{project.title}</div>
        <div data-aos="fade-top">{project.title2 }</div>
      </div>
        ))}
      </div>

    
    </div>
   </React.Fragment>
  )
}

export default Projects