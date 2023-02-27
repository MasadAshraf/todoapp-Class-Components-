import React from "react";
import { Button, Form, InputGroup } from 'react-bootstrap';


class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            editMode: 0,
            updateVal: ''
        };
        this.toogleEditMode = this.toogleEditMode.bind(this)
    }
    
    
    toogleEditMode () {
        this.setState({
            editMode : !this.state.editMode
        });
        console.log('toogle edit mode')
    }


    showModeRender() {
        return (
            <li style={{paddingBottom : '10px'}}>                
            {this.props.task}
        <Button onClick={() => this.props.removeTask(this.props.uniqueId)} style={{float : 'right'}} variant='warning' size="sm"> Remove</Button>

        <Button onClick={this.toogleEditMode} style={{float : 'right'}} variant='primary' size="sm"> Edit</Button>
        </li>
        )
    }
    
  

     editModeRender() {
        return (
            <>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Current Value : {this.props.task}
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder='Please enter updated task'
              value={this.state.updateVal}
              onChange={e => this.setState({updateVal : e.target.value}) }
            />
          </InputGroup>
          <Button onClick={() => {
            this.props.updateTask(this.props.uniqueId,this.state.updateVal)
            this.toogleEditMode()
          } } variant='primary' size="sm">Update</Button>
          <Button onClick={this.toogleEditMode} variant='primary' size="sm">Cancel</Button>
          </>
        )
    }

    render() {
        return <>
           {this.state.editMode ? this.editModeRender() : this.showModeRender()}
        </>
    }
}

export default ListTodo;