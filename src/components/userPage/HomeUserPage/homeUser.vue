<script>
export default {
    name: 'homeUser',

};
</script>

<template>
    <section >
        <div class="home-perfil-elements" data-aos="fade-up" data-aos-delay="400">

            <img class="logo-perfil" src="../../../../public/img/logo.svg" alt="baquetas cruzadas escrito Batuque no meio delas">
    
            <div class="home-botton-elements">
                <p>Faça uma doação através do QR-code e dê continuidade a batida</p>
    
                <img class="qr-code-donate" src="../../../../public/img/batuque_qrcodde.png" alt="qr-code para ajudar o batuque a continuar">
                <div class="btns">
                    <button class="btn">Baixar instalador</button>
                </div>
            </div>
            <div class="social">
                <a href="#"><i class="ri-facebook-fill"></i></a>
                <a href="#"><i class="ri-instagram-fill"></i></a>
                <a href="#"><i class="ri-twitter-x-fill"></i></a>
                <a href="#"><i class="ri-youtube-fill"></i></a>
            </div>
        </div>
    </section>

</template>

<style src="./homeUserStyle.css"></style>