import PropTypes from "prop-types";

const SubjectList = (props) => {
    let courses = props.data;
    return (
        <>
            <h3>Courses in {props.title}</h3>
            <ol>{
                courses.map((course) => {
                    return <li key={course.id}>
                        {course.code} - {course.description}
                        
                    </li>
                })
            }
            </ol>
        </>
    )
}

// Prop validation
SubjectList.propTypes = {
    title: PropTypes.string.isRequired, 
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            code: PropTypes.string.isRequired, 
            description: PropTypes.string.isRequired 
        })
    ).isRequired 
};

export default SubjectList