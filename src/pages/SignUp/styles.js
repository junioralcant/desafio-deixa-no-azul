import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
`;

export const BoxTitle = styled.View`
  position: absolute;
  width: 100%;
  height: 32px;
  top: 151px;
`;

export const Title = styled.Text`
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;

  text-align: center;
  letter-spacing: 0.5px;

  color: #2e3e5c;
`;

export const TextErro = styled.Text`
  align-self: center;
  text-align: center;
  color: #ff4d4d;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const BoxInput = styled.View`
  margin-top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 20px 0 20px;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: 56px;
  background-color: #fff;
  margin: 0 0 15px 0;
  border-radius: 30px;
  padding-left: 15px;
  border: 1px solid #d0dbea;
`;

export const TextForgotPassword = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  text-align: right;
  letter-spacing: 0.5px;

  color: #2e3e5c;
`;

export const BoxButton = styled.View`
  margin-top: 50%;
  align-items: center;
  width: 100%;
  padding: 30px 20px 0 20px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 55px;
  border-radius: 30px;
  margin-top: -44%;
  background: #1fcc79;
  border-radius: 32px;
`;

export const BoxLoading = styled.View`
  width: 95%;
  height: 55px;
  border-radius: 30px;
  margin-top: -44%;
  border-radius: 32px;
`;

export const TextButton = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #fff;
`;

export const BoxFooter = styled.View`
  align-items: center;
  width: 100%;
  padding: 30px 20px 0 20px;
`;

export const TextNoAccount = styled.Text`
  height: 25px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  letter-spacing: 0.5px;

  color: #2e3e5c;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
  height: 25px;
  margin-top: -20%;
`;

export const TextButtonGoBack = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;

  text-align: right;
  color: #1fcc79;
`;

export const BoxInputPassword = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: 55px;
  background-color: #fff;
  margin: 0 0 15px 0;
  border-radius: 30px;
  padding-left: 15px;
  border: 1px solid #d0dbea;
`;

export const InputPassword = styled.TextInput`
  width: 85%;
  position: relative;
  height: 55px;
`;
