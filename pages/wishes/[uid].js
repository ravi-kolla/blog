import React from 'react'
import Head from 'next/head'
import { Container, Col } from 'react-bootstrap'
import { Image, RichText, Date } from 'prismic-reactjs'
import { client } from '../../prismic-configuration'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Wishes = props =>{
  return (
    <Layout>
    <Head>
      <meta name="author" content={`${props.wishes.data.image.alt} Wishes`} />
      <meta name="description" content="From Ravi Teja Kolla" />
    </Head>
    <div className="mt-5">
      <Col>
      {RichText.render(props.wishes.data.title)}
      <div className="mt-2 mb-3">
      <img className="mx-auto" src={props.wishes.data.image.url} alt={props.wishes.data.image.alt} />
      </div>
      <Container>
      <Col md={10} className="mx-auto">
      {RichText.render(props.wishes.data.body)}
      </Col>
      </Container>
      </Col>
    </div>
    </Layout>
  )
}

Wishes.getInitialProps = async context => {
  const { uid } = context.query
  const wishes = await client.getByUID('wishes', uid)
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { wishes }
}

export default Wishes
