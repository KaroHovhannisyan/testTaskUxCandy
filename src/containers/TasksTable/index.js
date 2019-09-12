import React, { Component } from 'react';
import TaskCreatorForm from "../../components/TaskCreatorForm";
import {connect} from "react-redux";
import {ACTIONS} from "../../redux";
import {Table} from "reactstrap";

const getValue = () => {
    return <i className="w-100 text-center fa fa-edit font-weight-normal -cursor-pointer"></i>
}

class ReactTableComponent extends Component {

   componentDidMount() {
       this.props.getTasks()
   }

    render() {
      const {tasks} = this.props;
        return (
            <div className="row">
                <div className="col">
                    <TaskCreatorForm onPostTask={this.props.postTask}/>
                    <div style={{ padding: '50px' }}>
                        <Table>
                            <thead>
                            <tr>
                                <th>Email</th>
                                <th>UserName</th>
                                <th>Text</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                tasks.map(task => (
                                    <tr key={task._id}>
                                        <th scope="row">{task.email}</th>
                                        <td>{task.username}</td>
                                        <td>{task.text}</td>
                                        <td>Edit</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        tasks: state.tasks ? state.tasks[0].tasks : []
});

const mapDispatchToProps = (dispatch) => ({
    postTask: (data) => dispatch(ACTIONS.attemptPostTask(data)),
    getTasks: () => dispatch(ACTIONS.attemptGetTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactTableComponent);
