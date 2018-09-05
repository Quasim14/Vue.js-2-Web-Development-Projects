// VueJs Instance
new Vue({
    //CSS selector of the root DOM element
    el: '#notebook',

    data(){
        const html = marked('**Bold** *Italic* [link](http://vuejs.org/)')
            console.log(html)
        return{
            content : localStorage.getItem('content') || 'You can write in **markdown**',
            // A note Array
            notes: [],
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
        content:{
            handler: 'saveNote',
        },
    },

    methods:{
        saveNote(){
            console.log('Note sauvegradée:', this.content)
            localStorage.setItem('content', this.content)
        },
    },

    created(){
        this.content = localStorage.getItem('content')|| 'Vous pouvez ecrire une note'
    }
})

console.log('Note restaurée:', localStorage.getItem('content'))