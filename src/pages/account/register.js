import * as React from "react"
import { Link, graphql } from "gatsby"

const Register = () => {

    const register = () => {
        return
    }

    return (
        <main>
            <form action={register}>
                <label for="FirstName">First Name</label>
                <input type="text"></input>
                <label for="LastName">Last Name</label>
                <input type="text"></input>
                <label for="Email">Email</label>
                <input type="email"></input>
                <label for="Password">Password</label>
                <input type="password"></input>

                <input type="submit" value="Create"/>

            </form>

        </main>
    )
}

export default Register