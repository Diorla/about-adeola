import { useState } from "react";
import { RiErrorWarningLine, RiMailCheckFill } from "react-icons/ri";
import Row from "./Row";
import Section from "./Section";
import Button from "./Button";
import Input from "./Input";
import submitForm from "./submitForm";
import Feedback from "./Feedback";

export default function Form() {
  const [status, setStatus] = useState("ERROR");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  if (status === "ERROR")
    return (
      <Feedback>
        <RiErrorWarningLine size={64} color="red" />
        <div>Error sending message</div>
        <Button onClick={() => setStatus("")}>Retry</Button>
      </Feedback>
    );
  if (status === "SUCCESS")
    return (
      <Feedback>
        <RiMailCheckFill size={64} color="green" />
        <div>
          Thank you for reaching out! We usually reply within 24 hours
          (excluding Saturday and Sunday)
        </div>
      </Feedback>
    );

  return (
    <form
      onSubmit={(e) => submitForm(e, setStatus, form)}
      action="https://formspree.io/f/mqkglvzz"
      method="POST"
    >
      <Row>
        <Section>
          <Input
            value={form.name}
            onChangeText={(name) =>
              setForm({
                ...form,
                name,
              })
            }
            label="Name *"
            required
          />
          <Input
            value={form.email}
            onChangeText={(email) =>
              setForm({
                ...form,
                email,
              })
            }
            label="Email *"
            required
          />
          <Input
            value={form.phoneNumber}
            onChangeText={(phoneNumber) =>
              setForm({
                ...form,
                phoneNumber,
              })
            }
            label="Phone number"
          />
        </Section>
        <Section>
          <Input
            value={form.subject}
            onChangeText={(subject) =>
              setForm({
                ...form,
                subject,
              })
            }
            label="Subject *"
            required
          />
          <Input
            value={form.message}
            onChangeText={(message) =>
              setForm({
                ...form,
                message,
              })
            }
            label="Message *"
            required
            multiline
          />
        </Section>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Button>Submit</Button>
      </Row>
    </form>
  );
}
