import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate,  } from 'react-router-dom';
import EntryPage from './components/EntryPage';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';
import Result from './components/questions/Result';
import QuizPage from './components/QuizPage/QuizPage';
import SignUp from './components/SignUp';
import {initialValue} from './reducer/reducer';
import { questions } from './components/QuestionBank/QuestionBank';



function App() {

  const [language, setLanguage]: any = useState('');
  const [data, setData]: any = useState([]);
  let navigate = useNavigate();
  
  return (
    <>
    <Nav/>
    
    {/* {state ? <Drawer/> : null} */}
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='/enterpage' element={<EntryPage setLanguage = {setLanguage}/>}/>
      <Route path='/result' element={<Result/>}/>

      <Route
          path="/quiz"
          element={
            <QuizPage
              language={language}
              setData={setData}
              data={questions}
              navigate={navigate} 
            />
          }
        />
    </Routes>
    </>
  );
}

export default App;

