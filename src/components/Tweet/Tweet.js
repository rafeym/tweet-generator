import React from 'react'
import Button from '../Button/Button'

import {
    BsArrowLeftRight,
    BsHeart,
    BsChat,
    BsUpload,
    BsBarChart,
} from 'react-icons/bs'

import placeholder from '../../images/placeholder-image.png'
import logo from '../../images/logo.png'

const Tweet = ({ tweet }) => {
    const {
        bank = '<bank>',
        character = '<character>',
        imagePrev,
        imageUrl,
        body = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas',
    } = tweet

    const updatedTweetBody = body
        .replace('<character>', character)
        .replace('<bank>', bank)

    const tweetContent = updatedTweetBody.replaceAll('#', '%40')

    const tweetURL = `https://twitter.com/intent/tweet?text=${tweetContent}%20${imageUrl}`

    return (
        <div className='main-container'>
            <div className='tweet-card'>
                <div className='tweet-card-left'>
                    <img src={logo} alt='Greenpeace Logo' />
                </div>
                <div className='tweet-card-right'>
                    <div className='tweet-card-right-name'>
                        <a href='/'>Greenpeace Canada</a> @GreenpeaceCA{' '}
                        <a href='/'>2022</a>
                    </div>
                    {body === '' ? <p>{body}</p> : <p>{updatedTweetBody}</p>}
                    {imagePrev === undefined ? (
                        <img src={placeholder} alt='placeholder image' />
                    ) : (
                        <img src={imagePrev} alt={`Image of ${character}`} />
                    )}
                    <div className='tweet-card-right-actions'>
                        <BsChat />
                        <BsArrowLeftRight />
                        <BsHeart />
                        <BsUpload />
                        <BsBarChart />
                    </div>
                </div>
            </div>
            <Button href={tweetURL} />
        </div>
    )
}

export default Tweet
