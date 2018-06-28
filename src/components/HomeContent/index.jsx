import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './home-content.css'

import Dashboard from '../Dashboard'
import Tables from '../Tables'
import PieChart from '../PieChart'
import AreaChart from '../AreaChart'
import BarChart from '../BarChart'
import LineChart from '../LineChart'

class HomeContent extends React.Component {
  render() {
    return (
      <div className="home-content">
        <Switch>
          <Route path="/home/dashboard" component={Dashboard} />
          <Route path="/home/tables" component={Tables} />
          <Route path="/home/pie-chart" component={PieChart} />
          <Route path="/home/area-chart" component={AreaChart} />
          <Route path="/home/bar-chart" component={BarChart} />
          <Route path="/home/line-chart" component={LineChart} />
          <Redirect from="/home" to="/home/dashboard" />
        </Switch>
      </div>
    );
  }
}

export default HomeContent;