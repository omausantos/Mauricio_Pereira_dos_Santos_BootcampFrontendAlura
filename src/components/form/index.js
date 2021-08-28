import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import Text from '../foundation/Text';

const FormWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-right: 8px;
  padding-left: 8px;
`;

const Form = styled.form`
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 1px 25px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: auto;
  background-color: #fff;
  position: relative;
  ${breakpointsMedia({
    xs: css`
            padding-left: 18px;
            padding-right: 18px;
            padding-bottom: 18px;
            padding-top: 60px;
        `,
    md: css`
            padding-left: 45px;
            padding-right: 45px;
            padding-bottom: 45px;
            padding-top: 30px;
            max-width: ${({ theme }) => theme.breakpoints.md}px;
        `,
  })}
`;

const ButtonClose = styled.svg`
  position: absolute;
  cursor: pointer;
  ${breakpointsMedia({
    xs: css`
            right: 8px;
            top: 0;
        `,
    md: css`
            right: 16px;
            top: 16px;
        `,
  })}
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 16px;
  outline: 0;
  display: block;
  margin: 8px 0 32px;
`;

const Label = styled(Text)`
  display: 'block';

  ${breakpointsMedia({
    xs: css`
            font-size: 18px;
        `,
    md: css`
            font-size: 28px;
        `,
  })}
`;

const Button = styled.button`
  background: none;
  border: none;
  text-align: center;
  width: 100%;
  font-size: 28px;
  cursor: pointer;
  svg {
    margin-left: 8px;
  }
`;

export default function Formulario() {
  return (
    <FormWrapper>
      <Form>
        <ButtonClose
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="33" cy="33" r="22.5" transform="rotate(45 33 33)" stroke="#E9C46A" />
          <path d="M38.77 29.4814L35.2401 33.0113L38.6568 36.428L35.8963 39.1886L32.4795 35.7718L28.9497 39.3017L25.9855 36.3375L29.5154 32.8076L26.076 29.3683L28.8365 26.6077L32.2759 30.0471L35.8058 26.5172L38.77 29.4814Z" fill="black" />
        </ButtonClose>
        <Text
          tag="h4"
          cssinline={{
            textAlign: 'center',
            marginTop: '0',
            marginBottom: '24px',
            fontSize: {
              xs: '24px',
              md: '36px',
            },
          }}
        >
          ENVIE SUA MENSAGEM
        </Text>
        <Label
          tag="label"
          htmlFor="name"
        >
          Seu nome
        </Label>
        <Input
          tag="input"
          id="name"
        />
        <Label
          tag="label"
          htmlFor="email"
        >
          Seu e-mail
        </Label>
        <Input
          tag="input"
          id="email"
        />
        <Label
          tag="label"
          htmlFor="mensagem"
        >
          Sua mensagem
        </Label>
        <Input
          tag="textarea"
          id="mensagem"
          rows="5"
        />
        <Button>
          ENVIAR
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="22.5" stroke="#E9C46A" />
            <path d="M17.0943 15.568L29.8943 21.136V25.584L17.0943 31.12L15.4943 27.44L25.6063 23.344L15.4943 19.12L17.0943 15.568Z" fill="black" />
          </svg>
        </Button>
      </Form>
    </FormWrapper>
  );
}
