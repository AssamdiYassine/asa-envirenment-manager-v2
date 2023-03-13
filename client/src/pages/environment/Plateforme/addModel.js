import React, { useState as UseState, useEffect as UseEffect } from "react";
import { addPlatforme } from "configs/platforme";
import { Form, Modal } from "react-bootstrap";
import { NotificationManager } from "react-notifications";

function addModel(props) {
  const { show, onHide,   id, handelperf } = props;
  const [name, setName] = UseState([]);
  const [link, setLink] = UseState([]);

  const handleClick = async () => {
    if (name.length === 0) {
      NotificationManager.warning("", "Ajouter nom d'environment", 2500);
    } else {
      if (link.length === 0) {
        NotificationManager.warning("", "Ajouter link d'environment", 2500);
      } else if (!link.includes("http://") || !link.includes("https://")) {
        NotificationManager.warning(
          "",
          "Ajouter link d'environment avec http or https",
          2500
        );
      }
    }
    if (
      name.length != 0 &&
      link.length != 0 &&
      (link.includes("http://") || link.includes("https://"))
    ) {
      const document = {
        _id: id.id,
        _name: name,
        _link: link,
      };
      const response = await addPlatforme(document);
      if (response.data.process === "done") {
        onHide();
        handelperf();
        NotificationManager.success(
          "Vous avez été enregistré avec succès l'environnement",
          "succès :) ",
          4000
        );
      }
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
          Ajouter Demo
        </Modal.Title>
        <div className="btn btn-primary text-white" onClick={() => onHide()}>
          x
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="   d-flex justify-content-center align-items-center">
          <div className=" w-75 ">
            <div className="col-12">
              <Form>
                <Form.Group controlId="formBasicPassword"></Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className=" text-left"
                >
                  <Form.Label>Name d'envirenment</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="envi....."
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="formBasicPassword"
                  className=" text-left"
                >
                  <Form.Label>Link d'envirenment</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="http://........"
                    onChange={(e) => {
                      setLink(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className=" d-flex justify-content-center align-items-center">
        <div>
          <button
            onClick={() => handleClick()}
            type="button"
            className="btn btn-primary   text-white mr-5 "
          >
            Ajouter envirenment Demo
          </button>
          <button
            onClick={() => onHide()}
            type="button"
            className="btn btn-light   text-dark  "
          >
            Annuler
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default addModel;
