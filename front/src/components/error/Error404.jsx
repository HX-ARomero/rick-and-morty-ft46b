import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
    const navigate = useNavigate()

    useEffect(()=> {
        setTimeout(()=> navigate('/home'), 3000)
    }, [])

  return <img src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1684371895/Error_404_m6fj3t.gif" alt="error" />;
}

export default Error404;
