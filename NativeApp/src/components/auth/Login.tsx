import React, { useState } from "react";
import { login } from "../../../assets";
import { Loginstyle } from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Login = () => {
  const [number1, setNumber1] = useState("+91");
  const [password, setPassword] = useState("");
  const [number2, setNumber2] = useState("+91");

  const handleTextChange1 = (text: string) => {
    if (text.match(/^\+91\d*$/)) {
      setNumber1(text);
    }
  };

  const handleTextChange2 = (text: string) => {
    if (text.match(/^\+91\d*$/)) {
      setNumber2(text);
    }
  };

  return (
    <>
      <ImageBackground  source={login} style={{ flex: 1,flexDirection:'column',position:'relative',top:9 }}>
        <View style={Loginstyle.textpad}>
          <Text style={{ fontSize: 22, color: "white" }}>Welcome Back!</Text>
          <Text style={{ fontSize: 44, fontWeight: "bold", color: "white" }}>
            Login
          </Text>
        </View>

        <View style={Loginstyle.textpad}>
          <Text
            style={{
              fontSize: 18,
              position: "relative",
              top: 60,
              left: 23,
              fontWeight: "bold",
              color: "#4857E9",
            }}
          >
            Enter Mobile Number 2
          </Text>
          <TextInput
            style={Loginstyle.input}
            placeholder="Enter Mobile Number"
            keyboardType="numeric"
            onChangeText={(text) => handleTextChange2(text)}
            value={number2}
            placeholderTextColor="gray"
            selectionColor="red"
          />
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="white"
          />
        </View>

        <View>
          <TouchableOpacity style={Loginstyle.button}>
            <Text style={Loginstyle.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default Login;
