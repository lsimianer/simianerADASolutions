import React, { useState, useEffect } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// image import
import transparentLogo from '../images/tpLogo.png'
import Ravenseye from '../images/REB2.png'
import shreddedPaper from '../images/shreddedPaper.jpg'
import govt from '../images/govt.jpeg'

const Landing = () => {

    // control modal
    const  [modalOpen, setmodalOpen] = useState(false)
    return (
        <div>
             <Grid container direction={"row"} spacing={5}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Container id="navCon">
                        <img src={transparentLogo} id="navLogo" alt="simianer solutions logo" />
                    </Container>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Container id="bodyCon1">
                        <h1 className="coolHeaderMain"> All Source Solutions From an All Star Team</h1>
                        <p className="bodyTextMain">
                        Focused on and experienced in government contracts, Simianer Solutions has perfected the process from 
                        the initial statement of work to the request for quote, to the delivery of services.
                        <br/>
                        <br/>
                        We've found that concise and consistent communication makes for a stress free contracting officer and 
                        a fulfilled agency need. We pride ourselves on our relationships and strive to always be better
                        </p>
                    </Container>
                </Grid>
                    <Grid item xs={4}>
                        <Container id="oneOfThreeCon">
                            <Grid container direction={"row"} spacing={5}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <img src={shreddedPaper} id="oneOfThreeLogo" alt="simianer solutions logo" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <h3 className="cardHeader">
                                        Sensitve Materials Disposal
                                    </h3>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    PII & sensitive information containing documents need to be destroyed in a secure, safe, and fficient manner.
                                    Simianer Solutions has mastered this art and created a seemless logistics system to insure 
                                    worry free materials disposal. 
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" id="learnMoreBtn" onClick={() => setmodalOpen(true)}> Learn More</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container id="oneOfThreeCon">
                            <Grid container direction={"row"} spacing={5}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <img src={govt} id="oneOfThreeLogo" alt="simianer solutions logo" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                     <h3 className="cardHeader">
                                        Certified SDVOSB Contractor
                                    </h3> 
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    We are a Purple Heart Recipient owned and operated company. 
                                    We pride oursleves on providing top service to all government agencies
                                    with unmatchedcommunication and efficiency. 
                                    <br/>
                                    <br/>
                                    Simianer Solutions is an all source solution for agency needs! 
                                    We've done everything from
                                    construction management projects to custom software. 

                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" id="learnMoreBtn" onClick={() => setmodalOpen(true)}> Learn More</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container id="oneOfThreeCon">
                            <Grid container direction={"row"} spacing={5}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <img src={Ravenseye} id="oneOfThreeLogo" alt="simianer solutions logo" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <h3 className="cardHeader">
                                        ADA Compliance, Auditing, and Remediation
                                    </h3>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <a target="_blank" href="https://ravenseye.io/" rel="noopener noreferrer">
                                        RavensEye.io 
                                    </a>
                                    &nbsp; in Partnership with Simianer Solutions creates custom software solutions, provides ADA digital compliance remediation, and develops groundbreaking assistive technology. 
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" id="learnMoreBtn" onClick={() => setmodalOpen(true)}> Learn More</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>                    
            </Grid>

            <Container id="footerCon">
                <Grid container direction={"row"} spacing={5}>
                    <Grid item xs={6}>
                        <p id="footerText"> &copy; Simianer Solutions, LLC 2020 </p>             
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Landing;
