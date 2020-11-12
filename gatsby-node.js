const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      // same as node: node
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // dynamically create pages here
  // get path to template
  const blogTemplate = path.resolve('./src/templates/BlogPost.js');
  // get slugs
  const response = await graphql(`
    query {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    }
  `);
  // create new pages with unique slug
  response.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
        next,
        previous,
      },
    });
  });
};
