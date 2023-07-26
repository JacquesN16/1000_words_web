import words from '../../assets/words.ts'
import {useEffect, useState} from "react";
import Utils from "../../utils/utils.ts";
import './words.scss'
import Carousel from "../../components/Carousel/Carousel.tsx";
import RenderDefinition from "../../components/Carousel/RenderDefinition.tsx";

export default function Main() {
    const [newWords, setNewWords] = useState<string[]>([])
    const [currentWord, setCurrentWord] = useState<string>('')
    const [data, setData] = useState<any[]>([])
    const getNewWords = () => {
        const idx1 = Utils.getRandomInt(999)
        const idx2 = Utils.getRandomInt(999)
        const idx3 = Utils.getRandomInt(999)

        const word1 = words[idx1]
        const word2 = words[idx2]
        const word3 = words[idx3]
        setNewWords([word1, word2, word3])
    }

    const getData = async (word: string) => {
        if (!word) {
            return
        }
        // "https://dictionaryapi.dev/"
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const jsonData = await response.json();
        setData(jsonData)
    }


    useEffect(() => {
        getNewWords()
    }, [])

    useEffect(() => {
        if (currentWord) {
            getData(currentWord)
        } else{
            getData(newWords[0])
        }
    }, [currentWord, newWords])

    return (
        <div className='fadeIn words-container'>
            <div className="text-grey words-header-container center-flex">
                <p>Words of the Day : {Utils.renderToday()}</p>
            </div>
            <div className="words-carousel-container center-flex">
                <Carousel items={newWords} setCurrentWord={setCurrentWord}/>
            </div>
            <div>
                 <div className="definition-container">
                     {data && <RenderDefinition data={data}/>}
                </div>
            </div>

        </div>
    )
}