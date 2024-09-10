import { useState } from "react";

export default function useForm(id: string) {
  console.log("id", id);
  const [state, setState] = useState<{
    succeeded: boolean;
    submitting: boolean;
    error: null | Error;
  }>({
    succeeded: false,
    submitting: false,
    error: null,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    setState({ ...state, submitting: true });

    if (!id) return null;

    fetch(`https://formspree.io/f/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setState({
          succeeded: true,
          submitting: false,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          succeeded: false,
          submitting: false,
          error: error,
        });
      });
  };
  return {
    state,
    handleSubmit,
  };
}
