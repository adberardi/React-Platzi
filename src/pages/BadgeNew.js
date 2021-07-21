import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";
import profile from "../images/profile.jpg";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: { firstName: "", lastName: "", email: "", jobTitle: "", twitter: "" },
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
      });

      // Redirige al usuario a badges.
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                email={this.state.form.email || "EMAIL"}
                twitter={this.state.form.twitter || "twitter"}
                avatar={profile}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValue={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
