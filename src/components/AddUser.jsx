import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addUser } from "../slices/userSlice";
import Button from "./layoutComps/Button";
import TextField from "./layoutComps/TextField";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="max-w-md m-auto space-y-6">
      <div>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{
          type: "text",
          placeholder: "Jhon Doe",
        }}
      />

      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{
          type: "email",
          placeholder: "jhondoe@gmail.com",
        }}
      />

      <Button onClick={handleAddUser}>Salvar</Button>
    </div>
  );
};

export default AddUser;
