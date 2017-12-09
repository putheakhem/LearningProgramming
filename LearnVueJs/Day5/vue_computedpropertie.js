var vm = new Vue({
  el: '#computed_propertie',
  data: {
      firstname :"puthea",
      lastname :"khem",
      birthyear : ""
   },
   computed :{
      getfullname : function(){
         return this.firstname +" "+ this.lastname;
      }
   }

});
