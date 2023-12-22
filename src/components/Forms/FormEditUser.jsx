/* eslint-disable react/prop-types */
import { useState } from "react";
import svgs from "../../assets/svgs";

export default function FormEditUser({
  currentUser,
  handleEditUser,
  handleDeleteUser,
  modalIsOpen,
  setModalIsOpen,
}) {
  const [user, setUser] = useState(currentUser);
  console.log(currentUser);
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      {modalIsOpen && (
        <div
          onClick={() => setModalIsOpen(false)}
          className="bg-black bg-opacity-50 backdrop-blur-sm fixed w-screen h-screen z-10 top-0 left-0"
        >
          {" "}
          <form
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 z-20 shadow-lg rounded-lg w-full max-w-[600px]"
          >
            <h1 className="text-center text-2xl mb-4">Modifier l&apos;utilisateur</h1>
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute right-4 top-4"
            >
              <svgs.cross />
            </button>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-xl">
                Prénom
              </label>
              <input
                onChange={handleInputChange}
                value={user.firstName}
                type="text"
                name="firstName"
                placeholder="Entrez un prénom"
                className="border p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xl">
                Nom
              </label>
              <input
                onChange={handleInputChange}
                value={user.lastName}
                type="text"
                name="lastName"
                placeholder="Entrez un nom"
                className="border p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="text-xl">
                Age
              </label>
              <input
                onChange={handleInputChange}
                value={user.age}
                type="number"
                name="age"
                placeholder="Entrez un age"
                className="border p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="gender" className="text-xl">
                Genre
              </label>
              <select
                onChange={handleInputChange}
                value={user.gender}
                type="text"
                name="gender"
                placeholder="Choisir un genre"
                className="border h-fit w-full py-[10px] px-4"
                required
              >
                <option value="-">Choisir un genre</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
            </div>

            <button
              onClick={(e) => {
                handleEditUser(e, user);
                setUser(user);
                setModalIsOpen(false);
              }}
              className="bg-black text-white py-2 px-4 h-fit self-end w-full"
            >
              Sauvgarder les changements
            </button>
            <button
              onClick={(e) => {
                handleDeleteUser(e, user);
              }}
              className="bg-red-500 text-white py-2 px-4 h-fit self-end w-full"
            >
              Supprimer l&apos;utilisateur
            </button>
            <button
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="bg-gray-600 text-white py-2 px-4 h-fit self-end w-full"
            >
              Annuler
            </button>
          </form>
        </div>
      )}
    </>
  );
}
