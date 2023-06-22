import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useGetParticipants } from "./api/useGetParticipants";
import { ReactComponent as OrderFilterDown } from "@/assets/orderFilter_Down.svg";
import { Card as IntusCard } from "@/components/card";
import { H2 } from "@/components/header";
import "./participants.scss";
import { useNavigate } from "react-router-dom";

export const Participants = () => {
  const navigate = useNavigate();
  const [sortAscending, setSortAscending] = useState<boolean>(false);
  const { loading, data = [], error } = useGetParticipants();

  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="d-flex w-100">
        <H2 className="header pt-4 ps-5">Participants</H2>
      </div>
      <Container>
        <Row>
          <IntusCard className="participant-table mt-3 border-0">
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
                {data
                  .sort((a, b) => {
                    if (a.name < b.name) {
                      return sortAscending ? 1 : -1;
                    }
                    if (a.name > b.name) {
                      return sortAscending ? -1 : 1;
                    }
                    return 0;
                  })
                  .map(({ name, codes, id }) => {
                    return (
                      <IntusCard
                        key={name}
                        onClick={() => navigate(`/participants/${id}`)}
                        className="mb-3 participant-row"
                      >
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
        </Row>
      </Container>
    </>
  );
};
