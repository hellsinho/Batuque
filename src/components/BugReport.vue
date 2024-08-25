<template>
  <section class="contact-form" id="contact-form">
    <div class="container">
      <h1>Bug Report</h1>
      <form @submit.prevent="submitReport">
        <div class="form-group">
          <label for="bug-title">Título do Bug:</label>
          <input type="text" id="bug-title" v-model="title" placeholder="Digite o título do bug" />
        </div>
        <div class="form-group">
          <label for="bug-description">Descrição:</label>
          <textarea id="bug-description" v-model="description" placeholder="Descreva o bug"></textarea>
        </div>
        <button class="send-btn" type="submit">Enviar Relatório</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
    submitReport() {
      // Handle the submission logic here
      console.log("Título:", this.title);
      console.log("Descrição:", this.description);
      // Reset the form
      this.title = '';
      this.description = '';
    }
  }
};
</script>

<style scoped>
.contact-form {
  background: var(--bg-color);
  padding: 2rem;
  border-radius: 8px;
}

.contact-form .container {
  max-width: 600px;
  margin: 0 auto 120px auto;
}

.contact-form h1 {
  font-size: var(--h1-font);
  color: var(--text-color);
  margin-bottom: 4rem;
}

.contact-form .form-group {
  margin-bottom: 1em;
}

.contact-form label {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--other-color);
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--text-color);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--other-color);
}

.contact-form button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.5s ease;
}

.contact-form button:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
  cursor: pointer;
}
</style>
