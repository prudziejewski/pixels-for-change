import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(true);
        setUser('');
        setPwd('');

        axios
        // update information to backend
        .get(
          `http://localhost:8020/login`,
          user, pwd
        )
        .then((response) => {
          alert("Added Successfully");
        });
    }
    

    return (
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <p>
                <Link to={"/"}>
                        <h2>Visit the Pixel Board</h2>
                </Link>
                <Link to={"/BuyPixel"}>
                        <h2>Buy a Pixel</h2>
                </Link>
                
                </p>
            </section>
        ) : (
        <section>
<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}></p>
<h1>Sign In</h1>
<form onSubmit={handleSubmit}>
    <label htmlFor="username">Username:</label>
    <input 
    type="text"
    id='username' 
    ref={userRef}
    autoComplete="off"
    onChange={(e) => setUser(e.target.value)}
    value={user}
    required
    />
    <label htmlFor="password">Password:</label>
    <input 
    type="password"
    id='password' 
    onChange={(e) => setPwd(e.target.value)}
    value={pwd}
    required
    />
    <button>Sign In</button>
</form>
{/* <p>
    Need an Account?<br />
    <span className='line'> */}
        {/* put router link here*/}
        {/* <a href="#">Sign Up</a>
    </span>
</p> */}

        </section>
        )}
        </>
    )
}

export default Login;


// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

// axios
//       .get(`http://localhost:8020/company/login`)
//       .then(data => data.json())

// export default function Login({ setToken }) {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await Login({
//           username,
//           password
//         });
//         setToken(token);
//       }

//     return(
//     <form onSubmit={handleSubmit}>
//       <label>
//         <p>Username</p>
//         <input type="text" onChange={e => setUserName(e.target.value)}/>
//       </label>
//       <label>
//         <p>Password</p>
//         <input type="password"  onChange={e => setPassword(e.target.value)}/>
//       </label>
//       <div>
//         <button  type="submit">Submit</button>
//       </div>
//     </form>
//   )
// }