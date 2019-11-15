
const basic = {
  namespaced: true,
  state: {
    title: 'basic title',
    student: {}
  },
  mutations: {
    changeStudent (state, paylod) {
      state.student = {
        name: ' 张三丰',
        sgrade:paylod.sgrade,
        age: paylod.sage,
        sname: paylod.sname
      }
    }
  }
}
export default basic
