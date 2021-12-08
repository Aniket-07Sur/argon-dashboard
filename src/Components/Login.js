import React, { useState } from 'react'
import { auth } from '../Firebase'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const result = await auth.signInWithEmailAndPassword(email, password)
            window.M.toast({ html: `Welcome ${result.user.email}`, classes: 'green' })
            history.push("/success")
        }
        catch (error) {
            window.M.toast({ html: error.message, classes: 'green' })
        }
    }

    return (
        <div className="center container" style={{maxWidth:"500px"}}>
            <h1>Please Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-field ">
                    <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn blue">Login</button>
            </form>
        </div>
    )
}
