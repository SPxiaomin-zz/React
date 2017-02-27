import React, { Component } from 'react';

import StudentList from './components/StudentList';
import StudentFilter from './components/StudentFilter';

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
            students: STUDENTS,
            filter: null
        };

    }

    updateSearch(inputValue) {

        this.setState({
            filter: inputValue
        });
    }

    render() {
        return (
            <div style={{width: '300px', margin: '0 auto'}}>
                <h1>Your Students</h1>
                <StudentFilter updateSearch={searchValue => this.updateSearch(searchValue)} />
                <StudentList filter={this.state.filter} students={this.state.students} />
            </div>
        );
    }
}

export default App;
