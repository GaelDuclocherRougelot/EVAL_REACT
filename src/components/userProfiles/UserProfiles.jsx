import { useState } from "react";
import FormAddUser from "../Forms/FormAddUser";
import UserProfile from "./UserProfile";

export default function UserProfiles() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (e, user) => {
    e.preventDefault();
    setUsers([...users, user]);
  };

  return (
    <section className="flex flex-col">
      <FormAddUser handleAddUser={handleAddUser} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        {users &&
          users.map((user) => (
            <UserProfile key={user.id} users={users} user={user} setUsers={setUsers} />
          ))}
      </div>
    </section>
  );
}
