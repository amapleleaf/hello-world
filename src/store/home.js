const home = {
  state: {
    hometitle: 'home title',
    students: []
  },
  mutations: {
    createStudents: state => {
      var stds = []
      for (var i = 0; i < 10; i++) {
        stds.push({ name: 'zhangsanfeng', age: (18 + i) })
      }
      state.students = stds
    }
  }
}

export  default home
