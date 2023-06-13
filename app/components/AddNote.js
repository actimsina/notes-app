import React, { useContext } from 'react'
import notesContext from './NotesContext'

export default function AddNote() {
    const { handleAdd, desc, setDesc } = useContext(notesContext)

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type='text' placeholder='add note ...'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button>add</button>
            </form>
        </div>
    )
}
