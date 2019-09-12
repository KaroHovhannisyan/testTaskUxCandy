import ReactTable from 'react-table';
import React, { Component } from 'react';
import { data } from './data';
import TaskCreatorForm from "../../components/TaskCreatorForm";
import {connect} from "react-redux";
import {ACTIONS} from "../../redux";
import 'react-table/react-table.css'


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
        return (
            <div className="row">
                <div className="col">
                    <TaskCreatorForm onPostTask={this.props.postTask}/>
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
    postTask: (data) => dispatch(ACTIONS.attemptPostTask(data)),
    getTasks: () => dispatch(ACTIONS.attemptGetTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactTableComponent);