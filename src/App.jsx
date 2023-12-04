import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { userInputs } from "./formSource"
import "./style/dark.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import Chat from "./pages/chatrecord/Chat"
import StudentsRecord from "./pages/students/StudentsRecord"
import TeachersRecord from "./pages/teachers/TeachersRecord"
import ParentsRecord from "./pages/parents/ParentsRecord"
import Parent from "./pages/parentverifications/Parent"
import Teacher from "./pages/teacherverification/Teacher"
import Parentsverifytable from "./components/verificationtables/parentsverifytable"
import Teacherverifytable from "./components/verificationtables/teacherverifytable"
import EnrollRequetsPage from "./pages/EnrollmentRequets"
import DetailsRequests from "./pages/EnrollmentRequets/details"
import PayoutRequestPage from "./pages/PayoutRequests"
import DetailsRequestsPayout from "./pages/PayoutRequests/details"
import TeacherDetails from "./pages/teacherverification/verificationDetails"
import StudentDetails from "./components/datatable/StudentsDetails"
import BankAccounts from "./pages/bankaccounts"
import ChatPage from "./pages/Chats"
import ChatDetails from "./pages/Chats/ChatDetails"
import { PrivateRoute } from "./privateRoutes/privateRoutes"
import { PublicRoute } from "./publicRoutes/publicRoutes"

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />{" "}
                </PublicRoute>
              }
            />

            <Route
              path="studentsrecord"
              element={
                <PrivateRoute>
                  <StudentsRecord />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="teachersrecord"
              element={
                <PrivateRoute>
                  <TeachersRecord />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="parentsrecord"
              element={
                <PrivateRoute>
                  <ParentsRecord />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="parentsverification"
              element={
                <PrivateRoute>
                  <Parent />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="teachersverification"
              element={
                <PrivateRoute>
                  <Teacher />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="parentverify"
              element={
                <PrivateRoute>
                  <Parentsverifytable />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="teacherverify"
              element={
                <PrivateRoute>
                  <Teacherverifytable />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="EnrollRequest"
              element={
                <PrivateRoute>
                  <EnrollRequetsPage />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="PayoutRequest"
              element={
                <PrivateRoute>
                  <PayoutRequestPage />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="payoutrequestdetail/:id"
              element={
                <PrivateRoute>
                  <DetailsRequestsPayout />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="TeacherDetails/:id/:type"
              element={
                <PrivateRoute>
                  <TeacherDetails />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="StudentsDetails/:id"
              element={
                <PrivateRoute>
                  <StudentDetails />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="requestdetail/:id"
              element={
                <PrivateRoute>
                  <DetailsRequests />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="BankAccounts"
              element={
                <PrivateRoute>
                  <BankAccounts />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="Chats"
              element={
                <PrivateRoute>
                  <ChatPage />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="ChatDetails/:id"
              element={
                <PrivateRoute>
                  <ChatDetails />{" "}
                </PrivateRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <PrivateRoute>
                    <List />{" "}
                  </PrivateRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <PrivateRoute>
                    <Single />{" "}
                  </PrivateRoute>
                }
              />
              <Route
                path="new"
                element={
                  <PrivateRoute>
                    <New inputs={userInputs} title="Add New User" />{" "}
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="/chats"
              element={
                <PrivateRoute>
                  <Chat />{" "}
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
