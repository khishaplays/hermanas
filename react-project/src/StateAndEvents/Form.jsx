import React from "react";

function Form() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const Label = ({ htmlFor, children }) => {
        return <label htmlFor={htmlFor}>{children}</label>;
    };

    const nameOnChange = (event) => {
        console.log("Name is: " + event.target.value);
        setName(event.target.value);
    };

    const emailOnChange = (event) => {
        console.log("Email is: " + event.target.value);
        setEmail(event.target.value);
    };

    const passwordOnChange = (event) => {
        console.log("Password is: " + event.target.value);
        setPassword(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");

        console.log({
            name,
            email,
            password,
        });

        setFormSubmitted(true);
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <Label htmlFor="name">Name:</Label>
                <br />
                <input
                    onChange={nameOnChange}
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                />
            </p>

            <p>
                <Label htmlFor="email">Email:</Label>
                <br />
                <input
                    onChange={emailOnChange}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                />
            </p>

            <p>
                <Label htmlFor="password">Password:</Label>
                <br />
                <input
                    onChange={passwordOnChange}
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                />
            </p>

            
                <main>

                
                <button onClick={onSubmit} >Submit</button>
                </main>
            <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Password: {password}</li>
                
            </ul>

            {formSubmitted && (
                <p>Form submitted successfully!</p>
            )}
        </form>
    );
}

export default Form;