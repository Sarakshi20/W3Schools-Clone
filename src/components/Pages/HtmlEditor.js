import React from 'react';
import Navbar from "../navbar/Navbar";
import VerticalNav from '../verticalNav/verticalNav';
import ContentBoxEditor from '../ContentBoxEditor/ContentBoxEditor';

function HtmlEditor() {
  return (
    <div>
      <Navbar />
      <VerticalNav />
      <ContentBoxEditor />
    </div>
  )
}

export default HtmlEditor