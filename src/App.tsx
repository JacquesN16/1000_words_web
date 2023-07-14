import './App.scss'
import {routes} from "./constants/route.ts";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(routes.main)
    }

  return (
    <div className='fadeIn'>
      <h1>1000 words</h1>
        <button onClick={handleClick}>
            Go
        </button>
    </div>
  )
}

export default App
