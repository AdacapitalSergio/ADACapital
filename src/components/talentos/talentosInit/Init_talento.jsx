import React from 'react'
import "./initalento.css"
import Header from '../../Header/Header'

export const Init_talento = () => {
  return (
    
        <div className='talentos-main'>

          <div class="container">
                <div class="square square-1"></div>
              <div class="square square-2"></div>
              <div class="square square-3"></div>
              <div class="square square-4"></div>
              <div class="square square-5"></div>
              <div class="square square-6"></div>
              <div class="square square-7"></div>
              <div class="square square-8"></div>
              <div class="square square-9"></div>
              <div class="square square-10"></div>
          </div>  
              <div className="talento-titulo">
                    <h1 className='h1-talento'>
                      Experiência e recursos para orientar você enquanto constrói uma base sólida.
                    </h1>
              </div>
              <div className="talento-start">
                  
                   <div className='start'>
                    <p className="pCircle"></p>
                    <p> Desde o início</p>
                   </div>

                   <div className="start2">
                        <h1 className='h1-talento'>
                          Todo o seu plano de crescimento de talentos deve se tornar parte integrante da sua empresa desde o início.
                        </h1>
                        <p className='p-talento'>
                          Trabalharemos com você para construir práticas estratégicas e eficientes que produzam resultados, ao mesmo 
                          tempo em que levamos em conta a necessidade de planejar a escala futura. Entendemos que você precisa construir
                          o que é certo para você, na hora certa, para sua empresa.
                        </p>

                   </div>
              </div>
                    
          </div>
        
  )
}
