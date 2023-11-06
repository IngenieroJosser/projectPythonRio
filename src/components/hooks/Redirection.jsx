import { useNavigate } from "react-router-dom"

const redirection = (url) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(url)
    }
}

export default redirection