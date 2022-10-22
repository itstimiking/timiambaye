import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey There,
        </SectionTitle>
        <SectionText>
          Hello!, It's Timi Ambaye. I am a fulls-stack web developer (Django/Flask) (ruby on rails) (React) (Vue), a native android developer (Kotlin), a 
          cross platform mobile application developer (React Native) . I am a good fit for your new project.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
