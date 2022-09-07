import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DetailFaculty() {
    const param = useParams();

    const apiUrl = "https://63160b9733e540a6d38b5643.mockapi.io/FacultyData";

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [param.id]);

    return <>
        <h1>FacultyName : {data.FacultyName} </h1>
        <h1>FacultySalary : {data.FacultySalary} </h1>
        <img src={data.FacultyImage} alt="" />
    </>;
}