import React,{useState} from "react";
import { View, Text, Button } from "react-native";

const CounterScreen = () => {
  const [counter,setCounter]=useState(0); // instead use this 
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
        //Dont do this
        //   counter++;
          setCounter(counter+1);
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
            setCounter(counter-1); //it will re-render this by setting new value of counter
        }}
      />

      <Text>Current Count:{counter}</Text>
    </View>
  );
};

export default CounterScreen;
