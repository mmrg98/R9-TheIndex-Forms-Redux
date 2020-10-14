import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { postAuthor, resetErrors } from "./redux/actions/index";

const AuthorForm = props => {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    return () => {
      if (props.errors.length) props.resetErrors();
    };
  }, []); // Component Will unmount

  const submitAuthor = event => {
    event.preventDefault();
    let author = {
      first_name: firstName,
      last_name: lastName,
      imageUrl: imageUrl,
      books: books
    };
    props.postAuthor(author, props.closeModal);
  };

  const errors = props.errors;

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitAuthor}>
        {!!errors.length && (
          <div className="alert alert-danger" role="alert">
            {errors.map(error => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First Name</span>
          </div>
          <input type="text" className="form-control" name="first_name" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Last Name</span>
          </div>
          <input type="text" className="form-control" name="last_name" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Image URL</span>
          </div>
          <input type="text" className="form-control" name="imageUrl" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.errorsState.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postAuthor: (newAuthor, closeModal) =>
      dispatch(postAuthor(newAuthor, closeModal)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorForm);
