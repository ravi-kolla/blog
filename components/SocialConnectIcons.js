import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialConnectIcons = () => (
    <Row>
      <div className="pr-3">
      <a href="mailto:ravitejakolla29@gmail.com" aria-label="email me"><FontAwesomeIcon icon="envelope" size="2x" /></a>
      </div>
      <div className="pr-3">
      <a href="https://www.linkedin.com/in/ravitejakolla" aria-label="veiw my linkedin profile"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a>
      </div>
      <div className="pr-3">
      <a className="pr-3" href="https://github.com/ravi-kolla" aria-label="vist my github profile"><FontAwesomeIcon icon={["fab", "github"]} size="2x" /></a>
      </div>
      <div className="pr-3">
      <a className="pr-3" href="https://twitter.com/ravitejakolla" aria-label="my twitter handle"><FontAwesomeIcon icon={["fab", "twitter"]} size="2x" /></a>
      </div>
    </Row>
)

export default SocialConnectIcons;
