import React from 'react'
import facebook from '../images/icon-facebook.svg'
import up from '../images/icon-up.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import down from '../images/icon-down.svg'
export default function Overview() {
  return (
    <>
      <h2 className='text-slate-600 font-bold mb-5 text-2xl md:text-3xl  dark:text-white'>Overview - Today</h2>
      <section className=' grid grid-cols-1 gap-6 md:grid-cols-4 sm: lg:grid-cols-4'>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5 '>
            <li className='text-slate-600 font-bold dark:text-text'><p>Page Views</p></li>
            <li><img src={facebook} alt="facebook" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>87</li>
            <li className='flex items-center text-emerald-600/90 font-bold text-sm'><img src={up} alt="icon-up" className='w-3 mr-1' />3%</li>
          </ul>
        </article>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-slate-600 font-bold dark:text-text'><p>Likes</p></li>
            <li><img src={facebook} alt="facebook" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>52</li>
            <li className='flex items-center text-rose-600/80 font-bold text-sm'><img src={down} alt="icon-down" className='w-3 mr-1' />2%</li>
          </ul>
        </article>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-slate-600 font-bold dark:text-text'><p>Likes</p></li>
            <li><img src={instagram} alt="instagram" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>5462</li>
            <li className='flex items-center text-emerald-600/90 font-bold text-sm'><img src={up} alt="icon-up" className='w-3 mr-1' />2257%</li>
          </ul>
        </article>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-slate-600 font-bold dark:text-text'><p>Profile Views</p></li>
            <li><img src={instagram} alt="instagram" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>52K</li>
            <li className='flex items-center text-emerald-600/90 font-bold text-sm'><img src={up} alt="icon-up" className='w-3 mr-1' />1375%</li>
          </ul>
        </article>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-slate-600 font-bold dark:text-text'><p>Retweets</p></li>
            <li><img src={twitter} alt="twitter" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>117</li>
            <li className='flex items-center text-emerald-600/90 font-bold text-sm'><img src={up} alt="icon-up" className='w-3 mr-1' />303%</li>
          </ul>
        </article>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-slate-600 font-bold dark:text-text'><p>Likes</p></li>
            <li><img src={twitter} alt="twitter" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>507</li>
            <li className='flex items-center text-emerald-600/90 font-bold text-sm'><img src={up} alt="icon-up" className='w-3 mr-1' />553%</li>
          </ul>
        </article>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-slate-600 font-bold dark:text-text'><p>Likes</p></li>
            <li><img src={youtube} alt="youtube" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>107</li>
            <li className='flex items-center text-rose-600/80 font-bold text-sm'><img src={down} alt="icon-down" className='w-3 mr-1' />19%</li>
          </ul>
        </article>
        <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50  dark:bg-card-bg shadow-none'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-slate-600 font-bold dark:text-text'><p>Total Views</p></li>
            <li><img src={youtube} alt="youtube" /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-slate-800 text-3xl dark:text-white'>1407</li>
            <li className='flex items-center text-rose-600/80 font-bold text-sm'><img src={down} alt="icon-down" className='w-3 mr-1' />12%</li>
          </ul>
        </article>
      </section>
    </>
  )
}
