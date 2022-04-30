
import './App.css';
import { useState } from 'react';
import VerkkokauppaHeader from './components/VerkkokauppaHeader';
import Sivunmuotoilut from './components/Sivunmuotoilut';
import VerkkokauppaFooter from './components/VerkkokauppaFooter';
import Content from './components/Content';
import Tuotenostot from './components/Tuotenostot';
import ContentOikReuna from './components/ContentOikReuna';
import Kirjautuminen from './components/Kirjautuminen';
import Pikaostoskori from './components/Pikaostoskori';
import Yhteensaostoskori from './components/Yhteensaostoskori';



function App() {




  
  return (
    
    <Sivunmuotoilut>

      <VerkkokauppaHeader></VerkkokauppaHeader>


      <Content>


        <Tuotenostot></Tuotenostot>

        <ContentOikReuna>

            <Kirjautuminen></Kirjautuminen>

            <Pikaostoskori></Pikaostoskori>

        </ContentOikReuna>

      </Content>

      <VerkkokauppaFooter></VerkkokauppaFooter>


    </Sivunmuotoilut>
    
  );
}

export default App;
