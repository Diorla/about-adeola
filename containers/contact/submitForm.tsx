export default function submitForm(
  ev: { preventDefault: () => void; target: any },
  setState: (status: string) => void,
  formDetails: {
    name: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
  }
) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData();
  data.set("username", formDetails.name);
  data.set("email", formDetails.email);
  data.set(
    "message",
    `<h1>${formDetails.subject}</h1>
    <div>${formDetails.message}</div>
    <div>${formDetails.phoneNumber}</div>`
  );
  console.log(data.entries());
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
