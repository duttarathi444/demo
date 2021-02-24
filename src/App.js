import React, { Component } from "react";

import './App.css';
import { Row, Col, Container } from "react-bootstrap";
// import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  tabHandler = (val) => {
    const allElements = document.getElementsByClassName('tabContainer');
    const tabs = document.getElementsByClassName('tabbox');
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.display = 'none';
      tabs[i].classList.remove("selected");
    }
    this.refs['tabbox' + val].classList.add("selected");
    this.refs['tab' + val].style.display = 'block';
  }

  submitHandler = () => {
    alert('Form Submited');
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={12} id="tabItem">
            <div className="panel-heading hbuilt tabsBox">
              <div className="tabbox selected" ref="tabbox1" onClick={() => this.tabHandler('1')}> Step-1 </div>
              <div className="tabbox" ref="tabbox2" onClick={() => this.tabHandler('2')}> Step-2 </div>
              <div className="tabbox" ref="tabbox3" onClick={() => this.tabHandler('3')}> Step-3 </div>
            </div>
            <div className="col-md-8 " style={{ margin: '0 auto', marginTop: '20px', padding: '20px' }}>

              <div style={{ display: 'block' }} className="tabContainer" ref="tab1">
                <div className="row">
                  <div className="col-md" style={{ margin: '10px' }}>
                    <FormControl style={{ minWidth: 350, }}>
                      <TextField
                        variant="outlined"
                        name="fname"
                        label="First Name"
                        type="text"
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    </FormControl>
                  </div>
                  <div className="col-md" style={{ margin: '10px' }}>
                    <FormControl style={{ minWidth: 350, }}>
                      <TextField
                        variant="outlined"
                        name="lname"
                        label="Last Name"
                        type="text"
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    </FormControl>
                  </div>

                </div>
                <div className="col-xs-12 centerBtn" style={{ margin: '20px' }}>
                  <Button size="large" variant="contained" color="primary" onClick={() => this.tabHandler('1')} disabled>Previous</Button>
                  <Button size="large" variant="contained" color="primary" onClick={() => this.tabHandler('2')}>Next</Button>
                </div>
              </div>
              <div style={{ display: 'none' }} className="tabContainer" ref="tab2">
                <div className="row">
                  <div className="col-md" style={{ margin: '10px' }}>
                    <FormControl style={{ minWidth: 350, }}>
                      <TextField
                        variant="outlined"
                        name="age"
                        label="Age"
                        type="text"
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    </FormControl>
                  </div>
                  <div className="col-md" style={{ margin: '10px' }}>
                    <FormControl style={{ minWidth: 350, }}>
                      <TextField
                        variant="outlined"
                        name="org"
                        label="Organization"
                        type="text"
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="col-xs-12 centerBtn" style={{ margin: '20px' }}>
                  <Button size="large" variant="contained" color="primary" onClick={() => this.tabHandler('1')}>Previous</Button>
                  <Button size="large" variant="contained" color="primary" onClick={() => this.tabHandler('3')}>Next</Button>
                </div>
              </div>
              <div style={{ display: 'none' }} className="tabContainer" ref="tab3">
                <div className="row">
                  <div className="col-md" style={{ margin: '10px' }}>
                    <FormControl style={{ minWidth: 350, }}>
                      <TextField
                        variant="outlined"
                        name="state"
                        label="State"
                        type="text"
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    </FormControl>
                  </div>
                  <div className="col-md" style={{ margin: '10px' }}>
                    <FormControl style={{ minWidth: 350, }}>
                      <TextField
                        variant="outlined"
                        name="city"
                        label="City"
                        type="text"
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="col-xs-12 centerBtn" style={{ margin: '20px' }}>
                  <Button size="large" variant="contained" color="primary" onClick={() => this.tabHandler('2')}>Previous</Button>
                  <Button size="large" variant="contained" color="primary" onClick={this.submitHandler}>Submit</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
