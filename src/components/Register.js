import { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (!name || !email || !password) {
      alert("Invalid Form, please enter all fields");
      return;
    }

    let data = { name, email, password };

    console.warn(data);

    console.log("error ::: " + error);

    if (error === null) {
      let result = await fetch("http://localhost:8080/seller", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      result = await result.json();
      navigate("/login");
      alert("Successfully Registered");
      // .then((result) => {
      //   result.json().then((body) => {
      //     console.log("RESULT", body);
      //     localStorage.setItem("user-info", JSON.stringify(body));
      //     navigate("/login");
      //   });
      // })
      // .catch((error) => {
      //   setError(error);
      // });
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group
            as={Col}
            md={{ span: 6, offset: 3 }}
            controlId="validationCustom01"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            as={Col}
            md={{ span: 6, offset: 3 }}
            controlId="validationCustom02"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            as={Col}
            md={{ span: 6, offset: 3 }}
            controlId="validationCustom03"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FloatingLabel>
          </Form.Group>
          <br />
          <br />
          <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
            <Button type="submit">Submit form</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default Register;
