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
        console.log(evt.values_)
        params.zoneName = evt.values_.NIL_lower || ''
        params.population = evt.values_.Pop || ''
        params.died100.confidenceHigh = Math.round(evt.values_.c20_upper)
        params.died100.confidenceLow = Math.round(evt.values_.c20_lower)
        params.died100.value = Math.round(evt.values_.c20_tasso)
        params.dec_attrno2.confidenceHigh = Math.round(parseInt(evt.values_.dec_sup))
        params.dec_attrno2.confidenceLow = Math.round(parseInt(evt.values_.dec_inf))
        params.dec_attrno2.value = Math.round(parseInt(evt.values_.dec))
    });

    return windowTemplate(params)

}