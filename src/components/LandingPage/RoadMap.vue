<template>
    <div class="timeline" id="roadmap">
        <ul  data-aos="fade-down" data-aos-delay="100">
            <li>
                <div class="content-left" data-aos="fade-down" data-aos-delay="100">
                    <h3>Construtor de música</h3>
                    <p>A implementação do Construtor de Música irá oferecer aos usuários uma experiência criativa e personalizada. Essa ferramenta permitirá que os usuários criem suas próprias composições, ajustando melodias, ritmos e harmonias de acordo com suas preferências.</p>
                    <div class="time">
                        <h4>Fevereiro de 2025</h4>
                    </div>
                </div>
                <img src="../../public/img/builder_music.png" class="image-timeline" alt="">
            </li>
            <li>
                <img src="../../public/img/download_button.png.png" class="image-timeline" alt="">
                <div class="content-right">
                    <h3>Área para download de músicas</h3>
                    <p>A criação de uma Área para Download de Músicas permitirá que o usuário tenha acesso ao acervo de músicas criadas pela comunidade Batuque. Essa funcionalidade permitirá que os usuários baixem suas músicas favoritas para joga-las offline ou no modo multiplayer com outros jogadores.</p>
                    <div class="time">
                        <h4>Março de 2025</h4>
                    </div>
                </div>
            </li>
            <li>
                <div class="content-left" data-aos="fade-down" data-aos-delay="100">
                    <h3>Modo multijogador</h3>
                    <p>O modo multijogador será criado para fomentar a interação social e a competição amigável entre os usuários. Este modo permitirá que os usuários disputem em tempo real na música selecionada, promovendo um ambiente de aprendizado e interação.</p>
                    <div class="time">
                        <h4>Abril de 2025</h4>
                    </div>
                </div>
                <img class="image-timeline" src="../../public/img/multijogador.png" alt="">
            </li>
            <div style="clear: both;"></div>
        </ul>
    </div>
</template>

<style scoped>
h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--main-color);
}

h4 {
    font-size: 0.8rem;
    color: #f64d4d;
}

p {
    font-size: 0.9rem;
    color: var(--other-color);
    margin-block: 0.8rem;
    font-weight: 400;
}

.timeline {
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 80%; /* Definindo uma largura fixa menor */
}   

.timeline:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 4px;
    height: 90%;
    border: 1px var(--main-color) solid;
    border-radius: 50%;
    font-family: 'Poppins', sans-serif;
}

.timeline ul {
  padding: 0;
  margin: 0;
}

.timeline ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
}

.timeline ul li:nth-child(odd) .content-left {
    order: 1;
    text-align: right;
    padding-right: 20px;
    width: 45%;
}

.timeline ul li:nth-child(odd) .image-timeline {
    order: 2;
    margin: auto;
    width: 45%;
}

.timeline ul li:nth-child(even) .content-right {
    order: 2;
    text-align: left;
    padding-left: 20px;
    width: 45%;
}

.timeline ul li:nth-child(even) .image-timeline {
    order: 1;
    margin: auto;
    width: 45%;
}

.image-timeline {
    max-width: 200px;
    height: auto;
    border: 1px solid var(--main-color);
    box-shadow: var(--main-color) 0 0 5px;
    border-radius: 50%;
}

.time {
    margin-top: 10px;
    font-size: 0.8rem;
    color: #f64d4d;
    font-weight: 400;
}

</style>
