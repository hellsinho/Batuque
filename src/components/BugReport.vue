<template>
  <section class="bug-report" id="contact-form">
    <div class="bug-report-container" data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="fade-down" data-aos-delay="100">Bug Report</h1>
      <form @submit.prevent="submitReport" data-aos="fade-up" data-aos-delay="200">
        <div class="form-group">
          <label for="bug-title">Título do Bug:</label>
          <input type="text" id="bug-title" v-model="title" placeholder="Digite o título do bug" />
        </div>
        <div class="form-group">
          <label for="bug-description">Descrição:</label>
          <textarea id="bug-description" v-model="description" placeholder="Descreva o bug"></textarea>
        </div>
        <button class="send-btn" type="submit" data-aos="fade-up">Enviar Relatório</button>
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
:root {
  --text-color: #fff;
  --bg-color: #1b1f24;
  --second-bg-color: #22282f;
  --main-color: #e71d1d;
  --other-color: #d8dbe0;

  --h1-font: 4.5rem;
  --h2-font: 2.9rem;
  --p-font: 1.2rem;
}

.bug-report {
  background-color: var(--bg-color);
  padding: 2rem;
}

.bug-report-container {
  background-color: var(--second-bg-color);
  border-radius: 80px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.bug-report-container h1 {
  font-size: var(--h1-font);
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-align: center;
  position: relative;
}

.bug-report-container h1::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: var(--main-color);
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.5s ease;
  max-width: 50%;
}

.bug-report-container h1:hover::after {
  width: 100%;
}

.bug-report-container .form-group {
  margin-bottom: 1em;
}

.bug-report-container label {
  font-size: var(--p-font);
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.bug-report-container input,
.bug-report-container textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--other-color);
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--text-color);
  box-sizing: border-box;
}

.bug-report-container textarea {
  resize: vertical;
  min-height: 150px;
}

.bug-report-container input::placeholder,
.bug-report-container textarea::placeholder {
  color: var(--other-color);
}

.bug-report-container .send-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.5s ease;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.bug-report-container .send-btn:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
}
</style>
