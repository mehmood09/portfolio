import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);
  //console.log(watch("example")); // watch input value by passing the name of it

    async function postData(url = "", data = {}) {
        console.log(data)
        const response = await fetch(url, {
            method:"POST", //Get, POST, PUT, DELETE etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
        const onSubmit = (data) => {  console.log(data);
        postData("http://localhost:5000/contact", data).then((response) => {
        console.log(response); // JSON data parsed by `data.json()` call
        });
        };
            //console.log(watch("name"))
            //console.log(errors)npx tailwindcss init -p
        return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
            <input type="text" className={
                errors.name ? "form-control is-invalid" : "form-control"
            }
            placeholder="Name"
            {...register("name", {
                required: {value:true, message: "What is your name?"},
                maxLength: {
                    value: 20,
                    message: "Name field < 20 Characters",
                },
                minLength: {
                    value:3,
                    message: "Name field > 3 Characters",
                },
            })} 
            />
            {errors.name && (
                <span className="invalid-feedback">
                    {errors.name.message}
                </span>
            )}
        </div>
        <div className="mb-3">
            <input type="email" className={
                errors.email ? "form-control is-invalid" : "form-control"
            }
            placeholder="abc@example.com"
            {...register("email", {
                required: {value:true, message: "What is your e-mail?"},
                maxLength: {
                    value: 20,
                    message: "Email address should be valid.",
                },
                minLength: {
                    value:3,
                    message: "Invalid email address",
                },
            })} 
            />
            {errors.email && (
                <span className="invalid-feedback">
                    {errors.email.message}
                </span>
            )}
        </div>
        <div className="mb-3">
            <input type="text" className={
                errors.message ? "form-control is-invalid" : "form-control"
            }
            placeholder="Your message..."
            {...register("message", {
                required: {value:true, message: "What is your message?"},
                maxLength: {
                    value: 20,
                    message: "Message field < 20 Characters",
                },
                minLength: {
                    value:10,
                    message: "Message field > 10 Characters",
                },
            })} 
            />
            {errors.message && (
                <span className="invalid-feedback">
                    {errors.message.message}
                </span>
            )}
        </div>
         
      <input type="submit" />
    </form>
  );
}