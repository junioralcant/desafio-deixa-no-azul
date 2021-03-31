import React, { useState } from "react";
import {
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";

import {
  Container,
  BoxInput,
  Input,
  Title,
  BoxTitle,
  BoxButton,
  Button,
  TextButton,
  BoxFooter,
  ButtonGoBack,
  TextButtonGoBack,
  BoxLoading,
  TextErro,
  BoxInputPassword,
  InputPassword,
} from "./styles";

export default function SignIn({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(true);

  async function handlerSignUp() {
    if (!name || !email || !age || !password) {
      setError("Preencha todos os campos para continuar");
    } else {
      try {
        setLoading(true);

        await api.post("/user/register", {
          name,
          email,
          password,
          age,
        });

        setLoading(false);

        alert("Sua conta foi criada com sucessso");
        navigation.navigate("SignIn");
      } catch (error) {
        setError(error.response.data);
        setLoading(false);
      }
    }
  }

  return (
    <ScrollView style={[{ backgroundColor: "#fff" }]}>
      <Container>
        <BoxTitle>
          <Title>Cadastre sua conta</Title>
        </BoxTitle>

        <BoxInput>
          <TextErro>{error !== 0 && error}</TextErro>

          <Input placeholder="Nome" value={name} onChangeText={setName} />

          <Input
            placeholder="E-mail"
            autoCapitalize={"none"}
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder="Idade"
            autoCorrect={false}
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />

          <BoxInputPassword>
            <InputPassword
              placeholder={"Password"}
              autoCapitalize={"none"}
              autoCorrect={false}
              secureTextEntry={visiblePassword}
              value={password}
              onChangeText={setPassword}
            />
            {visiblePassword === true ? (
              <TouchableOpacity onPress={() => setVisiblePassword(false)}>
                <Text>
                  <Feather name="eye" size={24} color="#9FA5C0" />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setVisiblePassword(true)}>
                <Text>
                  <Feather name="eye-off" size={24} color="#9FA5C0" />
                </Text>
              </TouchableOpacity>
            )}
          </BoxInputPassword>
        </BoxInput>

        <BoxButton>
          {loading ? (
            <BoxLoading>
              <ActivityIndicator size="large" color="#1fcc79" />
            </BoxLoading>
          ) : (
            <Button onPress={handlerSignUp}>
              <TextButton>SignUp</TextButton>
            </Button>
          )}
        </BoxButton>

        <BoxFooter>
          <ButtonGoBack onPress={() => navigation.navigate("SignIn")}>
            <TextButtonGoBack>Voltar para login</TextButtonGoBack>
          </ButtonGoBack>
        </BoxFooter>
      </Container>
    </ScrollView>
  );
}
