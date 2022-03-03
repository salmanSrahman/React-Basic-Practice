import "bootstrap/dist/css/bootstrap.min.css";
import FormAuth from "./Components/FormAuth/FormAuth";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <FormAuth></FormAuth>
        <LoginForm></LoginForm>
      </Container>
    </div>
  );
}

export default App;
