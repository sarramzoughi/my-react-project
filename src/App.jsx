/*1. One thing I understand well: How to use curly braces {} to display 
     JavaScript variables and objects inside HTML tags.
  2. One thing that is still confusing: Why React requires us to use 
     specific names like 'htmlFor' instead of 'for'.
  3. One mistake I made and fixed: I forgot to export the App at first, 
     which caused the screen to go blank.const courseTitle = "React dev Lab";*/
 function App() {
  const studentName = "Sarra";
  const student= {
    name : "sarra",
    age: 21,
    track :"Fullstack JavaScript"
  };
  const sayHello= () => {return `hello ${studentName}, welcome to the react world`:};
  return (
    <div>
      <h1>This is my first React project</h1>
      <h2>my name is : {studentName}</h2>
      <h3>course : {courseTitle}</h3>
      <p> welcome to {courseTitle}, {studentName} !</p>
      <label htmlFor= "feedback-input">enter your feedback:</label>
      <input id="feedback-input" type= "text"/>
      <p> name: {student.name}- Age: {student.age}- Track: {student.track}</p>
      <p>function says: {sayHello()}</p>


    </div>
  );} export default App;
