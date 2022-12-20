import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container!);


interface IAppProps {
  children?: React.ReactNode;
}
const App = ({ children }: IAppProps): React.ReactElement => {
  return (
    <div className='App' >
      <h1>React</h1>
    </div>
  )
}
root.render(<App />);