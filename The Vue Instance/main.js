//A Vue instance is the root of our application. It is created by passing an options object into it. Just like it sounds, this object has a variety of optional properties that give the instance the ability to store data and perform actions.

var app = new Vue({
    // The Vue instance is then plugged into an element of your choosing, forming a relationship between the instance and that portion of the DOM.
    el: '#app',
    // The instance’s data can be accessed from inside the element that the instance is plugged into.
    data: {
        product: 'Socks',
        description: "A pair of warm, fuzzy socks"
    }
})