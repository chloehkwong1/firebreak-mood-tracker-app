import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) =>
    fetch("http://localhost:8000/api/moodtracker/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });

  if (isSubmitSuccessful) {
    alert("You have successfully logged your mood.");
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ mood: "", mood_influences: "" });
    }
  }, [formState, reset]);

  return (
    <div>
      <h2>How are you feeling now?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="mood">I am: </label>
        <select
          defaultValue=""
          id="mood"
          label="Mood Types"
          {...register("mood", {
            required: "Error: Selecting a mood type is required",
          })}
        >
          <option value="" disabled>
            Select your mood
          </option>
          <option value="HAPPY">Happy 😄</option>
          <option value="RESTED">Rested ☺️ </option>
          <option value="EXCITED">Excited 🤩</option>
          <option value="SAD">Sad ☹️</option>
          <option value="ANGRY">Angry 😠</option>
          <option value="CALM">Calm 😇</option>
          <option value="FRUSTRATED">Frustrated 😤 </option>
          <option value="SCARED">Scared 😖</option>
          <option value="TIRED">Tired 😴</option>
        </select>
        <p>{errors.mood?.message}</p>
        <label htmlFor="mood_influences">What has influenced this mood?</label>
        <input id="mood_influences" {...register("mood_influences")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
