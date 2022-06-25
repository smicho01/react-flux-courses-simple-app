import React, {useState, useEffect} from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "../CourseForm";
import * as courseApi from '../../api/courseApi'
import { prototype } from "flux/lib/Dispatcher";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {

    const [errors, setErrors] = useState({})

    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ""
    })

    useEffect(() => {
        const slug = props.match.params.slug;   
        if(slug) {
            courseApi.getCourseBySlug(slug).then( _course => {
                setCourse(_course)
            })
        }
    },[props.match.params.slug])

    const handleChange = ({ target }) => {
        const updatedCourse = {...course, [target.name]: target.value}
        setCourse(updatedCourse)
        
    }

    const formIsValid = () => {
        const _errors = {};

        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author is required";
        if(!course.category) _errors.category = "Category is required";

        setErrors(_errors)

        return Object.keys(_errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses")
            toast.success('Course saved.')
        });
    }

    return <>
        <h2>Manage Course</h2>
        {/*<Prompt when={true} message="Are you sure you want to leave ?"/>*/}
        {/*}
            <p>{props.match.params.slug}</p>
            <p>Course id: {props.match.params.id}</p>
            <p>{props.location.search}</p>
        */}
        <CourseForm 
            course={course} 
            errors={errors}
            onChange={handleChange} 
            onSubmit={handleSubmit} 
        />
    </>
}

export default ManageCoursePage