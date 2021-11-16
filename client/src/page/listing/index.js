import React from 'react'
import { ReactDOM } from 'react'
import {Button} from "@material-ui/core"
import {connect} from 'react-redux'
import {tester} from '../../action/testing'
import { useState } from 'react'
import { useEffect } from 'react'

const Index = ({test, tester}) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        tester()
    },[])

    useEffect(() => {
        setValue(test.test_message)
    },[test.test_message])
    
    // Testing if button works
    const greetUser = (name) => {
        console.log(`Hello ${name}!`);
      }
    
    return (
        <div>
            <Button onClick={() => greetUser("User")} variant="contained" color="primary">
                Hello World!
            </Button>
        </div>
    )
}

const mapStateToProps = state => ({
    test: state.test
})

export default connect(mapStateToProps, {tester})(Index); 
