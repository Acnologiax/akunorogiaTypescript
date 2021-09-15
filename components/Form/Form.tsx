import { useState } from "react";
import { useRouter } from "next/router";

const Form = ({ formId, userForm, forNewUser = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: userForm.username,
    password: userForm.password,
  });

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/User", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add pet");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "poddy_trained" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewUser ? postData(form) : "";
    } else {
      setErrors({ errs });
    }
  };

  const formValidate = () => {
    let err = {};
    if (!form.username) err = "Name is required";
    if (!form.password) err = "password is required";

    return err;
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit} className="flex flex-col w-48">
        <label htmlFor="username" className="p-2">
          username
        </label>
        <input
          className="outline-none ring-1 focus:ring-1 "
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" className="p-2">
          password
        </label>
        <input
          className="outline-none ring-1 focus:ring-1 "
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="border my-4 border-black">
          Register
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
