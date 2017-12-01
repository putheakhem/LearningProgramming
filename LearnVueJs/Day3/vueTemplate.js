var vm = new Vue({
    el: '#vueTemplate',
    data: {
        firstName: 'Puthea',
        lastName: 'Khem',
        htmlContent: "<div> <h1>Welcome to Vue Template</h1> </div>", // we need to use v-html to render proper html content on web browser
        imgsrc: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzMS85MjAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMDkxNzg4My5qcGc="
    }
});