import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import styled from 'styled-components'

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  & .token-line {
    line-height: 1.1em;
    height: 1.1em;
  }
  font-family: 'Consolas', Consolas;
  font-size: 11px;
`


export const Code = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}


