import React from "react";
import { useForm } from "react-hook-form";

const SetError = () => {
  const {
    setError,
    handleSubmit,
    register,
    watch,
    clearErrors,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      test: "",
      lala: "",
    },
  });

  const submitHandler = (data) => {
    console.log("is success ", data);
  };

  const errorSubmit = (error) => {
    console.log("is error : ", error);
  };

  console.log(watch("lala"));

  return (
    <form onSubmit={handleSubmit(submitHandler, errorSubmit)}>
      <input
        type="text"
        {...register("test", {
          required: {
            value: true,
            message: "must be filled",
          },
          pattern: {
            value: "^[a-zA-Z]+$",
            message: "Must be a number please!",
          },
        })}
        onChange={(e) => {
          // set error manually
          const validation = /^[a-zA-Z]+$/;
          if (validation.test(e.target.value)) {
            setError("test", { message: "Must be a number please!" });
          } else {
            clearErrors("test");
          }
        }}
      />
      {errors["test"] && errors["test"].message}
      <div>
        <button
          onClick={() => {
            setValue("lala", "yey"); // this is how you set value
          }}
        >
          click me
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("this is values", getValues());
          }}
        >
          get values
        </button>
      </div>
    </form>
  );
};

export default SetError;
