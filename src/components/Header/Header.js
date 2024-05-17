import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        Timi Ambaye
      </Link>
    </Div1>
    <Div2>
        <Link href="#projects">
          Projects
        </Link>
        <Link href="#skills">
          Skills
        </Link>
        <Link href="#about">
          About
        </Link>
        {/* <a href="https://blog.timiambaye.com">
          Blog
        </a> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/itstimiking">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/itstimiking/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
