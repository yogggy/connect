import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { resetPassword } from "../../Actions/User";
import "./ResetPassword.css";
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  return (
    <div className="resetPassword">
      <form className="resetPasswordForm" onSubmit={submitHandler}>
        <Typography
          variant="h3"
          style={{
            padding: "2vmax",
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
          }}
        >
          Connect+
        </Typography>

        <input
          type="password"
          placeholder="New Password"
          required
          className="updatePasswordInputs"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          Reset Password
        </Button>

        <Link to="/">
          <Typography style={{ fontFamily: "monospace" }}>Login</Typography>
        </Link>
        <Typography style={{ fontFamily: "monospace" }}>Or</Typography>

        <Link to="/forgot/password">
          <Typography style={{ fontFamily: "monospace" }}>
            Request Another Token!
          </Typography>
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
