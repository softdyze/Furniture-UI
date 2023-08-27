import React from "react";
import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const handleRegisterSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="login-block login-block-signup">
      <div className="h4">
        Register now
        <a
          href="javascript:void(0);"
          className="btn btn-main btn-xs btn-login pull-right"
        >
          Log in
        </a>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <Controller
            name="firstname"
            control={control}
            rules={{
              required: "First Name is Required",
            }}
            render={({ field, fieldState }) => {
              return (
                <div
                  className={`form-group ${
                    fieldState.error?.message && "has-warning"
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name *"
                    onChange={(value) => field.onChange(value)}
                    required
                  />
                  {fieldState.error?.message && (
                    <small className="control-label text-xs">
                      {fieldState.error?.message}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <div className="col-md-6">
          <Controller
            name="lastname"
            control={control}
            rules={{
              required: "Last Name is Required",
            }}
            render={({ field, fieldState }) => {
              return (
                <div
                  className={`form-group ${
                    fieldState.error?.message && "has-warning"
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name *"
                    onChange={(value) => field.onChange(value)}
                    required
                  />
                  {fieldState.error?.message && (
                    <small className="control-label text-xs">
                      {fieldState.error?.message}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <div className="col-md-12">
          <Controller
            name="address"
            control={control}
            rules={{
              required: "Address is Required",
            }}
            render={({ field, fieldState }) => {
              return (
                <div
                  className={`form-group ${
                    fieldState.error?.message && "has-warning"
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address *"
                    onChange={(value) => field.onChange(value)}
                    required
                  />
                  {fieldState.error?.message && (
                    <small className="control-label text-xs">
                      {fieldState.error?.message}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <div className="col-md-4">
          <Controller
            name="zipcode"
            control={control}
            rules={{
              required: "Zip Code is Required",
            }}
            render={({ field, fieldState }) => {
              return (
                <div
                  className={`form-group ${
                    fieldState.error?.message && "has-warning"
                  }`}
                >
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Zip Code *"
                    onChange={(value) => field.onChange(value)}
                    required
                  />
                  {fieldState.error?.message && (
                    <small className="control-label text-xs">
                      {fieldState.error?.message}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <div className="col-md-8">
          <Controller
            name="city"
            control={control}
            rules={{
              required: "City is Required",
            }}
            render={({ field, fieldState }) => {
              return (
                <div
                  className={`form-group ${
                    fieldState.error?.message && "has-warning"
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City *"
                    onChange={(value) => field.onChange(value)}
                    required
                  />
                  {fieldState.error?.message && (
                    <small className="control-label text-xs">
                      {fieldState.error?.message}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <div className="col-md-6">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email Address is Required",
            }}
            render={({ field, fieldState }) => {
              return (
                <div
                  className={`form-group ${
                    fieldState.error?.message && "has-warning"
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email ID"
                    onChange={(value) => field.onChange(value)}
                    required
                  />
                  {fieldState.error?.message && (
                    <small className="control-label text-xs">
                      {fieldState.error?.message}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <div className="col-md-6">
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone Number is Required",
            }}
            render={({ field, fieldState }) => {
              return (
                <div
                  className={`form-group ${
                    fieldState.error?.message && "has-warning"
                  }`}
                >
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number *"
                    onChange={(value) => field.onChange(value)}
                    required
                  />
                  {fieldState.error?.message && (
                    <small className="control-label text-xs">
                      {fieldState.error?.message}
                    </small>
                  )}
                </div>
              );
            }}
          />
        </div>
        <div className="col-md-12">
          <button onClick={handleSubmit(handleRegisterSubmit)} className="btn btn-main btn-block">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
