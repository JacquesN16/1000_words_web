import {useParams} from "react-router-dom";
import { useEffect, useState} from "react";
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
    const [data, setData] = useState<Definitions[]>([])


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


    const getData = async (word: string) => {
        // "https://dictionaryapi.dev/"
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const jsonData = await response.json();
        setData(jsonData)
    }



    useEffect(() => {
        if(params.word){
            getData(params.word)
        }
    },[params.word])


    return (
        <>
            <h1>Word</h1>
            <p>{params.word}</p>
            {renderDefAndExample(data)}
        </>
    )
}