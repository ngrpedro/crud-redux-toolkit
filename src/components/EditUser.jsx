import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./layoutComps/Button";
import TextField from "./layoutComps/TextField";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../slices/userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.users);

  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];

  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    dispatch(
      editUser({
        id: params.id,
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

      <Button onClick={handleEditUser}>Editar</Button>
    </div>
  );
};

export default EditUser;
