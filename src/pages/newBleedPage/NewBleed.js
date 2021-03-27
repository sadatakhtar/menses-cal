import React, { useState } from 'react'
import moment from 'moment';
import './NewBleed.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function NewBleed() {

    const [newBleedStart, setNewBleedStart] = useState('');
    const [newBleedEnd, setNewBleedEnd] = useState('');
    const [newDurationBleed, setNewDurationBleed] = useState(0);


    //TEMPORARY STATES CREATED HERE UNTILL DB IS CREATED OR UNTILL STATE MANAGEMENT CONFIGURED
    const [effectiveBleedStart, setEffectiveBleedStart] = useState('');
    const [effectiveBleedEnd, setEffectiveBleedEnd] = useState('');
    const [prevBleedLimit, setPrevBleedLimit] = useState(15);
    const [newData, setNewData] = useState('');
    const [prevBleedStart, setPrevBleedStart] = useState('');
    const [prevBleedEnd, setPrevBleedEnd] = useState('');
    const [durationBlood, setDurationBlood] = useState('');
    

     //ADD DAYS TO EXISTING DATE
     function addDays(date, days){
        let result = new Date(date);
        result.setTime(result.getTime() + days * 86400000);
        return result;
    }
    //FUNCTION TO RETURN NEWBLEEDSTART IN TIME FORMAT
    function returnDateinNumber(date) {
        let res = new Date(date);
        res.setTime(res.getTime());
        return res;

    }
    //CONVERT NUMBER TO DATE
    function returnNumToDate(number){
        let res = new Date(number);
        res.setTime(res.getDay());
        return res;

    }
    //MINUS DAYS FROM DATE
    function minusDays(date, days){
        let result = new Date(date);
        result.setTime(result.getTime() - days * 86400000);
        return result;
    }
   

     //GET NUMBER OF DAYS BETWEEN 2 DATES
     function getDiffInDays(date1, date2){
        return Math.round((date2 - date1) / (1000*60*60*24));
    }

    //FUNCTION CALLED WHEN THERE IS NEW BLEEEDING
    function newBleeding(){
    
        //new bleed start date minus purity days = newD
        let newD = minusDays(new Date(newBleedStart), prevBleedLimit); //new bleed date subtract number of previous purity days
        setNewData(newD);
        console.log(`new bleed start date minus purity ${moment(newBleedStart).subtract(15, 'days').calendar()}`);
        let newB = returnDateinNumber(new Date(newBleedStart));
        console.log(`new bleed start date : ${moment(newB.getTime()).format('MMM Do')}`);
        //console.log(returnNumToDate(96400000));


        //compare newB (newBleedStart) with prevBleedEnd
        if(  moment(newB.getTime()).format('MMM Do') < moment(prevBleedEnd).format('MMM Do')){
            console.log('yes');
           // let durBlood = returnDateinNumber(new Date(newBleedEnd)); 
           // setDurationBlood(durBlood - prevBleedStart); 
            setDurationBlood(moment(newBleedEnd).subtract(moment(prevBleedStart).format('dddd'), 'days' ).date());
            setEffectiveBleedStart(prevBleedStart);
            setEffectiveBleedEnd(newBleedEnd);

            //no change to prevBleedStart
            setPrevBleedEnd(newBleedEnd);
            setPrevBleedLimit(newBleedEnd + 15);

        }else {
            console.log('no');
            let durB = returnDateinNumber(new Date(newBleedEnd));
            console.log(durationBlood);
            setDurationBlood(durB - newBleedStart); 
            console.log(durationBlood);
            setEffectiveBleedStart(newBleedStart);
            setEffectiveBleedEnd(newBleedEnd);

            //Reset prevBleed states
            setPrevBleedStart(newBleedStart);
            setPrevBleedEnd(newBleedEnd);
            setPrevBleedLimit(newBleedEnd + 15);



        }

    }

  
    function scenarios(durationBlood, effectiveBleedStart, effectiveBleedEnd){
        let changeHabbitZone = false;

        if(changeHabbitZone === true){
            //current HZ becomes past, next HZ becomes current

        }

        //duration of blood less than 3 days
        if(durationBlood < 3){

            //before current HZ
            if(effectiveBleedStart ){

            }

        }


    }

    const handleNewBloodStart = (e) => {
        setNewBleedStart(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = getDiffInDays(new Date(newBleedStart), new Date(newBleedEnd));
        setNewDurationBleed(res);
        newBleeding();
      // newBleedingAgain();
         

    }


    return (
        <div className="newbleed_container">
            <div className="newbleed_header">
                <Header />
            </div>
            <div className="newbleed_body">
                <h1>New blood details</h1>

                <form onSubmit={handleSubmit}>
                    <label>New blood start date: <br/>
                    <input type="date" onChange={handleNewBloodStart}/>
                    </label>
                    <br/>
                    <label>New blood end date: <br/>
                    <input type="date" onChange={(e) => setNewBleedEnd(e.target.value)}/>
                    </label>
                    <br/>
                    <label>Previous blood end date: <br/>
                    <input type="date" onChange={(e) => setPrevBleedEnd(e.target.value)}/>
                    </label>
             
                    <br/>
                    <label>Previous blood Start date: <br/>
                    <input type="date" onChange={(e) => setPrevBleedStart(e.target.value)}/>
                    </label>
                    <br/>
                   
                    <button>Submit</button>
                </form>

                <p>{`Duration of new bleeding in days: ${newDurationBleed}`}</p>
                <p>{`15 days minus the new bleed start date: ${newData}`}</p>
                <p>{`Duration of Blood: ${durationBlood}`}</p>
                <p>{`Effective Bleed start: ${effectiveBleedStart}`}</p>
                <p>{`Effective Bleed end: ${effectiveBleedEnd}`}</p>
               
               
                

            </div>
            <Footer />
            
        </div>
    )
}

export default NewBleed
