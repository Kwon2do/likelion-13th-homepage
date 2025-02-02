import {
  Container,
  ImageContainer,
  StyledButton,
  Title,
  Description,
  ResponsiveContainer,
} from "../../pages/Onboard/styles/Onboard.styles";
interface IAboutUsProps {
  imgSrc_props: string;
  Title_props: string;
  Content_props: string;
}
export default function AboutUsComponent({
  imgSrc_props,
  Title_props,
  Content_props,
}: IAboutUsProps) {
  return (
    <Container>
      <StyledButton>
        <ImageContainer>
          <img
            src={imgSrc_props}
            alt="Example"
            draggable="false"
            loading="lazy"
          />
        </ImageContainer>
        <ResponsiveContainer>
          <Title>{Title_props}</Title>
          <Description>{Content_props}</Description>
        </ResponsiveContainer>
      </StyledButton>
    </Container>
  );
}
