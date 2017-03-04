import React, { Component } from 'react';
import StudentFilter from './components/StudentFilter';
import StudentList from './components/StudentList';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        const STUDENTS = ['Elia Larkey','Joyce Bearce','Clint Strahan',
                'Maude Defrank', 'Soila Hendren', 'Eliana Carrales',
                'Marquerite Bettes', 'Mikaela Authement', 'Elyse Toscano',
                'Ginette Solomon', 'Wanita Sprinkle', 'Yen Hagans',
                'Annmarie Schaper', 'Gregg Wilkins', 'Eura Prue', 'Addie Madding',
                'Tameika Murph', 'Keenan Woolsey', 'Hertha Hyer',
                'Sharan Letsinger'];

        this.state = {
            filter: null,
            students: STUDENTS
        };
    }

    updateSearch(inputValue) {

        this.setState({
            filter: inputValue
        });
    }

    render() {
        return (
            <div className='container'>
                <h1>Your Students</h1>
                <StudentFilter updateSearch={inputValue => this.updateSearch(inputValue)} />
                <StudentList filter={this.state.filter} students={this.state.students} />
            </div>
        );
    }
}

export default App;
