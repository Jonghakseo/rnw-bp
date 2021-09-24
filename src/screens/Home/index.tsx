import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { ReactElement } from "react";
import { Button, Text } from "react-native";
import { Container } from "../../components";
import { StackParams } from "../../navigation";
import { API_URL, ENV } from "../../env";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/slices/auth";

type NavigationProps = StackNavigationProp<StackParams, "Home">;

export function Home(): ReactElement {
  const { navigate } = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth, shallowEqual);

  return (
    <Container>
      <Text>Home Screen</Text>
      <Text>{API_URL}</Text>
      <Text>{ENV}</Text>
      <Button
        testID="go to detail button"
        title="Go to Detail"
        onPress={() => navigate("Details", { data: "🤪" })}
      />
      <Text>{token}</Text>
      <Button
        testID="get token test"
        title="get token"
        onPress={() => dispatch(authActions.getToken())}
      />
    </Container>
  );
}
