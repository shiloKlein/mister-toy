
<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'This is my msg'
    }
  },
}

</script>
<template>
  <h1>Welcome to my vite app</h1>
  <h2>{{ msg }}</h2>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view></router-view>
</template>