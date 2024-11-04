<template>
    <div class="login-card">
        <form @submit.prevent="login">
            <h2>Login</h2>
            <div class="form-group">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" v-model="email" required>
                <label for="login-senha">Senha</label>
                <input type="password" id="login-senha" v-model="password" required>
                <div class="remember-account">
                    <div class="login-remember">
                        <input class="checkbox" type="checkbox" id="checkbox-remember">
                        <label for="checkbox-remember">Lembrar-me</label>
                    </div>
                    <div class="forget-password">
                        <a href="#">Esqueci minha senha</a>
                    </div>
                </div>
                <div class="btns-login-form">
                    <button type="submit" class="btn">Logar</button>
                    <button type="submit" class="btn btn2">Registrar-se</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  mounted() {
    // Adicione lógica JavaScript se necessário
  }
};
</script>

<style>

.login-card {
    display: flex;
    height: 100vh;
    margin: auto;
    align-items: center;
    justify-content: center;
    background: rgb(0,0,0);
    background: linear-gradient(333deg, rgba(0,0,0,1) 35%, rgba(8,27,79,1) 100%);
    
}

.login-card form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    max-width: 400px;
    padding: 2rem;
}

.login-card h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--h1-font);
    text-align: center;
}

.login-remember{
    display: flex;
    align-items: center;
    width: 100%;
}

.checkbox{
    max-width: 2em;
    margin: 0 0.001rem 0 0 ;
    box-shadow: none;
}

.remember-account{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 1rem 0;
    font-size: 0.8rem;
}

.forget-password{
    width: 100%;
    text-align: right;
}

.forget-password a{
    color: #fff;
    font-weight: 300;
}

.btns-login-form{
    display: flex;
}

.btn {
  padding: 11px 26px;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.5s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  cursor: pointer;
}

.btn2 {
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  margin-left: 15px;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  animation-delay: 0.1s;
  cursor: pointer;
}

.btn:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
}

.btn2:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>