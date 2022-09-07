import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GetAllFaculty() {
    const navigate = useNavigate();
    //const param = useParams();
    const apiUrl = "https://63160b9733e540a6d38b5643.mockapi.io/FacultyData";

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const formatedData = data.map((fac) => {
        return <>{
            <div className="col col-md-3">
                <div className="card ms-3 mt-4 mb-4 bg-info">
                    <img className="card-img-top w-50 h-50 mx-auto mt-2" src={fac.FacultyImage} alt="Card cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title" onClick={() => { navigate('/FacultyData/' + fac.id); }}>{fac.FacultyName}</h5>
                        <div className="m-3">
                            <span onClick={() => { navigate('/FacultyData/' + fac.id); }}>
                                <Link to="" className="btn btn-danger me-5" onClick={() => {
                                    fetch(apiUrl + "/" + fac.id, { method: "DELETE" })
                                        .then(res => {
                                            navigate('/FacultyData');
                                        });
                                }}>Delete</Link>
                            </span>
                            <Link to={"../FacultyData/edit/" + fac.id} className="btn btn-warning m-auto">&nbsp;&nbsp;Edit&nbsp;&nbsp;</Link>
                        </div>
                    </div>
                </div>
            </div>

            // <div class="container">
            //     <div class="row">
            //         <div class="col-md-3">

            //             <div class="card hovercard">
            //                 <div class="avatar">
            //                     <img alt="" src={fac.FacultyImage} />
            //                 </div>
            //                 <div class="info">
            //                     <div class="title">
            //                         <a target="_blank" href="#">{fac.FacultyName}</a>
            //                     </div>
            //                     <div class="desc">Department : {fac.FacultyDepartment}</div>
            //                 </div>
            //                 <div class="bottom">
            //                     <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com">
            //                         <i class="fa fa-twitter"></i>
            //                     </a>
            //                     <a class="btn btn-danger btn-sm" rel="publisher"
            //                         href="https://plus.google.com">
            //                         <i class="fa fa-linkedin"></i>
            //                     </a>
            //                     <a class="btn btn-primary btn-sm" rel="publisher"
            //                         href="https://plus.google.com">
            //                         <i class="fa fa-facebook"></i>
            //                     </a>
            //                 </div>
            //             </div>

            //         </div>

            //     </div>
            // </div>
        }</>
    });


    return (<>
        <div className="row">
            {formatedData}
        </div>
    </>);

}