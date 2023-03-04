import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, QuizPage, ResultPage } from './pages';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={QuizPage} />
        <Route exact path="/result" component={ResultPage} />
      </Switch>
    </MainLayout>
  );
}

export default App;
