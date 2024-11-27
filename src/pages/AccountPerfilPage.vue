<!-- src/pages/LoginPage.vue -->
<template>
    <homeUser />
    <NavBar />
</template>

<script>
import homeUser from '../components/userPage/HomeUserPage/homeUser.vue';
import NavBar from '../components/userPage/navBarPerfil/navBarPerfil.vue';


export default {
  name: 'AccountPerfilPage',
  components: {
    NavBar,
    homeUser,
  },
};
</script>