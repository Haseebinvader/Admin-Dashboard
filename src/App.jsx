import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Chat from "./pages/chatrecord/Chat";
import StudentsRecord from './pages/students/StudentsRecord'
import TeachersRecord from "./pages/teachers/TeachersRecord";
import ParentsRecord from "./pages/parents/ParentsRecord";
import Parent from "./pages/parentverifications/Parent";
import Teacher from "./pages/teacherverification/Teacher";
import Parentsverifytable from "./components/verificationtables/parentsverifytable";
import Teacherverifytable from "./components/verificationtables/teacherverifytable";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={darkMode ? "app dark" : "app"}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="studentsrecord" element={<StudentsRecord />} />
            <Route path="teachersrecord" element={<TeachersRecord />} />
            <Route path="parentsrecord" element={<ParentsRecord />} />
            <Route path="parentsverification" element={<Parent />} />
            <Route path="teachersverification" element={<Teacher />} />
            <Route path="parentverify" element={<Parentsverifytable />} />
            <Route path="teacherverify" element={<Teacherverifytable />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="/chats" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;