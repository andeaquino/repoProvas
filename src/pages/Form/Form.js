import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { category, link, name, professor, subject } = data;
    console.log(data);
    if (professor === "Escolha uma disciplina") return;
    //navigate("/");

    //setLoading(true);
  };

  const categories = [1, 2, 4];
  const subjects = ["oi"];
  const professors = [];

  return (
    <FormContainer>
      <h1>Contribua com uma prova</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome(Ex:2020.1)"
          {...register("name", { required: "Campo não pode estar vazio" })}
        />
        {errors?.name && <p>{errors.name?.message}</p>}
        <label for="category">Categoria:</label>
        <select {...register("category")}>
          {categories.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <label for="subject">Disciplina:</label>
        <select {...register("subject")}>
          {subjects.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <label for="professor">Professor:</label>
        <select {...register("professor")}>
          {professors.length > 0 ? (
            professors.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))
          ) : (
            <option value={null}>Escolha uma disciplina</option>
          )}
        </select>
        <input
          type="text"
          placeholder="PDF(link)"
          {...register("link", { required: "Campo não pode estar vazio" })}
        />
        {errors?.link && <p>{errors.link?.message}</p>}
        <button type="submit">
          {loading ? (
            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
          ) : (
            "Enviar Prova"
          )}
        </button>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #142e54;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 40px;
    color: #dddddd;
    margin-bottom: 80px;
    margin-top: -280px;
    text-align: center;
  }

  form {
    height: 45px;
    width: 80%;

    input {
      display: block;
      outline: none;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      margin-bottom: 16px;
      font-size: 19px;
      font-family: "Lexend Deca", sans-serif;
      padding: 0 8px;
    }

    select {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      margin-bottom: 16px;
      font-size: 19px;
      font-family: "Lexend Deca", sans-serif;
      padding: 0 8px;
    }

    label {
      display: block;
      font-size: 16px;
      color: #dddddd;
      margin-bottom: 6px;
      font-family: "Lexend Deca", sans-serif;
    }

    button {
      display: block;
      width: 290px;
      height: 100%;
      margin: 0 auto;
      border-radius: 50px;
      background-color: #dddddd;
      margin-top: 22px;
      font-size: 19px;
      font-family: "Lexend Deca", sans-serif;
    }

    p {
      color: crimson;
      margin-top: -12px;
      margin-bottom: 12px;
    }
  }
`;
