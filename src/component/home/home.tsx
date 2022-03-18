import React, { FunctionComponent, useEffect, useState } from "react";
import Language from "./language";
import techs from "../../data/data";
import CardL from "./card/card";
import { useNavigate } from "react-router-dom";

type homeProp = {
    isAuth : boolean
}
const Home : FunctionComponent<homeProp> = ({isAuth}) =>
{
    
    const [ techno , setTechno ] = useState<Language[]>([])

    const navigate = useNavigate()

    useEffect(()=>{
        setTechno(techs)
    },[])

    return (
        <div >

           { !isAuth && <button onClick={()=>navigate('/login')}>Login</button> }
            <div className="row">
                {
                    techno.map((element) => (
                        <CardL key={element.id} techno = {element} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home ;