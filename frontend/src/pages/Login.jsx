import LoginForm from "../components/LoginForm"
import Navigationbar from "../components/Navigationbar"

function Login() {
    return(
        <div className="bg-dark text-light">
            <LoginForm route="/api/token/" method="login" />
        </div>
    )
}

export default Login