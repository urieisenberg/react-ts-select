import { useState, useRef, useEffect } from "react";
import { Select, SelectOption } from "./Select";

const testOptions = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
  { value: "4", label: "Four" },
  { value: "5", label: "Five" },
  { value: "6", label: "Six" },
  { value: "7", label: "Seven" },
];

const Test = () => {
  const [value1, setValue1] = useState<SelectOption[]>([testOptions[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(
    testOptions[0]
  );

  return (
    <>
      <Select
        multiple
        options={testOptions}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select
        options={testOptions}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </>
  );
};

export default Test;
