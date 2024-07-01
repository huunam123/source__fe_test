"use strict";

/* Package System */
import React from "react";
/* Package style */
import _ from "lodash";
import { validationForm, postApi, getMsg } from "@helpers/Common";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      dataPage: [],
      appointmentSuccess: false,
      isOpen: false,
      isOpenSearch: false,
      successMessage: null,
      errorMessage: null,
      status: {
        loading: false,
        showPassword: {},
      },

      values: {
        name: "",
        email: "",
        phone: "",
        address: "",
        note: "",
      },
      status: { loading: false },
      errors: {},
      msg: "",
      showModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggle = () => {
    this.props.setStatus(OPEN_SEARCH, !this.props.stateStatus.open.search);
  };

  handleToggleType = (e) => {
    this.setState({ type: e });
  };

  handleValues = (e) => {
    let _value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      values: { ...this.state.values, [e.target.name]: _value },
    });
  };
  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  }

  handleSuccess = (message) => {
    this.setState({
      successMessage: message,
      errorMessage: null,
      isOpen: true,
    });
  };

  handleFailure = (error) => {
    this.setState({
      successMessage: null,
      errorMessage: error,
      isOpen: true,
    });
  };

  handleClear = () => {
    this.setState({ value: " " });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { values } = this.state;
    const _validation = validationForm(values, "lawyer");
    this.setState({ errors: _validation.errors, msg: _validation.msg });

    if (_validation.formIsValid) {
      this.setState({ status: { ...this.state.status, loading: true } });

      this._isMounted &&
        postApi("https://api.mcv.com.vn/v1/contacts", values)
          .then((result) => {
            this.setState({ status: { ...this.state.status, loading: false } });
            if (result.status === 201) {
              this.setState({
                showModal: true,
                // modalMessage: "Contact submitted successfully!",
                values: {
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  note: "",
                },
              });
            }
          })
          .catch((e) => {
            if (e.response) {
              this._isMounted &&
                this.setState({
                  status: { ...this.state.status, loading: false },
                  msg: getMsg(e.response),
                });
            }
          });
    }
  }

  showSuccessNotification = () => {
    this.setState({ successNotificationVisible: true }, () => {
      setTimeout(() => {
        this.setState({ successNotificationVisible: false });
      }, 3000);
    });
  };

  renderError(fieldName) {
    const { errors } = this.state;
    const error = _.get(errors, fieldName);
    return error ? <div className="error">{error.msg}</div> : null;
  }

  render() {
    const { values } = this.state;
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,

      p: 4,
    };
    return (
      <React.Fragment>
        <div className="call">
          <div className="text">
            <div className="call-title">Liên hệ</div>
            <div className="call-titles">
              Fill out this simple form if you are interested in one or all our
              services but not sure what is the next step. Someone will contact
              you shortly to help with the next step.{" "}
            </div>
          </div>

          {this.state.isOpen &&
            alert(this.state.errorMessage || this.state.successMessage)}

          <div className="row component">
            <div className="col-lg-8 col-md-2 col-sm-2 ">
              <div className="item">
                <div className="table">
                  <div className="itemm">
                    <div className="name">
                      <input
                        name="name"
                        placeholder="Họ và tên *"
                        value={values.name}
                        onChange={this.handleChange}
                      />

                      {this.state?.errors?.name && (
                        <div className="error">{this.state.errors.name}</div>
                      )}
                      {this.renderError("name")}
                    </div>
                    <div className="name">
                      <input
                        name="email"
                        placeholder="Email *"
                        value={values.email}
                        onChange={this.handleChange}
                      />
                      {this.state?.errors?.email && (
                        <div className="error">{this.state.errors.email}</div>
                      )}
                      {this.renderError("email")}
                    </div>
                    <div className=" name">
                      <input
                        name="phone"
                        placeholder="Số điện thoại *"
                        value={values.phone}
                        onChange={this.handleChange}
                      />
                      {this.state?.errors?.phone && (
                        <div className="error">{this.state.errors.phone}</div>
                      )}
                      {this.renderError("phone")}
                    </div>
                    <div className=" name">
                      <input
                        name="address"
                        placeholder="Địa chỉ *"
                        value={values.address}
                        onChange={this.handleChange}
                      />
                      {this.state?.errors?.address && (
                        <div className="error">{this.state.errors.address}</div>
                      )}
                      {this.renderError("address")}
                    </div>

                    <div className="name">
                      <textarea
                        name="note"
                        rows="5"
                        cols="33"
                        placeholder="Ghi chú *"
                        value={this.state.note}
                        onChange={this.handleChange}
                      ></textarea>
                      {this.state?.errors?.note ? (
                        <div className="error">{this.state.errors.note}</div>
                      ) : null}
                      {this.renderError("note")}
                    </div>

                    <div className="bottom">
                      <buttom type="submit">
                        <div className="text" onClick={this.handleSubmit}>
                          Gửi liên hệ
                        </div>
                      </buttom>

                      {/* modal vs box,... là components nên hãy thêm div className mới xét css  */}

                      <div class="modal" id="myModal">
                        <div class="modal-dialog modal-dialog-scrollable">
                          <Modal
                            open={this.state.showModal}
                            // onClose={this.handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <div className="form-lawyer">
                                <div className="success-tick-bar">
                                  <img src="/images/Group ticket.png" alt="" />
                                </div>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  <div className="text">
                                    Liên hệ của bạn đã được gửi thành công!
                                  </div>
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <p>
                                    {" "}
                                    Chúng tôi sẽ liên hệ với bạn sớm trong thời
                                    gian tới
                                  </p>
                                </Typography>

                                <div className="botton">
                                  <buttom type="submit">
                                    <div
                                      className="texxt"
                                      onClick={this.handleCloseModal}
                                    >
                                      Đóng
                                    </div>
                                  </buttom>
                                </div>
                              </div>
                            </Box>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
