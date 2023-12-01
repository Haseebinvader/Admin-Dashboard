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
import StudentsRecord from "./pages/students/StudentsRecord";
import TeachersRecord from "./pages/teachers/TeachersRecord";
import ParentsRecord from "./pages/parents/ParentsRecord";
import Parent from "./pages/parentverifications/Parent";
import Teacher from "./pages/teacherverification/Teacher";
import Parentsverifytable from "./components/verificationtables/parentsverifytable";
import Teacherverifytable from "./components/verificationtables/teacherverifytable";
import EnrollRequetsPage from "./pages/EnrollmentRequets";
import DetailsRequests from "./pages/EnrollmentRequets/details";
import PayoutRequestPage from "./pages/PayoutRequests";
import DetailsRequestsPayout from "./pages/PayoutRequests/details";
import TeacherDetails from "./pages/teacherverification/verificationDetails";
import StudentDetails from "./components/datatable/StudentsDetails";
import BankAccounts from "./pages/bankaccounts";
import ChatPage from "./pages/Chats";
import ChatDetails from "./pages/Chats/ChatDetails";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
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
            <Route path="EnrollRequest" element={<EnrollRequetsPage />} />
            <Route path="PayoutRequest" element={<PayoutRequestPage />} />
            <Route
              path="payoutrequestdetail/:id"
              element={<DetailsRequestsPayout />}
            />
            <Route
              path="TeacherDetails/:id/:type"
              element={<TeacherDetails />}
            />
            <Route path="StudentsDetails/:id" element={<StudentDetails />} />
            <Route path="requestdetail/:id" element={<DetailsRequests />} />
            <Route path="BankAccounts" element={<BankAccounts />} />
            <Route path="Chats" element={<ChatPage />} />
            <Route path="ChatDetails/:id" element={<ChatDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/chats" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
