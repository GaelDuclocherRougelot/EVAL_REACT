import UserProfiles from "./components/userProfiles/UserProfiles";

function App() {
  return (
    <main className="flex flex-col justify-center items-center h-full w-full p-10">
    <h1 className="text-5xl py-10">Liste des utilisateurs</h1>
      <UserProfiles />
    </main>
  );
}

export default App;
