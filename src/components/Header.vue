<template>
  <header ref="header" class="flash-background">
    <!-- Logo -->
    <a href="#" class="logo" data-aos="fade-down" data-aos-delay="100">
      <img src="/img/logo.svg" alt="batuque-sobre-baquetas-cruzadas" width="100px">
    </a>

    <!-- Menu Icon -->
    <div class="bx bx-menu" id="menu-icon" data-aos="fade-down" data-aos-delay="200"></div>

    <!-- Navigation Menu -->
    <ul class="navlist" data-aos="fade-down" data-aos-delay="300">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#services">Demonstração</a></li>
      <li><a href="#resources">Tecnologias</a></li>
    </ul>

    <!-- Buttons -->
    <div class="top-btnn" data-aos="fade-down" data-aos-delay="400">
      <a href="#contact" class="h-btn">Contate-nos</a>
      <a href="#contact-form" class="h-btn">Reportar Bugs</a>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const header = this.$refs.header;

    // Add sticky class on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      header.classList.toggle("sticky", scrollY > 120);
      header.classList.toggle("scrolled", scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Toggle Menu
    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navlist');

    menu.onclick = () => {
      menu.classList.toggle('bx-x'); // Change icon to 'X'
      navlist.classList.toggle('active'); // Show/Hide the nav menu
    };

    // Close menu when scrolling
    window.onscroll = () => {
      menu.classList.remove('bx-x');
      navlist.classList.remove('active');
    };

    this.flashBackground();
  },
  methods: {
    flashBackground() {
      const header = this.$refs.header;
      const flash = document.createElement('div');
      flash.classList.add('flash-background');
      header.appendChild(flash);

      setTimeout(() => {
        header.removeChild(flash);
      }, 300);
    }
  }
};
</script>

<style scoped>
/* Animation for background flash */
@keyframes backgroundFlash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15%;
  transition: all 0.5s ease;
  background: var(--bg-color);
  opacity: 1;
  overflow: hidden;
}

header.sticky {
  background: var(--bg-color);
  box-shadow: 0 .1rem 1rem rgb(0, 0, 0, .2);
}

header.scrolled {
  transform: translateY(-10px);
  opacity: 0.9;
}

.navlist {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navlist li {
  margin-left: 20px;
}

.navlist a {
  font-size: var(--p-font);
  font-weight: 600;
  color: var(--other-color);
  transition: all 0.5s ease;
  padding: 10px;
}

.navlist a:hover {
  color: var(--main-color);
  text-shadow: 3px 3px 20px var(--main-color), -2px 1px 30px var(--text-color);
}

.logo {
  max-width: 100px;
  height: auto;
  padding: 5px;
}

/* Menu Icon */
#menu-icon {
  font-size: 35px;
  cursor: pointer;
  display: none;
}

.top-btnn {
  display: flex;
  align-items: center;
}

.top-btnn .h-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-left: 20px;
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.5s ease;
}

.top-btnn .h-btn:hover {
  background: var(--main-color);
  color: var(--bg-color);
  box-shadow: 0 0 20px var(--main-color);
  transform: scale(1.1);
}

.flash-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  animation: backgroundFlash 0.3s forwards;
  z-index: 1;
  pointer-events: none;
}

/* Media Queries */
@media (max-width: 950px) {
  /* Show the menu icon */
  #menu-icon {
    display: block;
  }

  /* Hidden menu, slides in when active */
  .navlist {
    position: absolute;
    top: 100%;
    right: -100%; /* Offscreen initially */
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--bg-color);
    transition: all 0.5s ease;
    overflow-y: auto;
  }

  /* When active, show the menu */
  .navlist.active {
    right: 0;
  }

  .navlist li {
    margin: 10px 0;
  }

  .navlist a {
    display: block;
    padding: 17px;
    font-size: 22px;
  }

  .top-btnn {
    display: none;
  }
}

@media (max-width: 700px) {
  header {
    padding: 0 8%;
  }

  .logo img {
    width: 80px;
  }

  .navlist a {
    padding: 15px;
    font-size: 20px;
  }
}
</style>
