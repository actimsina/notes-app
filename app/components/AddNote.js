import React, { useContext } from 'react'
import notesContext from '../services/NotesContext'
import noteService from '../services/noteService'

export default function AddNote() {
    const { state: { notes, desc }, dispatch } = useContext(notesContext)
    const handleAdd = (evt) => {
        evt.preventDefault()
        const newNote = {
            desc: desc,
            important: Math.random() < 0.5
        }
        noteService.createNote(newNote)
            .then(data => dispatch({
                type: 'SET_NOTES',
                payload: notes.concat(data)
            }))

        dispatch({ type: 'SET_DESC', payload: "" })
    }


    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type='text' placeholder='add note ...'
                    value={desc}
                    onChange={(e) => dispatch({
                        type: 'SET_DESC',
                        payload: e.target.value
                    })}
                />
                <button>add</button>
            </form>
        </div>
    )
}
