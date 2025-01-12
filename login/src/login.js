import React from "react";
import "./styles.css";

export default function Login(){
    const [formData,setformData] = React.useState({
        email:"",
        password:"",
        confirmpassword:"",
        joinedNewLetter:true,
    })

function handleChange(event){
    const {name,type,value,checked} = event.target
    setformData(prevFormData =>({
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
    }))
}

function handleSubmit(event){
    event.preventDefault();

    if (!formData.password || !formData.confirmpassword) {
        alert("Please make sure to fill in all details");
    } else if (formData.password === formData.confirmpassword) {
        alert("Successfully signed up!");
    } else {
        alert("Passwords do not match");
    }
    
}
return(
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input 
            type="email"
            placeholder="Email address"
            className="form-input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            />
            <input 
            type="password"
            placeholder="Password"
            className="form-input"
            name="password"
            onChange={handleChange}
            value={formData.password}
            />
            <input 
            type="password"
            placeholder="Confirm Password"
            className="form-input"
            name="confirmpassword"
            onChange={handleChange}
            value={formData.confirmpassword}
            />
            <div className="form-marked">
                <input
                id="okayToEmail"
                type="checkbox"
                name="joinedNewLetter"
                onChange={handleChange}
                checked={formData.joinedNewLetter}
                />
                <label htmlFor="okayToEmail">I want to Join the newsletter</label>
                
            </div>
            <button className="form-submit">Sign Up</button>
        </form>
    </div>
)
}