import React, { useState } from "react";

function Form() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const Label = ({ htmlFor, children }) => {
        return <label htmlFor={htmlFor}>{children}</label>;
    };

    const nameOnChange = (event) => {
        const inputClone = { ...input };
        inputClone.name = event.target.value;
        setInput(inputClone);
        console.log("Name is: " + event.target.value);
    };

    const emailOnChange = (event) => {
        const inputClone = { ...input };
        inputClone.email = event.target.value;
        setInput(inputClone);
        console.log("Email is: " + event.target.value);
    };

    const passwordOnChange = (event) => {
        const inputClone = { ...input };
        inputClone.password = event.target.value;
        setInput(inputClone);
        console.log("Password is: " + event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        console.log("Form submitted");

        console.log({
            name: input.name,
            email: input.email,
            password: input.password,
        });

        setFormSubmitted(true);
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <Label htmlFor="name">Name:</Label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={nameOnChange}
                />
            </p>

            <p>
                <Label htmlFor="email">Email:</Label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={emailOnChange}
                />
            </p>

            <p>
                <Label htmlFor="password">Password:</Label>
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={passwordOnChange}
                />
            </p>

            <button type="submit">Submit</button>

            <ul>
                <li>Name: {input.name}</li>
                <li>Email: {input.email}</li>
                <li>Password: {input.password}</li>
            </ul>

            {formSubmitted && (
                <p>Form submitted successfully!</p>
            )}
        </form>
    );
}

export default Form;