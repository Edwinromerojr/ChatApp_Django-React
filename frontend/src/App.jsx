import ChatArea from "./components/ChatArea";
import Login from "./components/Login";
import Navigate from "./components/Navigate";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // <>
    //   <div className="chat-container">
    //     <Sidebar />
    //     <ChatArea />
    //   </div>
    // </>
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chat"
          element={
            <>
              <Sidebar /> <ChatArea />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
