<template>
    <div>
      <BasicSyntax msg="hello" />
      <div>
          <span>vuex use</span>
        <button @click="shwoSateStudent" > shwoSateStudent :</button>{{student.name}}
      </div>
    </div>

</template>

<script>
    import BasicSyntax from '../components/BasicSyntax'
    import store from '../store'
    import { mapState,mapMutations } from 'vuex'
    export default {
      name: 'basic',
      components: {
        BasicSyntax
      },
      methods:{
        shwoSateStudent(){
          //store.commit('basic/changeStudent',{sname:'小张',sage:22,sgrade:'一年级'})
          this.changeStudent({sname:'小张',sage:22,sgrade:'一年级'});
        },
        ...mapMutations('basic', [
          'changeStudent'
        ])

      },
      computed:{
        studentsVuex(){
          return store.state.basic.student;
        },
        ...mapState('basic',['student'])
      }
    }
</script>
