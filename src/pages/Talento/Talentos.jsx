import React from 'react'
import './talentos.css'
import { Init_talento } from '../../components/talentos/talentosInit/Init_talento'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Ferramentas } from '../../components/talentos/talentoSecond/Ferramentas'
import { Missao } from '../../components/talentos/missao/Missao'

export const Talentos = () => {
  return (
    <div >
      <Header/>
      <Init_talento/>
      <Ferramentas/>
      <Missao/>
      <Footer />
    </div>
  )
}
