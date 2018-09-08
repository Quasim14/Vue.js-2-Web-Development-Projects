// VueJs Instance
new Vue({
    //CSS selector of the root DOM element
    el: '#notebook',

    data(){

        return{
            // A note Array
            notes: [],
            // Id of the selected note
            selectedId: null,
        }
    },

    computed:{
        notePreview(){
            // Markdown rendered to HTML
            return this.selectedNote ? marked(this.selectedNote.content) : ''
        },
        addButtonTitle(){
            return this.notes.length + ' note(s)'
        },
        selectedNote(){
             return this.notes.find(note => note.id === this.selectedId)
        },

    },

    // Change watchers
    // watch:{
    //     content:{
    //         handler: 'saveNote',
    //     },
    // },

    methods:{
        // saveNote(){
        //     console.log('Note sauvegradée:', this.content)
        //     localStorage.setItem('content', this.content)
        // },

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
})
