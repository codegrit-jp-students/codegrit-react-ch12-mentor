import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import Diagnosis from '../Diagnosis';


const Wrapper = styled.main({
  minHeight: '400px',
  margin: '50px 0',
  height: '100%',
})

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Diagnosis />
      </Wrapper>
    );
  }
}

export default Main;