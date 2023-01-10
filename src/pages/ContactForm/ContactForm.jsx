import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CForm } from "./style";

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqzarpk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <CForm id="contact">
      <h1 style={{ textAlign: "center", color: "white", padding: "1rem" }}>
        Talk to Me
      </h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label
          style={{
            maxWidth: "1000px",
            color: "white",
            marginBottom: ".4rem",
          }}
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="namel"
          type="name"
          name="name"
          placeholder="Type your name"
          style={{
            padding: ".6rem",
            marginBottom: "1.4rem",
            border: "2px solid #fff",
            color: "#000",
            borderRadius: "10px",
            fontSize: "1rem",
          }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label
          style={{
            maxWidth: "1000px",
            color: "white",
            marginBottom: ".4rem",
          }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Type your email"
          style={{
            padding: ".6rem",
            marginBottom: "1.4rem",
            border: "2px solid #fff",
            borderRadius: "10px",
            color: "#000",
            fontSize: ".9rem",
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label
          style={{
            maxWidth: "1000px",
            color: "white",
            marginBottom: ".4rem",
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          style={{
            padding: ".6rem",
            marginBottom: "1.4rem",
            border: "2px solid #fff",
            borderRadius: "10px",
            color: "#000",
            fontSize: ".9rem",
          }}
          placeholder="Leave your message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          style={{
            maxWidth: "1000px",
            padding: ".7rem .5rem",
            borderRadius: "10px",
            background: "#FFF",
            color: "#000",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
          }}
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </CForm>
  );
}

export default ContactForm;