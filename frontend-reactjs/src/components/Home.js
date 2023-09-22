import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react";

function Home() {
    // về mặc định là SignIn không chuyển qua Home được nếu chưa có token
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    }, [])
    return (
        <div className="card">
            <div>Home</div>
            <div>   
             <span>{localStorage.getItem('EMAIL')}</span>&ensp;     
            <button
            onClick={()=>{
                localStorage.clear()
                navigate('/signin')

            }}  
            >LOG OUT</button>
            </div>
        </div>
    )
}
export default Home;
