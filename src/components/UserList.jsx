import React, { useEffect } from "react";
import Button from "./layoutComps/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../slices/userSlice";

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleNewUser = () => {
    navigate("/add-user");
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    dispatch(fetchUsers());
  };

  const renderCards = () =>
    users.map((user) => (
      <div
        key={user.id}
        className="bg-gray-400 flex items-center justify-between rounded-md p-4"
      >
        <div className="space-y-8">
          <h1 className="font-bold text-xl text-gray-900">{user.name}</h1>
          <span className="font-bold text-base text-gray-900">
            {user.email}
          </span>
        </div>
        <div className="flex items-center flex-col gap-4 pl-4">
          <Link to={`/edit-user/${user.id}`}>
            <button>
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </Link>

          <button onClick={() => handleDeleteUser(user.id)}>
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    ));

  return (
    <div className="space-y-8">
      <Button onClick={handleNewUser}>New User</Button>
      <div className="border-t border-gray-300 pt-6">
        {loading && <div className="text-center">Loading Users</div>}

        {!loading && error ? (
          <div className="text-center">Some Error</div>
        ) : null}

        {!loading && users.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderCards()}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserList;
