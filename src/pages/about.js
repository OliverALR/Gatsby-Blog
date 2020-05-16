import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default () => (
  <>
    <Hero />
    <Layout>
      <h1>About</h1>
      <p>This is a cool description</p>
      <Link to="/">&larr; Back to Home</Link>
    </Layout>
  </>
);
