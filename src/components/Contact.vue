<template>
  <section class="contact" id="contact">
    <div class="center-text" data-aos="fade-down">
      <h2>Vamos entrar em <span>contato?</span></h2>
      <div class="invite-text">
        <span>Fique à vontade para deixar seu feedback sobre nosso produto!</span>
      </div>
    </div>

    <div class="contact-form" data-aos="zoom-in-up">
      <form action="">
        <input type="text" placeholder="Seu nome" required>
        <input type="email" placeholder="Endereço de e-mail" required>
        <textarea name="" id="" cols="30" rows="10" placeholder="Escreva aqui sua mensagem" required></textarea>
        <input type="submit" name="" value="Enviar mensagem" class="send-btn">
      </form>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Adicione lógica JavaScript se necessário
  }
};
</script>

<style scoped>
.contact {
  background-color: #22282f;
  padding: 60px 0;
}


.contact-form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.2rem;
}

.contact-form form {
  position: relative;
  width: 600px;
}



form .send-btn {
  display: inline-block;
  padding: 11px 26px;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  transition: all .5s ease;
  width: 30%;
}

form .send-btn:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
  cursor: pointer;
}

.center-text {
  text-align: center;
}

.center-text h2 {
  font-size: var(--h2-font);
  font-weight: bold;
}
.center-text h2 span{
  color: var(--main-color);
}
.center-text .invite-text {
  margin-top: 20px;
}

.center-text .invite-text span {
  font-size: var(--p-font);
  color: var(--other-color);
}
</style>
