import React, { Suspense, lazy } from 'react';
import '../src/style/Navbar.scss';
import '../src/style/HeroSection.scss';
import '../src/style/Types.scss';
import '../src/style/Loader.scss';
import '../src/style/SmallInfo.scss';
import '../src/style/VideoPart.scss';
import '../src/style/Project.scss';
import '../src/style/Advantage.scss';
import '../src/style/Theme.scss';
import '../src/style/Services.scss';
import '../src/style/Footer.scss';
import '../src/style/Cursor.scss';
// import Cursor from './components/Cursor';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const Types = lazy(() => import('./components/Types'));
const Loader = lazy(() => import('./components/Loader'));
const SmallInfo = lazy(() => import('./components/SmallInfo'));
const VideoPart = lazy(() => import('./components/VideoPart'));
const Projects = lazy(() => import('./components/Projects'));
const Advantage = lazy(() => import('./components/Advantage'));
const Carousel1 = lazy(() => import('./components/Carousel'));
const Theme = lazy(() => import('./components/Theme'));
const Services = lazy(() => import('./components/Services'));
const Footer = lazy(() => import('./components/Footer'));



function App() {
  return (
    <>


<Suspense fallback={<Loader />}>

        <Navbar />
        <HeroSection />
        <Types />
        <SmallInfo />
        <VideoPart />
        <Projects />
        <Advantage />
        <Carousel1 />
        <Theme />
        <Services />
        <Footer />
      </Suspense>

    
    </>
  );
}

export default App;
