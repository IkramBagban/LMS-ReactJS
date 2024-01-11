import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import classes from "../../pages/BookNowPages/Login.module.css";
import classes1 from "../../pages/BookNowPages/Signup.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../api";

function NewPassword() {
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const submithandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setInvalid(true);
      return;
    }
    
    const data = {
      email: location.state.email,
      Password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await resetPassword(data);

      if (response.status === 200) {
        navigate("/BookNow");
        return;
      }

      alert("password reseting failed");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {
        <div className={classes.formcontainer}>
          <div>
            <section className={classes.card}>
              <div className={classes["header"]}>
                <h3 className={classes["login-text"]}>
                  <strong>Recover Password</strong>
                </h3>
              </div>

              <form onSubmit={submithandler} className={classes.body}>
                {invalid && (
                  <p style={{ color: "red" }}>Passwords dont match !</p>
                )}
                <div className={classes["input-control"]}>
                  <label>New password</label>
                  <input
                    type="text"
                    placeholder="Enter new password"
                    className={classes["input-field"]}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <div className={classes["input-control"]}>
                  <label>Confirm password</label>
                  <input
                    type="text"
                    placeholder="Enter new password"
                    className={classes["input-field"]}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <br></br>

                <div className="text-center">
                  <button className={classes1.buttons} type="submit">
                    Set password
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      }
    </>
  );
}
export default NewPassword;
