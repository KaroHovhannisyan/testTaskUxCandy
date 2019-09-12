import ReactTable from 'react-table';
import React, { Component } from 'react';
import 'react-table/react-table.css'
import { data } from './data';
import TaskForm from "./TaskForm";

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
];

export default class ReactTableComponent extends Component {
    render() {
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