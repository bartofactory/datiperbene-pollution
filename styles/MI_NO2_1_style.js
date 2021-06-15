var size = 0;
var placement = 'point';

var style_MI_NO2_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("VALUE");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 18.000000 && value <= 19.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,255,164,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 19.000000 && value <= 20.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,248,141,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20.000000 && value <= 21.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,239,115,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 21.000000 && value <= 22.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,228,91,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 22.000000 && value <= 23.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,216,70,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23.000000 && value <= 24.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,203,52,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.000000 && value <= 25.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,192,37,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 25.000000 && value <= 26.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,179,23,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 26.000000 && value <= 27.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,167,12,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 27.000000 && value <= 28.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,155,7,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 28.000000 && value <= 29.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,144,8,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 29.000000 && value <= 30.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,133,15,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 30.000000 && value <= 31.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,122,23,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 31.000000 && value <= 32.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,112,32,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32.000000 && value <= 33.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,102,39,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 33.000000 && value <= 34.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,92,47,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 34.000000 && value <= 35.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,84,54,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 35.000000 && value <= 36.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(216,76,62,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 36.000000 && value <= 37.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,69,69,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 37.000000 && value <= 38.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,63,75,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 38.000000 && value <= 39.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(192,57,81,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 39.000000 && value <= 40.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,52,87,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 40.000000 && value <= 41.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(173,48,92,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 41.000000 && value <= 42.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(163,43,97,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 42.000000 && value <= 43.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(153,39,101,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 43.000000 && value <= 44.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(143,36,104,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 44.000000 && value <= 45.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(133,33,107,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 45.000000 && value <= 46.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(123,29,109,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 46.000000 && value <= 47.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(114,25,110,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 47.000000 && value <= 48.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(104,21,110,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 48.000000 && value <= 49.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(94,18,110,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 49.000000 && value <= 50.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(84,14,109,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 50.000000 && value <= 51.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(74,11,106,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 51.000000 && value <= 52.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(63,9,103,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 52.000000 && value <= 53.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(53,9,96,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 53.000000 && value <= 54.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(42,11,85,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 54.000000 && value <= 55.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,12,71,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 55.000000 && value <= 56.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(21,10,56,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 56.000000 && value <= 57.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(14,8,42,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 57.000000 && value <= 58.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(7,5,28,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 58.000000 && value <= 59.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(2,2,14,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 59.000000 && value <= 60.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,4,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
