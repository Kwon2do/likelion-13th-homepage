import {
  Container,
  ImageContainer,
  StyledButton,
  Title,
  Description,
  ResponsiveContainer,
} from "../../pages/Onboard/styles/Onboard.styles";
export default function AboutUsComponent({
  imgSrc_props,
  Title_props,
  Content_props,
}) {
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
