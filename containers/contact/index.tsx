import { useId, useState } from "react";
import styled from "styled-components";

const Gradient = styled.div`
  background: linear-gradient(180deg, #fb998e 0%, #333333 80%);
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.headerTwo};
  text-align: center;
`;

const Wrapper = styled.div`
  clip-path: polygon(
    0% 0%,
    45% 10%,
    55% 0%,
    100% 0%,
    100% 90%,
    95% 80%,
    90% 88%,
    85% 80%,
    80% 90%,
    20% 90%,
    15% 100%,
    10% 92%,
    5% 100%,
    0% 90%
  );
  background-image: url(/connect.png);
  background-size: 100%;
  background-position: center;
  padding-top: 16px;
  padding-bottom: 50px;
`;

const Row = styled.div`
  display: flex;
  padding: 8px;
`;

const Section = styled.section`
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  padding: 8px 16px;
  color: white;
  font-size: ${({ theme }) => theme.font.subText};
  transition: 0.5s linear;
  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.color.secondaryLight};
  font-size: ${({ theme }) => theme.font.subText};
  padding: 4px;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  }
`;

const StyledLabel = styled.label`
  color: white;
  text-shadow: 0 0 1px grey;
  font-weight: 600;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.color.secondaryLight};
  font-size: ${({ theme }) => theme.font.subText};
  padding: 4px;
  outline: none;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  }
`;
const Input = ({
  label,
  value,
  onChangeText,
  multiline,
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  multiline?: boolean;
}) => {
  const id = useId();
  return (
    <FormControl>
      <StyledLabel htmlFor={id}>{label}:</StyledLabel>
      {multiline ? (
        <TextArea
          id={id}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          rows={4}
        />
      ) : (
        <StyledInput
          id={id}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
        />
      )}
    </FormControl>
  );
};

const BorderBottom = styled.span`
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  return (
    <Gradient>
      <Wrapper>
        <Title>
          <BorderBottom>Want to get in </BorderBottom>
          <span style={{ fontFamily: "cursive", fontStyle: "italic" }}>
            touch
          </span>
          ?
        </Title>
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
              label="Subject"
            />
            <Input
              value={form.message}
              onChangeText={(message) =>
                setForm({
                  ...form,
                  message,
                })
              }
              label="Message"
              multiline
            />
          </Section>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Button>Submit</Button>
        </Row>
      </Wrapper>
    </Gradient>
  );
}
