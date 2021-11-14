import { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component{ 
  
  state = {
    courses : [
      {name:'HTML'},
      {name:'CSS'},
      {name:'JAVASCRIPT'},
    ],
    current : ''
  }


  test(){
    for(let i = 1 ; i<=100 ; i++) {
			if(i%3===0 && i%5===0) {
        console.log("FizzBuzz");
			}
		  else if(i%3===0) {
          console.log("Fizz");
			}else if(i%5===0) {
        console.log("Buzz");
			}else {
				console.log(i);
			}
		}
  }

  // update course
  updateCourse = (e) => {
    this.setState({
      current : e.target.value
    })
  }

  // add course
  addCourse = (e) => {
    e.preventDefault();
    const {courses} = this.state;
    courses.push({name : this.state.current});
    this.setState({
      courses : courses,
      current : '',
    });
  }

  // delete course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({
      courses
    });
  }

  editCourse = (index , value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name']=value;
    this.setState({
      courses
    })
  }
  
  render(){
    const {courses} = this.state;
    const ListCourse = courses.map((course, index) => {
          return <CourseList details = {course}  key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })

    return (
      <section className="App">
        <h1>App component </h1>
        <button onClick={this.test}> voir resultat </button>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        <ul>{ListCourse}</ul>
      </section>
    );
  }
}

export default App;
