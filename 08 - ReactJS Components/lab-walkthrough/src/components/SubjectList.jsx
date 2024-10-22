function SubjectList(props) {
  let subjects = props.data;

  return (
    <div>
      <h1>{props.title}</h1>
      <ol>
        {subjects.map((subject) => {
          return (
            <li key={subject.id}>
              {subject.code} - {subject.description}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default SubjectList;
