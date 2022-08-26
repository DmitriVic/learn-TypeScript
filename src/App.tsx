import React from 'react';
// import logo from './logo.svg';
// import './App.css';

type TitleProps = {
	title: string,
	test?: string,

}

const Title= ({title, test = "test"}: TitleProps) => <h1>{title} {test}</h1>

const App = () =>  <Title title={'sss'}/>







export default App;

// function App() {



// 	return (
// 	  <div className="App">
// 		 <header className="App-header">
// 			<img src={logo} className="App-logo" alt="logo" />
// 			<p>
// 			  Edit <code>src/App.tsx</code> and save to reload.
// 			</p>
// 			<a
// 			  className="App-link"
// 			  href="https://reactjs.org"
// 			  target="_blank"
// 			  rel="noopener noreferrer"
// 			>
// 			  Learn React!!!
// 			</a>
// 		 </header>
// 	  </div>
// 	);
//  }