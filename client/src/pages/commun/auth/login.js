// import React, { useEffect, useState as UseState } from "react";
// import { Link } from "react-router-dom";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { Brand } from "components/brand/Brand";
//  import { LoginFunc } from "configs/auth";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { pushUserData } from "../../../redux/actions";
// import Configs from "pages/configs";
// function login(props) {
//   const { history, pushUserData } = props;
//   const [loading, setLoading] = UseState(false);
//   const [btnDisabled, setBtnDisabled] = UseState(false);
//   const [errors, setErrors] = UseState({});
//   const [email, setEmail] = UseState("");
//   const [password, setPassword] = UseState("");
//   const [mdp_progress, setPasswordProgress] = UseState(0);
//   const [remember_me, setRememberMe] = UseState(false);

 

//   const loginHandle = async () => {
//     try {
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
//         setErrors({ ...errors, email: " error_email_invalid" });
//         return;
//       }
//       // Password is empty or not respect pattern
//       const pw =
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//       if (!pw.test(password)) {
//         setErrors({
//           ...errors,
//           password: "error_password_obligatoire",
//         });
//         return;
//       }

//       setLoading(true);
//       setBtnDisabled(true);
 
//       // Do Login
//       const res = await LoginFunc({ email, password });
   
//       const { error, user } = res.data;
//        <Configs  user={res.data} />
//       // if Error
//       if (error) {
//         setErrors({ ...errors, email: res.data.error.message });
//         setLoading(false);
//         setBtnDisabled(false);
//         return;
//       }
     
//       // Did Logged
//        // Did Logged
//     //    if (remember_me) {
//     //     localStorage.setItem('REMEMBER_ME', true)
//     //   }
//     //   localStorage.setItem('TOKEN', token)
 
//          pushUserData({ user });

//       // if (user) {
//       //   history.push("/entreprise");
     
//       // } else {
//       //   history.push("/");
      
//       // }

//       // history.push("/");
//       history.push('/entreprise');

//      } catch (error) {
//       console.log(error);
//       setLoading(false);
//       setBtnDisabled(false);
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
//   return (
//     <div
//       className=" container login-form login-signin pt-10 mt-20 "
//       style={{ display: "block" }}
//     >
//       <Brand />
//       {/*begin::Title*/}
//       <div className="pb-5 pt-lg-0 pt-5 ">
//         <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg text-center">
//           Connexion
//         </h3>
//       </div>

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
//       {/* <div className="form-group">
//         <label className="checkbox mb-0">
//           <input type="checkbox" name="acceptTerms" checked={remember_me} onChange={() => { setRememberMe(!remember_me); }} />
//           <span style={{ marginRight: 4 }} />
//       remember_me
//         </label>
//       </div> */}
//       {/* begin: Submit */}
//       <div className="form-group d-flex flex-wrap pb-lg-0 pb-3 justify-content-between">
//         <button
//           onClick={loginHandle}
//           disabled={btnDisabled}
//           type="submit"
//           className="btn btn-info font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4 w-100"
//         >
//           <span>Connexion</span>
//           {loading && <span className="ml-3 spinner spinner-white"></span>}
//         </button>

//         {/* <Link to="/auth/sign-in">
//           <button
//             type="button"
//             className="btn btn-light font-weight-bolder font-size-h6 px-8 py-4 my-3"
//           >
//             Annuler
//           </button>
//         </Link> */}
//       </div>
//       {/* <Link to="/auth/sign-up">
//         <button type="button" className="btn btn-outline-info w-100">
//           {" "}
//           S'inscrire
//         </button>
//       </Link> */}
//       {/* end: Submit */}
//     </div>
//   );
// }
// export default withRouter(connect(null, { pushUserData })(login));
 