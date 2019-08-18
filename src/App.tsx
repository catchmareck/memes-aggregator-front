import React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {};
type State = {
    data: { memeName: string; memeUrl: string; }[]
};

const apiUrl = 'http://localhost:3030';

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    
      fetch(apiUrl + '/memes/read/all')
          .then((response) => response.json())
          .then((result) => {
              
              this.setState({ data: result });
          })
          .catch(console.error);
  }

  render() {
      
    return (
      <div className="App">
          {
              this.state.data.map((entry, index) => 
                  <figure key={index}>{index+1}. <img key={index} src={entry.memeUrl} alt={entry.memeName} /></figure>
              )
          }
      </div>
    );
  }
}

export default App;
