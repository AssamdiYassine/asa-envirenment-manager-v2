import React, { useState as UseState, useEffect as UseEffect } from "react";
import Card from "react-bootstrap/Card";
import { useHistory as UseHistory } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { pushUserData } from "../redux/actions";
import { EnviFunc } from "configs/Envi";
import { useParams as UseParams } from "react-router-dom";
import { AutorizedFunc, getRole } from "configs/auth";

function home(props) {

  UseEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {

      handelCheck();

    }
    return () => {
      isCancelled = true;
    };
  }, [])

  const path = UseParams();

  const handelCheck = async () => {
    const res = await AutorizedFunc(path.id);
  }


  const [environment, setEnvironment] = UseState([]);
  UseEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {

      FuncEnvi();

    }
    return () => {
      isCancelled = true;
    };
  }, []);

  const FuncEnvi = async () => {

    const res = await EnviFunc();
    if (res.error) {
      console.log(res.error);
    } else {
      setEnvironment(res.data.dossiersEnvi);
    }

  };

  const history = UseHistory();
  const handleGroupDetails = (id, name) => {
    history.push(`/environment/${name}/development/${id}`, {
      id: id,
      name: name,
    });
  };

  return (
    <div className="container text-center mt-20 ">
      <h1 className="display-1">Bienvenue</h1>
      <h2 className="py-5">
        Sélectionné votre espace pour découvrir les environnements
      </h2>

      <div className="row">
        {environment.map((el) => (
          <div key={el.id} className="col-4 pt-10">
            <Card
              className="text-center   shadow h-200 d-flex justify-content-center align-items-center  btn btn-outline-info "
              onClick={() => {
                handleGroupDetails(el.id, el.name);
              }}
            >
              <Card.Body>
                <Card.Text className=" py-5 my-5 " style={{ fontSize: "3vw" }}>
                  {el.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

}


const mapStateToProps = ({ userreducer }) => {
  return {
    user: userreducer.user

  };
};
export default withRouter(connect(mapStateToProps, {})(home));


