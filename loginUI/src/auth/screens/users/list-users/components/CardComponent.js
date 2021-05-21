
import React from 'react';
import {View, Text} from 'react-native';
const CardComponent = (props) => {
    const {data} = props;
  return <View>
      <Text>{data.first_name}</Text>
  </View>
}

export default CardComponent;
