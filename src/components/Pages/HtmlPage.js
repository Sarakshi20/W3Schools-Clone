import React from 'react'
import Navbar from "../navbar/Navbar"
import VerticalNav from '../verticalNav/verticalNav';
import ContentBox from '../ContentBox/ContentBox';

function HtmlPage() {
  return (
    <div>
      <Navbar />
      <VerticalNav />
      <ContentBox />
    </div>
  )
}

export default HtmlPage;
