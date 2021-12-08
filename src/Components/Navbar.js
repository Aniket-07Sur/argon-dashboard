import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { useHistory } from 'react-router-dom';
export default function Navbar({user}) {
    const history = useHistory();
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue">
                    <Link to="/" className="brand-logo">Argon</Link>
                    <ul id="nav-mobile" className="right ">
                        {
                            user ?
                                <li>
                                    <button className="btn red" onClick={()=>{
                                        auth.signOut()
                                        history.push('/login')
                                    }}>Logout</button>
                                </li>
                                :
                                <>
                                    <li><Link to="./login">Login</Link></li>
                                    <li><Link to="./register">Register</Link></li>
                                </>

                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
