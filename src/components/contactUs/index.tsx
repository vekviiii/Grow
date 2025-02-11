import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { InputField } from "../../utils/card component/FormHelpers";
import { useState } from "react";

const paddingForCard = "py-10 px-2"

const ContactUs = () => {
    const [name, setName] = useState("")

  return (
    <>
      <h1>Form</h1>
      <div className="column-1 md:columns-2" style={{height: "80dvh"}}>
        <div className={`bg-[var(--theme-color)] break-inside-avoid text-white ${paddingForCard} rounded-l-lg`} style={{height:"-webkit-fill-available"}}>
          <span className="text-[50px]">Hello{name ? ` ${name}` : ""},</span>
          <br />
        </div>
        <div className={`break-inside-avoid rounded-r-lg ${paddingForCard}`}>
          <InputField 
            Icon={<UserIcon className="size-5 Input-Icon lighter-color-Icon" />}
            type="text"
            placeholder="enter name"
            id="name"
            onInputChange={setName}
            >
                Name :
            </InputField>
          <InputField 
            Icon={<PhoneIcon className="size-5 Input-Icon lighter-color-Icon" />}
            type="text"
            placeholder="enter contact number"
            id="contact"
            >
                Phone :
            </InputField>

          <InputField 
            Icon={<EnvelopeIcon className="size-5 Input-Icon lighter-color-Icon" />}
            type="email"
            placeholder="enter email"
            id="email"
            >
                Email :
            </InputField>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
