import React from "react";
const Login = () => {
  return (
    <div
      style={{
        border: "1.5px solid lightgrey",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <center>
        <h3 style={{ textAlign: "initial" }}>Login</h3>

        <form>
          <h5 style={{ textAlign: "initial" }}>
            <b>Email</b>
          </h5>
          <input
            type="text"
            id="email"
            style={{
              width: "300px",
              height: "30px",
              border: "2px solid black",
              alignItems: "initial",
            }}
          ></input>
          <h5 style={{ textAlign: "initial" }}>Password</h5>
          <input
            type="text"
            id="password"
            style={{
              width: "300px",
              height: "30px",
              border: "2px solid black",
            }}
          ></input>
          <br></br>
          <br />
          <hr />
          <button
            style={{
              backgroundColor: "#198754",
              width: "400px",
              height: "30px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            {" "}
            Login{" "}
          </button>
          <br /> <br />
          <button
            style={{
              backgroundColor: "#0d6efd",
              width: "400px",
              height: "30px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            {" "}
            Continue with Facebook{" "}
          </button>
          <br /> <br />
          <button
            style={{
              backgroundColor: "white",
              width: "400px",
              height: "30px",
              borderRadius: "15px",
              color: "black",
            }}
          >
            {" "}
            Continue with Google{" "}
          </button>
          <br /> <br />
          <button
            style={{
              backgroundColor: "white",
              width: "400px",
              height: "30px",
              borderRadius: "15px",
              color: "black",
            }}
          >
            {" "}
            Continue with GitHub{" "}
          </button>
          <br />
        </form>
      </center>
    </div>
  );
};

export default Login;