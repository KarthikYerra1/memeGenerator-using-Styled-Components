import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px;
  }
`
export const MainHeading = styled.h1`
  font-family: 'Open Sans';
  font-size: ${props => (props.sm ? '16px' : '20px')};
  font-weight: bold;
  color: #35469c;
  text-align: center;
  display: ${props => (props.sm ? 'inline' : 'none')};
  @media screen and (min-width: 768px) {
    font-size: 40px;
    display: ${props => (props.sm ? 'none' : 'inline')};
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  order: 2;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 30px;
    order: 1;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #7e858e;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px 30px 10px 20px;
  color: #5a7184;
  margin-top: 8px;
`

export const Option = styled.option`
  height: 25px;
  width: 100%;
  font-size: 16px;
  font-family: 'Open Sans';
  padding: 10px 30px 10px 20px;
  color: #5a7184;
`

export const Button = styled.button`
  height: 40px;
  width: 130px;
  background-color: #0b69ff;
  border-radius: 5px;
  border-style: none;
  color: #fff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  outline: none;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans';
  background-size: cover;
  background-image: url('${props => props.bgImage}');
  order: 1;
  width: 100%;
  height: 60vh;
  @media screen and (min-width: 768px) {
    order: 2;
    width: 50%;
  }
`

export const Text = styled.p`
  color: #fff;
  text-align: center;
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
`
