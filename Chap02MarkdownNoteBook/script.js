

// VueJs Instance

new Vue({
    //CSS selector of the root DOM element

    el: '#notebook',

    data(){
        const html = marked('**Bold** *Italic* [link](http://vuejs.org/)')
            console.log(html)
        return{
            content : 'Ceci est une note.'
        }

    }
})

