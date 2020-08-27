import React from 'react';
import {Accordion,
    AccordionItem,
    PrimaryButton,

} from 'carbon-components-react';

const HeroContent = () => (
<div className="container">
        <div className="container">
          <h1>Hero Image</h1>
          <p>Explainer paragraph likely with a learn more button</p>
          <PrimaryButton>
            Learn More
          </PrimaryButton>
        </div>
        <Accordion>
    <AccordionItem title="Section 1 title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </AccordionItem>
    </Accordion>
      </div>
)
export default HeroContent;