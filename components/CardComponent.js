import { Card } from "semantic-ui-react";

const CardComponent = ({ title, content }) => {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header content={title} />
        <Card.Description content={content} />
      </Card.Content>
    </Card>
  );
};

export default CardComponent;
