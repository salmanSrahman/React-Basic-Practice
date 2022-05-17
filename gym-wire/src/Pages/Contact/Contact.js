import React from "react";
import "./Contact.css";
import contact from "../../images/contact2.jpg";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-part">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <img src={contact} alt="" className="img-fluid" />
          </div>
          <div className="col-xl-5 col-md-5">
            <div className="contact-form">
              <div className="form">
                <h6 className="mb-4">Please, Fill Up These To Contact Us !</h6>
                <div class="mb-3">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name"
                    />
                    <label for="floatingInput">name</label>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    class="form-control"
                    id="floatingInput"
                    placeholder="phone"
                  />
                  <label for="floatingInput">phone</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label for="floatingTextarea2">Message</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger w-100 mt-3"
                  onClick={() => navigate("/contactMessage")}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
