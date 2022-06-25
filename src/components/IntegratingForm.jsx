import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";

const Select = forwardRef(({ name, onChange, onBlur, label }, ref) => {
  return (
    <>
      <span>{label}</span>
      <select ref={ref} name={name} onChange={onChange} onBlur={onBlur}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
});

const IntegratingForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(watch("something"));

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit(submitHandler);
        }}
      >
        <Select label="This is select" {...register("something")} />
      </form>
    </>
  );
};

export default IntegratingForm;
