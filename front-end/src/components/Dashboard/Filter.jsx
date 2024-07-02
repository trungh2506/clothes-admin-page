import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { Field, Label, Select } from "@headlessui/react";

export default function Filter({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOnChange = (e) => {
    setSelectedOption(e.target?.value);
    onSelect(e.target?.value);
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-end gap-2">
        <div className="flex flex-row">
          <CiFilter size={24} /> Filter:
        </div>
        <div className="flex flex-row">
          <Field>
            <Select
              value={selectedOption || ""}
              onChange={handleOnChange}
              name="status"
              aria-label="Project status"
              className=" border-2 border-blue-100 cursor-pointer rounded-xl p-2 data-[hover]:shadow data-[focus]:bg-blue-100"
            >
              {options.map((item) => {
                return (
                  <option key={item.id} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </Select>
          </Field>
        </div>
      </div>
    </div>
  );
}
