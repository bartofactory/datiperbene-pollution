function windowTemplate(params){
    return `<div id="infoBox">

        <section id="header">
            <div class="row space-between">
                <h1 class="zoneName">${params.zoneName}</h1>
                <h1><i class="gg-close" onclick="closeWindow(legendTemplate())" id="closeButton"></i></h1>
            </div>

            <div class="row" id="population">
                <img src="./images/people.svg" width="20" height="20">
                <span id="populationZone">${params.population} abitanti</span>
            </div>
        </section>

        <section id="content">
            <div id="note">
                <div class="row"><h3>Tasso di mortalità<small><sup>*</sup></small></h3></div>
                <div class="additional">(stima per anno)</div>
            </div>
                
            <div class="confidence">
                <div class="row space-around data">
                    <div class="divValue">
                        <span id="died100Low" class="confidenceLow">${params.died100.confidenceLow}<small><sup>**</sup></small></span>
                    </div>
                    <div class="divValue">
                        <span id="died100" class="number">${params.died100.value}</span>
                    </div>
                    <div class="divValue">
                        <span id="died100High" class="confidenceHigh">${params.died100.confidenceHigh}<small><sup>**</sup></small></span>
                    </div>
                </div>
                <div class="border"></div>
            </div>
            
            <div>
                <div class="row center caption">
                    <span class="divValue">persone su 100 mila abitanti</span>
                </div>
            </div>

            <div id="note">
                <div class="row"><h3>Decessi evitabili</h3><div id="alert" data-tooltip="Nel caso di una zona urbanistica con pochi abitanti la lettura delle mappe può essere distorta a causa del numero esiguo di decessi osservati"><i class="gg-danger"></i></div></div>
                <div class="additional">(stima per anno)</div>
            </div>
                
            <div class="confidence">
                <div class="row space-around data">
                    <div class="divValue">
                        <span id="dec_attrno2_inf" class="confidenceLow">${params.dec_attrno2.confidenceLow}<small><sup>**</sup></small></span>
                    </div>
                    <div class="divValue">
                        <span id="dec_attrno2" class="number">${params.dec_attrno2.value}</span>
                    </div>
                    <div class="divValue">
                        <span id="dec_attrno2_sup" class="confidenceHigh">${params.dec_attrno2.confidenceHigh}<small><sup>**</sup></small></span>
                    </div>
                </div>
                <div class="border"></div>
            </div>
            
            <div>
                <div class="row center caption">
                    <span class="divValue">morti evitabili</span>
                </div>
            </div>

        </section>

        <section id="footer">
            <div class="row">
                <span id="disclaimer">
                    (*) attribuibile all'esposizione di NO2 in eccesso a 20µg/m<small><sup>3</sup></small><br />
                    (**) Intervalli di confidenza inferiore e superiore (95% C.I.)
                </span>
            </div>
        </section>

    </div>`
}

function legendTemplateMortalita(){
    return `<div id="infoBox" onclick="toggleBottomSheet()">
        <section id="header">
            <div class="row space-between">
                <h1 class="zoneName">Mortalità per NO2</h1><i class="chevron gg-chevron-up"></i>
            </div>
            <div id="note" class="instruction">
                <div class="row"><span>Seleziona un quartiere per scoprirne il dettaglio.</span></div>
            </div>
        </section>

        <div class="invisible">
            <section id="content">
                <div id="note">
                    <div class="row"><h3>Legenda</h3></div>
                    <div id="note">
                        <div class="row"><span>Numeri riferiti ai decessi su 100 mila abitanti</span></div>
                    </div>
                    
                </div>

                <div id="legend" class="row space-around dataLegend">
                    <div>
                        <img src="styles/legend/Milano_mortalita_2_0.png" />  0 - 20 <br/>
                        <img src="styles/legend/Milano_mortalita_2_1.png" />  20 - 40 <br/>
                        <img src="styles/legend/Milano_mortalita_2_2.png" />  40 - 60 <br/>
                        <img src="styles/legend/Milano_mortalita_2_3.png" />  60 - 80 <br/>
                        <img src="styles/legend/Milano_mortalita_2_4.png" />  80 - 100 <br/>
                    </div>
                    <div>
                        <img src="styles/legend/Milano_mortalita_2_5.png" />  100 - 120 <br/>
                        <img src="styles/legend/Milano_mortalita_2_6.png" />  120 - 140 <br/>
                        <img src="styles/legend/Milano_mortalita_2_7.png" />  140 - 160 <br/>
                        <img src="styles/legend/Milano_mortalita_2_8.png" />  160 - 180 <br/>
                        <img src="styles/legend/Milano_mortalita_2_9.png" />  180 - 199 <br/>
                    </div>
                </div>
                
            </section>
            <section id="footer">
                <div id="source">
                    <b>Fonte/Elaborazione</b> <br />
                        <a href="https://www.cittadiniperlaria.org/no2-no-grazie-2020/" target="_blank">Dati NO2 No Grazie! 2020</a> <br /> 
                        <a href="https://www.cittadiniperlaria.org/comitato-scientifico-del-progetto-no2-no-grazie/" target="_blank">Comitato scientifico NO2 No Grazie!</a><br />
                    <b>Elaborazione grafica</b> <br />
                        <a href="https://www.globalshapersmilano.com/" target="_blank">Global Shapers Milan Hub</span>
                </div>
                <div id="logos">
                    <a href="https://www.cittadiniperlaria.org/" target="_blank"><img src="./images/CPA.png" alt="Cittadini per l'aria"></a>
                    <a href="https://www.globalshapersmilano.com/" target="_blank"><img src="./images/Milan_GS.png" alt="Global Shapers Milano"></a>
                </div>
            </section>
        </div>
    </div>`
}

function legendTemplateNOx(){
    return `<div id="infoBox" onclick="toggleBottomSheet()">
        <section id="header">
            <div class="row space-between">
                <h1 class="zoneName">Concentrazione di NO2</h1><i class="chevron gg-chevron-up"></i>
            </div>
        </section>
        <div class="invisible">
            <section id="content">
                <div id="note">
                    <div class="row"><h3>Legenda (µg/m<small><sup>3</sup></small>)</h3></div>
                    
                </div>

                <div id="legendGradient" class="row space-around data">
                    <div>
                        <img src="./images/gradient_NO2.png" class="gradient"/> 
                        <div class="row space-between">
                            <span>18</span>
                            <span>30</span>
                            <span>40</span>
                            <span>50</span>
                            <span>60</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer">
                <div id="source">
                    <b>Fonte/Elaborazione</b> <br />
                        <a href="https://www.cittadiniperlaria.org/no2-no-grazie-2020/" target="_blank">Dati NO2 No Grazie! 2020</a> <br /> 
                        <a href="https://www.cittadiniperlaria.org/comitato-scientifico-del-progetto-no2-no-grazie/" target="_blank">Comitato scientifico NO2 No Grazie!</a><br />
                    <b>Elaborazione grafica</b> <br />
                        <a href="https://www.globalshapersmilano.com/" target="_blank">Global Shapers Milan Hub</span>
                </div>
                <div id="logos">
                    <a href="https://www.cittadiniperlaria.org/" target="_blank"><img src="./images/CPA.png" alt="Cittadini per l'aria"></a>
                    <a href="https://www.globalshapersmilano.com/" target="_blank"><img src="./images/Milan_GS.png" alt="Global Shapers Milano"></a>
                </div>
            </section>
        </div>
    </div>`
}