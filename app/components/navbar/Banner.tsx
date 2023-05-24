'use client'

import Container from '../Container'
import { GetStarted, ImageCus } from '../navbar'

const Banner = () => {
    return (
        <Container>
            <div className='flex flex-row'>
                <GetStarted />
                <ImageCus />
            </div>
        </Container>
    )
}

export default Banner