import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const Social = (props) => (
  <div className="container row">
    <div>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text={props.dataText} data-via="ravitejakolla" data-related="ravitejakolla" data-lang="en" data-show-count="false"></a>
    </div>
    <div className="pl-2">
      <div className="fb-share-button" data-href={`https://ravitejakolla.com/blog/${props.dataUid}`} data-layout="button_count"></div>
    </div>
    <div className="pl-2">
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://ravitejakolla.com/blog/${props.dataUid}&title=${props.imageAlt}&summary=ravitejakolla.com&source=RaviTejaKolla`} target="_blank" ><img src="/LinkedIN.gif" alt="linked In share" width="54" height="20" /></a>
    </div>
  </div>
)

export default Social;
