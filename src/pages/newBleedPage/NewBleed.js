import React, { useState } from 'react'
import './NewBleed.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function NewBleed() {

    const [newBleedStart, setNewBleedStart] = useState('');
    const [newBleedEnd, setNewBleedEnd] = useState('');
    const [newDurationBleed, setNewDurationBleed] = useState(0);


    //Temporary states created here until DB is created or untill state management is in place
    const [effectiveBleedStart, setEffectiveBleedStart] = useState('');
    const [effectiveBleedEnd, setEffectiveBleedEnd] = useState('');
    const [prevBleedLimit, setPrevBleedLimit] = useState(10);
    const [newData, setNewData] = useState('');
    const [prevBleedStart, setPrevBleedStart] = useState(1616188400000);
    const [durationBlood, setDurationBlood] = useState('');
    




     //Add days to existing date
     function addDays(date, days){
        let result = new Date(date);
        result.setTime(result.getTime() + days * 86400000);
        return result;
    }
    //function to return newBleedStart into time format
    function returnDate(date) {
        let res = new Date(date);
        res.setTime(res.getTime());
        return res;

    }
    //subtract days from date
    function minusDays(date, days){
        let result = new Date(date);
        result.setTime(result.getTime() - days * 86400000);
        return result;
    }
   

     //Get number of days between 2 dates
     function getDiffInDays(date1, date2){
        return Math.round((date2 - date1) / (1000*60*60*24));
    }

    const handleNewBloodStart = (e) => {
        setNewBleedStart(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = getDiffInDays(new Date(newBleedStart), new Date(newBleedEnd));
        setNewDurationBleed(res);
       
        //Clarify with rahiel here

        //get previous bleeding end date

        //add purity days to end date =  anotherDate

        //new bleed start date minus purity days = newData
        let newD = minusDays(new Date(newBleedStart), prevBleedLimit); //new bleed date subtract number of previous purity days
        setNewData(newD);
        //console.log(newD.getTime());
        let newB = returnDate(new Date(newBleedStart));
        console.log(newB.getTime());


        //compare newB (newBleedStart) with newD(newBleedStart - prevBleedLimit)

        if(newB.getTime() < newD.getTime()){
           // console.log('yes');
            let durB = returnDate(new Date(newBleedEnd)); //converts newBleedEnd into number
            setDurationBlood(durB - prevBleedStart);
            

        }else {
            //console.log('no');
        }
       

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
                   
                    <button>Submit</button>
                </form>

                <p>{`Duration of new bleeding in days: ${newDurationBleed}`}</p>
                <p>{`15 days minus the new bleed start date: ${newData}`}</p>
                <p>{`Duration of Blood: ${durationBlood}`}</p>
                

            </div>
            <Footer />
            
        </div>
    )
}

export default NewBleed
