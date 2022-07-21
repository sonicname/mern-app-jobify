import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error } from "./pages";
import {
  AddJob,
  Profile,
  Stats,
  AllJob,
  SharedLayout,
} from "./pages/dashboard";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="stats" element={<Stats />} />
          <Route path="all-jobs" element={<AllJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-job" element={<AddJob />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
