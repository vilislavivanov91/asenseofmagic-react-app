import React from 'react'
import './About.css'
import AboutImage from './AboutImage'
import AboutInfo from './AboutInfo'
import imageAbout from './16807332_1881113875506021_3542516985789299623_n.jpg'
import { Row } from 'reactstrap'

const image = {
  name: 'About Image',
  src: imageAbout
}
const facebook = 'https://www.facebook.com/profile.php?id=100008222798165&fref=hovercard&hc_location=chat'
const info = {
  title: 'Some heading text inside the about me',
  text: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
  click me and you can start adding your own content and make changes to the font. Feel free to drag
  and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your
  users know a little more about you. This is a great space to write long text about your company
  and your services. You can use this space to go into a little more detail about your company. Talk
  about your team and what services you provide. Tell your visitors the story of how you came up with
  the idea for your business and what makes you different from your competitors. Make your company
  stand out and show your visitors who you are.`
}

function About (props) {
  return (
    <div id='about'>
      <h1 className='about-header'>About me</h1>
      <Row className='justify-content-center my-5'>
        <AboutImage image={image} facebook={facebook} />
        <AboutInfo info={info} />
      </Row>
    </div>
  )
}

export default About
