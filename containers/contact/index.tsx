import Gradient from "./Gradient";
import SectionTitle from "../../components/SectionTitle";
import Wrapper from "./Wrapper";
import Form from "./Form";
import BorderBottom from "./BorderBottom";

export default function Contact() {
  return (
    <Gradient>
      <Wrapper>
        <SectionTitle>
          <BorderBottom>Want to get in </BorderBottom>
          <span style={{ fontFamily: "cursive", fontStyle: "italic" }}>
            touch
          </span>
          ?
        </SectionTitle>
        <Form />
      </Wrapper>
    </Gradient>
  );
}
