import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import {Header} from './scr/tags/Header';
import {Button} from './scr/tags/Button';
import {Card} from './scr/tags/Card'
import {CardSection} from './scr/tags/CardSection';
import {Input} from './scr/tags/Input';
export default class App extends React.Component {
 state={
   value:0,
//    array:[]  
 }

// forArray=[];
// onTodoAdd(){
//   let todo=this.refs.fortodo.getvalue();
//   this.forArray=this.forArray.concat(todo);
//   this.setState({
//     array:this.forArray
//   })
// }
 onpressbtn(){
   this.setState({value:this.state.value+1});
 }
 ondecbtn(){
   this.setState({value:this.state.value-1});
 }
  render() {
    return (
      <View>
        <Card>
          <CardSection>
        <Text>{this.state.value}</Text>
        </CardSection>
    

        
          <CardSection>
        {/*<Text style={styles.textcolor}>Hello world</Text>*/}
        {/*<Header text={'my name is usman'} />*/}
        
         <Button onPress={this.onpressbtn.bind(this)}>
           increment
           </Button>
           <Button onPress={this.ondecbtn.bind(this)}>Decrement</Button>
         </CardSection>
         
         
           {/*<CardSection>
            
             <Input
             placeholder="enter todo"
             label="Todo"
             ref="fortodo"
            
             /></CardSection>
             <CardSection>
             <Button onPress={this.onTodoAdd.bind(this)}>Add Todo</Button>
             </CardSection>*/}

         
      
          {/*<CardSection>
           { this.state.array.map((list,i)=><Text key={array.i} id={array.id}>{list}</Text>)}
          </CardSection>*/}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcolor:{
    color: 'red'
  }
});
