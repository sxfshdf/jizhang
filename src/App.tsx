import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Tags from "./views/Tags"
import Money from "./views/Money"
import Statistics from "./views/Statistics"
import NoMatch from "./views/404"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route exact path="/" component={Money}/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
