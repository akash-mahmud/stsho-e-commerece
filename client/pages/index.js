import Head from 'next/head'
import Image from 'next/image'
import FetauredSection from '../Components/Home/FetauredSection'
import RecomandedSection from '../Components/Home/RecomandedSection'
import Arrival from '../Components/Home/Arrival'
import styles from '../styles/Home.module.css'
import CategoryWiseProductSection from '../Components/Home/Category/CategoryWiseProductSection'

export default function Home() {
  return (
    <>
      <FetauredSection />
      <RecomandedSection/>
      <Arrival />
      <CategoryWiseProductSection/>
    </>
  )
}
