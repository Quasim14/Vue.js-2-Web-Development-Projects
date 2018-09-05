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
            // Id of the selected note
            selectedId: null,
        }
    },

    computed:{
        notePreview(){
          // Markdown rendered to HTML
          return marked(this.content)
        },
        addButtonTitle(){
            return this.notes.length + ' note(s)'
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

        addNote(){
            const time = Date.now()
            // Default new note
            const note ={
                id: String(time),
                title: 'Nouvelle note ' + (this.notes.length + 1),
                content:'**Salut!** Ce notebook utilise [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) pour le formatage!',
                created: time,
                favorite: false,
            }
            // Add to the list
            this.notes.push(note)
        },
        selectNote (note){
            this.selectedId = note.id
        },
    },

    created(){
        this.content = localStorage.getItem('content')|| 'Vous pouvez ecrire une note'
    }
})

console.log('Note restaurée:', localStorage.getItem('content'))