import "./Card.scss";

interface Props {
  header: string;
  body: string;
}

const Card = ({ header, body }: Props) => {
  return (
    <div className="card">
      <div className="header">{header}</div>
      <div className="divider"></div>
      <div className="body">{body}</div>
    </div>
  );
};

export default Card;
