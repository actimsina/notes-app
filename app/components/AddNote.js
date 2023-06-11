import React from 'react'

export default function AddNote({ handleAdd, desc, setDesc }) {
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
