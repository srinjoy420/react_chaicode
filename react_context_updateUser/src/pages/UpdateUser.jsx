import React, { useState } from 'react'
import { useUser } from '../contexts/UpdateUserContext.js'


const UpdateUser = () => {
    const { updateUser, user } = useUser()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser({
            name,
            email,
            bio
        })
        alert(user ? "update User" : "Creating user")
    }
    return (
        <div>
            {user ? <h2>UpdateUser</h2> : <h2>createUser</h2>}
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    placeholder='enter your name'
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />
                <br />
                <input
                    value={email}
                    placeholder='enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <br />
                <input
                    value={bio}
                    placeholder='enter your bio'
                    onChange={(e) => setBio(e.target.value)}
                    required
                />
                <br />
                <br />
                <button type='submit'>
                    {user ? "update user" :"createUser"}
                </button>

            </form>
        </div>
    )
}

export default UpdateUser