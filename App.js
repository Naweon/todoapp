import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import Subtitle from './src/components/Subtitle';
import Input from './src/components/Input';
import Listitem from './src/components/Listitem';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      todos:[
        {
          title:'공부'
        },
        {
          title:'기상'
        },
      ]
    }
  }

  _maketodoItem = ({item,index}) => {
    return (
      <Listitem name = {item.title} />
    )
    }
  _changeText=(value)=>{
    this.setState({inputValue:value});
  }
  _addTodoItem=() =>{
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos;

      const newTodo = {title : this.state.inputValue};

      this.setState({
        inputValue:'',
        todos : prevTodo.concat(newTodo)
      });
  }
  }
  render(){

    const { todos, inputValue } = this.state
    const { _maketodoItem, _changeText, _addTodoItem } = this

  return (
    <View style={styles.container}>
      <View style={styles.headercenter}>
      <Header/>
      </View>
      <View style={styles.subtitleposion}>
        <Subtitle title="해야 할 일"/>
        <Input
          value ={inputValue}
          changeText = {_changeText}
          addTodo = {_addTodoItem}/>
      </View>
      <View style={styles.subtitleposion}>
        <Subtitle title="해야 할 일 목록"/>
        
        <FlatList
          data ={todos}
          renderItem = {_maketodoItem}
          keyExtractor ={(item,index)=>{return index.toString()}}/>
      
      
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  headercenter: {
    alignItems:"center",
  },
  subtitleposion: {
    marginLeft:50,
  },
});