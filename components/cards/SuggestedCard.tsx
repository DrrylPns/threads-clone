import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
    id: string,
    name: string,
    username: string,
    imgUrl: string,
}

const SuggestedCard = ({
    id,
    name,
    username,
    imgUrl,
}: Props) => {
  return (
    <div className='flex flex-col text-white my-5 '>
        <div className='flex justify-between gap-[100px]'>
            <div className='flex flex-row gap-4'>
            <Link href={`/communities/${id}`} className='relative h-[52px] w-[52px]'>
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
            

            <Link href={`/communities/${id}`}>
                <Button size='sm' className='community-card_btn'>
                    View
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default SuggestedCard