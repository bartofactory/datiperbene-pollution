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
        console.log(evt)
        params.zoneName = evt.values_.NIL_lower || ''
        // var mortalita_100 = confidence.find(el => el.NIL_lower === params.zoneName)
        params.population = evt.values_.Pop || ''
        // params.died100.confidenceHigh = Math.round(mortalita_100.c20_tasso_upper * 10)
        // params.died100.confidenceLow = Math.round(mortalita_100.c20_tasso_lower * 10)
        // params.died100.value = Math.round(mortalita_100.c20_tasso * 10)
        // params.dec_attrno2.confidenceHigh = Math.round(mortalita_100.dec_sup)
        // params.dec_attrno2.confidenceLow = Math.round(mortalita_100.dec_inf)
        // params.dec_attrno2.value = Math.round(mortalita_100.dec)
        params.died100.confidenceHigh = Math.round(0)
        params.died100.confidenceLow = Math.round(0)
        params.died100.value = Math.round(evt.values_.c20_tasso)
        params.dec_attrno2.confidenceHigh = Math.round(0)
        params.dec_attrno2.confidenceLow = Math.round(0)
        params.dec_attrno2.value = Math.round(evt.values_.dec)
    });

    return windowTemplate(params)

}