import React, { useState } from "react";
import Step1 from "./Step1";
import {
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
} from "@mui/material";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Success from "./Success";
import { useForm } from "react-hook-form";

const labels = [
  "Step1",
  "Step2",
  "Step3",
  "Step4",
  "Step5",
  "Step6",
  "Confirmation",
];
const handleSteps = (step, register, errors) => {
  switch (step) {
    case 0:
      return <Step1 register={register} errors={errors} />;
    case 1:
      return <Step2 register={register} errors={errors} />;
    case 2:
      return <Step3 register={register} errors={errors} />;
    case 3:
      return <Step4 register={register} errors={errors} />;
    case 4:
      return <Step5 register={register} errors={errors} />;
    case 5:
      return <Step6 register={register} errors={errors} />;
    case 6:
      return <Success />;
    default:
      return <Success />;
  }
};

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onSubmit = async (data) => {
   
    console.log(data);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div id="qbox-container shadow">
      <form
        class="needs-validation shadow p-5"
        id="form-wrapper"
        name="form-wrapper"
        novalidate=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stepper variant="progress" activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
          {labels.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {handleSteps(activeStep, register, errors)}
        <Box sx={{ mb: 2 }}>
          <Box sx={{display: 'flex', justifyContent: "space-between"}}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
            <Button
              type={activeStep === labels.length ? "submit" : ""}
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {activeStep === labels.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default StepForm;
