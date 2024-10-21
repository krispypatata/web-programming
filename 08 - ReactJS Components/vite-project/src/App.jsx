import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubjectList from './components/SubjectList'

function App() {
  // const [count, setCount] = useState(0)
  const CMSCSubjects = [
    { code: "CMSC100", description: "Web Programming", id: 1 },
    { code: "CMSC150", description: "Scientific Computation", id: 2 },
    { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
    ];
    const CHEMSubjects = [
    { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
    { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
    { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
    ];

  return (
    <>
      <SubjectList data={CHEMSubjects} title={"Computer Science"}/>
      <SubjectList data={CMSCSubjects} title={"Chemistry"}/>
    </>
  )
}

export default App
