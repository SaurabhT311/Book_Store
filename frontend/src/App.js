import './App.css';
import Dashboard from './components/LogInDashboard/dashboard';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import BookHeader from './components/Header/BookHeader';

function App() {
  return (
    <div className="App">
      {/* <BookHeader/> */}
      <BrowserRouter>
        <Switch>
          <Redirect path="/" to="/book-store/login" exact />
          <Route path="/book-store" component={Dashboard} />
          <Route path="/dashBoard" exact component={BookHeader}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
