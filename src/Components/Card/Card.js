import { CardContainer, CardImg } from "./Card.Styles";

function Card({ id, img, name }) {
  return (
    <CardContainer to={`/movie/${id}/${name}`}>
      <CardImg src={img} alt={name} />
    </CardContainer>
  );
}

export default Card;
