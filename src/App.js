import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuizList from "./containers/QuizList";
import Quiz from "./containers/Quiz";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/">
            <QuizList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
