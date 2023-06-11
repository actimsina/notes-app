import React, { useContext } from 'react'
import notesContext from './NotesContext'

export default function NotesFilter() {
    const { filter, setFilter } = useContext(notesContext)
    return (
        <div>
            <input type='text'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder='search notes ...' />
        </div>
    )
}
