import React from "react";
import { Card, Button} from "react-bootstrap";

function ShowCards(props) {
  return (
    <>
          <Card
            style={{ width: "30vw", display: "inline-flex" }}
          >
            <Card.Img variant="top" src={props.thumbnail} style={{ height:"150px" , objectFit:"cover"}} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
              <div
                style={{
                  flexDirection: "row-reverse",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="success" href={props.alibaba}>
                  رفتن به علی بابا
                </Button>
                <Button variant="success" href={props.wikipedia}>
                  اطلاعات بیشتر در ویکی پدیا
                </Button>
              </div>
            </Card.Body>
          </Card>
    </>
  );
}

export default ShowCards;
