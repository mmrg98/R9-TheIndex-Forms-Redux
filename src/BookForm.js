import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postBook, resetErrors } from "./redux/actions";

const BookForm = (props) => {
  const [book, setBook] = useState({
    title: "",
    color: "",
    authors: [props.author.id],
  });
  useEffect(() => {
    return () => {
      if (props.errors.length) props.resetErrors();
    };
  }, []);
  const submitAuthor = (event) => {
    event.preventDefault();
    props.submitBook(book, props.closeModal);
  };
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  const errors = props.errors;
  return (
    <form onSubmit={submitAuthor}>
      {!!errors.length && (
          <div className="alert alert-danger" role="alert">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )} 
      <div className="input-group mb-3">
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>
      <div className="input-group mb-3">
        <div className="form-group">
          <label>Color</label>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="input-group mb-3">
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.errorsState.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitBook: (book,closeModal) => dispatch(postBook(book, closeModal)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
