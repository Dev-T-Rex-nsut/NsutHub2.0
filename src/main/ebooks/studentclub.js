import React from "react"
import "./download.css";
import "./nsut";
import Footer from "../initials/footer";
import { FaDownload } from "react-icons/fa";
import { FaAngleDown } from 'react-icons/fa';

class Studentclub extends React.Component{ 

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
                <h2 style={{color:"whitesmoke"}}>Notes</h2>
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
                            <th>Descreption</th>
                            <th>Moto</th>
                            <th>Join</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>No registered Clubs yet</td>
                        <td>No registered Clubs yet</td>
                        <td>No registered Clubs yet</td>
                        <td>No registered Clubs yet</td>
                        <td>No registered Clubs yet</td>
                       </tr>                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </div>
      </>
    );
  }
}

export default Studentclub