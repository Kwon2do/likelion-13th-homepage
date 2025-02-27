import React from 'react';
import { 
  FooterContainer, 
  FooterSection, 
  Category, 
  Typo, 
  IconLink, 
  InstagramIcon, 
  DiscordIcon, 
  MailIcon 
} from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection $hasBorder>
        <Category>INFO</Category>
        <div>
          <Typo>멋쟁이사자처럼 인천대학교 | 대표자 권도훈</Typo>
          <Typo>인천광역시 연수구 아카데미로 119(송도동), 17호관 321호</Typo>
        </div>
      </FooterSection>

      <FooterSection>
        <Category>CONTACT</Category>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <IconLink
            href="https://www.instagram.com/likelion_inu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconLink>
          <IconLink 
            href="https://discordapp.com/users/5968111"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <DiscordIcon />
          </IconLink>
          <IconLink 
            href="mailto:dohun_1@naver.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MailIcon />
          </IconLink>
        </div>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
