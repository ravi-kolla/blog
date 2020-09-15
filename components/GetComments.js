import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Moment from 'moment'

const GetComments = (props) => {

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    axios.get('/api/get-comments')
    .then(response => {
      var result = response.data.comments.filter(comment => comment.uid == props.uid);
      console.log(result);
      console.log(response.data.comments);
      console.log("comments");
      setComments(result);
      setIsLoading(false);
    })
    .catch(error => {
      console.log(error);
    });
      console.log(comments);
  },[props.reloadComments])

  return (
    <>
    <div className="d-flex justify-content-center mt-2 mb-2">
      <h5>Comments</h5>
    </div>
    <div>
        {!isLoading ? (
          comments.map(comment => {
            const date = Date(comment.commentedOn);
            const formattedDate = Moment(date).format("LL");
            return (
              <div className="comment-card card p-2 m-2" key={comment.uid}>
                <p className="commentor-name font-weight-bold">{comment.name}</p>
                <small className="commented-date">{formattedDate}</small>
                <p className="commentor-message">{comment.message}</p>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

// This gets called on every request
/*export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('/api/get-comments')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { comments } }
}
*/
export default GetComments
