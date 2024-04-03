import React from 'react'

const SettingsView = () => {
  return (
    <div className='w-4/5 flex flex-row z-10 gap-10'>
        <div className='w-2/5'>
            <img
                src="/dashboard/placeholder.png"
                alt='profile-picture'
                width={463}
                height={680}
                style={{aspectRatio : '463/680'}}
            />
        </div>
        <div className='flex flex-col w-3/5 gap-[48px]'>
            <div className='flex flex-col'>
                <h1 className='font-normal font-westmeath text-[64px] bg-gradient-to-tr from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent'>SETTINGS</h1>
                <h1 className='font-cgp font-bold text-[36px] text-[#F4D38E]'>@rhleena</h1>
                <h1 className='font-westmeath font-normal text-[64px] text-[#F4D38E]'>LINA AZIZAH RAMADHANI HARDYANTI</h1>
                <h1 className='font-cgp font-semibold text-[36px] text-[#F4D38E]'>Sistem dan Teknologi Informasi</h1>
                <button className='bg-[#FFDFA4] border-[#B87D12] border-[6px] w-[320px] h-[72px] rounded-3xl'> 
                    <p className='font-westmeath font-normal text-[36px] text-[#B87D12] rounded-[0.5rem]'>CHANGE PHOTO</p>
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-normal font-westmeath text-[64px] bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-transparent'>SECURITY</h1>
                <label className='font-cgp font-semibold text-[20px] text-[#ECC786] '>New Password</label>
                <input className='w-[665px] h-[60px] rounded-[0.5rem] border-[1px] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30' type='password'/>
                <label className='font-cgp font-semibold text-[20px] text-[#ECC786]'>Re-enter New Password</label>
                <input className='w-[665px] h-[60px] rounded-[0.5rem] border-[1px] bg-gradient-to-r from-[#F4D692] to-[#FCECAF] opacity-30' type='password'/>
                <button className='bg-[#FFDFA4] border-[#B87D12] border-[6px] w-[320px] h-[72px] rounded-3xl'> 
                    <p className='font-westmeath font-normal text-[36px] text-[#B87D12] rounded-[0.5rem]'>FORGET PASSWORD</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SettingsView