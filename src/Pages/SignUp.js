import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser, user } = useContext(UserContext)
    const redirectTo = useNavigate()
    
    function handleSubmit(event) {
        event.preventDefault();
        setUser(username)
    }

    // the useEffect acts like a listener, that senses changes 
    //in states, in this case listens to changes in user that comes from UserContext
    useEffect(() => {
        if (user !== '') redirectTo("/")
    }, [user])
    

    return (
        <div>
            <div className="form-container d-flex justify-content-center text-light">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
   <label>Email</label>
   <input
      className="form-control rounded-0"
      type="text"
      value={username}
      onChange={e => setUsername(e.target.value)}
      required
   />
</div>
<div className="form-group">
   <label>Password</label>
   <input
      className="form-control rounded-0"
      type="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      required
   />
</div>
                    <button className="bluebutton">Log in</button>
</form>
            </div>
        </div>
    )
}

export default Login