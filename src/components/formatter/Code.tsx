import { Container, Grid } from "@material-ui/core";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import React from "react";
import styled from "styled-components";
import copyToClipboard from "../../utils/CopyToClipboard";

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
  font-family: "Consolas", Consolas;
  font-size: 11px;
`;
const CopyCode = styled.button`
  position: inherit;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

export const Code = (props: any) => {
  const handleClick = () => {
    copyToClipboard(props.codeString);
  };

  return (
    <Container maxWidth="lg">
      <Highlight
        {...defaultProps}
        code={props.codeString}
        language={props.language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            <Grid container justify="flex-end">
              <CopyCode onClick={handleClick}>Copy</CopyCode>
            </Grid>
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
    </Container>
  );
};
