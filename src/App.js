
import './App.css';
import VerkkokauppaHeader from './components/VerkkokauppaHeader';
import Sivunmuotoilut from './components/Sivunmuotoilut';
import VerkkokauppaFooter from './components/VerkkokauppaFooter';
import Content from './components/Content';
import Tuotenostot from './components/Tuotenostot';




function App() {


  

  
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
