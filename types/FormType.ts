export default interface FormType {
  id: number;
  name: string;
  description: string;
  fields: Field[];
}

interface Field {
  id: number;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  validation: {
    minLength: number;
    maxLength: number;
    pattern: string;
  };
  options: Option[];
}

interface Option {
  id: number;
  label: string;
  value: string;
}
