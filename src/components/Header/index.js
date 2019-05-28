/** @jsx jsx */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { jsx } from '@emotion/core'
import { ReactComponent as Logo } from '../../images/logo.svg'

const Header = () => (
  <div css={{ height: '69px', width: '100%', borderBottom: '1px solid #cacaca' }}>
    <Container>
      <Row>
        <Col>
          <div css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div className="logo-wrapper" css={{ padding: '16px 0' }}>
              <a href="/">
                <Logo height='37px' width='157px' />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Header