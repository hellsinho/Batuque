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
  import Header from '../components/Header.vue';
  import Hero from '../components/Hero.vue';
  import About from '../components/About.vue';
  import Services from '../components/Services.vue';
  import Resources from '../components/Resources.vue';
  import RoadMap from '../components/RoadMap.vue';
  import BugReport from '../components/BugReport.vue';
  import Contact from '../components/Contact.vue';
  import Footer from '../components/Footer.vue';
  import ProjectOverview from '../components/ProjectOverview.vue';
  
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
  
  