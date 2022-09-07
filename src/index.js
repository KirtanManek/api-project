import { React } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailFaculty from "./DetailFaculty";
import Layout from "./Layout";
import GetAllFaculty from "./GetAllFaculty";
import AddFaculty from "./AddFaculty";
import EditFaculty from "./EditFaculty";

const root = createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/FacultyData" element={<GetAllFaculty />} />
        <Route path="/FacultyData/:id" element={<DetailFaculty />} />
        <Route path="/FacultyData/add" element={<AddFaculty />} />
        <Route path="/FacultyData/edit/:id" element={<EditFaculty />} />
      </Route>
    </Routes>
  </BrowserRouter>
</>);