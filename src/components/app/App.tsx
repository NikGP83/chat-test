import MessageDesk from '../message-desk/message-desk';
import Sidebar from '../sidebar/sidebar';
import './app.scss';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <MessageDesk/>
    </div>
  );
}

export default App;
