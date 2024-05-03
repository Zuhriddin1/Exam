import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
// import Speakers from "./pages/Speakers";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import XX99MarkTwo from "./pages/XX99MarkTwo";
import XX99MarkOne from "./pages/XX99MarkOne";
import YX1Earphones from "./pages/YX1Earphones";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./layout/Header";
import ZX9Speaker from "./pages/ZX9SPEAKER";
import ZX7Speaker from "./pages/ZX7Speaker";
import HeaderCa from "./components/HeaderCa";
import XX59 from "./pages/XX59";
import HeaderDetail from "./components/HeaderDetail";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);
  function ProtectedRoute({ element }) {
    ///////////////////////////////////
    ////////////////////////////////////
    /////login alooooooooooooo//////////
    return isAuthenticated ? element : <Navigate to="" />;
  }
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={
                <Header>
                  <Home />
                </Header>
              }
            />
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <HeaderCa>
              <Headphones />
            </HeaderCa>
          }
        />
        <Route
          path="/speakers"
          element={
            <HeaderCa>
              <Speakers />
            </HeaderCa>
          }
        />
        <Route
          path="/earphones"
          element={
            <HeaderCa>
              <Earphones />
            </HeaderCa>
          }
        />
        <Route
          path="/XX99MarkII"
          element={
            <HeaderDetail>
              <XX99MarkTwo />
            </HeaderDetail>
          }
        />
        <Route
          path="/XX99MarkI"
          element={
            <Header>
              <XX99MarkOne />
            </Header>
          }
        />
        <Route
          path="/YX1Earphone"
          element={
            <Header>
              <YX1Earphones />
            </Header>
          }
        />
        <Route
          path="/ZX9SPEAKER"
          element={
            <Header>
              <ZX9Speaker />
            </Header>
          }
        />

        <Route
          path="/XX59"
          element={
            <Header>
              <XX59 />
            </Header>
          }
        />
        <Route
          path="/ZX7Speaker"
          element={
            <Header>
              <ZX7Speaker />
            </Header>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
