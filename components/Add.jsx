import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [inputs, setInputs] = useState(
    location.state || {
      EmpName: "",
      designation: "",
      empId: "",
      img_url: "",
    }
  );

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = () => {
    if (location.state) {
      // UPDATE
      axios
        .put(
          `http://localhost:3001/update/${location.state._id}`,
          inputs
        )
        .then(() => {
          alert("Employee updated");
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      // ADD
      axios
        .post("http://localhost:3001/add", inputs)
        .then(() => {
          alert("Employee added");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "600px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Employee Name"
          onChange={inputHandler}
          name="EmpName"
          value={inputs.EmpName}
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Designation"
          onChange={inputHandler}
          name="designation"
          value={inputs.designation}
        />
        <TextField
          variant="outlined"
          placeholder="Employee Id"
          onChange={inputHandler}
          name="empId"
          value={inputs.empId}
        />
        <TextField
          variant="outlined"
          placeholder="Photo URL"
          onChange={inputHandler}
          name="img_url"
          value={inputs.img_url}
        />

        <Button variant="contained" color="secondary" onClick={addData}>
          {location.state ? "Update" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
