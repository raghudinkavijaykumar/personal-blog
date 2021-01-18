import { MDXProvider } from '@mdx-js/react'
import React from 'react'

const components = {
  h2: ({ children }) => (
    <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>
  ),
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  /*
  pre: ({props}) => (
      <div class="gatsby-highlight">
          {props}
      </div>
  ),
  */
}
/*
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
*/