import React, { useState } from "react";
import Dropdown from "./Dropdown";
import InputRow from "./InputRow";
import TextInput from "./TextInput";

const DemoInputRow: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <InputRow>
      <TextInput
        label="Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines. "
        value={firstName}
        onChange={setFirstName}
        placeholder="Enter first name"
        size="33%"
      />
      <Dropdown
        label="Last Name with a really long label that wraps onto multiple lines. Last Name with a really long label that wraps onto multiple lines"
        value={lastName}
        onChange={setLastName}
        error="This field is required. This field is required. This field is required. This field is required. "
        size="17%"
      />
      <TextInput
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="Enter email"
        error="This field is required"
        size="33%"
      />
      <Dropdown
        label="Email"
        value={email}
        onChange={setEmail}
        error="This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required.This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is requiredThis field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required. This field is required"
        size="17%"
      />
    </InputRow>
  );
};

export default DemoInputRow;
