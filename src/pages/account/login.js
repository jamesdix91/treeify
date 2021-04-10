import * as React from "react"
import { Link } from "gatsby"

const Login = () => {

    const login = () => {
        alert('log in')
        return
    }

    return (
        <main>
            <form action={login}>
                <label for="Email">Email</label>
                <input type="email"></input>
                <label for="Password">Password</label>
                <input type="password"></input>

                <input type="submit" value="Sign in"/>

                <Link to={`/account/register`}>Create an Account</Link>

            </form>

        </main>
    )
}

export default Login