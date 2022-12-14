import { Route, Routes } from "react-router";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="max-w-[900px] m-auto my-10 space-y-8">
      <h1 className="text-3xl text-blue-900 font-bold text-center">
        Hello Fucking Redux
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
