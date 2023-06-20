import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./participants.scss";
import { CaretDownSquare, CaretUpSquare } from "react-bootstrap-icons";
import { useGetParticipants } from "./api/useGetParticipants";

export const Participants = () => {
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const { loading, data: participants = [], error } = useGetParticipants();

  useEffect(() => {
    participants.sort((a, b) => {
      if (sortAscending) {
        return a.codes - b.codes;
      }
      return b.codes - a.codes;
    });
  }, [sortAscending]);

  useEffect(() => {
    console.log(participants);
  }, [participants]);

  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Card className="idk border-0 intus-shadow w-75">
      <Card.Body className="w-auto">
        <Container className="m-0">
          <Row className="table-header">
            <Col xs={9}>Participant Name</Col>
            <Col xs={3}>
              ICD Code
              {sortAscending ? (
                <CaretDownSquare
                  onClick={() => setSortAscending((prev) => !prev)}
                  className="sortIcon"
                />
              ) : (
                <CaretUpSquare
                  onClick={() => setSortAscending((prev) => !prev)}
                  className="sortIcon"
                />
              )}
            </Col>
          </Row>
          <hr />
          {participants.map(({ name, codes }) => {
            return (
              <Card key={name} className="mb-3 intus-shadow participant-row">
                <Card.Body>
                  <Row>
                    <Col xs={9}>{name}</Col>
                    <Col xs={3}>{codes}</Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </Card.Body>
    </Card>
  );
};
