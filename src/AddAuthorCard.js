import React, { useState } from "react";
import Modal from "react-responsive-modal";

import AuthorForm from "./AuthorForm";

const AddAuthorCard = props => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div>
        <Modal open={open} onClose={closeModal} center>
          <AuthorForm closeModal={closeModal} />
        </Modal>
      </div>
      <div className="card" onClick={openModal}>
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src="https://mbtskoudsalg.com/images/a-plus-png-2.png"
            alt="+"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>Add Author</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AddAuthorCard;
