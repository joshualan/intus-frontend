import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useGetParticipants, Participant } from "./api/useGetParticipants";
import { ReactComponent as OrderFilterDown } from "@/assets/orderFilter_Down.svg";
import { Card as IntusCard } from "@/components/card";
import "./participants.scss";

export const Participants = () => {
  const [sortAscending, setSortAscending] = useState<boolean>(false);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const { loading, data = [], error } = useGetParticipants();

  useEffect(() => {
    const sorted = data.sort((a, b) => {
      if (a.name < b.name) {
        return sortAscending ? 1 : -1;
      }
      if (a.name > b.name) {
        return sortAscending ? -1 : 1;
      }
      return 0;
    });

    setParticipants([...sorted]);
  }, [sortAscending, data]);

  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <IntusCard className="participant-table mt-3 border-0 w-75">
      <Card.Body className="w-auto">
        <Container className="m-0">
          <Row className="table-header">
            <Col xs={9}>
              Participant Name
              <OrderFilterDown
                onClick={() => setSortAscending((prev) => !prev)}
                className={`ms-3 ${!sortAscending && "rotate"}`}
              />
            </Col>
            <Col xs={3}>ICD Code</Col>
          </Row>
          <hr />
          {participants.map(({ name, codes }) => {
            return (
              <IntusCard key={name} className="mb-3 participant-row">
                <Card.Body>
                  <Row>
                    <Col xs={9}>{name}</Col>
                    <Col xs={3}>{codes}</Col>
                  </Row>
                </Card.Body>
              </IntusCard>
            );
          })}
        </Container>
      </Card.Body>
    </IntusCard>
  );
};
