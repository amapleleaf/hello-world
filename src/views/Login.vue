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
            //this.FETCH_PERMISSION();
            this.$store.commit('LOGIN_IN', "123321123321");
            this.$router.replace("/");
          }/*,
         ...mapActions('permission',[
            'FETCH_PERMISSION'
          ])*/
        }
    }
</script>

<style scoped>

</style>
