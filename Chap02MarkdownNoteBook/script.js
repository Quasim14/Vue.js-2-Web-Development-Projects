// VueJs Instance
new Vue({
    //CSS selector of the root DOM element
    el: '#notebook',

    data(){

        return{
            // A note Array
            notes: JSON.parse(localStorage.getItem('notes')) || [],
            // Id of the selected note
            selectedId: localStorage.getItem('selected-id') || null,
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
    watch:{
        notes: 'saveNotes',
        // Let's save the selection too
        selectId(val){
            localStorage.setItem('selected-id',val)
        },
    },

    methods:{
        saveNotes(){
            // Don't forget to stringifi to JSON before storing
            localStorage.setItem('notes',JSON.stringify(this.notes))
            // We need this to watch each note's properties inside the array
            deep: true,
            console.log('Note Sauvergardée!', new Date())
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

        removeNote(){
          if (this.selectedNote && confirm('Effacer la note?')){
              //Remove the note in the notes array
              const index = this.notes.indexOf(this.selectedNote)
              if (index !== -1){
                  this.notes.splice(index, 1)

              }
          }
        },

        selectNote (note){
            this.selectedId = note.id
        },
    },
})
