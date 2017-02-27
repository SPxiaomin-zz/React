import React, { Component } from 'react';

import Student from './Student';

class StudentList extends Component {
    filter(students) {
        if (!this.props.filter) {
            return students;
        }

        return students.filter(student => {
            return student
                .toLowerCase()
                .indexOf(this.props.filter.toLowerCase()) >=0;
        });
    }

    render() {
        return (
            <ul style={{listStyle: 'none', padding: 0}}>
                {
                    this
                        .filter(this.props.students)
                        .map(student => {
                            return <Student name={student} />
                        })
                }
            </ul>
        );
    }
}

export default StudentList;
