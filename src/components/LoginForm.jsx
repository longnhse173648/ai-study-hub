import './LoginForm.css'

function LoginForm(){

    return(

        <div className="login-form">

            <h2>Login</h2>

           

            <form>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                    />

                </div>

                <button type="submit">
                    Login
                </button>
                <div className="form-group">
                <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
            </form>

        </div>

    )
}

export default LoginForm