import React from "react";
import './SecondHomeStyle.css'

export default function SecondHome() {
    return (
        <main className="mainSecondHome">
            <aside className="asideLeftSecondHome">
                <h1 className="asideLeftSecondHomeH1">O que nos torna diferentes</h1>
                <p className="asideLeftSecondHomeP">
                    Fornecemos o financiamento e as conexões que você precisa para
                     expandir os seus negócios, sem ter que vender uma participação 
                     significativa da sua empresa.
                </p>
            </aside>

            <aside className="asideRightSecondHome">
                <article className="articleSecondMain">
                    <div className="divSecondMain">
                        <span className="spanSecondMain">1.</span>
                        <h2 className="articleSecondMainH2">
                            Nenhum limite de propriedade significa menos 
                            diluição e um sindicato que agrega valor
                        </h2>
                    </div>

                    <p className="articleSecondMainP">
                        Ao contrário dos VCs tradicionais, não temos limites de propriedade.
                         Trabalhamos com empreendedores para determinar quanto investir e 
                         qual avaliação, com base nas necessidades de sua empresa, e não 
                         com base em modelos financeiros históricos de capital de risco. 
                         Isto reduz a diluição global, ao mesmo tempo que deixa espaço para 
                         parceiros de valor acrescentado.
                    </p>
                </article>

                <article className="articleSecondMain">
                    <div className="divSecondMain marginTop">
                        <span className="spanSecondMain">2.</span>
                        <h2 className="articleSecondMainH2">
                            Obtenha conexões e conselhos, sem abrir mão de 
                            um assento no conselho
                        </h2>
                    </div>

                    <p className="articleSecondMainP">
                        Fazemos parcerias com empreendedores e fornecemos aconselhamento e conexões 
                        de classe mundial sem a formalidade de um assento tradicional no conselho.
                    </p>
                </article>
                    
                <article className="articleSecondMain">
                    <div className="divSecondMain marginTop">
                        <span className="spanSecondMain">3.</span>
                        <h2 className="articleSecondMainH2">
                            Contrata os melhores talentos
                        </h2>
                    </div>

                    <p className="articleSecondMainP">
                        O maior desafio que as empresas em fase inicial enfrentam é estabelecer uma 
                        base para crescer que se baseie no ADN único da empresa. Nossos Talent 
                        Partners em tempo integral construíram os sistemas no Google e em outras 
                        startups, e podem fazer isso por você.
                    </p>
                </article>

                <article className="articleSecondMain noneBorderBotton">
                    <div className="divSecondMain marginTop">
                        <span className="spanSecondMain">4.</span>
                        <h2 className="articleSecondMainH2">
                            Chegue a uma próxima rodada competitivo
                        </h2>
                    </div>

                    <p className="articleSecondMainP">
                        Com a ADACapital liderando sua rodada, você pode levantar a quantia necessária 
                        para executar um plano e levantar a próxima rodada em condições muito favoráveis.
                    </p>
                </article>

            </aside>

        </main>
    )
}