import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

    interface Props {
        id: string,
        name: string,
        username: string,
        imgUrl: string,
    }

    const SuggestedUser = ({
        id,
        name,
        username,
        imgUrl,
    }: Props) => {

    return (
        <div className='flex flex-col text-white my-5 '>
            <div className='flex justify-between gap-[100px]'>
                <div className='flex flex-row gap-4'>
                    <Link href={`/profile/${id}`} className='relative h-[52px] w-[52px]'>
                        <Image
                            src={imgUrl}
                            alt='community_logo'
                            fill
                            className='rounded-full object-cover'
                        />
                    </Link>
                    <div className='flex flex-col'>
                        {name}
                        <p className='text-gray-1 text-[14px]'>@{username}</p>
                    </div>
                </div>
                

                <Link href={`/profile/${id}`}>
                    <Button size='sm' className='community-card_btn'>
                        View
                    </Button>
                </Link>
            </div>
        </div>
    )
    }

export default SuggestedUser