import React, { useState, useRef, useEffect } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DeezyLogo from './assets/images/Deezy.svg';
import { SocialIcon } from 'react-social-icons';
var ReactRotatingText = require('react-rotating-text');
import { FadeIn } from 'react-slide-fade-in';

<ReactRotatingText items={['first', 'second', 'third']} />
const DISCORD_URL = "https://discord.gg/nEBbrUAvPy"
const NODE_AMBOSS_URL = "https://amboss.space/node/024bfaf0cabe7f874fd33ebf7c6f4e5385971fc504ef3f492432e9e3ec77e1b5cf"
const TWITTER_URL = "https://twitter.com/dannydiekroeger"
const TELEGRAM_URL = "https://t.me/deezy_noderunners"
const NODE_ID = "024bfaf0cabe7f874fd33ebf7c6f4e5385971fc504ef3f492432e9e3ec77e1b5cf"
const CLEARNET_NODE_URI = `${NODE_ID}@52.1.72.207:9735`
const TOR_NODE_URI = `${NODE_ID}@ecu3omnk6kxer5hw35owlzhw3xuqfroxjnnflbkjkc7xy2jy3gy7b2yd.onion:9735`



const App = () => {
  const exploreRef = useRef(null);
  const scrollToRef = (ref) => ref.current.scrollIntoView();

  function CommunitySection() {
    return (
      <Container style={{
        borderTop: '1px solid grey',
        paddingTop: `10px`,
        paddingBottom: `220px`,
        backgroundColor: `rgb(35, 34, 34)`,
        color: `white`
      }} fluid bg="dark" variant="dark" className="d-flex flex-column text-center align-items-center justify-content-center">
        <h2 className="py-5" style={{
          fontSize: '50px',
          fontWeight: 'bold',
        }}><span style={{ textShadow: '0px 0px 5px gold' }}>join our community</span></h2>
        <Container className="my-1">
          <div style={{ fontFamily: 'Comic Sans MS' }}>we share ideas, earn, learn, build software, and have fun</div>
        </Container>
        <Container className="d-flex flex-row text-center align-items-center my-5" style={{
          maxWidth: '800px',
          justifyContent: `space-around`
        }}>
          <SocialIcon url={DISCORD_URL} target="_blank" className="social-icon" />
          <SocialIcon url={TELEGRAM_URL} target="_blank" className="social-icon" />
          <SocialIcon url={"https://github.com/dannydeezy"} target="_blank" className="social-icon" />
          <SocialIcon url={TWITTER_URL} target="_blank" className="social-icon" />
        </Container>
        <Container className="my-1">
          <div>also check out <a style={{ color: 'white' }} href="https://twitter.com/taowallet" target="_blank">tao wallet</a></div>
        </Container>
      </Container>
    )
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={DeezyLogo}
              height="40"
              className="d-inline-block align-top my-2"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid bg="dark" variant="dark" className="main-container d-flex flex-column text-center align-items-center justify-content-center">
        <FadeIn
          from="bottom"
          positionOffset={0}
          triggerOffset={0}
          delayInMilliseconds={200}
        >
          <h1>Home for <span className="gold-gradient">Lightning Liquidity</span></h1>
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={0}
          triggerOffset={0}
          delayInMilliseconds={1000}
        >
          <Container className="mt-5">
            <Button variant="secondary" className="mx-5 px-4 main-button shadowed-orange" onClick={() => scrollToRef(exploreRef)}>Explore</Button>
            <Button variant="secondary" className="mx-5 px-4 main-button" onClick={() => window.open('https://docs.deezy.io')}>Api Docs</Button>
          </Container>
        </FadeIn>
      </Container>
      <Container ref={exploreRef} style={{
        justifyContent: `space-evenly`
      }} id="main-info" fluid bg="dark" variant="dark" className="main-container d-flex flex-row text-center align-items-center flex-wrap">
        <Card className="info-card" bg="dark" text="white" variant="dark" style={{ backgroundColor: 'lightgrey' }}>
          <Card.Body>
            <Card.Title className="card-title-emoji">💰</Card.Title>
            <Card.Title className="card-title">earn</Card.Title>
            <Card.Text className="info-text">
              <span>earn reliably</span> by providing liquidity to the <a style={{ color: 'white' }} href={NODE_AMBOSS_URL} target="_blank">deezy node</a>. open a channel, push sats through, and deezy will pay you handsomely to close the channel.
              <br /><br />
            </Card.Text>
            <Button variant="primary" className="shadowed-orange" onClick={() => window.open('https://dannydeezy.notion.site/How-to-Earn-on-the-Lightning-Network-62c9ebee3403487bbbd936d75d59d6fc')}>learn more</Button>
            <div className='small-text mt-4'>deezy also <a style={{ color: 'white' }} href="https://github.com/dannydeezy/deezy-bounties/blob/main/README.md" target="_blank">pays bounties</a> for contributions to open-source code</div>
            <Card.Text className="emoji-group mt-3">
              👷‍♂️ 🔨 🏃‍♀️ 💦 ⚡ 💰
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="info-card" bg="dark" text="white" variant="dark" style={{ backgroundColor: 'lightgrey' }}>
          <Card.Body>
            <Card.Title className="card-title-emoji">🔄</Card.Title>
            <Card.Title className="card-title">swap</Card.Title>
            <Card.Text className="info-text">
              <span className="info-phrase">swap instantly</span> between lightning and on-chain bitcoin. even get a dedicated on-chain <a style={{ color: 'white' }} href="https://docs.deezy.io/#tag/Swap-(BTC-to-LN)" target="_blank">deposit address</a> for your lightning address.
              <br /><br />
            </Card.Text>
            <Button variant="primary" className="shadowed-orange" onClick={() => window.open('https://swap.deezy.io')}>swap now</Button>
            <Card.Text className="emoji-group mt-5">
              ⛓️ 🔄 ⚡ 💦  💰🔄
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      {CommunitySection()}
    </>
  )
}

export default App;
