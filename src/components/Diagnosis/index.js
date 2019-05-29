/** @jsx jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import css from '@emotion/css/macro';
import { jsx } from '@emotion/core';
import { Container, Row, Col } from 'react-bootstrap'
import {
  calcBmi,
  calcIdealWeight,
  getEvaluationJesso,
  getEvaluationForMale,
  getEvaluationForFemale
} from '../../lib/diagnosisUtils';
import DiagnosisForm from '../DiagnosisForm';
import { NotSubmitted, ShowResult } from '../DiagnosisResult';

const Headline = styled.h2({
  borderBottom: '4px solid #bacede',
  padding: '14px 0',
  fontSize: 21
})

export default class extends Component {
  state = {
    showResult: false,
    bmi: null,
    evaluationJesso: null,
    evaluation: null,
    idealWeight: null
  }

  handleSubmit = (values, actions) => {
    const {
      fatRate,
      height,
      weight,
      gender
    } = values;
    const bmi = calcBmi(height, weight);
    const idealWeight = calcIdealWeight(height);
    const evaluationJesso = getEvaluationJesso(bmi);
    let evaluation;
    if (gender === 'f') evaluation = getEvaluationForFemale(bmi, fatRate);
    if (gender === 'm') evaluation = getEvaluationForMale(bmi, fatRate);
    this.setState({
      bmi,
      idealWeight,
      evaluationJesso,
      evaluation,
      showResult: true
    })
    actions.setSubmitting(false);
    actions.setErrors({})
  }

  render() {
    const {
      bmi,
      idealWeight,
      evaluationJesso,
      evaluation,
      showResult
    } = this.state;
    const props = {
      bmi,
      idealWeight,
      evaluationJesso,
      evaluation,
      showResult
    }
    let resultPart = <NotSubmitted />
    if (showResult) {
      resultPart = <ShowResult {...props} />
    }
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={9} sm={12}>
            <Headline>
              １．あなたの体格について入力してください
            </Headline>
            <DiagnosisForm handleSubmit={this.handleSubmit} />
          </Col>
          <Col md={9} sm={12}>
            <div css={css`
              margin-top: 40px;
            `} />
            <Headline>
              ２．診断結果
            </Headline>
            {resultPart}
          </Col>
        </Row>
      </Container>
    );
  }
}