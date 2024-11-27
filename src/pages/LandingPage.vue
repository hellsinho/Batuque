<template>
      <Header />
      <router-view></router-view>
      <Hero />
      <About />
      <ProjectOverview />
      <Services />
      <Resources />
      <RoadMap />
      <BugReport />
      <Contact />
      <Footer />
  </template>
  
  <script>
  import Header from '../components/LandingPage/Header.vue';
  import Hero from '../components/LandingPage/Hero.vue';
  import About from '../components/LandingPage/About.vue';
  import Services from '../components/LandingPage/Services.vue';
  import Resources from '../components/LandingPage/Resources.vue';
  import RoadMap from '../components/LandingPage/RoadMap.vue';
  import BugReport from '../components/LandingPage/BugReport.vue';
  import Contact from '../components/LandingPage/Contact.vue';
  import Footer from '../components/LandingPage/Footer.vue';
  import ProjectOverview from '../components/LandingPage/ProjectOverview.vue';
  
  export default {
    components: {
      Header,
      Hero,
      About,
      ProjectOverview,
      Services,
      Resources,
      RoadMap,
      BugReport,
      Contact,
      Footer,
    }
  };
  </script>
  
  