import Button from "./components/Button";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="max-w-[1200px] m-auto my-10 space-y-8">
      <h1 className="text-3xl text-blue-900 font-bold text-center">
        Hello Fucking Redux
      </h1>
      <Button>New User</Button>
      <UserList />
    </div>
  );
}

export default App;
