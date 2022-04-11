import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
  } from "@mui/material";
  import "./detailsForm.css";
  import { useState } from "react";
  
  const initialValues = {
    name: "",
    gender: "",
    language: "",
  };
  
  type Props = {
    navigate: any;
    setPersonalDetails: any;
  };
  
  const DetailsForm: React.FC<Props> = ({ ...props }) => {
    const [values, setValues] = useState(initialValues);
  
    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    const submitForm = () => {
      props.setPersonalDetails(values);
      props.navigate("/quiz");
    };
  
    const buttonDisabled = () => {
      if (values.name === "" || values.gender === "" || values.gender === "") {
        return true;
      } else {
        return false;
      }
    };
  
    return (
      <div className="details-form">
        <div>
          <TextField
            id="standard-basic"
            label="Your name"
            name="name"
            variant="standard"
            onChange={handleInputChange}
            value={values.name}
          />
        </div>
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Language</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="language"
              value={values.language}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="english"
                control={<Radio />}
                label="English"
              />
              <FormControlLabel value="hindi" control={<Radio />} label="Hindi" />
              <FormControlLabel
                value="spanish"
                control={<Radio />}
                label="Spanish"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="submit-btn">
          <Button
            disabled={buttonDisabled()}
            role="start-quiz"
            variant="contained"
            onClick={submitForm}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    );
  };
  
  export default DetailsForm;
  export {}