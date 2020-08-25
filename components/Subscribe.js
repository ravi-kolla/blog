import React, {useState} from 'react'
import axios from 'axios'

function Subscribe() {

  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const [alertState, setAlertState] = useState("")

  const hideAlert = () => {
    setAlertState("d-none");
  }

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/subscribe", {email});
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR")
    }
  };

  return (
    <div>
    <h6>Subscribe for latest blog posts</h6>
    <form className="form-inline">
      <div className="form-group mb-2 mr-2">
        <input type="email" className="form-control"
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className={`btn btn-primary mb-2 state=="LOADING" ? "btn-secondary" : ""`} disabled={state=="LOADING"} onClick={subscribe}>Subscribe</button>
    </form>
    {state == "ERROR" && (
      <div className={`${alertState} alert alert-danger`} role="alert">
        {errorMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick= {hideAlert}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )}
    {state == "SUCCESS" && (
      <div className={`${alertState} alert alert alert-success`} role="alert">
        Thank you for signing up!
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick= {hideAlert}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )}
    </div>
  )
}

export default Subscribe;
