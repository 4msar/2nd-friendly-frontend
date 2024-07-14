import { API_URL } from "@/helpers/apiUrl";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Step1 from "./Step1";
import StepAddress from "./StepAddress";
import StepCategory from "./StepCategory";
import StepEmail from "./StepEmail";
import StepInfo from "./StepInfo";
import StepPass from "./StepPass";
import StepWeb from "./StepWeb";
import Success from "./Success";
import axios from "axios";

const labels = [
  "Step1",
  "Step2",
  "Step3",
  "Step4",
  "Step5",
  "Step6",
  "Step7",
  "Confirmation"
];
const handleSteps = (step, register, errors) => {
  switch (step) {
    case 0:
      return <Step1 register={register} errors={errors} />;
    case 1:
      return <StepEmail register={register} errors={errors} />;
    case 2:
      return <StepWeb register={register} errors={errors} />;
    case 3:
      return <StepInfo register={register} errors={errors} />;
    case 4:
      return <StepAddress register={register} errors={errors} />;
    case 5:
      return <StepCategory register={register} errors={errors} />;
    case 6:
      return <StepPass register={register} errors={errors} />;
    case 7:
      return <Success />;
    default:
      return <Success />;
  }
};

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const formSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password length should be at least 6 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .min(6, "Password length should be at least 6 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match")
  });

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema)
  });
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onSubmit = async (data) => {
    console.log(data);
    axios.post(`${API_URL}/business-registration`, data, {}).then((res) => {
      console.log(res);
    });
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
        <Stepper
          variant="progress"
          activeStep={activeStep}
          sx={{ py: 3 }}
          alternativeLabel
        >
          {labels.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {handleSteps(activeStep, register, errors)}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
            {activeStep === labels.length - 2 ? (
              <Button type={"submit"} variant="contained" sx={{ mt: 1, mr: 1 }}>
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default StepForm;
