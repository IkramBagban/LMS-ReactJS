import "bootstrap/dist/css/bootstrap.css";

import classes from "./Profile.module.css";
import { useState, useEffect } from "react";
import { getCustomers, putProfile } from "../../api";
import { useSelector } from "react-redux";

function GuestProfile() {
  const customerData = useSelector((state) => state.guest.customerData);

  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    rate_code: "",
    address: "",
    street_name: "",
    apartment: "",
    contact_number: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const customers = await getCustomers();
        const email = customerData.email;

        if (!customers) {
          console.log("Customers Not fetched");
        }

        const currentCustomer = customers.find((obj) => obj.email === email);
        setInput(currentCustomer);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await putProfile(input);
    } catch (error) {
      console.error(error);
    }
  };
  
  const inputhandler = (input, value) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  return (
    <>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <form onSubmit={SubmitHandler}>
          <div className="row " style={{ margin: "10px", padding: "10px" }}>
            <div className="col-md-6 form-group">
              <label>First name</label>
              <br />
              <input
                type="text"
                className="form-control"
                defaultValue={input["first_name"]}
                onChange={(e) => {
                  inputhandler("first_name", e.target.value);
                }}
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Last name</label>
              <br />
              <input
                type="text"
                className="form-control"
                defaultValue={input["last_name"]}
                onChange={(e) => {
                  inputhandler("last_name", e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row " style={{ margin: "10px", padding: "10px" }}>
            <div className="col-md-6 form-group">
              <label>Contact Number</label>
              <br />
              <input
                type="text"
                className="form-control"
                defaultValue={input["contact_number"]}
                onChange={(e) => {
                  inputhandler("contact_number", e.target.value);
                }}
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Email</label>
              <br />
              <input
                type="email"
                className="form-control"
                defaultValue={input["email"]}
                onChange={(e) => {
                  inputhandler("email", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" name="button" className={classes.buttons}>
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GuestProfile;
