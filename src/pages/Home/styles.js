import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
`;
export const ContainerContent = styled.View`
  background-color: #fff;
  height: 100%;
`;

export const Header = styled.View`
  margin-top: 2%;
  padding: 30px 20px 0 20px;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
`;

export const BoxFilter = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  background: ${(props) => (props.active === true ? "#1FCC79" : "#F4F5F7")};
  width: 89px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
`;

export const TextButton = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;

  text-align: center;
  color: ${(props) => (props.active === true ? "#fff" : "#9FA5C0")};
`;

export const HeaderBorder = styled.View`
  border-bottom-color: #f4f5f7;
  border-bottom-width: 8px;
  width: 100%;
`;

export const BoxTasks = styled.View``;

export const BoxDate = styled.View`
  justify-content: center;
  height: 55px;
  padding: 0px 20px 0 20px;
  border-bottom-color: #f4f5f7;
  border-bottom-width: 2px;
`;

export const Date = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;

  letter-spacing: 0.5px;

  color: #2e3e5c;
`;

export const BoxListTask = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0px 20px 0 20px;
  border-bottom-color: #f4f5f7;
  border-bottom-width: 2px;
  flex-direction: row;
`;

export const BoxApproved = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextTask = styled.Text`
  width: 80%;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #2e3e5c;
  margin-left: 16px;
`;

export const BoxTotalTask = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 80;
  left: 20;
`;

export const TexTitleTotalTask = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;

  letter-spacing: 0.5px;

  color: #2e3e5c;
`;

export const TexTotalTask = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #1fcc79;
  margin-left: 6px;
`;

export const BoxFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 0px 20px 0 20px;
  background-color: #fff;
`;

export const BoxTextButton = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonFooter = styled.TouchableOpacity`
  width: 89px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
`;

export const TextButtonFooter = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: ${(props) => (props.active ? "#1FCC79" : "#9FA5C0")};
`;

export const CenteredModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CenteredModalCreateTask = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CenteredModalDropMenu = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: red;
`;

export const ModalDetailTask = styled.Modal``;

export const BoxModalContent = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(92, 92, 92, 0.6);
`;

export const BoxContent = styled.View`
  width: 85%;
  background-color: #fff;
  border-radius: 24px;
  padding: 30px 20px 30px 20px;
`;

export const BoxModalData = styled.View`
  margin-top: 16px;
`;

export const TextModalTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #3e5481;
`;

export const TextModalDate = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0.5px;
  color: #9fa5c0;
`;

export const BoxButtonModalGoBack = styled.View`
  align-items: center;
  margin-top: 34px;
`;

export const ButtonModalGoBack = styled.TouchableOpacity`
  width: 231px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background-color: #1fcc79;
`;

export const TextModalButtonGoBack = styled.Text`
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

export const BoxModalContentDropMenu = styled.View`
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  background-color: red;
  right: 0;
  top: 50%;
  z-index: 1;
  background-color: red;
`;

export const BoxContentDropMenu = styled.View`
  justify-content: center;
  width: 150px;
  background-color: #fff;
  padding: 20px 0 20px 20px;
`;

export const ButtonDropMenuEdit = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ButtonDropMenuDone = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ButtonDropMenuDelete = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const TextEdit = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  color: #9fa5c0;
  margin-left: 10px;
`;

export const TextDone = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  color: #39c4a5;
  margin-left: 10px;
`;

export const TextDelete = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 27px;
  color: #ff6464;
  margin-left: 10px;
`;
