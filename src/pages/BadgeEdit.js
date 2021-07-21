import React from "react";
import "./styles/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";
import profile from "../images/profile.jpg";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({
        loading: false,
      });

      // Redirige al usuario a badges.
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({
        loading: false,
        form: data,
      });
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
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
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
              <h1>Actualice sus Datos</h1>
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

export default BadgeEdit;
