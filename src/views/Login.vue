<template>
  <div>
    <div>
      <span>vuex use</span>
      <button @click="login" >登录</button>
    </div>
  </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex'
    export default {
        name: "login",
        methods:{
          login () {
            this.FETCH_PERMISSION();
            this.$router.replace("/");
          },
          ...mapActions([
            'FETCH_PERMISSION'
          ])
        }
    }
</script>

<style scoped>

</style>
