import ReactTable from 'react-table';
import React, { Component } from 'react';
import 'react-table/react-table.css'
import { data } from './data';
import TaskForm from "./TaskForm";
import {connect} from "react-redux";
import {ACTIONS} from "../../redux";
const getValue = (row) => {
    return <i className="w-100 text-center fa fa-edit font-weight-normal -cursor-pointer"></i>
}

const columns = [
    {
        Header: 'имя',
        accessor: 'name',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: 'email',
        accessor: 'eventType',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: 'текст ',
        accessor: 'eventType',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: 'Actions',
        Cell: row => getValue(row),
        //accessor: 'actualAttended',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
        maxWidth: 150,
    },
]

class ReactTableComponent extends Component {

    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        const {tasks} = this.props;
        if (tasks) console.log("tasks", tasks)
        return (
            <div className="row">
                <div className="col">
                    <TaskForm />
                    <div style={{ padding: '50px' }}>
                        <ReactTable
                            className="-highlight"
                            sortable={true}
                            minRows={0}
                            pageSize={6}
                            data={data}
                            columns={columns}
                            pages={2}
                            showPageSizeOptions={false}
                            showPageJump={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});
const mapDispatchToProps = (dispatch) => ({
    getTasks: () => dispatch(ACTIONS.attemptGetTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactTableComponent);