export const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleLogin = (workerMutation, formData, navigate) => {
  workerMutation.mutate(formData);
  navigate("/homescreen");
};

export const handleForgotPassword = (navigate) => {
  navigate("/forgotPage");
};

export const handleSignUp = (navigate) => {
  navigate("/signup/worker");
};
