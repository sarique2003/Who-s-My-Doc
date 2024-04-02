import axios from 'axios'
import React, { useState } from 'react'

export default function PredictDoc() {
    const [options, setOptions] = useState(["Select your symptom","itching", "skin_rash", "red_sore_around_nose", "muscle_weakness", "weakness_in_limbs", "chest_pain", "sweating", "depression", "bruising", "dizziness", "anxiety", "musclepain", "neck_pain", "back_pain", "cramps", "puffy_face_and_eyes"])
    //   symptoms = 

    const [symptoms, setSymptoms] = useState([])
    const [predicedtype, setPredictedtype] = useState(false)
    const [valuesymp, setValuesymp] = useState('Select your symptom')
    function formatSymptom(symptom) {
        return symptom.split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    console.log(symptoms)
    const handleChange = (e) => {
        if(e.target.value==='Select your symptom')
        return
        console.log(e.target.value)
        setValuesymp(e.target.value)
        setSymptoms((st) => {
            return [...st, e.target.value]
        })
        setOptions((opt) => {
            return opt.filter(val => val !== valuesymp)
        })
        if(predicedtype!=='')
        setPredictedtype(false)
    }


    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3000/prediction`,{'issues':symptoms}).then((result)=>{
            console.log(result.data)
            setPredictedtype(result.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="my-2">
                    <p> Select your Symptoms</p>
                    <select name="symptoms" id="" onChange={handleChange} value={valuesymp}>
                        {options.map((opt) => {
                            return (
                                <option key={opt} value={opt}>{formatSymptom(opt)}</option>
                            )
                        })}
                    </select>

                </div>
                <div className="my-2">
                    <p> Selected Symptoms your Symptoms</p>
                    <div className="d-flex my-1">{symptoms.map((st) => {
                        return (
                            <span className="badge text-bg-primary p-2 me-2 ">{formatSymptom(st)}</span>
                        )
                    })}</div>

                </div>

<button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </form>

            {predicedtype!==false && 
            <div className="my-2 bg-primary text-light">{predicedtype}</div>}
        </div>
    )
}

