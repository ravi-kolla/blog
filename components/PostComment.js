import React, {useState} from 'react'
import GetComments from './GetComments'
import { Container, Row, Col } from 'react-bootstrap'

function PostComment (props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const uid = props.uid;
  const [reloadComments, setReloadComments] = useState();

async function postComment(e) {
    e.preventDefault();
    const body = {
            name: name,
            email: email,
            message: message,
            uid: uid
    };
    const res = await fetch('/api/post-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      setReloadComments(!reloadComments);
      console.log(userObj);
    } else {
      console.log('Incorrect username or password. Try again!')
      setErrorMessage('Incorrect username or password. Try again!');
    }
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="comments-section">
    <Container className="mt-3">
    <Row className="container">
    <div className="container col-md-8 m-auto pl-3 pr-3">
    <GetComments uid={props.uid} reloadComments={reloadComments} />
    <h4>Leave a reply</h4>
    <form  onSubmit={postComment}>
    <div className="form-group mb-2 mr-2">
      <textarea type="text" className="form-control"
            id="message" aria-describedby="message"
            placeholder="Comment"  aria-label="enter your comment here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
      />
    </div>
    <div class="comment-input row mb-2">
        <div class="col">
            <input type="text" className="form-control"
                  id="name" aria-describedby="name"
                  placeholder="Name"  aria-label="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div class="col">
            <input type="email" className="form-control"
                  id="InputEmail" aria-describedby="emailHelp"
                  placeholder="Email" aria-label="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            />
        </div>
      </div>
      <div className="comment-button-container d-flex justify-content-end">
        <button type="submit" className={`btn btn-comment mb-2 state=="LOADING" ? "btn-secondary" : ""`}  onClick={postComment}>Post Comment</button>
      </div>
    </form>
    </div>
    </Row>
    </Container>
    </div>
  )

}

export default PostComment;
