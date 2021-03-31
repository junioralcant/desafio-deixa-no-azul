import styled from "styled-components/native";

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  text-align: center;
  color: #2e3e5c;
  margin-bottom: 20px;
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
  height: 55px;
  background-color: #fff;
  margin: 0 0 15px 0;
  border-radius: 30px;
  padding-left: 15px;
  border: 1px solid #d0dbea;
`;

export const BoxModalContent = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: rgba(92, 92, 92, 0.6);
`;

export const BoxContent = styled.View`
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 40px 20px 30px 20px;

  position: absolute;
`;

export const BoxModalData = styled.View`
  margin-top: 16px;
`;

export const BoxButtonModalCreate = styled.View`
  align-items: center;
  margin-top: 34px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxLoading = styled.View`
  margin-top: 20px;
`;

export const TextErro = styled.Text`
  align-self: center;
  text-align: center;
  color: #ff4d4d;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonModalCreate = styled.TouchableOpacity`
  width: 156px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background-color: #1fcc79;
`;

export const ButtonModalCanceled = styled.TouchableOpacity`
  width: 156px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background-color: #f4f5f7;
`;

export const TextModalButtonCreate = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  flex: none;
  flex-grow: 0;
  margin: 10px 0px;
`;

export const TextModalButtonCanceled = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #2e3e5c;
  flex: none;
  flex-grow: 0;
  margin: 10px 0px;
`;
