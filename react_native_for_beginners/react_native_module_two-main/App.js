import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

const App = () => {

  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setCurrentOperator] = useState("")
  const [previousValue, setCurrentPreviousValue] = useState("")

  const handleNumber = (value) => {
    if (currentValue === "0")
      setCurrentValue(value);
    else
      setCurrentValue(currentValue+''+value);
  };

  const handleEqual = () => {

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    if (operator === "/") {
      setCurrentValue(previous / current);
      setCurrentPreviousValue('');
      setCurrentOperator('');
    }

    if (operator === "*") {
      setCurrentValue(previous * current);
      setCurrentPreviousValue('');
      setCurrentOperator('');
    }

    if (operator === "+") {
      setCurrentValue(previous + current);
      setCurrentPreviousValue('');
      setCurrentOperator('');
    }

    if (operator === "-") {
      setCurrentValue(previous - current);
      setCurrentPreviousValue('');
      setCurrentOperator('');
    }

  };

  handleTap = (type, value) => {

    if (type === "number")
      handleNumber(value);
    else if (type === "operator") {
      setCurrentPreviousValue(currentValue);
      setCurrentValue('0');
      setCurrentOperator(value);
    }
    else if (type === "equal") {
      handleEqual();
    }
    else if (type === "clear") {
      setCurrentPreviousValue('');
      setCurrentValue('0');
      setCurrentOperator('');
    }
    else if (type === "posneg")
      setCurrentValue(`${parseFloat(currentValue) * -1}`);

    else if (type === "percentage")
      setCurrentValue(`${parseFloat(currentValue) * 0.01}`);

  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(currentValue).toString()}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap("number", 0)}
          />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button
            text="="
            theme="accent"
            onPress={() => handleTap("equal")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );

}

export default App;