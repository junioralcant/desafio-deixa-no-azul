import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { CommonActions } from "@react-navigation/native";
import { View, Text, ScrollView, Modal, StyleSheet } from "react-native";

import {
  Ionicons,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

import moment from "moment";
import "moment/locale/pt-br";

import CreateTask from "../../components/CreateTask";
import EditTask from "../../components/EditTask";

import api from "../../services/api";

import {
  Container,
  Header,
  BoxFilter,
  Button,
  TextButton,
  Title,
  HeaderBorder,
  BoxTasks,
  BoxDate,
  Date,
  BoxListTask,
  BoxApproved,
  TextTask,
  BoxFooter,
  TextButtonFooter,
  ButtonFooter,
  BoxTextButton,
  BoxTotalTask,
  TexTitleTotalTask,
  TexTotalTask,
  BoxModalContent,
  BoxModalData,
  TextModalTitle,
  TextModalDate,
  CenteredModal,
  BoxContent,
  ButtonModalGoBack,
  TextModalButtonGoBack,
  BoxButtonModalGoBack,
  CenteredModalCreateTask,
  BoxModalContentDropMenu,
  BoxContentDropMenu,
  ButtonDropMenuEdit,
  ButtonDropMenuDone,
  ButtonDropMenuDelete,
  TextEdit,
  TextDone,
  TextDelete,
} from "./styles";

export default function Home({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [taskCrud, setTaskCrud] = useState({});

  const [modalDatailsTaskVisible, setModalDateilsTaskVisible] = useState(false);
  const [modalCreateTaskVisble, setModalCreateTaskVisble] = useState(false);
  const [modalEditTaskVisble, setEditTaskVisble] = useState(false);
  const [tasksDone, setTasksDone] = useState(false);
  const [modalDropMenu, setModalDropMenu] = useState(false);

  const [buttonAll, setButtonAll] = useState(true);
  const [buttonToDo, setButtonToDo] = useState(false);
  const [buttonDone, setButtonDone] = useState(false);

  useEffect(() => {
    try {
      async function loadTesks() {
        setButtonAll(true);
        setButtonToDo(false);
        setButtonDone(false);

        const response = await api.get("/task");

        setTasks(response.data.data);
      }

      loadTesks();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      async function loadTesksDone() {
        const response = await api.get("/task?completed=true");

        setTasksDone(response.data.data);
      }

      loadTesksDone();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function taskDone(id) {
    await api.put(`/task/${id}`, {
      completed: true,
    });

    const response = await api.get("/task");

    setTasks(response.data.data);
    setModalDropMenu(false);
  }

  async function taskDelete(id) {
    await api.delete(`/task/${id}`);

    const response = await api.get("/task");

    setTasks(response.data.data);
    setModalDropMenu(false);
  }

  async function handleButtonAll() {
    setButtonAll(true);
    setButtonToDo(false);
    setButtonDone(false);

    const response = await api.get("/task");

    setTasks(response.data.data);
  }

  async function handleButtonToDo() {
    setButtonAll(false);
    setButtonToDo(true);
    setButtonDone(false);

    const response = await api.get("/task?completed=false");

    setTasks(response.data.data);
  }

  async function handleButtonDone() {
    setButtonAll(false);
    setButtonToDo(false);
    setButtonDone(true);

    const response = await api.get("/task?completed=true");

    setTasks(response.data.data);
  }

  async function getTesk(id) {
    const response = await api.get(`/task/${id}`);

    setTask(response.data.data);
    setModalDateilsTaskVisible(true);
    setModalDropMenu(false);
    setTaskCrud({});
  }

  function activeDropMenu(task) {
    setTaskCrud(task);
    setModalDropMenu(true);
  }

  function closeModalDropMenu() {
    if (modalDropMenu === true) {
      setModalDropMenu(false);
    }
    setTaskCrud({});
  }

  async function exit() {
    await AsyncStorage.removeItem("@TOLIGADO:token");
    await AsyncStorage.removeItem("userId");
    await api.post("/user/logout");

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "SignIn",
          },
        ],
      })
    );
  }

  return (
    <>
      {modalDropMenu === true && (
        <BoxModalContentDropMenu>
          <BoxContentDropMenu style={styles.modalView}>
            <View>
              <ButtonDropMenuEdit onPress={() => setEditTaskVisble(true)}>
                <FontAwesome name="edit" size={20} color="#9fa5c0" />
                <TextEdit>Editar</TextEdit>
              </ButtonDropMenuEdit>
            </View>
            <View>
              <ButtonDropMenuDone onPress={() => taskDone(taskCrud._id)}>
                <Ionicons name="checkmark-circle" size={21} color="#1FCC79" />
                <TextDone>Concluir</TextDone>
              </ButtonDropMenuDone>
            </View>
            <View>
              <ButtonDropMenuDelete onPress={() => taskDelete(taskCrud._id)}>
                <MaterialIcons
                  name="delete-outline"
                  size={21}
                  color="#ff6464"
                />
                <TextDelete>Excluir</TextDelete>
              </ButtonDropMenuDelete>
            </View>
          </BoxContentDropMenu>
        </BoxModalContentDropMenu>
      )}

      <Container onTouchStart={() => closeModalDropMenu()}>
        <Header>
          <Title>Filtrar</Title>
          <BoxFilter>
            <Button active={buttonAll} onPress={handleButtonAll}>
              <TextButton active={buttonAll}>Todas</TextButton>
            </Button>
            <Button active={buttonToDo} onPress={handleButtonToDo}>
              <TextButton active={buttonToDo}>A fazer</TextButton>
            </Button>
            <Button active={buttonDone} onPress={handleButtonDone}>
              <TextButton active={buttonDone}>Feitas</TextButton>
            </Button>
          </BoxFilter>
        </Header>

        <HeaderBorder>
          <Text></Text>
        </HeaderBorder>

        <View style={[{ maxHeight: 400 }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BoxTasks>
              <BoxDate>
                <Date>
                  {moment(new window.Date()).locale("pt-br").format("ll")}
                </Date>
              </BoxDate>
              {tasks.map((task) => (
                <BoxListTask
                  key={task._id}
                  onLongPress={(event) => activeDropMenu(task)}
                  onPress={() => {
                    getTesk(task._id);
                  }}
                >
                  <BoxApproved>
                    {task.completed === true ? (
                      <Ionicons
                        name="checkmark-circle"
                        size={23}
                        color="#1FCC79"
                      />
                    ) : (
                      <Entypo name="circle" size={20} color="black" />
                    )}
                    <TextTask numberOfLines={1}>{task.description}</TextTask>
                  </BoxApproved>

                  <Ionicons
                    name="ellipsis-vertical"
                    size={20}
                    color="#9FA5C0"
                  />
                </BoxListTask>
              ))}
            </BoxTasks>
          </ScrollView>
        </View>

        <BoxFooter>
          <BoxTotalTask>
            <TexTitleTotalTask>Total de tarefas:</TexTitleTotalTask>
            <TexTotalTask>
              {tasksDone.length}/{tasks.length}
            </TexTotalTask>
          </BoxTotalTask>
          <ButtonFooter onPress={handleButtonAll}>
            <BoxTextButton>
              <Feather name="home" size={20} color="#1FCC79" />
              <TextButtonFooter active>Home</TextButtonFooter>
            </BoxTextButton>
          </ButtonFooter>
          <ButtonFooter onPress={() => setModalCreateTaskVisble(true)}>
            <Ionicons
              style={[{ position: "absolute", bottom: 25 }]}
              name="add-circle-sharp"
              size={58}
              color="#1FCC79"
            />
            <BoxTextButton>
              <TextButtonFooter style={[{ position: "absolute", top: 0 }]}>
                Adicionar
              </TextButtonFooter>
            </BoxTextButton>
          </ButtonFooter>
          <ButtonFooter onPress={exit}>
            <BoxTextButton>
              <FontAwesome name="sign-out" size={20} color="#9FA5C0" />
              <TextButtonFooter>Logout</TextButtonFooter>
            </BoxTextButton>
          </ButtonFooter>
        </BoxFooter>
      </Container>

      <CenteredModal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalDatailsTaskVisible}
        >
          <BoxModalContent>
            <BoxContent style={styles.modalView}>
              <View>
                <BoxModalData>
                  <TextModalTitle>Descrição</TextModalTitle>

                  <TextModalDate>{task.description}</TextModalDate>
                </BoxModalData>

                <BoxModalData>
                  <TextModalTitle>Id</TextModalTitle>

                  <TextModalDate>{task._id}</TextModalDate>
                </BoxModalData>

                <BoxModalData>
                  <TextModalTitle>Data de criação</TextModalTitle>

                  <TextModalDate>
                    {moment(task.createdAt).format("DD/MM/YYYY")}
                  </TextModalDate>
                </BoxModalData>

                <BoxModalData>
                  <TextModalTitle>Última atualização</TextModalTitle>

                  <TextModalDate>
                    {" "}
                    {moment(task.updatedAt).format("DD/MM/YYYY")}
                  </TextModalDate>
                </BoxModalData>

                <BoxModalData>
                  <TextModalTitle>Status</TextModalTitle>

                  <TextModalDate>
                    {task.completed === true ? "Finalizada" : "A fazer"}
                  </TextModalDate>
                </BoxModalData>
              </View>
              <BoxButtonModalGoBack>
                <ButtonModalGoBack
                  onPress={() => setModalDateilsTaskVisible(false)}
                >
                  <TextModalButtonGoBack>
                    Voltar para Home
                  </TextModalButtonGoBack>
                </ButtonModalGoBack>
              </BoxButtonModalGoBack>
            </BoxContent>
          </BoxModalContent>
        </Modal>
      </CenteredModal>

      <CenteredModalCreateTask>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalCreateTaskVisble}
        >
          <CreateTask navigation={navigation} />
        </Modal>
      </CenteredModalCreateTask>

      <CenteredModalCreateTask>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEditTaskVisble}
        >
          <EditTask navigation={navigation} task={taskCrud} />
        </Modal>
      </CenteredModalCreateTask>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
