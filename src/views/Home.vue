<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div>
      ------------------------------------------------------------
      {{globalname}}
      ------------------------------------------------------------
      {{hometitle}}
      -----------------------------------------------------------
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['globalname']),
    ...mapState('home',['hometitle'])
  },
}
</script>
