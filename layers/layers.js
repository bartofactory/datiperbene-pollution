var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });


var colorize = new ol.filter.Colorize({ operation:'grayscale', value: 1 });
lyr_OpenStreetMap_0.addFilter(colorize);

var format_MI_NO2_1 = new ol.format.GeoJSON();
var features_MI_NO2_1 = format_MI_NO2_1.readFeatures(json_MI_NO2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MI_NO2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MI_NO2_1.addFeatures(features_MI_NO2_1);
var lyr_MI_NO2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MI_NO2_1, 
                style: style_MI_NO2_1,
                interactive: true,
    title: 'MI_NO2<br />\
    <img src="styles/legend/MI_NO2_1_0.png" /> 18 - 19<br />\
    <img src="styles/legend/MI_NO2_1_1.png" /> 19 - 20<br />\
    <img src="styles/legend/MI_NO2_1_2.png" /> 20 - 21<br />\
    <img src="styles/legend/MI_NO2_1_3.png" /> 21 - 22<br />\
    <img src="styles/legend/MI_NO2_1_4.png" /> 22 - 23<br />\
    <img src="styles/legend/MI_NO2_1_5.png" /> 23 - 24<br />\
    <img src="styles/legend/MI_NO2_1_6.png" /> 24 - 25<br />\
    <img src="styles/legend/MI_NO2_1_7.png" /> 25 - 26<br />\
    <img src="styles/legend/MI_NO2_1_8.png" /> 26 - 27<br />\
    <img src="styles/legend/MI_NO2_1_9.png" /> 27 - 28<br />\
    <img src="styles/legend/MI_NO2_1_10.png" /> 28 - 29<br />\
    <img src="styles/legend/MI_NO2_1_11.png" /> 29 - 30<br />\
    <img src="styles/legend/MI_NO2_1_12.png" /> 30 - 31<br />\
    <img src="styles/legend/MI_NO2_1_13.png" /> 31 - 32<br />\
    <img src="styles/legend/MI_NO2_1_14.png" /> 32 - 33<br />\
    <img src="styles/legend/MI_NO2_1_15.png" /> 33 - 34<br />\
    <img src="styles/legend/MI_NO2_1_16.png" /> 34 - 35<br />\
    <img src="styles/legend/MI_NO2_1_17.png" /> 35 - 36<br />\
    <img src="styles/legend/MI_NO2_1_18.png" /> 36 - 37<br />\
    <img src="styles/legend/MI_NO2_1_19.png" /> 37 - 38<br />\
    <img src="styles/legend/MI_NO2_1_20.png" /> 38 - 39<br />\
    <img src="styles/legend/MI_NO2_1_21.png" /> 39 - 40<br />\
    <img src="styles/legend/MI_NO2_1_22.png" /> 40 - 41<br />\
    <img src="styles/legend/MI_NO2_1_23.png" /> 41 - 42<br />\
    <img src="styles/legend/MI_NO2_1_24.png" /> 42 - 43<br />\
    <img src="styles/legend/MI_NO2_1_25.png" /> 43 - 44<br />\
    <img src="styles/legend/MI_NO2_1_26.png" /> 44 - 45<br />\
    <img src="styles/legend/MI_NO2_1_27.png" /> 45 - 46<br />\
    <img src="styles/legend/MI_NO2_1_28.png" /> 46 - 47<br />\
    <img src="styles/legend/MI_NO2_1_29.png" /> 47 - 48<br />\
    <img src="styles/legend/MI_NO2_1_30.png" /> 48 - 49<br />\
    <img src="styles/legend/MI_NO2_1_31.png" /> 49 - 50<br />\
    <img src="styles/legend/MI_NO2_1_32.png" /> 50 - 51<br />\
    <img src="styles/legend/MI_NO2_1_33.png" /> 51 - 52<br />\
    <img src="styles/legend/MI_NO2_1_34.png" /> 52 - 53<br />\
    <img src="styles/legend/MI_NO2_1_35.png" /> 53 - 54<br />\
    <img src="styles/legend/MI_NO2_1_36.png" /> 54 - 55<br />\
    <img src="styles/legend/MI_NO2_1_37.png" /> 55 - 56<br />\
    <img src="styles/legend/MI_NO2_1_38.png" /> 56 - 57<br />\
    <img src="styles/legend/MI_NO2_1_39.png" /> 57 - 58<br />\
    <img src="styles/legend/MI_NO2_1_40.png" /> 58 - 59<br />\
    <img src="styles/legend/MI_NO2_1_41.png" /> 59 - 60<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MI_NO2_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MI_NO2_1];
lyr_MI_NO2_1.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_MI_NO2_1.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_MI_NO2_1.set('fieldLabels', {'VALUE': 'no label', });
lyr_MI_NO2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});