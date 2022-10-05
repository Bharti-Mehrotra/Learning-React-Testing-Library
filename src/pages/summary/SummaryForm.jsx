import React from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = React.useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms and conditions">
        <Form.Check
          type="checkbox"
          label={checkboxLabel}
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
        />
      </Form.Group>

      <Form.Group>
        <Button variant="primary" type="submit" disabled={!tcChecked}>
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
}
