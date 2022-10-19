import React, { useState } from 'react'
import data from '../../data/data.json'
import Tweet from '../Tweet/Tweet'

const Form = () => {
    const { characters, banks } = data

    const [selectedCharacterId, setSelectedCharacterId] = useState(undefined)
    const [characterImageUrl, setCharacterImageUrl] = useState(undefined)
    const [selectedBank, setSelectedBank] = useState(undefined)
    const [selectedTweetTemplate, setSelectedTweetTemplate] =
        useState(undefined)

    const tweet = {
        bank: banks[selectedBank]?.name,
        image: characterImageUrl,
        body: selectedTweetTemplate,
        character: characters[selectedCharacterId]?.name,
    }

    const handleCharacterChange = (e) => {
        const { value } = e.target

        setSelectedCharacterId(value)

        setCharacterImageUrl(undefined)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(tweet)
    }

    const maybeRenderImagePicker = () => {
        if (!selectedCharacterId) return null

        return (
            <>
                <label>Select Image</label>
                <div className='preview-img-container'>
                    {characters[selectedCharacterId].images.map(
                        (characterImg) => (
                            <>
                                <input
                                    type='radio'
                                    value={characterImg}
                                    checked={characterImg === characterImageUrl}
                                    onChange={() =>
                                        setCharacterImageUrl(characterImg)
                                    }
                                />

                                <img
                                    src={characterImg}
                                    className='preview-image'
                                />
                            </>
                        )
                    )}
                </div>
            </>
        )
    }

    return (
        <>
            <div className='form-container'>
                <label>Bank</label>
                <select onChange={(e) => setSelectedBank(e.target.value)}>
                    <option value=''>Please Select Bank</option>
                    {Object.keys(banks).map((key, i) => (
                        <option key={i} value={key}>
                            {banks[key].name}
                        </option>
                    ))}
                </select>

                <label>Pick Character</label>
                <select name='character' onChange={handleCharacterChange}>
                    <option value=''>Please Select Character</option>
                    {Object.keys(characters).map((key, i) => (
                        <option key={i} value={key}>
                            {characters[key].name}
                        </option>
                    ))}
                </select>

                {maybeRenderImagePicker()}

                <label>Select Tweet Template</label>
                {data['tweet-body'].map((item, i) => (
                    <div key={i} className='rb-container'>
                        <input
                            type='radio'
                            name='body'
                            value={item['tweet-en']}
                            onChange={(e) =>
                                setSelectedTweetTemplate(e.target.value)
                            }
                        />
                        <label>{item['tweet-en']}</label>
                    </div>
                ))}
                <input type='submit' onClick={handleSubmit} value='Preview' />
            </div>

            <h2>Tweet Preview</h2>
            <Tweet tweet={tweet} />
        </>
    )
}

export default Form
