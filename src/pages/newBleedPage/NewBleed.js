import React, { useState } from 'react'
import './NewBleed.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function NewBleed() {

    const [newBleedStart, setNewBleedStart] = useState('');
    const [newBleedEnd, setNewBleedEnd] = useState('');
    const [newDurationBleed, setNewDurationBleed] = useState(0);

    //Temporary states created here until DB is created
    const [effectiveBleedStart, setEffectiveBleedStart] = useState('');
    const [effectiveBleedEnd, setEffectiveBleedEnd] = useState('');
    const [prevBleedLimit, setPrevBleedLimit] = useState(20);

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
        if(newBleedStart < prevBleedLimit){


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

                <p>{`Duration of new bleeding is ${newDurationBleed} days`}</p>
                

            </div>
            <Footer />
            
        </div>
    )
}

export default NewBleed
