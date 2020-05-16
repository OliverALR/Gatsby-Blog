import React from 'react';
import Img from 'gatsby-image';
import { Link } from '@reach/router';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Img
        css={`
          * {
            margin-top: 0rem;
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>Read this post &rarr; </ReadLink>
    </div>
  </article>
);

export default PostPreview;
