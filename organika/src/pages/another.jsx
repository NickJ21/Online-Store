import { useState } from "react";
import "./another.css";

function Another() {
  const [service, setService] = useState({
    name: "",
    department: "",
    message: "",
  });

  function handleService(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(text, name);

    const copy = { ...service };
    copy[name] = text;
    setService(copy);
  }
  function submitEmployee() {
    console.log(service);
  }

  return (
    <div className="employee page">
      <h1>
        Employee of the Month <i class="fa-solid fa-medal"></i>
      </h1>
      <h5>
        We love to encourage friendly competetion to provide top notch service!
        <br />
        Let us know if anybody stands out!
      </h5>
      <div className="form">
        <div>
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onBlur={handleService}
          ></input>
        </div>
        <div>
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            onBlur={handleService}
          ></input>
        </div>
        <div>
          <label className="form-label">Exceptional Service Rendered</label>
          <textarea
            className="form-control"
            row="3"
            name="service"
            onBlur={handleService}
          ></textarea>
          <div className="controls">
            <button
              className="btn btn-outline-primary"
              onClick={submitEmployee}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Another;
