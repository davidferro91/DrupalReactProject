import React, { Component } from 'react';
import './style.css';

class Table extends Component {
   render () {
       return (
           // will use dynamic data to fill in the table, just a placeholder for now
           <div className='table-section'>
                <h1>Job Fair Events</h1>  
                {/* <h2>Table Details</h2>   */}
                <div className='table-div'>
                    <table className="table table-bordered">
                        <thead>
                            <tr className='table-head'>
                                <th scope="col">Fall</th>
                                <th scope="col">Winter</th>
                                <th scope="col">Spring</th>
                                <th scope="col">Summer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-row'>
                                <td>Job Fair Meet and Greet: September 8th, 2019</td>
                                <td>Cleveland Tech Fair: December 3rd, 2019</td>
                                <td>Lecture on Networking: March 22nd, 2019</td>
                                <td>Local Business Meetup: June 6th, 2019</td>
                            </tr>
                            <tr className='table-row'>
                                <td>Cleveland Business Leaders Symposium: September 20th, 2019</td>
                                <td>Networking Meetup: December 12th, 2019</td>
                                <td>Case Western Job Fair: April 1st, 2019</td>
                                <td>Local Business Meetup: June 15th, 2019</td>
                            </tr>
                            <tr className='table-row'>
                                <td>Lecture on Networking: October 2nd, 2019</td>
                                <td>Case Western Job Fair: January 9th, 2019</td>
                                <td>Networking Meetup: April 19th, 2019</td>
                                <td>Cleveland Tech Fair: July 2nd, 2019</td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
           </div>
       )
   } 
}

export default Table;