/** @jsx jsx */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { jsx } from '@emotion/core';

const Footer = () => (
  <div css={{ 
    height: '70px',
    width: '100%', 
    borderTop: '1px solid #cacaca' }}>
    <Container>
      <Row>
        <Col>
          <div css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px 0'
          }}>
            <span>
              Made for CodeGrit React Course
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer