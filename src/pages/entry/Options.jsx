import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import SummaryForm from "../summary/SummaryForm";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);
  if (error) return <AlertBanner />;
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return (
    <Col>
      <Col>
        <Row>{optionItems}</Row>
      </Col>
      <Col>
        <Row>
          <SummaryForm />
        </Row>
      </Col>
    </Col>
  );
}
