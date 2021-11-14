import React from 'react'
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
                <input name="username" placeholder="Enter Username"/>
                <br></br>
                <input name="password" placeholder="Enter Password"/>
                <br></br>
                <input name="login" value="Log In" type="submit"/>
                <input name="register" value="Register" type="submit"/>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    test: state.test
})

export default connect(mapStateToProps, {tester})(Test);
