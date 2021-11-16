import React from 'react'
import {connect} from 'react-redux'
import {tester} from '../action/testing'
import { useState } from 'react'
import { useEffect } from 'react'
import "./home.css"

const Home = ({test, tester}) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        tester()
    },[])

    useEffect(() => {
        setValue(test.test_message)
    },[test.test_message])

    
    return (
        <div>
            {/* Title */}
            <div class="title">DONK.CA</div>
            {/* Headers */}
            <div class="header-container">
                <div class="headerBox">
                <button class="button buttonRegular">Communities</button>
                </div>
                <div class="headerBox">
                <button class="button buttonRegular">About</button>
                </div>
                <div class="headerBox">
                <button class="button buttonRegular">Contact</button>
                </div>
                <div class="headerBox">
                    <button class="button buttonSignUp">Sign up</button>
                </div>
            </div>

            <br/> <br/> <br/> <br/> <br/> <hr/>


            <div class="listingBox">
                <h4>Welcome *Username*!</h4>
                <h3>Listings in <b>*CommunityName*</b></h3>
                {/* Item Display Box */}
                <div class="itemDisplayContainer">
                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 1*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>

                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 2*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>

                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 3*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>

                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 4*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>

                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 5*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>

                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 6*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>

                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 7*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>

                    <div class="itemDisplayContainer-box">
                        <div class="itemDisplayContainerImage-box">
                            <p>*Image of Item 8*</p>
                        </div>
                        <p>Item Name - Price</p>
                    </div>
                </div>
                <button class="button seeMoreButton">See More</button>
            </div>

            <br/>

            {/* Additional info at the bottom of the page */}
            <div class="extraInfoBox">
                <h1 class="centerText">Got Something to Sell?</h1>
                <p class="centerText">
                    Sign up with donk today and start buying and selling in your community hussle free!
                </p>
                <div class="center">
                    <button class="button buttonSignUp2">Sign up</button>
                </div>
            </div>

            {/* Footer Box */}
            <div class="footerBox">
                <div class="footerWebsiteInfoBox">
                    <b>DONK.CA</b>
                    <p>@ 2021 - 2021</p>
                    <p>Privacy - Terms</p>
                </div>
                <div class="footerInfoBox">
                    <b>Contact</b>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Fax</p>
                </div>
                <div class="footerInfoBox">
                    <b>Opportunities</b>
                    <p>Careers</p>
                    <p>Partnership</p>
                    <p>Sponsorship</p>
                </div>
                <div class="footerInfoBox">
                    <b>Our Mission</b>
                    <p>Statement</p>
                    <p>Another one</p>
                    <p>Another one</p>
                </div>
                <div class="footerInfoBox">
                    <b>Company</b>
                    <p>Our Team</p>
                    <p>Our Vision</p>
                    <p>Our Goal</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    test: state.test
})

export default connect(mapStateToProps, {tester})(Home); 