import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Calendar from './components/Calendar'
import Events from './components/Events'
import EventForm from './components/EventForm'
import Footer from './components/Footer'

function App() {


  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/'><Redirect to='/Calendar' /></Route>
        <Route path='/Calendar' render={(props) => (
          <>
            <Calendar />
          </>
        )} />
        <Route path='/Events' component={Events} />
        <Route path='/EventForm' component={EventForm} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
