import "./App.css";
import "bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css";
import Loginbtn from "./components/Loginbtn";
import Userdetails from "./components/Userdetails";
import { BrowserRouter as R, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isLoading } = useAuth0();
  return (
    <div className="App">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <R>
          <Routes>
            <Route path="/" exact element={<Loginbtn />} />
            <Route
              path="/userdetails"
              element={
                <ProtectedRoute>
                  <Userdetails />
                </ProtectedRoute>
              }
            />
          </Routes>
        </R>
      )}
    </div>
  );
}

export default App;
