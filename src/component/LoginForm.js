import React from "react";
import { useForm, Controller } from "react-hook-form";

const LoginForm = () => {
	const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const handleLoginSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <div className="login-block login-block-signin">
        <div className="h4">
          Sign in
          <a
            href="javascript:void(0);"
            className="btn btn-main btn-xs btn-register pull-right"
          >
            create an account
          </a>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
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
          <div className="col-md-12">
            <div className="form-group">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is Required",
                }}
                render={({ field, fieldState }) => {
                  return (
                    <div
                      className={`form-group ${
                        fieldState.error?.message && "has-warning"
                      }`}
                    >
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
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
          </div>
          <div className="col-xs-6">
            <span className="checkbox">
              <input type="checkbox" id="checkBoxId3" />
              <label htmlFor="checkBoxId3">Remember me</label>
            </span>
          </div>
          <div className="col-xs-6 text-right">
            <button
              className="btn btn-main"
              onClick={handleSubmit(handleLoginSubmit)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
