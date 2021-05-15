import { Switch, Route } from 'react-router';


import Companies from './pages/companies';
import Profile from './pages/profile';
import AuthPage from './pages/auth';

import Navigation from './components/navigation/navigation';
import Theme from './components/theme/theme';


import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />

      <Theme>
        <Switch>
          

          

          <Route path="/profile">
            <Profile title="Profile Page" />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route path="/Companies">
            <Companies/>
          </Route>
          
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
