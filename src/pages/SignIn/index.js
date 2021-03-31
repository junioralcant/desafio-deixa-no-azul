import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { CommonActions } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";

import {
  Container,
  BoxInput,
  Input,
  InputPassword,
  Title,
  BoxTitle,
  ForgotPassword,
  TextForgotPassword,
  BoxButton,
  Button,
  TextButton,
  BoxFooter,
  TextNoAccount,
  ButtonRegister,
  TextButtonRegister,
  TextErro,
  BoxLoading,
  BoxInputPassword,
} from "./styles";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("userId").then((userId) => {
      if (userId) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "Home",
              },
            ],
          })
        );
      }
    });
  }, [navigation]);

  async function handleSignInPress() {
    if (!password || !email) {
      setError("Preencha todos os campos para continuar");
    } else {
      try {
        setLoading(true);

        const response = await api.post("/user/login", {
          email,
          password,
        });

        await AsyncStorage.setItem("@DEIXANOAZUL:token", response.data.token);
        await AsyncStorage.setItem("userId", response.data.user._id);

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "Home",
              },
            ],
          })
        );

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Houve um problema com o login, verifique sua credenciais");
        setLoading(false);
      }
    }
  }

  return (
    <ScrollView style={[{ backgroundColor: "#fff" }]}>
      <Container>
        <BoxTitle>
          <Title>Bem-vindo(a)!</Title>
        </BoxTitle>
        <BoxInput>
          <TextErro>{error !== 0 && error}</TextErro>
          <Input
            placeholder="Email"
            autoCapitalize={"none"}
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
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
        <ForgotPassword>
          <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
        </ForgotPassword>
        <BoxButton>
          {loading ? (
            <BoxLoading>
              <ActivityIndicator size="large" color="#1fcc79" />
            </BoxLoading>
          ) : (
            <Button onPress={handleSignInPress}>
              <TextButton>Login</TextButton>
            </Button>
          )}
        </BoxButton>
        <BoxFooter>
          <View>
            <TextNoAccount>Não tem uma conta?</TextNoAccount>
          </View>

          <View>
            <ButtonRegister onPress={() => navigation.navigate("SignUp")}>
              <TextButtonRegister>Cadastre-se</TextButtonRegister>
            </ButtonRegister>
          </View>
        </BoxFooter>
      </Container>
    </ScrollView>
  );
}
