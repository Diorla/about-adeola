import { useId } from "react";
import StyledInput from "./StyledInput";
import StyledLabel from "./StyledLabel";
import FormControl from "./FormControl";
import TextArea from "./TextArea";

export default function Input({
  label,
  value,
  onChangeText,
  multiline,
  required,
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  multiline?: boolean;
  required?: boolean;
}) {
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
          required={required}
        />
      ) : (
        <StyledInput
          id={id}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          required={required}
        />
      )}
    </FormControl>
  );
}
