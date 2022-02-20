import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleSign from "./Components/GoogleSign/GoogleSign";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  return (
    <div>
      <GoogleSign></GoogleSign>
      <br />
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
