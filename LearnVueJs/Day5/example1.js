
var vm = new Vue({
  el: '#computer-propertie',
  data: {
     name : "helloworld"
  },
  methods: {
     getrandomno1 : function() {
        return Math.random();
     }
  },
  computed :{
     getrandomno : function(){
        return Math.random();
     }
  }
});
