import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

import HomePage from './pages/homePage.js';
import ContactPage from './pages/contactPage.js';
import AboutPage from './pages/aboutPage.js';

import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="contact" exact path="/contact" component={ContactPage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          {/*<Footer />*/}
        </div>
      </Router>
    )
  }
}

export default App;