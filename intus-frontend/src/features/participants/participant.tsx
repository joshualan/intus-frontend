import { useParams } from "react-router-dom";
import { useGetParticipant } from "./api/useGetParticipant";
import { Card as IntusCard } from "@/components/card";
import { Button as IntusButton } from "@/components/button";
import { H3 } from "@/components/header";
import { Container, Row, Col, Card } from "react-bootstrap";
export const Participant = () => {
  const { id } = useParams();
  const {
    loading,
    data = {},
    error,
  } = useGetParticipant(id ? parseInt(id) : undefined);

  if (loading) {
    return <>...loading</>;
  }

  if (error) {
    return <>Error</>;
  }

  console.log(data);
  return (
    <Container className="participant p-4">
      <Row>
        <Col xs={3}>
          <IntusButton>
            <H3 className={"m-0 py-2 px-3"}> {"< Back"}</H3>
          </IntusButton>
        </Col>
        <Col xs={9}>
          <IntusCard className={"w-100"}>
            <Card.Body>{`id: ${id}`}</Card.Body>
          </IntusCard>
        </Col>
      </Row>
    </Container>
  );
};
