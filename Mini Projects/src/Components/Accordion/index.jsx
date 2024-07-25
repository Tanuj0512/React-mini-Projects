import data from './data';
import './style.css';
import { useState } from 'react';


export default function Accordion() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }


    return(
        <div className="wrapper">
            <div className="accordian">
        {/* fetching data */}
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                    <div className="item">
{/* getting question on */}
                        <div className="title"
                            onClick={() => handleSingleSelection(dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                        </div>

{/* answer */}
                        {selected === dataItem.id ? (
                            <div className='content'>{dataItem.answer}</div>
                        ): 
                        null
                        }
                    </div>
                ))
            ):(
                <div>Data not found !</div>
            )}
            </div>
        </div>
    );
    
}