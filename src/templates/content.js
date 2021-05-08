import React from 'react';
//import { graphql, Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { withPreview } from 'gatsby-source-prismic';
import Layout from '../components/layout.js';
import * as styles from '../styles/content.module.scss';

const Content = ({ pageContext }) => {

    const data = pageContext.data

    return(
        <Layout>
            <div className={styles.content}>
                <RichText render={data.body.raw} />
            </div>
        </Layout>
    )
}

export default withPreview(Content)