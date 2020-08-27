import React from 'react';
import {Content} from 'carbon-components-react';
import HeroContent from './hero';
import PostScript from './PostScript.js'
const ContentStyle = {
    position: "relative",
    top: "3.5em"
  };
const PostScriptStyle = {
    color: '#000',
    position: 'absolute',
    top: '50vh'
}
const HomePage = HeroContent;
const subject = () => (
<Content style={ContentStyle}>
     <HomePage />
     <PostScript />
</Content> 
);

export default subject;