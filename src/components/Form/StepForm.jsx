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

const labels = [
  "Step1",
  "Step2",
  "Step3",
  "Step4",
  "Step5",
  "Step6",
  "Confirmation",
];
const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
      return <Step4 />;
    case 4:
      return <Step5 />;
    case 5:
      return <Step6 />;
    case 6:
      return <Success />;
    default:
      return <Success />;
  }
};

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div id="qbox-container shadow">
      <form
        class="needs-validation shadow p-5"
        id="form-wrapper"
        method="post"
        name="form-wrapper"
        novalidate=""
      >
        <Stepper variant="progress" activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
          {labels.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {handleSteps(activeStep)}
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
