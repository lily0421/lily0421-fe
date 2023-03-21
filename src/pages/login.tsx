import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useOnLogin } from '../services/mutations/login';

const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    id: string;
    password: string;
  }>({ mode: 'onTouched' });
  const onLogin = useOnLogin();

  const onSubmit = async (data: any) => {
    onLogin.mutate(data);
  };

  const ERROR_ID_TEXT = '올바른 아이디 형식으로 입력해주세요.';
  const ERROR_PASSWORD_TEXT = '올바른 비밀번호 형식으로 입력해주세요.';

  const validateId = (value: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,30}$/;
    return regex.test(value) || ERROR_ID_TEXT;
  };

  const validatePassword = (value: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
    return regex.test(value) || ERROR_PASSWORD_TEXT;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextTitle>아이디</TextTitle>
      <TextInput
        type='text'
        hasError={errors.id}
        {...register('id', {
          required: true,
          minLength: {
            value: 5,
            message: ERROR_ID_TEXT,
          },
          maxLength: {
            value: 30,
            message: ERROR_ID_TEXT,
          },
          validate: validateId,
        })}
      />
      {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
      <TextTitle subTitle>비밀번호</TextTitle>
      <TextInput
        type='password'
        hasError={errors.password}
        {...register('password', {
          required: true,
          minLength: {
            value: 8,
            message: ERROR_PASSWORD_TEXT,
          },
          maxLength: {
            value: 30,
            message: ERROR_PASSWORD_TEXT,
          },
          validate: validatePassword,
        })}
      />
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      <LoginButton type='submit' disabled={Object.keys(errors).length > 0}>
        로그인
      </LoginButton>
    </Form>
  );
};

export default LoginPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

interface TextTitleProps {
  subTitle?: any;
}

const TextTitle = styled.div<TextTitleProps>`
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
  padding-top: ${({ subTitle }) => (subTitle ? '16px' : 0)};
`;

interface TextInputProps {
  hasError?: any;
}

const TextInput = styled.input<TextInputProps>`
  border: 1px solid #000;
  margin-top: 8px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ hasError }) => (hasError ? '#fdedee' : '#f7f7fa')};
`;

const ErrorText = styled.div`
  margin-top: 8px;
  font-weight: 400;
  font-size: 13px;
  color: #ed4e5c;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
