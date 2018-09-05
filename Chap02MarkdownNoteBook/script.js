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
        content:{
            handler: 'saveNote',
        },
    },

    methods:{
        saveNote(val){
            console.log('Note sauvegradée:', val)
            localStorage.setItem('content', val)
            this.reportOperation('savegarde est en cours .... ... ..')
        },
        reportOperation(opName){
            console.log('La', opName, 'l\'operation est terminée!')
        }
    },
})

