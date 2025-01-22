import styled from "@emotion/styled";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border: none;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  border-radius: 20px;
  padding: 15px 30px;
  border: none;
  transition: all 0.2s ease;
  background-color: #333333 !important;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 40px 0px inset !important;
  backdrop-filter: blur(2px) !important;
  transform: scale(1.05) translateZ(0px);
  &:hover {
    transform: scale(1.1);
  }
  width: 80%;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 5px;
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  img {
    border-radius: 1rem;
    object-fit: cover;
    width: 100%;
    height: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 300px;
    }
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;
const Title = styled.p`
  font-size: 22px !important;
  font-family: "Pretendard-Bold";
  color: white;
  margin-bottom: 1.75rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 15px !important;
  line-height: 1.5;
  color: #888;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
  }

  transition: all 0.3s ease;
`;
const ResponsiveContainer = styled.div`
  padding: 30px;
  height: 300px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export default function InfoComponent({
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
