import React, { useState } from 'react'
import './UserInputPage.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom'

function UserInputPage() {

    //Declare states
    const [mensesDuration, setMensesDuration] = useState(0);
    const [mensesStartDate, setMensesStartDate] = useState('');
    const [mensesEndDate, setMensesEndDate] = useState('');
    const [purityDuration, setPurityDuration] = useState(0);
    const [nextExpectedMensesStartDate, setNextExpectedMensesStartDate] = useState('');
    const [nextExpectedMensesEndDate, setNextExpectedMensesEndDate] = useState('');

    //Get number of days between 2 dates
    function getDiffInDays(date1, date2){
        return Math.round((date2 - date1) / (1000*60*60*24));
    }

    //Add days to existing date
    function addDays(date, days){
        let result = new Date(date);
        result.setTime(result.getTime() + days * 86400000);
        return result;
    }

    const handleStartDate = (e) => {
        setMensesStartDate(e.target.value);

    }

    const handleEndDate = (e) => {
        setMensesEndDate(e.target.value);

    }

    const handlePurityDuration = (e) => {
        setPurityDuration(e.target.value);

    }
 

    const handleSubmit = (e) => {
        e.preventDefault();
       const startDate = new Date(mensesStartDate);
       const endDate = new Date(mensesEndDate);

       let res = getDiffInDays(new Date(mensesStartDate), new Date(mensesEndDate));
       setMensesDuration(res);

       let daysResult = addDays(mensesEndDate, purityDuration);
       setNextExpectedMensesStartDate(daysResult);

       //calculate next menses end date
       let nextExMensesEndDate = addDays(nextExpectedMensesStartDate, mensesDuration);
      setNextExpectedMensesEndDate(nextExMensesEndDate);
      console.log(nextExMensesEndDate);
    }

   

    //Reset selected dates and figures
    const handleClear = () => {
        setMensesStartDate('');
        setMensesEndDate('');
        setMensesDuration(0);
        setPurityDuration(0);
        setNextExpectedMensesStartDate('');
        setNextExpectedMensesEndDate('');
    }
    return (
        <div className="user_container">
            <div className="user_header">
                <Header />

            </div>
            <div className="user_body">
              
           

                <div className="user_form">
                    <h1>Welcome username</h1>
                    <h3>Please fill in the details below</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Menses Start Date: <br/>
                        <input type="date" onChange={handleStartDate} required/>
                        </label>

                        <label>Menses End Date: <br/>
                        <input type="date"  onChange={handleEndDate} required/>
                        </label>
                        
                        <label>Purity Duration: <br/>
                        <input id="purity" type="number" onChange={handlePurityDuration} required/>
                        </label>
                        
                        <button >Submit</button>
                        <button onClick={handleClear}>Clear</button>
                    </form>
                   
                    <div className="user_results">
                        <h1>Results</h1>
                    
                        <p>{`Menses began on: `}</p>
                        <p id="mensesSD">{mensesStartDate}</p>
                        <p>{`Menses end's on: `}</p>
                        <p id="mensesED">{mensesEndDate}</p>
                        <p>{`Duration of menses in days: `}</p>
                        <p id="mensesD">{mensesDuration}</p>
                        <p>{`Next expected menses start date is... `}</p>
                        <p id="mensesNESD">{`${nextExpectedMensesStartDate}`}</p>
                        <p>{`Next expected menses end date is... `}</p>
                        <p id="mensesNEED">{`${nextExpectedMensesEndDate}`}</p>

                        <div>
                            <h3>Click button below if new bleeding occurs</h3>
                           <Link to="/newbleed"> <button>New Blood</button></Link>
                        </div>
                    </div>

                   
                </div>

            </div>
            <Footer />
           
            
        </div>
    )
}

export default UserInputPage
