import { useEffect, useState } from "react";
import Collapse from "../components/collapse";
import '../styles/loading.css'

export default function Home(){
    const [datas, setDatas] = useState([]); // pour stocker les données
    // Loader 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { // on doit mettre à jour le dom en fonction avec données on va recoivr, la react doit le faire automatiquement grace useEffect
        getDatas();
    }, [datas])

    async function getDatas(){
        const req = await fetch('/mocks/mock_data.json')
        const res = await req.json();
        // console.log(res)
        setDatas(res)
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
      }
    
    return(
        <>
        <h1>Home</h1>
        {isLoading ? (
            <div className="loader" />
        ) : (
            datas?.map(data => (
                <Collapse key={data.id} title={data.title} content={data.content} />
            ))
        )}
        </>
    )
}