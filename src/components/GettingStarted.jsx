import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const GettingStartedForm = () => {
  const {
    register, // every input must be registered by passing name and the conditional
    handleSubmit, // to capture when form is submit and pass to func
    watch,
    formState: { errors },
  } = useForm();

  // the properties inside register are
  // ({name,onChange,onBlur},ref)

  console.log(watch("input-name")); // watch is to watch the input fields value

  // just for debugging
  useEffect(() => {
    console.log("error", errors["input-name"]);
  }, [errors["input-name"]]);

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <input
            type="text"
            defaultValue="Some values..."
            {...register("input-name", { required: true })}
          />
          {errors["input-name"] && <span>This is required dude</span>}
        </div>
      </form>
    </>
  );
};

export default GettingStartedForm;
