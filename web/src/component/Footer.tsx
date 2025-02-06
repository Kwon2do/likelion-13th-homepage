import styled from "@emotion/styled";
import { ReactComponent as InstagramIcon } from "../svgs/instagram.svg";
import { ReactComponent as DiscordIcon } from "../svgs/discord.svg";
import { ReactComponent as MailIcon } from "../svgs/mail.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSection style={{ borderRight: "1px solid #000" }}>
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
            display: "flex",
            gap: "10px",
          }}
        >
          <IconLink
            target="_blank"
            href="https://www.instagram.com/likelion_inu/"
          >
            <Instagram />
          </IconLink>
          <IconLink target="_blank" href="https://discordapp.com/users/5968111">
            <Discord />
          </IconLink>
          <IconLink target="_blank" href="mailto:dohun_1@naver.com">
            <Mail />
          </IconLink>
        </div>
      </FooterSection>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 20px;
  background-color: #f2f4f6;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Typo = styled.div`
  text-align: center;
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 6px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 30px 0 0;
`;

const Category = styled(Typo)`
  font-size: 18px;
  font-family: "Pretendard-Bold";
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Instagram = styled(InstagramIcon)`
  width: 100%;
  height: auto;
`;

const Discord = styled(DiscordIcon)`
  width: 100%;
  height: auto;
`;

const Mail = styled(MailIcon)`
  width: 100%;
  height: auto;
`;
