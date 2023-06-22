import { useNavigate, useParams } from "react-router-dom";
import { useGetIcdCodes } from "./api/useGetIcdCodes";
import { Card as IntusCard } from "@/components/card";
import { Button as IntusButton } from "@/components/button";
import { H3, H2 } from "@/components/header";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./participant.scss";

export const Participant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useGetIcdCodes(
    id ? parseInt(id) : undefined
  );

  if (loading) {
    return <>...loading</>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <Container className="p-4">
      <Row>
        <Col xs={12} md={2}>
          <IntusButton onClick={() => navigate(-1)}>
            <H3 className={"m-0 py-2 px-3"}> {"< Back"}</H3>
          </IntusButton>
        </Col>
        <Col xs={12} md={10}>
          <IntusCard className={"participant w-100 p-2"}>
            <Card.Body>
              <Container fluid>
                <Row className="p-0 participant-header">
                  <H2 className="p-0">{data?.name}</H2>
                  <hr />
                </Row>
                <Row className="codes">
                  {`ICD Codes (${data?.translations?.length || 0})`}
                </Row>
                {data?.translations.map((translation) => {
                  return (
                    <Row key={translation.code} className="code mt-3 mx-1 p-3">
                      <Col xs={6}>{translation.code}</Col>
                      <Col xs={6}>
                        <p className="m-0 right">{translation.name || "-"}</p>
                      </Col>
                    </Row>
                  );
                })}
              </Container>
            </Card.Body>
          </IntusCard>
        </Col>
      </Row>
    </Container>
  );
};
