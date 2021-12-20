import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { getTestParams, postTest } from "../../services/API";
import { IoChevronBackOutline } from "react-icons/io5";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [categories, setCategories] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [subjProfessors, setSubjProfessors] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const watchSubject = watch("subject", "1");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { category, pdf, name, professor, subject } = data;

    if (professor === "Escolha uma disciplina") {
      alert("Escolha um professor");
      return;
    }

    const body = {
      name,
      category_id: Number(category),
      professor_id: Number(professor),
      subject_id: Number(subject),
      pdf,
    };

    postTest({ body })
      .then((res) => {
        navigate("/");
      })
      .catch((e) => {
        if (e.response.status === 409) {
          alert("Nome da prova já existe");
        }
      });
  };

  const loadTestParams = () => {
    getTestParams().then((res) => {
      setCategories(res.data.categories);
      setSubjects(res.data.subjects);
      setProfessors(res.data.professors);
      setLoading(false);
    });
  };

  useEffect(loadTestParams, []);

  useEffect(() => {
    const newProf = professors.filter(
      (prof) => prof.subjectId === Number(watchSubject)
    );
    setSubjProfessors(newProf);
  }, [watchSubject, professors]);

  return loading ? (
    <Loading>
      <Loader type="ThreeDots" color="#FFFFFF" height={26} width={102} />
    </Loading>
  ) : (
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
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label for="subject">Disciplina:</label>
        <select {...register("subject")}>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
        <label for="professor">Professor:</label>
        <select {...register("professor")}>
          {subjProfessors.length === 0 ? (
            <option key={null} value={null}>
              Escolha uma disciplina
            </option>
          ) : (
            subjProfessors.map((professor) => (
              <option key={professor.id} value={professor.id}>
                {professor.name}
              </option>
            ))
          )}
        </select>
        <input
          type="text"
          placeholder="PDF(link)"
          {...register("pdf", {
            required: "Campo não pode estar vazio",
            pattern: {
              value: /.+\.pdf$/,
              message: "Link deve terminar com .pdf",
            },
          })}
        />
        {errors?.pdf && <p>{errors.pdf?.message}</p>}
        <button type="submit">Enviar Prova</button>
      </form>
      <Link to="/">
        <IoChevronBackOutline className="icon" />
      </Link>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
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

  .icon {
    color: #ffffff;
    font-size: 26px;
    cursor: pointer;
    position: fixed;
    top: 50px;
    right: 50px;
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

const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
`;
