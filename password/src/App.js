import React,{useState} from "react";

function App(){
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    function handlePasswordChange(e){
        const newpassword = e.target.value
        setPassword(newpassword);

        const hasUpper = /[A-Z]/.test(newpassword)
        const hasLower = /[a-z]/.test(newpassword)
        const hasDigits = /\d/.test(newpassword)
        const hasSymbols = /[!@#$%^&*]/.test(newpassword)
        const isMinimum = newpassword.length >= 8;

        setIsValid(
            hasUpper && hasLower && hasDigits && hasSymbols && isMinimum 
        );
    };
    return (
        <div className="container">
            <h2 className="title">Password Validator</h2>
            <input className="input" type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}
            />
            <div className="rules-container">
                <p className="rules-title">Password must include:</p>
                <ul className="rules-list">
                    <li className="rule" style={{color:/[A-Z]/.test(password)?"green":"red"}}>Atleast have one Uppercase letter</li>
                    <li className="rule" style={{color:/[a-z]/.test(password)?"green":"red"}}>Atleast have one Lowercase letter</li>
                    <li className="rule" style={{color:/\d/.test(password)?"green":"red"}}>Atleast have one Digit</li>
                    <li className="rule" style={{color:/[!@#$%^&*]/.test(password)?"green":"red"}}>Atleast have one Symbol</li>
                    <li className="rule" style={{color:password.length>=8?"green":"red"}}>Should have length of 8 or greater than 8</li>
                </ul>
                {isValid ?(
                    <p className="result" style={{color:"green"}}>
                        Password is valid
                    </p>
                ):(
                    <p className="result" style={{color:"red"}}>Password is not valid</p>
                )}
            </div>
        </div>
    );
};
export default App;