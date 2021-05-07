var createTextStyle = function(feature, resolution, labelText, labelFont,
                               labelFill, placement, bufferColor,
                               bufferWidth) {

    if (feature.hide || !labelText) {
        return; 
    } 

    if (bufferWidth == 0) {
        var bufferStyle = null;
    } else {
        var bufferStyle = new ol.style.Stroke({
            color: bufferColor,
            width: bufferWidth
        })
    }
    
    var textStyle = new ol.style.Text({
        font: labelFont,
        text: labelText,
        textBaseline: "middle",
        textAlign: "left",
        offsetX: 8,
        offsetY: 3,
        placement: placement,
        maxAngle: 0,
        fill: new ol.style.Fill({
          color: labelFill
        }),
        stroke: bufferStyle
    });

    return textStyle;
};

function stripe(stripeWidth, gapWidth, angle, color) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = screen.width;
    canvas.height = stripeWidth + gapWidth;
    context.fillStyle = color;
    context.lineWidth = stripeWidth;
    context.fillRect(0, 0, canvas.width, stripeWidth);
    innerPattern = context.createPattern(canvas, 'repeat');

    var outerCanvas = document.createElement('canvas');
    var outerContext = outerCanvas.getContext('2d');
    outerCanvas.width = screen.width;
    outerCanvas.height = screen.height;
    outerContext.rotate((Math.PI / 180) * angle);
    outerContext.translate(-(screen.width/2), -(screen.height/2));
    outerContext.fillStyle = innerPattern;
    outerContext.fillRect(0,0,screen.width,screen.height);

    return outerContext.createPattern(outerCanvas, 'no-repeat');
};

function closeWindow(htmlContent){
    document.getElementById('modal').innerHTML = htmlContent || ''
}

function openWindow(htmlContent){
    document.getElementById('modal').innerHTML = htmlContent
}

function visibleOnlyMortalita(){
    lyr_MI_NO2_1.setVisible(false);
    lyr_Milano_mortalita_2.setVisible(true);
    document.title = 'Mortalità Per NO2 a Milano'
}

function visibileOnlyNOx(){
    lyr_MI_NO2_1.setVisible(true);
    lyr_Milano_mortalita_2.setVisible(false);
    document.title = 'Concentrazione di NO2 a Milano'
}

function goToNOx(){
    visibileOnlyNOx();
    closeWindow(legendTemplateNOx())
}

function goToMortalita(){
    visibleOnlyMortalita();
    closeWindow(legendTemplateMortalita())
}

function legendTemplate(){
    if(lyr_MI_NO2_1.getVisible())
        return legendTemplateNOx();
    else
        return legendTemplateMortalita();
}

function toggleBottomSheet(){
    var arrowUp = document.getElementsByClassName('gg-chevron-up')[0]
    var arrowDown = document.getElementsByClassName('gg-chevron-down')[0]

    if(document.getElementsByClassName('invisible').length > 0){
        document.getElementsByClassName('invisible')[0].classList.add('visible');
        document.getElementsByClassName('invisible')[0].classList.remove('invisible');
        arrowUp.classList.add('gg-chevron-down')
        arrowUp.classList.remove('gg-chevron-up')
    }else if(document.getElementsByClassName('visible').length > 0){
        document.getElementsByClassName('visible')[0].classList.add('invisible');
        document.getElementsByClassName('visible')[0].classList.remove('visible');
        arrowDown.classList.add('gg-chevron-up')
        arrowDown.classList.remove('gg-chevron-down')
    }
    
}

function loadLegend(){
    goToMortalita();
}
