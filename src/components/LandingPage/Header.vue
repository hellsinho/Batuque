<template>
  <header ref="header" class="flash-background">
    <a href="#" class="logo" data-aos="fade-down" data-aos-delay="100">
      <img src="/img/logo.svg" alt="batuque-sobre-baquetas-cruzadas" width="100px">
    </a>

    <div id="menu-icon" class="menu-icon" data-aos="fade-down" data-aos-delay="200">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <ul class="navlist" data-aos="fade-down" data-aos-delay="300">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#services">Demonstração</a></li>
      <li><a href="#resources">Tecnologias</a></li>
      <li><a href="#roadmap">Roadmap</a></li>

    </ul>

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

    const handleScroll = () => {
      const scrollY = window.scrollY;
      header.classList.toggle("sticky", scrollY > 120);
      header.classList.toggle("scrolled", scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navlist');

    menu.onclick = () => {
      menu.classList.toggle('active');
      navlist.classList.toggle('active');
    };

    window.onscroll = () => {
      menu.classList.remove('active');
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
@keyframes backgroundFlash {
  0% { opacity: 0; }
  50% { opacity: 0.8; }
  100% { opacity: 0; }
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15%;
  transition: all 0.5s ease;
  background: var(--bg-color);
}

header.sticky {
  box-shadow: 0 .1rem 1rem rgb(0, 0, 0, .2);
}

header.scrolled {
  transform: translateY(-10px);
  opacity: 0.9;
}

.navlist {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navlist li {
  margin-left: 20px;
}

.navlist a {
  font-size: var(--p-font);
  font-weight: 400;
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

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon .bar {
  height: 4px;
  width: 30px;
  background-color: var(--other-color);
  margin: 3px 0;
  transition: all 0.3s ease;
}

.menu-icon.active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-icon.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
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

@media (max-width: 1075px) {
  .menu-icon {
    display: flex;
  }

  .navlist {
    position: absolute;
    top: 100%;
    right: -100%;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--bg-color);
    transition: all 0.5s ease;
    overflow-y: auto;
    z-index: 999; /* Adicionado para garantir que apareça acima */
  }

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
