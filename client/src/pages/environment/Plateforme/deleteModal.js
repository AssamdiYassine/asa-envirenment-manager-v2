import React, { useState as UseState, useEffect as UseEffect } from "react";
import { Modal } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { toAbsoluteUrl } from "helpers";
import { deletePlatforme } from "configs/platforme";
import SVG from "react-inlinesvg";
import { useParams as UseParams } from "react-router-dom";

export default function deleteDemoModal(props) {
  const { show, onHide, idplat,  handelperf } = props;
 
  let id = UseParams();
  const handleDelete = async () => {
    const PlatformeInfo = {
      id: id.id,
      idplat: idplat,
    };
 

    try {
      const res = await deletePlatforme(PlatformeInfo);

      if (res.data.process === "done") {
        handelperf();
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
          Supprimé Platforme
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
          supprimé Platforme
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
