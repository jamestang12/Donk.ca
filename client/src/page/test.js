import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {tester} from '../action/testing'
import { useState } from 'react'
import { useEffect } from 'react'
import { isWidthUp } from '@material-ui/core'
import "./james.css"

const Test = ({test, tester}) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        tester()
    },[])

    useEffect(() => {
        setValue(test.test_message)
    },[test.test_message])

    return (
        <div>
            {/* test and {value} */}
            <h1>Login</h1>
            <form method="post">
                <input class="input-field" name="username" placeholder="Enter Username"/>
                <br></br>
                <input class="input-field" name="password" placeholder="Enter Password" type="password"/>
                <br></br>
                <input class="input-button" name="login" value="Log In" type="submit"/>
                <input class="input-button" name="register" value="Register" type="submit"/>
            </form>
            <p>Choose a link below.</p>
            <ul>
                <li><Link to="/home">Home</Link></li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    test: state.test
})

export default connect(mapStateToProps, {tester})(Test);
