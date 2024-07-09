import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
