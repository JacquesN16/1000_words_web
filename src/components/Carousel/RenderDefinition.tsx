import React from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer.tsx";

interface DefinitionProps {
    data: any[];
}

const RenderDefinition: React.FC<DefinitionProps> = ({data}) => {
    const renderPronunciation = (datum: any) => {
        let audioURL = ''
        for (const item of datum.phonetics) {
            if (item.audio) {
                audioURL = item.audio;
            }
        }

        return (<>
            <span className="partOfSpeech">{datum.meanings[0].partOfSpeech}</span>
            <span>{datum.phonetic}</span>
            {audioURL && <AudioPlayer audioUrl={audioURL}/>}
        </>)
    }

    const showExample = (datum: any) => {
        if (datum.meanings[0].definitions[0].example) {
            return <p>Example: {datum.meanings[0].definitions[0].example}</p>
        } else {
            return <></>
        }
    }

   const showOrigin = (datum: any) => {
        if(datum.origin) {
            return <p>Origin: {datum.origin}</p>
        }
   }


    return (
        <>
            <h4>Definition</h4>
            {data?.map((datum, idx) => {
                return  <div className="fadeIn">
                    <p>{idx + 1}. ({renderPronunciation(datum)}) {datum.meanings[0].definitions[0].definition}</p>
                    {showExample(datum)}
                    {showOrigin(datum)}
                </div>
            })}

        </>
    )
}


export default RenderDefinition;