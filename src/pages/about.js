import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About</h1>
    <p>This is a cool description</p>
    <Link to="/">&larr; Back to Home</Link>
  </Layout>
);
