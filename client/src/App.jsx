import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signupPage";
import TaskPage from "./pages/taskPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignupPage />} />
          <Route path="/home" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
