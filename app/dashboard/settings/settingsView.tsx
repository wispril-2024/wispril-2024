"use client"
import React, { useState } from 'react'
import ImageUploadButton from './ImageUploadButton'
import Image from 'next/image'
import placeholder from "@/public/dashboard/placeholder.png" 
const SettingsView = () => {
    const [onImage,setOnImage] = useState<string | null>(null);
    const handleImageUpload = (image: string | null) => {
        setOnImage(image);
    }
  return (
    <div className='w-4/5 flex flex-row z-10 gap-10'>
        <div className='w-2/5'>
            <Image
                src={onImage ? onImage : placeholder}
                alt='profile-picture'
                width={463}
                height={680}
                className='w-full'
            />
        </div>
        <div className='flex flex-col w-3/5 gap-[32px]'>
            <div className='flex flex-col gap-[36px]'>
                <div className='gap-[30px]'>
                    <div>
                        <h1 className='absolute font-normal font-westmeath text-[64px] blur-sm bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent'>SETTINGS</h1>
                        <h1 className='font-normal font-westmeath text-[64px] bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent'>SETTINGS</h1>
                    </div>
                    <h1 className='font-cgp font-bold text-[36px] text-[#F4D38E]'>@rhleena</h1>
                    <h1 className='font-westmeath font-normal text-[64px] text-[#F4D38E]'>LINA AZIZAH RAMADHANI HARDYANTI</h1>
                    <h1 className='font-cgp font-semibold text-[36px] text-[#F4D38E]'>Sistem dan Teknologi Informasi</h1>
                </div>
                <ImageUploadButton onImage={handleImageUpload} className='bg-[#FFDFA4] border-[#B87D12] border-[6px] w-[320px] h-[72px] rounded-3xl'> 
                    <p className='font-westmeath font-normal text-[36px] text-[#B87D12] rounded-[0.5rem]'>CHANGE PHOTO</p>
                </ImageUploadButton>
            </div>
            <div className='flex flex-col gap-[36px]'>
                <div className='flex flex-col gap-[24px]'>
                    <div>
                        <h1 className='absolute font-normal font-westmeath blur-sm text-[64px] bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent'>SECURITY</h1>
                        <h1 className='font-normal font-westmeath text-[64px] bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent'>SECURITY</h1>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col'>
                            <label className='font-cgp font-semibold text-[20px] text-[#ECC786] '>Old Password</label>
                            <input className='w-full h-[60px] rounded-[0.5rem] border-[1px] border-[#ECC786] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30' type='password'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-cgp font-semibold text-[20px] text-[#ECC786] '>New Password</label>
                            <input className='w-full h-[60px] rounded-[0.5rem] border-[1px] border-[#ECC786] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30' type='password'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-cgp font-semibold text-[20px] text-[#ECC786]'>Re-enter New Password</label>
                            <input className='z-10 w-full h-[60px] rounded-[0.5rem] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30' type='password'/>                        
                        </div>
                    </div>
                </div>
                <button className='bg-[#FFDFA4] border-[#B87D12] border-[6px] w-[320px] h-[72px] rounded-3xl'> 
                    <p className='font-westmeath font-normal text-[36px] text-[#B87D12] rounded-[0.5rem]'>FORGET PASSWORD</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SettingsView