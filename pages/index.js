import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Images from 'next/image';



export default function Home() {
  return (
    <>
      <Head>
        <title>Kismaat - Home</title>
        <meta name="keywords" content="lottery, digitallottery, dream 11, kismaat, earn money, earn money app, earn money online, make money app, make money online"/>
        <meta name="description" content="Easiest Digital Lottery to Play. Do Nothing and Win Unlimited. Your Time is Now, Grab your fortune."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
        <link href="//db.onlinewebfonts.com/c/d66fa62dabed66f2226a1b2d17da0579?family=Showcard+Gothic" rel="stylesheet" type="text/css"/>
        <link rel="icon" href="/ic.png"></link>
      </Head>
      <Navbar />
      <div className="kismaat_content" >
         <img className="logo" src="/logo.png" width="600px" height="350px"></img>
         <Button className="button_download"
        ><a href="/kismaat.apk" download rel="kismaat.apk"><Images src='/Ticket3.png' width="200px" height="100px"></Images></a></Button>
      </div>
    </>
  )
}
