import { Container } from './ModalDetails.styled';

const ModalDetails = ({ largeImageURL }) => {
  return (
    <Container>
      <img src={largeImageURL} alt="something on the card" />
    </Container>
  );
};

export default ModalDetails;
