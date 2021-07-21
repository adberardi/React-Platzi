import React from "react";

class BadgeForm extends React.Component {
  /*   state = {
    firstName:"",
    lastName:"",
    email:"",
    jobTitle:"",
    twitter:""
  }; */

  /*   handleChange = (evento) => {
    // console.log({ name: evento.target.name, value: evento.target.value });
    this.setState({
      [evento.target.name]: evento.target.value
    });
  }; */

  handleClick = (evento) => {
    console.log(`button was clicked`);
  };

  /*   handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(`Form was submit`);
  }; */

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValue.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValue.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="email"
              value={this.props.formValue.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.props.formValue.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.props.formValue.twitter}
            />
          </div>
          <button
            onClick={this.handleClick}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>

          {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
