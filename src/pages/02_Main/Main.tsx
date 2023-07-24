import words from '../../assets/words.ts'
import {useEffect, useState} from "react";
import Utils from "../../utils/utils.ts";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../constants/route.ts";
export default function Main() {
    const navigate = useNavigate()
    const [newWords, setNewWords] = useState<string[]>([])

    const getNewWords = () => {
        const idx1 = Utils.getRandomInt(999)
        const idx2 = Utils.getRandomInt(999)
        const idx3 = Utils.getRandomInt(999)

        const word1 = words[idx1]
        const word2 = words[idx2]
        const word3 = words[idx3]
        setNewWords([word1, word2, word3])
    }

    const handleClick = (word: string) => {
        navigate(`/word/${word}`)
    }

    useEffect(() => {
        getNewWords()
    },[])

    return (
        <div className='fadeIn'>
            <p>
                <Link to={routes.home}>
                    Back
                </Link>

            </p>
            <h1>Todays Words</h1>
            {newWords.map((word, idx) => {
              return(
                <p key={idx}>
                    <button onClick={()=>handleClick(word)}>
                        {word}
                    </button>
                </p>
              )
            })}
        </div>
    )
}