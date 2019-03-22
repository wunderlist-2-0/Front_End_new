import React, { Component } from 'react'
import axios from "axios";


export default class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: '',
      task: '',
      notes: '',
      setDate: '',
      completed: false
    }
  }
    componentDidMount() {
    let token = localStorage.getItem('token');
    axios
        .get(`https://wunderlist-buildweek.herokuapp.com/todos/list`, { headers: {'Authorization': token}})
        .then(response => {
          console.log('axios get', response.data);
          this.setState({ todos: response.data })
        })
        .catch(err => {
          console.log(err)
        })
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  addTodo = () => {
    let token = localStorage.getItem('token');
    const todo = { title: this.state.title, task: this.state.task, notes: this.state.notes, setDate: this.state.setDate, completed: this.state.completed };
    axios
        .post(`https://wunderlist-buildweek.herokuapp.com/todos/list`, { headers: {'Authorization': token}}, todo)
        .then(todo => {
          console.log('POST todo', todo)
          this.setState({ todos: todo.data })
        })
        .catch(e => {
          console.log(e)
        })
  };
  deleteTodo = id => {
    let token = localStorage.getItem('token');
    axios
        .delete(`https://wunderlist-buildweek.herokuapp.com/todos/delete/${id}`, { headers: {'Authorization': token}})
        .then(res => {
          console.log('DELETE user', res)
          this.setState({ todos: res.data })
        })
        .catch(e => {
          console.log(e)
        })
  };
updateTodo = id => {
  let token = localStorage.getItem('token');
  axios
      .put(`https://wunderlist-buildweek.herokuapp.com/todos/edit/${id}`, { headers: {'Authorization': token}})
      .then(res => {
        console.log('PUT user', res);
        this.setState({ todos: res.data })
      })
      .catch(e => {
        console.log(e)
      })
}
    render() {
    return (
      <div>
        {this.state.todos.map(todo => <div>{todo}</div>)}
      </div>
    )
  }
}

//   //{name: this.state.name, age: this.state.age, email: this.state.email})
//   //this.setState({ notes: response.data })
//
//   render() {
//     return (
//         <div className="App">
//           <Friends
//               delete={this.deleteFriends}
//               notes={this.state.notes}
//               update={this.updateFriend}
//           />
//           <Form
//               saveFriend={this.saveFriend}
//               handleInput={this.handleInput}
//               name={this.state.name}
//               email={this.state.email}
//               age={this.state.age}
//           />
//         </div>
//     );
//   }
// }
//
// export default App;