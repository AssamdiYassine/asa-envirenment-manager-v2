// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import ProgressBar from "react-bootstrap/ProgressBar";

// import { Brand } from "components/brand/Brand";
// import { RegisterFunc } from "configs/auth";

// function Register(props) {
//   const [loading, setLoading] = useState(false);
//   const [btnDisabled, setBtnDisabled] = useState(false);

//   const [errors, setErrors] = useState({});
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm_password, setConfirmPassword] = useState("");
//   const [mdp_progress, setPasswordProgress] = useState(0);
//   const [lastname, setLastname] = useState("");
//   const [firstname, setFirstname] = useState("");

//   const registerHandle = async () => {
//     try {
//       // Verify if nom text is empty
//       if (lastname.length === 0) {
//         setErrors({ ...errors, lastname: "error_nom_obligatoire" });
//         return;
//       }

//       // Verify if prénom  text is empty
//       if (firstname.length === 0) {
//         setErrors({
//           ...errors,
//           firstname: "error_prénom_obligatoire",
//         });
//         return;
//       }

//       // Verify if email text is empty
//       if (email.length === 0) {
//         setErrors({ ...errors, email: "error_email_obligatoire" });
//         return;
//       }

//       // Verify if email text is invalid
//       const re =
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if (!re.test(email)) {
//         setErrors({ ...errors, email: "error_email_invalid" });
//         return;
//       }

//       // Password is empty or not respect pattern
//       const pw =
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//       if (!pw.test(password)) {
//         setErrors({
//           ...errors,
//           password: " error_password_obligatoire",
//         });
//         return;
//       }

//       // Password missmatch
//       if (confirm_password !== password) {
//         setErrors({
//           ...errors,
//           confirm_password: " error_password_missmatch",
//         });
//         return;
//       }
//      // Check user
//     //  const check = await CheckUser(email);
//     //  if (check.user != null) {
//     //    setErrors({ ...errors, email: t("register:error_email_exists") });
//     //    setLoading(false);
//     //    setBtnDisabled(false);
//     //    return;
//     //  }

//      // Creating Account
//      setLoading(true);
//      setBtnDisabled(true);

//      const res = await RegisterFunc(
//        lastname,
//        firstname,
//        email,
//        password
//      );
//      const { user,error } = res.data;

//     //  //Handle Response
//     //  if (error) {
//     //    NotificationManager.warning(
//     //      "",
//     //      "Oops une erreur s'est produite merci de réssayer",
//     //      10000
//     //    );
//     //  } else {
//     //    localStorage.setItem("TOKEN", token);
//     //    localStorage.setItem("COUNTRY", user.country);
//     //    pushUserData({ user, token, country: user.country });
//     //    history.push("/welcome");
//     //    /* NotificationManager.success(
//     //      "",
//     //      "Vous avez créer votre compte! Bienvenue!",
//     //      10000
//     //    ); */
//     //  }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const checkPassword = (psw) => {
//     let strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
//     let medium =
//       /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
//     if (strong.test(psw)) {
//       setPasswordProgress(100);
//     } else if (medium.test(psw)) {
//       setPasswordProgress(66);
//     } else {
//       setPasswordProgress(33);
//     }
//     if (psw.length === 0) setPasswordProgress(0);

//     setPassword(psw);
//   };

//   const [show, setShow] = useState(false);
//   const handelShow = () => {
//     setShow(!show);
//   };

//   return (
//     <div
//       className=" container login-form login-signin  mt-20 "
//       style={{ display: "block" }}
//     >
//       {" "}
//       <Brand />
//       {/*begin::Title*/}
//       <div className="pb-5 pt-lg-0 pt-5 ">
//         <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg text-center">
//           S'inscrire
//         </h3>
//         {/* <p className="text-muted font-weight-bold font-size-h4 m-0">
//             {t("register:choose_your_country")} !
//           </p> */}
//       </div>
//       {/*end::Title*/}
//       {/* begin: Nom */}
//       <div className="form-group fv-plugins-icon-container">
//         <input
//           placeholder={`Nom`}
//           type="text"
//           name="lastname"
//           className={`form-control  form-control-solid  h-auto py-5 px-6  ${
//             errors.lastname && "is-invalid"
//           }`}
//           onChange={(e) => {
//             setLastname(e.target.value);
//             setErrors({ ...errors, lastname: false });
//           }}
//         />
//         {errors.lastname && (
//           <div className="my-1 pl-5 alert-text font-weight-medium">
//             {errors.lastname}
//           </div>
//         )}
//       </div>
//       {/* end: Nom */}
//       {/* begin: Prénom */}
//       <div className="form-group fv-plugins-icon-container">
//         <input
//           placeholder={`Prénom`}
//           type="text"
//           name="firstname"
//           className={`form-control  form-control-solid  h-auto py-5 px-6 ${
//             errors.lastname && "is-invalid"
//           }`}
//           onChange={(e) => {
//             setFirstname(e.target.value);
//             setErrors({ ...errors, firstname: false });
//           }}
//         />
//         {errors.firstname && (
//           <div className="my-1 pl-5 alert-text font-weight-medium">
//             {errors.firstname}
//           </div>
//         )}
//       </div>
//       {/* end: Prénom */}
//       {/* begin: Email */}
//       <div className="form-group fv-plugins-icon-container">
//         <input
//           placeholder={`Email`}
//           type="email"
//           name="email"
//           className={`form-control  form-control-solid  h-auto py-5 px-6 ${
//             errors.email && "is-invalid"
//           }`}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             setErrors({ ...errors, email: false });
//           }}
//         />
//         {errors.email && (
//           <div className="my-1 pl-5 alert-text font-weight-medium">
//             {errors.email}
//           </div>
//         )}
//       </div>
//       {/* end: Email */}
//       {/* begin: Password */}
//       <div className="form-group fv-plugins-icon-container">
//         <input
//           placeholder={`Mot de passe`}
//           type="password"
//           name="password"
//           className={`form-control  form-control-solid h-auto py-5 px-6 ${
//             errors.password && "is-invalid"
//           }`}
//           onChange={(e) => {
//             checkPassword(e.target.value);
//             setErrors({ ...errors, password: false });
//           }}
//         />
//         {mdp_progress > 0 && (
//           <div className="mt-2">
//             <div className="drive-progress-container">
//               {mdp_progress < 66 ? (
//                 <ProgressBar
//                   height={10}
//                   variant="danger"
//                   now={33}
//                   style={{ backgroundColor: "#FFE2E5 " }}
//                 />
//               ) : mdp_progress < 100 ? (
//                 <ProgressBar
//                   height={10}
//                   variant="warning"
//                   now={66}
//                   style={{ backgroundColor: "#fbd181 " }}
//                 />
//               ) : (
//                 <ProgressBar height={10} variant="success" now={100} />
//               )}
//             </div>
//           </div>
//         )}
//         {errors.password && (
//           <div className="my-1 pl-5 alert-text font-weight-medium">
//             {errors.password}
//           </div>
//         )}
//       </div>
//       {/* end: Password */}
//       {/* begin: Confirm Password */}
//       <div className="form-group fv-plugins-icon-container">
//         <input
//           placeholder={`Confirmez le mot de passe`}
//           type="password"
//           name="confirm_password"
//           className={`form-control form-control-solid  h-auto py-5 px-6 ${
//             errors.confirm_password && "is-invalid"
//           }`}
//           onChange={(e) => {
//             setConfirmPassword(e.target.value);
//             setErrors({ ...errors, confirm_password: false });
//           }}
//         />
//         {errors.confirm_password && (
//           <div className="my-1 pl-5 alert-text font-weight-medium">
//             {errors.confirm_password}
//           </div>
//         )}
//       </div>
//       {/* end: Confirm Password */}
//       {/* begin: Submit */}
//       <div className="form-group d-flex flex-wrap pb-lg-0 pb-3 justify-content-between">
//         <button
//           onClick={registerHandle}
//           disabled={btnDisabled}
//           type="submit"
//           className="btn btn-success font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
//         >
//           <span>Créer mon compte</span>
//           {loading && <span className="ml-3 spinner spinner-white"></span>}
//         </button>

//         <Link to="/auth/sign-in">
//           <button
//             type="button"
//             className="btn btn-light font-weight-bolder font-size-h6 px-8 py-4 my-3"
//           >
//             Annuler
//           </button>
//         </Link>
//       </div>
//       {/* end: Submit */}
//     </div>
//   );
// }

// export default Register;
