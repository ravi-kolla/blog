import React from 'react'
import Head from 'next/head'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { Image, RichText, Date } from 'prismic-reactjs'
import Moment from 'moment'
import { client } from '../../prismic-configuration'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Subscribe from '../../components/Subscribe'
import Social from '../../components/Social'

const Post = props =>{
  const date = Date(props.post.data.date);
  const formattedDate = Moment(date).format("LL");
  return (
    <Layout>
    <Head>
      <meta name="description" content={`${props.post.data.image.alt} by Ravi Teja Kolla`} />
      <meta property="og:url"           content={`https://ravitejakolla.com/blog/${props.post.uid}`} />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content={`${props.post.title} Article`} />
      <meta property="og:description"   content="By Ravi Teja Kolla" />
      <meta property="og:image"         content={props.post.data.image.url} />
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <script async src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" charset="utf-8"></script>
      <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
      <script type="IN/Share" data-url={`https://ravitejakolla.com/blog/${props.post.uid}`}></script>
    </Head>
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
        <Breadcrumb.Item active>{props.post.data.image.alt}</Breadcrumb.Item>
      </Breadcrumb>
      <Col className="mx-auto blog-post" md={8}>
      <Row className="pl-3 pr-3 justify-content-between align-items-center">
        {RichText.render(props.post.data.title)}
        <Social dataText={props.post.data.image.alt}
                dataUid={props.post.uid}
                imageAlt={props.post.data.image.alt}
        />
      </Row>
      <small className="text-muted">{formattedDate}</small>
      <div className="mt-2 mb-3">
      <img src={props.post.data.image.url} alt={props.post.data.image.alt} />
      </div>
      <div>
      {RichText.render(props.post.data.post_body)}
      </div>
      </Col>
    </Container>
    <Container className="mt-3">
    <Row className="container">
    <div className="container col-md-8 m-auto pl-3 pr-3">
    <Social dataText={props.post.data.image.alt}
            dataUid={props.post.uid}
            imageAlt={props.post.data.image.alt}
    />
    <Subscribe />
    </div>
    </Row>
    </Container>
    </Layout>
  )
}

Post.getInitialProps = async context => {
  const { uid } = context.query
  const post = await client.getByUID('post', uid)
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { post }
}

export default Post
