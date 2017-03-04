import React, { Component } from 'react';
import Student from './Student';
import './StudentList.css';

class StudentList extends Component {
    constructor(props) {
        super(props);
    }

    filter(students) {
        if (!this.props.filter) {
            return students;
        }

        return students.filter(student => {
            return student.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0;
        });
    }

    render() {
        return (
            <ul>
                {
                    this
                        .filter(this.props.students)
                        .map(student => {
                            return <Student name={student} />;
                        })
                }
            </ul>
        );
    }
}

export default StudentList;
