import React, {useState} from 'react'
import './UserInputPage.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

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

    function end(date, days){
        let res = date + days;
        return res;
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
    }

    //Reset selected dates and figures
    const handleClear = () => {
        setMensesStartDate('');
        setMensesEndDate('');
        setMensesDuration(0);
        setPurityDuration(0);
        setNextExpectedMensesStartDate('');
    }
    return (
        <div className="user_container">
            <div className="user_header">
                <Header />

            </div>
            <div className="user_body">
           

                <div className="user_form">
                    <h1>User Input Page</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Menses Start Date: <br/>
                        <input type="date" onChange={handleStartDate} required/>
                        </label><br/>

                        <label>Menses End Date: <br/>
                        <input type="date"  onChange={handleEndDate} required/>
                        </label>
                        <br />
                        <label>Purity Duration: <br/>
                        <input type="number" onChange={handlePurityDuration} required/>
                        </label>
                        <br />
                        <button >Submit</button>
                    </form>
                    <button onClick={handleClear}>Clear</button>
                    <div className="user_duration">
                    
                        <p>{mensesStartDate}</p>
                        <p>{mensesEndDate}</p>
                        <p>{`Duration of your menses is ${mensesDuration} days`}</p>
                        <p>{`Next expected menses start date is ${nextExpectedMensesStartDate}`}</p>
                        <p>{`Next expected menses end date is ${nextExpectedMensesEndDate}`}</p>
                    </div>
                </div>

            </div>
            <Footer />
           
            
        </div>
    )
}

export default UserInputPage
