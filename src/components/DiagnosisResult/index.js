import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div({
  minHeight: '200px',
  width: '100%'
})

const NotSubmittedMessage = styled.div({
  width: '100%',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const NotSubmitted = () => {
  return (
    <Wrapper>
      <NotSubmittedMessage>
        <p>
          診断結果がここに表示されます。
        </p>
      </NotSubmittedMessage>
    </Wrapper>
  );
}

const ResultWrapper = styled.div({
  padding: '20px 0',
})

const Title = styled.h3({
  fontSize: '17px',
  fontWeight: 'bold',
  marginBottom: '1em'
})

const Body = styled.p({
  fontSize: '21px',
})

export const ShowResult = ({ 
  evaluationJesso,
  evaluation,
  bmi,
  idealWeight
 }) => {
  return (
    <Wrapper>
      <ResultWrapper>
        <Title>日本肥満学会の定める理想体重(BMI22)</Title>
        <Body>{idealWeight}kg</Body>
      </ResultWrapper>
      <ResultWrapper>
        <Title>BMI</Title>
        <Body>{bmi}</Body>
      </ResultWrapper>
      <ResultWrapper>
        <Title>日本肥満学会基準の体型診断(体脂肪率を考慮しません)</Title>
        <Body>{evaluationJesso}</Body>
      </ResultWrapper>
      <ResultWrapper>
        <Title>体脂肪率を考慮した体型診断</Title>
        <Body>{evaluation}</Body>
      </ResultWrapper>
    </Wrapper>
  );
}

ShowResult.propTypes = {
  evaluationJesso: PropTypes.string.isRequired,
  evaluation: PropTypes.string.isRequired,
  bmi: PropTypes.number.isRequired,
}

ShowResult.defaultProps = {
  idealWeight: '64.3',
  evaluationJesso: "肥満(1度)",
  evaluation: "筋力系のアスリートに近い体型です。",
  bmi: 26.4,
}
