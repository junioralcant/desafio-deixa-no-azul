import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import api from "../../services/api";

import {
  BoxModalContent,
  BoxModalData,
  BoxButtonModalCreate,
  BoxContent,
  ButtonModalCreate,
  ButtonModalCanceled,
  Input,
  Title,
  TextModalButtonCanceled,
  TextModalButtonCreate,
  BoxLoading,
  TextErro,
} from "./styles";

export default function CreateTask({ navigation, task }) {
  const [description, setDescription] = useState(task.description);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleEditTask() {
    if (!description) {
      setError("Preenchao campo para continuar");
    } else {
      try {
        setLoading(true);

        await api.put(`/task/${task._id}`, {
          description,
        });

        setLoading(false);

        navigation.reset({
          index: 1,
          routes: [
            {
              name: "Home",
              state: {
                routes: [{ modalCreateTaskVisble: false }],
              },
            },
          ],
        });

        alert("Sua tarefa foi editada com sucesso");
      } catch (error) {
        console.log(error.response.data);
        setLoading(false);
      }
    }
  }
  return (
    <BoxModalContent>
      <BoxContent style={styles.modalView}>
        <Title>Editar tarefa</Title>

        <TextErro>{error !== 0 && error}</TextErro>
        <View>
          <BoxModalData>
            <Input
              placeholder="Descrição"
              value={description}
              onChangeText={setDescription}
            />
          </BoxModalData>
        </View>
        {loading ? (
          <BoxLoading>
            <ActivityIndicator size="large" color="#1fcc79" />
          </BoxLoading>
        ) : (
          <BoxButtonModalCreate>
            <ButtonModalCanceled
              onPress={() =>
                navigation.reset({
                  index: 1,
                  routes: [
                    {
                      name: "Home",
                      state: {
                        routes: [{ modalCreateTaskVisble: false }],
                      },
                    },
                  ],
                })
              }
            >
              <TextModalButtonCanceled>Cancelar</TextModalButtonCanceled>
            </ButtonModalCanceled>
            <ButtonModalCreate onPress={handleEditTask}>
              <TextModalButtonCreate>Salvar</TextModalButtonCreate>
            </ButtonModalCreate>
          </BoxButtonModalCreate>
        )}
      </BoxContent>
    </BoxModalContent>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
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
