import { Alert } from "react-bootstrap";

export default function AlertBanner({ message, variant }) {
  const alertMessage = message || "An Unexpected error occured.";
  const alertvariant = variant || "danger";

  return (
    <Alert variant={alertvariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
}
