import React from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/navbar'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Download & Install', 'Buy Tickets', 'See the Live Withdrawal and Win'];
}


export default function about() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(3);
    const steps = getSteps();

    return (
        <>
            <Head>
                <title>Kismaat - About</title>
                <meta name="keywords" content="digitallottery" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
                <link href="//db.onlinewebfonts.com/c/d66fa62dabed66f2226a1b2d17da0579?family=Showcard+Gothic" rel="stylesheet" type="text/css" />
                <link rel="icon" href="/ic.png"></link>
            </Head>
            <Navbar />
            <div className="about_content">
                <img className="logo" src="/logo.png" ></img>
                <div className="steps_content">
                <div className="steps">
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                </div>
            </div>
        </>
    )
}

