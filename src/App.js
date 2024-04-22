import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <h1>Topics covered</h1><br></br>
      <p>The following is a list of all the topics we cover in the MDN learning area.</p><br></br>
      <a href = "/">Getting started with the web</a><br></br><br></br>
      <div class="km"><p>Provides a practical introduction to web development for complete beginners.</p><br></br></div>
      <a href = "/">HTML - Structuring the web</a><br></br><br></br>
      <div class="km"><p>HTML is the language that we use to structure the different parts of our content ad define what their meaning or purpose is. This topic teaches HTML in detail.</p><br></br></div>
      <a href = "/">CSS - Styling the web</a><br></br><br></br>
      <div class="km"><p>CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprehesive coverage of CSS.</p><br></br></div>
    
    </div>
  );
}

export default App;
