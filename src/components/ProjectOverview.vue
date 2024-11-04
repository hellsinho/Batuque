<template>
  <section class="project-overview" id="project">
    <div class="main-content" data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="zoom-in" data-aos-delay="100" class="title">
        <span class="highlight">Pitch Batuque</span>
      </h1>

      <div class="video-container" data-aos="fade-up" data-aos-delay="300">
        <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/8KPu5xcEIwI"
            title="Vídeo sobre o projeto Batuque"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
      </div>
    </div>

    <div class="repository" data-aos="fade-up" data-aos-delay="400">
      <a href="https://github.com/Batuque-ofc/Batuque-ofc" target="_blank" class="repo-link">
        Acesse o repositório no GitHub
      </a>
    </div>

    <div class="team" data-aos="fade-up" data-aos-delay="500">
      <h3>Membros da Equipe</h3>
      <ul class="team-list">
        <li>
          <img src="../../public/img/members/Edson.jpg" alt="Edson Nunes" class="team-member-image" />
          <strong>Edson Nunes</strong> - Desenvolvedor
        </li>
        <li>
          <img src="../../public/img/members/Anthonny.jpg" alt="Anthonny Lucas" class="team-member-image" />
          <strong>Anthonny Lucas</strong> - Desenvolvedor
        </li>
        <li>
          <img src="../../public/img/members/Gabriel.jpg" alt="Gabriel Renan" class="team-member-image" />
          <strong>Gabriel Renan</strong> - Desenvolvedor
        </li>
        <li>
          <img src="../../public/img/members/Felipe.jpg" alt="Felipe Moreira" class="team-member-image" />
          <strong>Felipe Moreira</strong> - Desenvolvedor
        </li>
        <li>
          <img src="../../public/img/members/Helson.jpg" alt="Helson Gonçalves" class="team-member-image" />
          <strong>Helson Gonçalves</strong> - Desenvolvedor
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const highlight = document.querySelector('.highlight');
    if (highlight) {
      highlight.addEventListener('mouseover', () => {
        highlight.classList.add('line-animate');
      });
      highlight.addEventListener('mouseout', () => {
        highlight.classList.remove('line-animate');
      });
    }

    this.flashBackground();
  },
  methods: {
    flashBackground() {
      const hero = document.querySelector('.project-overview');
      if (hero) {
        hero.classList.add('flash-background');
      }
    }
  }
};
</script>

<style scoped>
.project-overview {
  margin: 2.5rem 0;
  min-height: 100vh;
  width: 100%;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
}

.main-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin: 20px 0;
  color: var(--other-color);
  position: relative;
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.main-content h1 .highlight {
  font-weight: 700;
  display: inline-block;
  animation: text-glow 1.5s infinite;
}

.video-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.repository {
  margin-top: 3rem;
  text-align: center;
}

.repo-link {
  font-size: 1.5rem;
  color: var(--main-color);
  font-weight: 600;
  text-decoration: none;
  border: 2px solid var(--main-color);
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-block;
}

.repo-link:hover {
  background-color: var(--main-color);
  color: var(--bg-color);
}

.team {
  margin-top: 2rem;
}

.team h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.team-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}

.team-list li {
  margin: 20px;
  text-align: center;
}

.team-member-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--main-color);
  margin-bottom: 10px;
}

.team-list strong {
  display: block;
  font-size: 1.7rem;
  margin-top: 10px;
}

@media (max-width: 1024px) {
  .main-content h1 {
    font-size: 3.5rem;
  }
  iframe {
    max-width: 900px;
    max-height: 450px;
  }
}

@media (max-width: 768px) {
  .main-content h1 {
    font-size: 3rem;
  }
  iframe {
    max-width: 100%;
    max-height: 400px;
  }
  .team-member-image {
    width: 120px;
    height: 120px;
  }
  .team-list strong {
    font-size: 1.4rem;
  }
}

@media (max-width: 576px) {
  .main-content h1 {
    font-size: 2.5rem;
  }
  iframe {
    max-width: 100%;
    max-height: 20rem;
  }
  .team-member-image {
    width: 100px;
    height: 100px;
  }
  .team-list strong {
    font-size: 1.2rem;
  }
  .repo-link {
    font-size: 1.3rem;
    padding: 8px 16px;
  }
}

@media (max-width: 430px) {
  .team-list li {
    flex-direction: column;
  }
  iframe {
    max-width: 100%;
    max-height: 15rem;
  }
}
</style>
