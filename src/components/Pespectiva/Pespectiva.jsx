import React from 'react';
import "./pespectivaStyle.css";

const Pespectiva = () => {
    return (
        <main className="section mainPespectiva">
            <section className="section seccao seccao1 texto-branco">
                <div className="data">
                    <p className="texto-verde">Março, 2020</p>
                </div>
                <div className="titulo">
                    <span className="texto-grande negrito">Software como Organização</span>
                </div>
                <div className="descricao">
                    <p className="margem-topo texto-medio largura-maxima">
                        Tudo, desde a codificação da lógica de um contrato de 
                        depósito simples até a facilitação de um banco 
                        totalmente funcional com empréstimos, 
                        economias, etc., agora pode ser representado com 
                        apenas algumas centenas de linhas de código.
                    </p>
                </div>
            </section>
            
            <section className="section seccao seccao2 texto-preto ">
                <div className="data">
                    <p className="texto-verde">Janeiro, 2020</p>
                </div>
                <div className="titulo">
                    <span className="texto-grande negrito">Impactos da Covid-19 na contratação</span>
                </div>
                <div className="descricao">
                    <p className="margem-topo texto-medio largura-maxima">
                        O trabalho remoto demorou muito para criar raízes, 
                        mesmo na tecnologia, além do ocasional "trabalho de 
                        casa na sexta-feira". Historicamente, muitas empresas de 
                        tecnologia emergentes estavam sediadas no Vale do 
                        Silício, com funcionários indo para um campus 
                        centralizado todos os dias.
                    </p>
                </div>
            </section>
            
            <section className="section seccao seccao3  texto-preto ">
                <div className="data">
                    <p className="texto-verde">Setembro, 2019 </p>
                </div>
                <div className="titulo">
                    <span className="texto-grande negrito">O Futuro dos Softwares de Produtividade</span>
                </div>
                <div className="descricao">
                    <p className="margem-topo texto-medio largura-maxima">
                        A primeira versão do Microsoft Office foi lançada em 
                        1989. Trinta anos depois, o pacote de produtos do 
                        Microsoft Office ainda está forte - um raro feito de 
                        resistência em uma indústria acostumada a mudanças 
                        frequentes e mudanças de paradigma. O mundo actual, 
                        movido a aplicativos em nuvem, tem pouca semelhança 
                        com a era de PC de software de desktop da década de 1980.
                    </p>
                </div>
            </section>

            <section className="section seccao seccao4  texto-branco ">
                <div className="data">
                    <p className="texto-verde">Novembro, 2018</p>
                </div>
                <div className="titulo">
                    <span className="texto-grande negrito">A contratação nas Startup´s</span>
                </div>
                <div className="descricao">
                    <p className="margem-topo texto-medio largura-maxima">
                    A característica definidora de cada startup é o 
                    crescimento. Em uma startup, não é onde você está, mas 
                    para onde está indo que importa, o progresso medido 
                    não em termos absolutos, mas como uma taxa de 
                    mudança em direcção à grandeza. Em um ambiente tão 
                    voltado para o futuro, os fundadores podem facilmente 
                    cair na armadilha de planear os desafios de amanhã sem 
                    se preparar adequadamente para as batalhas de hoje. 
                    Em nenhum lugar essa armadilha é mais pronunciada do 
                    que na contratação. A ênfase no crescimento pode levar 
                    os fundadores a uma contratação "à prova de futuro", 
                    favorecendo candidatos com experiência em negócios 
                    em grande escala e, ao mesmo tempo, perdendo de 
                    vista o quanto eles atendem às necessidades atuais da 
                    empresa.
                    </p>
                </div>
            </section>

        </main>
    );
};

export default Pespectiva;