import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import constants from "../../utils/constants.ts";
import Utils from "../../utils/utils.ts";

interface Audio {
    audio?: string
    text: string
}
interface Meaning {
    partOfSpeech: string
    definitions: Definition[]

}
interface Definition {
    definition: string
    example: string
    synonyms: string[]
    antonyms: string[]
}
interface Definitions {
    word: string
    phonetic: string
    phonetics: Audio[]
    origin: string
    meanings: Meaning[]
}
export default function Word() {
    const params = useParams()
    // const [data, setData] = useState<Definitions[]>([])


    const renderDefAndExample = (data: Definitions[]) => {
        if(data.length === 0){
            return <p> No Def </p>
        }

        return (
                <ul style={{textAlign: "left"}}>
                    {data && data.map((datum: Definitions,idx: number) => {
                       return <ol>  {idx + 1}  Definition: {datum.meanings[0].definitions[0].definition}  Example: {datum.meanings[0].definitions[0].example} </ol>
                    })}
                </ul>
        )
    }






// Example usage:




    // useEffect(() => {
    //     if(params.word){
    //         getData(params.word)
    //     }
    // },[params.word])


    return (
        <>
            <div>
                <span> Words of the Day : {Utils.renderToday()} </span>
            </div>
            <p>{params.word}</p>
            {renderDefAndExample(data)}
        </>
    )
}