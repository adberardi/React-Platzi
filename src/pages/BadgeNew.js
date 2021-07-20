import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";
import profile from "../images/profile.jpg";

class BadgeNew extends React.Component {
  state = {
    form: { firstName: "", lastName: "", email: "", jobTitle: "", twitter: "" }
  };

  handleChange = (evento) => {
    /*  //Primera forma de almacenar los datos en state.   
    const nextForm = this.state.form;
    nextForm[evento.targe.name] = evento.target.value;
    this.setState({
      form: nextForm
    }); */

    //Segunda forma de almacenar los datos en state.
    this.setState({
      form: {
        ...this.state.form,
        [evento.target.name]: evento.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
                avatar={profile}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValue={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;