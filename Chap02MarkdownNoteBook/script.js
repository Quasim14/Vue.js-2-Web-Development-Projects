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
    },

    computed:{
      notePreview(){
          // Markdown rendered to HTML
          return marked(this.content)
      },
    },

    // Change watchers
    watch:{
        content(val, oldVal){
            console.log('Nouvelle note : ',val, 'Ancienne note: ',oldVal)
            localStorage.setItem('content', val)
        },
    },
})

