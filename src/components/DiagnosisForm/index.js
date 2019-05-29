/** @jsx jsx */
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled/macro';
import { jsx } from '@emotion/core';
import css from '@emotion/css/macro';
import { Row, Col } from 'react-bootstrap';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const fieldStyle = {
  padding: '5px 10px',
  borderRadius: 0,
  color: '#797f7f',
}

const SubmitWrap = styled.div({
  marginTop: '3em',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
})

const btnStyle = {
  backgroundColor: '#2f2f2f',
  border: '1px solid #2f2f2f',
  color: '#fff',
  transitionDuration: '0.5s',
  padding: '10px 15px',
  width: '250px',
  borderRadius: '0px',
  ":hover": {
    backgroundColor: '#545454',
    color: '#fff'
  }
}

const ErrorMessage = styled.div({
  color: '#ffb400;',
  margin: '6px 0 3px',
  fontSize: '0.9em'
})

const CustomLabel = styled.label({
  fontSize: '1.1em',
  color: '#212529',
  marginTop: 14
})

export default class extends Component {

  validate = (values) => {
    const { 
      gender,
      age,
      height,
      weight,
      fatRate,
    } = values;
    const errors = {}
    if (gender === 'n/a') {
      errors.gender = '性別の選択は必須です。'
    }
    const numbers = [
      { name: "age", val: age, human: "年齢" }, 
      { name: "height", val: height, human: "身長" },
      { name: "weight", val: weight, human: "体重" },
      { name: "fatRate", val: fatRate, human: "体脂肪率" }
    ]
    numbers.forEach((item) => {
      if (!item.val) errors[item.name] = `${item.human}の入力は必須です` 
    })
    if (Object.keys(errors).length > 0) {
      return errors
    }
  }

  handleSubmit = (values, actions) => {
    console.log(values);
    this.props.handleSubmit(values, actions);
  }

  render() {
    return (
      <Formik
        initialValues={{ 
          gender: "n/a",
        }}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ 
          errors,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <Form 
              css={formStyle}>
              <Row>
                <Col span={6}>
                  <CustomLabel>性別:</CustomLabel>
                  <Field
                    component="select"
                    name="gender"
                    css={fieldStyle}>
                    <option value="n/a">性別を選んでください</option>
                    <option value="f">女性</option>
                    <option value="m">男性</option>
                  </Field>
                  {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
                </Col>
                <Col span={6}>
                  <CustomLabel>年齢:</CustomLabel>
                  <Field name="age">
                    {({ field, form: { touched, errors } }) => (
                      <div css={css`
                        display: flex;
                      `}>
                        <input 
                          {...field}
                          type="number"
                          placeholder="例: 25"
                          css={fieldStyle} />
                        <span css={css`
                          align-self: flex-end; 
                          margin-left: 7px;
                          font-size: 1.2em;
                        `}>歳</span>
                      </div>
                    )}
                  </Field>
                  {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
                </Col>
              </Row>
              <Row>
                <Col span={6}>
                  <CustomLabel>身長:</CustomLabel>
                  <Field name="height">
                    {({ field, form: { touched, errors } }) => (
                      <div css={css`
                        display: flex;
                      `}>
                        <input {...field}
                          type="number"
                          placeholder="例: 158"
                          css={fieldStyle} />
                        <span css={css`
                          align-self: flex-end; 
                          margin-left: 7px;
                          font-size: 1.2em;
                        `}>cm</span>
                      </div>
                    )}
                  </Field>
                  {errors.height && <ErrorMessage>{errors.height}</ErrorMessage>}
                </Col>
                <Col span={6}>
                  <CustomLabel>体重:</CustomLabel>
                  <Field name="weight">
                    {({ field, form: { touched, errors } }) => (
                      <div css={css`
                        display: flex;
                      `}>
                        <input {...field}
                          type="number"
                          placeholder="例: 44"
                          css={fieldStyle} />
                        <span css={css`
                          align-self: flex-end; 
                          margin-left: 7px;
                          font-size: 1.2em;
                        `}>kg</span>
                      </div>
                    )}
                  </Field>
                  {errors.weight && <ErrorMessage>{errors.weight}</ErrorMessage>}
                </Col>
              </Row>
              <Row>
                <Col span={6}>
                  <CustomLabel>体脂肪率:</CustomLabel>
                  <Field name="fatRate">
                    {({ field, form: { touched, errors } }) => (
                      <div css={css`
                        display: flex;
                      `}>
                        <input {...field}
                          type="number"
                          step="0.1"
                          placeholder="例: 25.4"
                          css={fieldStyle} />
                        <span css={css`
                          align-self: flex-end; 
                          margin-left: 7px;
                          font-size: 1.2em;
                        `}>%</span>
                      </div>
                    )}
                  </Field>
                  {errors.fatRate && <ErrorMessage>{errors.fatRate}</ErrorMessage>}
                </Col>
                <Col span={6}></Col>
              </Row>
              <SubmitWrap>
                <button type="submit" disabled={isSubmitting} css={btnStyle}>
                  診断結果を見る
                </button>
              </SubmitWrap>
            </Form>
          );
        }}
      </Formik>
    );
  }
}