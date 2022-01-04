import React from "react";
import { customerData } from "./customerStore";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: "",
      sortEmailClick:false,
      sortNameClick:false,
      sortAgeClick:false,
      sortCityClick:false,
      sortCountryClick:false,
      sortPhoneClick:false,
      customers: customerData
    };
  }

  searchFilter = (e) => {
    this.setState({ searchVal: e.target.value });
  };

  sortClicked = (e,type) => {
    let res = this.state.customers;

    if(type === 'email')
    {
      if(!this.state.sortEmailClick)
        res = res.sort((a,b) => (a.email > b.email)? 1 : ((a.email < b.email) ? -1 : 0))
      else
        res = res.sort((a,b) => (a.email < b.email)? 1 : ((a.email > b.email) ? -1 : 0))
      this.setState({customers:res, sortEmailClick : !this.state.sortEmailClick});
    }
    else if(type === 'name')
    {
      if(!this.state.sortNameClick)
        res = res.sort((a,b) => (a.name.first + a.name.last > b.name.first + b.name.last)? 1 : ((a.name.first + a.name.last < b.name.first + b.name.last) ? -1 : 0))
      else
        res = res.sort((a,b) => (a.name.first + a.name.last < b.name.first + b.name.last)? 1 : ((a.name.first + a.name.last > b.name.first + b.name.last) ? -1 : 0))
      this.setState({customers:res, sortNameClick : !this.state.sortNameClick});
    }
    else if(type === 'age')
    {
      if(!this.state.sortAgeClick)
        res = res.sort((a,b) => (a.dob.age > b.dob.age)? 1 : ((a.dob.age < b.dob.age) ? -1 : 0))
      else
        res = res.sort((a,b) => (a.dob.age < b.dob.age)? 1 : ((a.dob.age > b.dob.age) ? -1 : 0))
      this.setState({customers:res, sortAgeClick : !this.state.sortAgeClick});
    }
    else if(type === 'city')
    {
      if(!this.state.sortCityClick)
        res = res.sort((a,b) => (a.location.city > b.location.city)? 1 : ((a.location.city < b.location.city) ? -1 : 0))
      else
        res = res.sort((a,b) => (a.location.city < b.location.city)? 1 : ((a.location.city > b.location.city) ? -1 : 0))
      this.setState({customers:res, sortCityClick : !this.state.sortCityClick});
    }
    else if(type === 'country')
    {
      if(!this.state.sortCountryClick)
        res = res.sort((a,b) => (a.location.country > b.location.country)? 1 : ((a.location.country < b.location.country) ? -1 : 0))
      else
        res = res.sort((a,b) => (a.location.country < b.location.country)? 1 : ((a.location.country > b.location.country) ? -1 : 0))
      this.setState({customers:res, sortCountryClick : !this.state.sortCountryClick});
    }
    else if(type === 'phone')
    {
      if(!this.state.sortPhoneClick)
        res = res.sort((a,b) => (a.phone > b.phone)? 1 : ((a.phone < b.phone) ? -1 : 0))
      else
        res = res.sort((a,b) => (a.phone < b.phone)? 1 : ((a.phone > b.phone) ? -1 : 0))
      this.setState({customers:res, sortPhoneClick : !this.state.sortPhoneClick});
    }
  }


  render() {
    let results = this.state.customers;
    if(this.state.searchVal !== '')
    {
      results = results.filter((c, i) => {
          let email = results[i].email.toLowerCase();
          let name = (results[i].name.first + results[i].name.last).toLowerCase();
          let age = results[i].dob.age.toString();
          let phone = results[i].phone.toString();
          let location = results[i].location.city.toLowerCase();
          let country = results[i].location.country.toLocaleLowerCase();
          let search = this.state.searchVal.toLowerCase();
          return email.includes(search) || name.includes(search) || age.includes(search) || location.includes(search) || country.includes(search) || phone.includes(search);
        }
      );
    }
    return (
      <React.Fragment>
        <div className="container-jumbotron mt-3" style={{'padding':'10px'}}>
          <div className="row">
            <div className="col">
              <p className="h3 text-primary">Some Customer List</p>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda doloribus enim laboriosam tempore. Corporis expedita
                iste minima mollitia nisi odio porro rem rerum velit voluptas.
                Dignissimos doloribus inventore minima voluptates?
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Here" text="right" value={this.state.searchVal} 
                onChange={this.searchFilter}/>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <table className="table table-hover table-striped text-center table-primary">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Photo</th>
                    <th style={{ 'cursor':'pointer' }} onClick={(e) => this.sortClicked(e,'name')}>Name</th>
                    <th style={{ 'cursor':'pointer' }} onClick={(e) => this.sortClicked(e,'age')}>Age</th>
                    <th style={{ 'cursor':'pointer' }} onClick={(e) => this.sortClicked(e,'email')}>Email</th>
                    <th style={{ 'cursor':'pointer' }} onClick={(e) => this.sortClicked(e,'phone')}>Phone</th>
                    <th style={{ 'cursor':'pointer' }} onClick={(e) => this.sortClicked(e,'city')}>Location</th>
                    <th style={{ 'cursor':'pointer' }} onClick={(e) => this.sortClicked(e,'country')}>Country</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((customer) => {
                    return (
                      <tr>
                        <td>
                          <img src={customer.picture.large} alt="" width="50" height="50"/>
                        </td>
                        <td>
                          {customer.name.first} {customer.name.last}
                        </td>
                        <td>{customer.dob.age} Yrs.</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.location.city}</td>
                        <td>{customer.location.country}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Customers;