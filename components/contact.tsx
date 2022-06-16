import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

function submitForm(
  ev: { preventDefault: () => void; target: any },
  setState: (status: string) => void
) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      setState("SUCCESS");
    } else {
      setState("ERROR");
    }
  };
  xhr.send(data);
}

const StyledForm = styled.form`
  width: clamp(200px, 100%, 640px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  & > div {
    margin-top: 18px;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #e0f2f1;
  color: white;
  padding: 6px;
  border-radius: 4px;
  text-transform: uppercase;
  outline: none;
  color: teal;
  font-weight: bold;
  &:hover {
    background-color: #b2dfdb;
  }
`;
const StyledError = styled.div`
  color: red;
`;
const Contact = () => {
  const [status, setStatus] = useState("");
  return (
    <StyledForm
      onSubmit={(e) => submitForm(e, setStatus)}
      action="https://formspree.io/f/mqkglvzz"
      method="POST"
    >
      <Input
        label="Name"
        type="text"
        name="username"
        required
        placeholder="Jane Doe"
      />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="example@email.com"
        required
      />
      <Input
        label="Message"
        type="text"
        name="message"
        placeholder="..."
        multiline
        required
      />
      <br />
      {status === "SUCCESS" ? (
        <div>Thanks!</div>
      ) : (
        <StyledButton>Submit</StyledButton>
      )}
      {status === "ERROR" && (
        <StyledError>Oops! There was an error.</StyledError>
      )}
    </StyledForm>
  );
};

export default Contact;
