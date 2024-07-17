import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signupPage";
import TaskPage from "./pages/taskPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<TaskPage />} />
          <Route path="/home" element={<TaskPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
