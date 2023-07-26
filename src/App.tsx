import './App.scss'
import {routes} from "./constants/route.ts";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(routes.main)
    }

    return (
        <div className='fadeIn main-container center-flex'>
            <div className="bg-img-container">

            </div>
            <div className="center-flex start-btn-container">
                <button
                    onClick={handleClick}
                    className="custom-main-btn"
                >
                    <span>Start</span>
                </button>
            </div>
            <div className="main-footer-container">
                <div className="seperator"></div>
                <div className="footer-text">
                    <p>© 2023 by the JacquesNg</p>
                </div>
            </div>

        </div>
    )
}

export default App
