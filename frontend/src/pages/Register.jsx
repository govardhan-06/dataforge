import LoginForm from "../components/LoginForm"
import Navigationbar from "../components/Navigationbar"

function Register() {
    return(
        <div className="bg-dark text-light">
            <LoginForm route="/api/user/register/" method="register" />
        </div>
    )
}

export default Register