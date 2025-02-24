import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { InputField } from "../../utils/FormHelpers";

import "./index.css";

const paddingForCard = "py-10 px-8";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [animatedText, setAnimatedText] = useState("")
  const onSubmit = () => {
    animationOnSubmit();
    animateText(` Please be patient while we steal your data :)`);

  };
  const animationOnSubmit = () => {
    const width = document.getElementById("validSubmitCard");
    

    if (width) {
      width.style.width = "200%";

      setTimeout(() => {
        width.style.width = "100%";
        // Reset text
        
      setAnimatedText("");
      setName("");
      }, 10 * 1000);
    }
  };

  const animateText = (text: string) => {
    setAnimatedText(""); // Reset text
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length - 2) {  // Safety check
        setAnimatedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };  

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="column-1 md:columns-2 my-2">
          <div
            className={`bg-[var(--theme-color)] break-inside-avoid text-white ${paddingForCard}`}
            style={{ height: "-webkit-fill-available" }}
            id="validSubmitCard"
          >
            <span className="text-[50px]">Hello{name ? ` ${name}` : ""}, {animatedText}</span>
          </div>
          <div>
            <div
              className={`input-container break-inside-avoid ${paddingForCard}`}
            >
              <InputField
                Icon={
                  <UserIcon className="size-5 Input-Icon lighter-color-Icon" />
                }
                type="text"
                placeholder="Enter Name"
                id="name"
                onInputChange={setName}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              ></InputField>
              {errors.name?.message && (
                <span className="error-text">
                  {String(errors.name.message)}
                </span>
              )}
              <InputField
                Icon={
                  <PhoneIcon className="size-5 Input-Icon lighter-color-Icon" />
                }
                type="text"
                placeholder="Enter Contact Number"
                id="contact"
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Contact number must be 10 digits",
                  },
                })}
              ></InputField>
              {errors.contact && (
                <span className="error-text">
                  {String(errors.contact.message)}
                </span>
              )}
              <InputField
                Icon={
                  <EnvelopeIcon className="size-5 Input-Icon lighter-color-Icon" />
                }
                type="email"
                placeholder="Enter Email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
              ></InputField>
              {errors.email && (
                <span className="error-text">
                  {String(errors.email.message)}
                </span>
              )}
            </div>
            <div className="cntct-btn ms-auto mt-2 px-8">
              <button type="submit">Steal My Data</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
