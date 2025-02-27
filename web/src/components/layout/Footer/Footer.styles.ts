import styled from '@emotion/styled';
import { ReactComponent as Instagram } from '../../../assets/svgs/instagram.svg';
import { ReactComponent as Discord } from '../../../assets/svgs/discord.svg';
import { ReactComponent as Mail } from '../../../assets/svgs/mail.svg';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 20px;
  background-color: #f2f4f6;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 20px;
  }
`;

export const FooterSection = styled.div<{ $hasBorder?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-right: ${({ $hasBorder }) => ($hasBorder ? '1px solid #000' : 'none')};
  padding-right: ${({ $hasBorder }) => ($hasBorder ? '50px' : '0')};
  
  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
    border-bottom: ${({ $hasBorder }) => ($hasBorder ? '1px solid #000' : 'none')};
    padding-bottom: ${({ $hasBorder }) => ($hasBorder ? '20px' : '0')};
    width: 100%;
    align-items: center;
  }
`;

export const Category = styled.div`
  font-family: 'Pretendard-bold';
  color: #ff7710;
  margin-bottom: 8px;
`;

export const Typo = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  color: black;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 100%;
  height: 100%;
  fill: black;
`;

export const DiscordIcon = styled(Discord)`
  width: 100%;
  height: 100%;
  fill: black;
`;

export const MailIcon = styled(Mail)`
  width: 100%;
  height: 100%;
  fill: black;
`;
