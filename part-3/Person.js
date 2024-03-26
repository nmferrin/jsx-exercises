
//Component for a person with name and age properties. 
//Over 18 displays additional h3 saing please go vote. 
//otherwise displays you must be 18
//has a property called hobbies that accepts array of hobbies that will be listed as li
function Person(props) {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      {props.age > 18? (
        <h3>Please go vote.</h3>
      ) : (
        <h3>You must be 18 to vote.</h3>
      )}
      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
