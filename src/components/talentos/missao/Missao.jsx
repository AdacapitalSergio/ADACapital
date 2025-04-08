import React from 'react'
import "./missao.css"
import Animacao from '../../Animacao/Animacao'

export const Missao = () => {
  return (
    <div className='missao-main'>
               <Animacao />
               <div className='missa-titulo'>
                    <p className="fCircle"></p>
                    <h2 className='h2-cicle'>Nossa  Missão</h2>
                </div>

                <div className="missao">
                    <h1 className='h1-missao'>
                    A ADACapital
                    é especializada em capacitar
                    nossos empreendedores para construir uma
                    infraestrutura sólida por meio da
                    integração de processos e
                    estratégias de crescimento diferenciadas para
                    facilitar o sucesso de seus
                    negócios.
                    </h1>

                   <p className='p-missao'>
                    Nosso objetivo é fazer parceria com nossos fundadores
                    para ajudá-los a crescer de forma rápida e bem-sucedida em todas as fases de sua jornada.   
                  </p>
                </div>



    </div>
  )
}
