import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

class Hello extends React.Component {
    
    constructor(){
        super();
        this.state = {
            message: "my friend (from state)!"
        };
    }
    
    render() {
        return (
        <AdminLayout>
           <div className="editmatch_dialog_wrapper">
             <h1>Hello {this.state.message}!</h1>
             <form onSubmit={this.onSubmit}>
                <h6>Name</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Id</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Value</h6>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Value"
                      name="value"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                  </div>
                    <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="dayOfBirth"
                      value={this.state.dayOfBirth}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
                </div>
        </AdminLayout>
        )
    }
     
}

export default Hello;