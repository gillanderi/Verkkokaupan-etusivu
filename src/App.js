
import './App.css';
import { useState } from 'react';
import VerkkokauppaHeader from './components/VerkkokauppaHeader';
import Sivunmuotoilut from './components/Sivunmuotoilut';
import VerkkokauppaFooter from './components/VerkkokauppaFooter';
import Content from './components/Content';
import Tuotenostot from './components/Tuotenostot';
import Kirjautuminen from './components/Kirjautuminen';
import Pikaostoskori from './components/Pikaostoskori';



function App() {


  const [ostoskorissa, setOstoskorissa] = useState (0);

  
  return (
    
    <Sivunmuotoilut>

      <VerkkokauppaHeader></VerkkokauppaHeader>


      <Content>


        <Tuotenostot></Tuotenostot>

        

      </Content>

      <VerkkokauppaFooter></VerkkokauppaFooter>


    </Sivunmuotoilut>
    
  );
}

export default App;
