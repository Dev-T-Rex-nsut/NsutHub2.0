import React from "react"
import "./download.css";
import "./nsut";
import Footer from "../initials/footer";
import { FaDownload } from "react-icons/fa";
import { FaAngleDown } from 'react-icons/fa';
import DropdownButton from 'react-bootstrap/DropdownButton'

class BookDownloads extends React.Component{ 

  constructor(props){
    super(props)
    this.state={
      rows:[],
      d:0
    }
  }


  componentDidMount(){
    fetch('http://localhost:3000/sheets')
      .then(response => response.json())
      .then(row =>{ this.setState({rows:row})
        console.log(this.looping())
    })
  }

  looping () {
    var b =this.state.rows;
    b.map((a,c) =>{
      return(5)
    });

    // for (var i = 0; i < this.state.rows.length; i++) {
    //   return(
                
    // );
    // }
  }

search = (event) =>{
  console.log(event.target.value)
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


render(){
    return (
      <>
        <div className="dnds moveRt">
        <div class="solving">
            <div class="col-12">
                <h2 style={{color:"whitesmoke"}}>Books</h2>
            </div>

            <div class="col-md-12 col-sm-6"></div>
                        <input style={{width:"80%",
                                      height:"35px",
                                      margin:"10px"}} type="text" id="myInput" onChange={this.search} placeholder="Search by Year and Branch like: First COE" title="Type in a name"/>
            <div class="table-responsive">
                <table Id="myTable" class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                           
                            <th>
                               
                                S.No</th>
                            <th>NAME</th>
                            <th>Year&Branch</th>
                            <th>SUBJECT</th>
                            <th>DOWNLOAD</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.rows.map(function(item, i){
                    console.log('test');
                    return (<tr>
                        <td>{item.a}</td>
                        <td>{item.z}</td>
                        <td>{item.a}</td>
                        <td>{item.z}</td>
                <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
              </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </div>
      </>
    );
  }
}

export default BookDownloads