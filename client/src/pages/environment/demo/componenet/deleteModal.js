import React, { useState as UseState, useEffect as UseEffect } from "react";
import { Modal } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { toAbsoluteUrl } from "helpers";
import { deleteDemo } from "configs/Envi";
import SVG from "react-inlinesvg";
import { useParams as UseParams } from "react-router-dom";

export default function deleteDemoModal(props) {
  const { show, onHide, idDemo, handelDEMO } = props;
  let id = UseParams();

  const handleDelete = async () => {
    const deleteInfo = {
      id: id.id,
      idDemo: idDemo,
    };
    try {
      const res = await deleteDemo(deleteInfo);

      if (res.data.process === "done") {
        handelDEMO();
        onHide();
        NotificationManager.success(
          "Vous avez été supprimé avec succès l'environnement",
          "succès  ",
          4000
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Supprimé Demo
        </Modal.Title>
        <div className="btn btn-primary text-white" onClick={() => onHide()}>
          x
        </div>
      </Modal.Header>
      <Modal.Body>
        <span className="d-flex justify-content-center">
          <SVG
            className="w-100px"
            src={toAbsoluteUrl("/img/warning.svg")}
            fill="#ffa800"
          />
        </span>
        <h3 className="d-flex justify-content-center pt-5">
          êtes-vous sûr de vouloir supprimer
        </h3>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <button
          onClick={() => handleDelete()}
          type="button"
          className="btn btn-primary  p-2 text-white "
        >
          supprimé l'envirenment
        </button>
        <button
          onClick={() => onHide()}
          type="button"
          className="btn btn-light   text-dark  "
        >
          Annuler
        </button>
      </Modal.Footer>
    </Modal>
  );
}
