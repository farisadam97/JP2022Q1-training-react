import React from "react";
import UserData from '../data/data' 
import UserList from "../components/user.component";
import Todos from "../components/todos.component";

export class Index extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                userData : [],
                todosData:[],
                inputNameUser:'',
                userId:'',
                inputTodo:''
            }
    }
    componentDidMount() { 
        UserData.map(user => this.setState( {userData : [...this.state.userData,user]}))
    }

    inputChange = (event) =>{
        this.setState({inputNameUser:event.currentTarget.value})
    }

    inputTodoChange = (event) =>{
        this.setState({inputTodo:event.currentTarget.value})
    }

    async addUser () {
        if(this.state.inputNameUser !== ""){
            this.setState({userData:[
                ...this.state.userData,
                {
                    id:this.state.userData.length+1,
                    name:this.state.inputNameUser,
                    data:[]
                }
            ]})
        }
    }

    async addTodo () {
        if(this.state.inputTodo !== "" ) {
            this.setState({
                todosData:[
                    ...this.state.todosData,
                    this.state.inputTodo
                ]
            })
        }
    }
    
    clickHandler = (e) => {
        e.preventDefault()
        this.addUser()
        .then(this.setState({inputNameUser:''}))
    }

    clickHanldeTodo = (e) => {
        e.preventDefault()
        this.addTodo()
        .then(this.setState({inputTodo:''}))
    }

    render(){
        return(
            <div className="px-4">
                <h1 className="text-center">Todo List</h1>
                <div className="row mt-4 px-4">
                    <div className="col-6">
                        <h2 className="text-center"> User List </h2>
                        <div className="row">
                            <div className="col-8">
                                <input type="text" className="form-control" value={this.state.inputNameUser} onChange={this.inputChange} placeholder="Add user name" /> 
                            </div>
                            <div className="col-4">
                                <button onClick={this.clickHandler} className="btn btn-primary">Add User</button>
                            </div>
                        </div>
                        {
                            this.state.userData.map(user => (
                                <UserList key={user.id} data={user}>
                                    <button className="btn btn-warning" >View Todos</button>
                                </UserList>
                            ))
                        }
                    </div>
                    <div className="col-6">
                        <h2 className="text-center"> Todos List </h2>
                        <div className="row">
                            <div className="col-8">
                                    <input type="text" className="form-control" value={this.inputTodo} onChange={this.inputTodoChange} placeholder="Add user name" /> 
                            </div>
                            <div className="col-4">
                                <button onClick={this.clickHanldeTodo} className="btn btn-primary">Add Todos</button>
                            </div>
                        </div>
                        <Todos data={this.state.todosData}/>
                    </div>
                </div>
            </div>
        )
    }
}