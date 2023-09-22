import { useState } from "react";
import axios from "axios"
import {  useNavigate} from "react-router-dom"


function NewSubmit() {

    const navigate = useNavigate('')
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(otp);
        axios.post('http://localhost:5000/submit-otp', {
            otp: otp,
            password: password
        })
            .then(res => {
                console.log(res.data);
                if (res.data.code === 200) {
                    navigate('/signin')
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (<>
        <h1 className="center">NEW PASSWORD</h1>

        <div className="outcard">
            OTP <br/>
            <input
            value={otp}
            onChange={(e) => {
                setOtp(e.target.value)
            }}
            className="inputs"
            type="text">

            </input>
            NEW PASSWORD <br/>
            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            className="inputs"
            type="text"></input>
            <button 
            className="btns"
            onClick={handleSubmit}
            >CHANGE PASSWORD</button>
        </div>
    </>)
}
export default NewSubmit;
