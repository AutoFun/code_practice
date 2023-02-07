import React, {useState} from "react";

const ocurses=[
    {id:1, name:"React",category:"Front-end",level:"Intermediate"},
    {id:2, name:"React",category:"backend-end",level:"Intermediate"},
    {id:3, name:"React",category:"Front-end",level:"Biginner"}
];

var filterForm=()=>{
    const [category, setCategory]=useState("");
    const [level,setLevel]=useState("");
    const [filteredCourses, setFilteredCourses]=useState(courses);

    const handleSubmit=event =>{
        event.preventDefault();
        setFilteredCourses(
            course.filter(course=>{
                return ((category===""||course.category===category)&&
                (level===""||course.level===level)
                );
            })
        );
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Category:
                    <select value={category} onChange={e=> setCategory(e.target.value)}>
                        <option value="">All</option>
                        <option value="Beginner">Biginner</option>
                        <option value="Intermediate">Intermediate</option>
                    </select>
                </label>
                <button type="submit">Filter</button>
            </form>
            <ul>
                {filteredCourses.map(course=>(
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default filterForm;