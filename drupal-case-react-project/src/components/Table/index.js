import React, { Component } from 'react';
import './style.css';

class Table extends Component {
   render () {
       return (
           // will use dynamic data to fill in the table, just a placeholder for now
           <div className='table-section'>
                <h1>Table Title</h1>  
                <h2>Table Details</h2>  
                <div className='table-div'>
                    <table className="table table-bordered">
                        <thead>
                            <tr className='table-head'>
                                <th scope="col">First Table Column</th>
                                <th scope="col">Second Table Column</th>
                                <th scope="col">Third Table Column</th>
                                <th scope="col">Fourth Table Column</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-row'>
                                <td>Column One Data</td>
                                <td>Column One Data</td>
                                <td>Column One Data</td>
                                <td>Column One Data</td>
                            </tr>
                            <tr className='table-row'>
                                <td>Column Two Data</td>
                                <td>Column Two Data</td>
                                <td>Column Two Data</td>
                                <td>Column Two Data</td>
                            </tr>
                            <tr className='table-row'>
                                <td>Column Three Data</td>
                                <td>Column Three Data</td>
                                <td>Column Three Data</td>
                                <td>Column Three Data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
           </div>
       )
   } 
}

export default Table;