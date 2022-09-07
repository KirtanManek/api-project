import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditFaculty() {
    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://63160b9733e540a6d38b5643.mockapi.io/FacultyData";

    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [param.id]);

    const [data, setData] = useState({});
    return (<>
        <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <h3>Faculty Name</h3>
                    <input type="text" className="form-control" placeholder="Faculty Name" value={data.FacultyName} required onChange={(e) => {
                        setData({ ...data, FacultyName: e.target.value });
                    }} />
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <h3>Faculty Image</h3>
                    <input type="text" className="form-control" placeholder="Faculty Image" value={data.FacultyImage} required onChange={(e) => {
                        setData({ ...data, FacultyImage: e.target.value });
                    }} />
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <h3>Faculty Department</h3>
                    <input type="text" className="form-control" placeholder="Faculty Department" value={data.FacultyDepartment} required onChange={(e) => {
                        setData({ ...data, FacultyDepartment: e.target.value });
                    }} />
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <h3>Faculty Salary</h3>
                    <input type="text" className="form-control" placeholder="Faculty Salary" value={data.FacultySalary} required onChange={(e) => {
                        setData({ ...data, FacultySalary: e.target.value });
                    }} />
                </div>
            </div>
            <button className="btn btn-warning" onClick={() => {
                fetch(apiUrl + "/" + param.id, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then((res) => {
                    console.log(res);
                    navigate('/FacultyData');
                })
            }}>Edit Faculty</button>
        </form><br /><br /><br /><br /><br /><br />
    </>);
}