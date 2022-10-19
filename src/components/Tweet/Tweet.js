import React from 'react'
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
        image,
        body = '',
    } = tweet

    const updatedTweetBody = body
        .replace('<character>', character)
        .replace('<bank>', bank)

    const placeholderText =
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas'

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
                    {body === '' ? (
                        <p>{placeholderText}</p>
                    ) : (
                        <p>{updatedTweetBody}</p>
                    )}
                    {image === undefined ? (
                        <img src={placeholder} alt='placeholder image' />
                    ) : (
                        <img src={image} alt={`Image of ${character}`} />
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
        </div>
    )
}

export default Tweet
