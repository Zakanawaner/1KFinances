//Native
import React from 'react';
//My things
import GetNavBar from '../methods/getNavbar.js'
//Router
import { Redirect } from 'react-router-dom';


class MyComponent extends React.Component {
  constructor(props, url, method='GET') {
    super(props);
    this.state = {};
    this.url = url;
    this.method = method;
    this.httpOptions = {
      method: method,
      credentials: 'include',
    };
  }
  componentDidMount() {
    this.apiEndpoint();
  }
  apiEndpoint(body={}) {
    if (this.method == 'POST') {
      this.httpOptions['body'] = JSON.stringify(body);
    }
    fetch(this.url, this.httpOptions)
    .then(res => res.json())
    .then(data => {
      this.setState(data);
      if (data.head !== undefined){
        document.title = this.state.head.title;
      }
    });
  }
  getNavbar() {
    return (
      <GetNavBar
        items={this.state.body.navbar}
        key="navbar"
      />
    );
  }
  render() {
    var result = null;
    if (this.state.refreshed !== undefined) {
      if (this.state.root !== undefined) {
        result =  <Redirect to="/home"/>;
      } else {
        window.location.reload(false);
      }
    }
    return result;
  }
}

export default MyComponent;
