/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditUser from "../Forms/FormEditUser";

export default function UserProfile({ user, users, setUsers }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditUser = (e, user) => {
    e.preventDefault();
    setUsers((prevUsers) => {
      return prevUsers.map((prevUsers) =>
        prevUsers.id === user.id
          ? {
              ...prevUsers,
              firstName: user.firstName,
              lastName: user.lastName,
              age: user.age,
              gender: user.gender,
            }
          : prevUsers
      );
    });
  };

  const handleDeleteUser = (e, user) => {
    e.preventDefault();
    const usersCopy = [...users];
    const filteredUsers = usersCopy.filter((currentUser) => user.id !== currentUser.id);
    setUsers(filteredUsers);
  };

  return (
    <>
      <FormEditUser
        currentUser={user}
        handleEditUser={handleEditUser}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        FormEditUser={FormEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      <div
        onClick={() => setModalIsOpen(true)}
        className="h-[300px] w-[250px] bg-white shadow-lg rounded-lg flex flex-col gap-8 items-center p-4 cursor-pointer"
      >
        <img
          className="w-full max-w-[150px]"
          src="https://imgs.search.brave.com/MWlI8P3aJROiUDO9A-LqFyca9kSRIxOtCg_Vf1xd9BA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
          alt=""
        />
        <div className="flex flex-col gap-2 text-center">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h2>{user.age} ans</h2>
          <h2>{user.gender}</h2>
        </div>
      </div>
    </>
  );
}
