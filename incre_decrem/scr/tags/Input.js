import React from 'react';
import {TextInput, Text, View} from 'react-native';


export const Input=({label, value, onChangeText, placeholder, secureTextEntry, ref})=>{
    const {containerStyle, inputStyle, labelStyle} = styles
    return(
     <View>
         <Text>{label}</Text>
         <TextInput 
         secureTextEntry={secureTextEntry}
         placeholder={placeholder}
         autoCorrect={false}
         value={value}
         ref={ref}
         style={inputStyle}
         onChangeText={onChangeText}
         style={{ height: 40, width:150}}
         />
     </View>
    )
}

const styles={
    inputStyle:{
        color: '#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    
}