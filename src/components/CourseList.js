import React, { Component, Fragment } from "react";

class CourseForm extends Component{
    
    state = {
        isEdit : false,
    }


    renderCourse = () => {
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={()=>{this.toggleState()}}>  Update Course </button>
                <button  onClick={() => this.props.deleteCourse(this.props.index)}> Delete Course </button>
            </li>
        )
    }

    UpdateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.toggleState();
    }

    renderUpdateForm = () => {
        return (
            <form onSubmit={this.UpdateCourseItem}>
                <input type='text' ref={ (v)=> {this.input=v} } defaultValue={this.props.details.name}/>
                <button>Update course</button>
            </form>
        )
    }

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }

    render(){
        let {isEdit} = this.state;
        return (
            <Fragment>
               {isEdit ? this.renderUpdateForm() : this.renderCourse() } 
            </Fragment>
        )
    }
   
}

export default CourseForm;