Vue.component('testcomponent',{ // testcomponent use as a custom element in html
    template : '<div><h1>This is coming from component</h1></div>'
});

var vm = new Vue({
    el: '#vuecomponent' // selected this id and then we can use component in it
});
var vm1 = new Vue({
    el: '#vuecomponent1'
});