export const InputField = (props: {
  Icon: React.ReactNode;
  type: string;
  placeholder: string;
  id: string;
  children?: React.ReactNode;
  onInputChange?: (value: string) => void;
}) => {

  const Name = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // If parent provided an `onInputChange` callback, call it
    if (props.onInputChange) {
      props.onInputChange(value);
    }
  };

  return (
    <>
      <label className="block">{props.children}</label>
      <label className="relative">
        <input
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          onInput={Name}
        />
        {props.Icon}
      </label>
    </>
  );
};
