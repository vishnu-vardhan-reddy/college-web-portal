import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Department from './components/department page/Department';
import Profile from './components/profile/Profile';
import Administration from './components/administration/Administration';
import ScrollToTop from './ScrollToTop';
import ContactUs from './components/contact/ContactUs';
import Hostel from './components/hostel_info/Hostel';
import Library from './components/library/Library';

function App() {
  return (
    <div className='app'>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact={true} path='/'>
              <Home />
            </Route>
            <Route exact={true} path='/department/:departmentId'>
              <Department />
            </Route>
            <Route exact={true} path='/faculty-profile'>
              <Profile />
            </Route>
            <Route exact={true} path='/administration'>
              <Administration />
            </Route>
            <Route exact={true} path='/contact-us'>
              <ContactUs />
            </Route>
            <Route exact={true} path='/library'>
              <Library />
            </Route>
            <Route exact={true} path='/hostels'>
              <Hostel />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
