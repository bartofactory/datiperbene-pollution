function generatePopup(event){

    var params = {
        zoneName: '',
        population: 0,
        died100: {
            value: 0,
            confidenceLow: 0,
            confidenceHigh: 0
        },
        dec_attrno2: {
            value: 0,
            confidenceLow: 0,
            confidenceHigh: 0
        }
    }

    event.forEach(evt => {
        params.zoneName = evt.values_.NIL_lower || ''
        var mortalita_100 = confidence.find(el => el.NIL_lower === params.zoneName)
        params.population = evt.values_.Pop || ''
        params.died100.confidenceHigh = Math.round(mortalita_100.tasso_sup)
        params.died100.confidenceLow = Math.round(mortalita_100.tasso_inf)
        params.died100.value = Math.round(mortalita_100.tasso)
        params.dec_attrno2.confidenceHigh = Math.round(mortalita_100.dec_attrno2_sup)
        params.dec_attrno2.confidenceLow = Math.round(mortalita_100.dec_attrno2_inf)
        params.dec_attrno2.value = Math.round(mortalita_100.dec_attrno2)
    });

    return windowTemplate(params)

}
