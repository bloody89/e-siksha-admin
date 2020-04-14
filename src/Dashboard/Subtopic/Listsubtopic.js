import React , {Component} from 'react';
import './Listsubtopic.css';
import Table from 'react-bootstrap/Table';
import Dashboardservice from '../../Service/Dashboardservice';

class Listsubtopic extends Component{
    constructor(props){
        super(props);
        this.state = {
           subtopicList:[]
        }
    }

    componentDidMount() {
        this.getSubTopic();
      }
      getSubTopic(){
        Dashboardservice.getSubtopicList()
        .then(res => {
         if (res.statusInfo.statusCode === 200) {
           this.setState({
            subtopicList : res.responseData
           })
         }
       })
       .catch(error => {
         console.log("error message: ", error);
        alert("error is getting..")
       });
        
       }
    render(){
        return(
            <div>
             <div className="container">
                <div className="col-md-12 adminRight">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                       
                        <th>ID</th>
                        <th>Name</th>
                        <th>SubTopic Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.subtopicList.map((subtopic , index) => {
                           return(
                               <tr key = {subtopic.id}>
                                <td>{subtopic.id}</td>
                                  <td>{subtopic.name}</td>
                               </tr>
                           )
                       }
                       )}
                    </tbody>
                    </Table>
                  
                </div>
                </div>


            </div>
        );
    }
}


export default Listsubtopic;