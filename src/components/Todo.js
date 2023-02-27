
import React from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ListTodo from "./ListTodo";



class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: [],
            inputTask: ''
        };
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }



    handleSubmit(event) {
        if (this.state.inputTask) {
            this.setState({todolist :[...this.state.todolist, this.state.inputTask] })
                  this.setState({inputTask: ''})
        }
        event.preventDefault();
    }

    removeTask(i) {
        console.log('remove index', i)
        let array = this.state.todolist;
        array.splice(i, 1);
        this.setState({todolist : array})
    }

    updateTask(i, updateVal) {
        console.log('update index', i)
        let array = this.state.todolist;
        array[i] = updateVal;
        this.setState({todolist : array})
    }

    updateInputValue(event) {
        console.log(event.target.value)
        this.setState({inputTask: event.target.value});
      }

    render() {
        return <>
            <Container fluid>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Enter Your Tasks</Form.Label>
                                <Form.Control value={this.state.inputTask} onChange={this.updateInputValue} type="text" placeholder="Please enter your tasks" />
                            </Form.Group>
                            <Button variant="primary" type="submit" value="submit">
                                Add Todo
                            </Button>
                        </Form>
                    </Col>
                    {/* LIST TODOs */}
                </Row>
                <h3>Todo List</h3>
                {this.state.todolist.length > 0 ? this.state.todolist.map((v, i) => <ListTodo key={i} uniqueId={i} updateTask={this.updateTask} removeTask={this.removeTask} task={v} />) : 'No Task(s) found'}
                <Row>

                </Row>
            </Container>
        </>
    }
}

export default Todo;