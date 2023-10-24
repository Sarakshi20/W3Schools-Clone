import React from 'react'
import Navbar from "../navbar/Navbar";
import VerticalNavCss from '../VerticalnavCss/VerticalnavCss';
import ContentBoxIntro from '../ContentIntroCss/ContentIntroCss';

function CssIntro() {
  return (
    <div>
        <Navbar />
        <VerticalNavCss />
        <ContentBoxIntro />
    </div>
  )
}

export default CssIntro