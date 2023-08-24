import React from 'react'
import facebook from '../images/icon-facebook.svg'
import up from '../images/icon-up.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import down from '../images/icon-down.svg'
export default function Followers() {
  return (
    <>
        <section className='py-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50 border-t-8 border-blue-600 dark:bg-card-bg shadow-none'>
                <ul className='flex items-center justify-center text-center'>
                    <li><img src={facebook} alt="Facebook" className='mr-2'/></li>
                    <li className='text-small font-bold text-slate-600 dark:text-text'>@nathanf</li>
                </ul>
                <h2 className='text-5xl text-slate-800 font-bold text-center my-5 dark:text-white'>1987 <span className='text-sm block text-slate-600/70 font-normal uppercase tracking-widest my-1 dark:text-text'>Followers</span></h2>
                <p className='text-center font-bold text-sm text-emerald-600/90 flex items-center justify-center'><img src={up} alt="icon-up" className='mr-1 w-3'/> 12 Today</p>
            </article>
            <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50 border-t-8 border-blue-500 dark:bg-card-bg shadow-none'>
                <ul className='flex items-center justify-center text-center'>
                    <li><img src={twitter} alt="twitter" className='mr-2'/></li>
                    <li className='text-small font-bold text-slate-600 dark:text-text'>@nathanf</li>
                </ul>
                <h2 className='text-5xl text-slate-800 font-bold text-center my-5 dark:text-white'>1044 <span className='text-sm block text-slate-600/70 font-normal uppercase tracking-widest my-1 dark:text-text'>Followers</span></h2>
                <p className='text-center font-bold text-sm text-emerald-600/90 flex items-center justify-center'><img src={up} alt="icon-up" className='mr-1 w-3'/>99 Today</p>
            </article>
            <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50 relative dark:bg-card-bg shadow-none'>
                <div className="bg-gradient-to-r from-insta to-gram h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0"></div>
                <ul className='flex items-center justify-center text-center'>
                    <li><img src={instagram} alt="instagram" className='mr-2'/></li>
                    <li className='text-small font-bold text-slate-600 dark:text-text'>@realnathanf</li>
                </ul>
                <h2 className='text-5xl text-slate-800 font-bold text-center my-5 dark:text-white'>11K <span className='text-sm block text-slate-600/70 font-normal uppercase tracking-widest my-1 dark:text-text'>Followers</span></h2>
                <p className='text-center font-bold text-sm text-emerald-600/90 flex items-center justify-center'><img src={up} alt="icon-up" className='mr-1 w-3 '/>1099 Today</p>
            </article>
            <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50 border-t-8 border-rose-800 dark:bg-card-bg shadow-none'>
                <ul className='flex items-center justify-center text-center'>
                    <li><img src={youtube} alt="youtube" className='mr-2'/></li>
                    <li className='text-small font-bold text-slate-600 dark:text-text'>Nathan F.</li>
                </ul>
                <h2 className='text-5xl text-slate-800 font-bold text-center my-5 dark:text-white'>8239 <span className='text-sm block text-slate-600/70 font-normal uppercase tracking-widest my-1 dark:text-text'>subscribers</span></h2>
                <p className='text-center font-bold text-sm text-rose-600/80 flex items-center justify-center'><img src={down} alt="icon-down" className='mr-1 w-3'/>144 Today</p>
            </article>
        </section>
    </>
  )
}
