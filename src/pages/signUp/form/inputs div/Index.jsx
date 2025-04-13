import Input from "../../../../components/Input";

function InputsDiv({ handleChange }) {
  return (
    <div className="form__inputs__div">
      <Input handleChange={handleChange} name="name" placeholder="Name" />
      <Input
        handleChange={handleChange}
        name="lastName"
        placeholder="Last Name"
      />
      <Input handleChange={handleChange} name="email" placeholder="Email" />
      <Input
        handleChange={handleChange}
        name="password"
        placeholder="Password"
        type="password"
      />
    </div>
  );
}

export default InputsDiv;
