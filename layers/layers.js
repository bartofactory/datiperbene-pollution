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


var colorize = new ol.filter.Colorize({ operation: 'grayscale', value: 1 });
lyr_OpenStreetMap_0.addFilter(colorize);

var lyr_MI_NO2_1 = new ol.layer.Image({
    opacity: 1,
    title: "MI_NO2",
    opacity: 0.750000,


    source: new ol.source.ImageStatic({
        url: "./layers/MI_NO2_1.png?no2",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1360005.072297, 5108901.027018, 1432151.705687, 5183929.681828]
    })
});
var format_Milano_mortalita_2 = new ol.format.GeoJSON();
var features_Milano_mortalita_2 = format_Milano_mortalita_2.readFeatures(json_Milano_mortalita_2, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Milano_mortalita_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Milano_mortalita_2.addFeatures(features_Milano_mortalita_2);
var lyr_Milano_mortalita_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Milano_mortalita_2,
    style: style_Milano_mortalita_2,
    'opacity': 0.800000,
    interactive: true,
    title: 'Milano_mortalita<br />\
    <img src="styles/legend/Milano_mortalita_2_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Milano_mortalita_2_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Milano_mortalita_2_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Milano_mortalita_2_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Milano_mortalita_2_4.png" /> 80 - 100<br />\
    <img src="styles/legend/Milano_mortalita_2_5.png" /> 100 - 120<br />\
    <img src="styles/legend/Milano_mortalita_2_6.png" /> 120 - 140<br />\
    <img src="styles/legend/Milano_mortalita_2_7.png" /> 140 - 160<br />\
    <img src="styles/legend/Milano_mortalita_2_8.png" /> 160 - 180<br />\
    <img src="styles/legend/Milano_mortalita_2_9.png" /> 180 - 199<br />'
});

lyr_OpenStreetMap_0.setVisible(true);
lyr_MI_NO2_1.setVisible(true);
lyr_Milano_mortalita_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0, lyr_MI_NO2_1, lyr_Milano_mortalita_2];
lyr_Milano_mortalita_2.set('fieldAliases', { 'ID_NIL': 'ID_NIL', 'AreaHA': 'AreaHA', 'AreaMQ': 'AreaMQ', 'NIL_lower': 'NIL_lower', 'Pop': 'Pop', 'c20_tasso': 'c20_tasso', 'c40_tasso': 'c40_tasso', });
lyr_Milano_mortalita_2.set('fieldImages', { 'ID_NIL': 'Range', 'AreaHA': 'TextEdit', 'AreaMQ': 'TextEdit', 'NIL_lower': 'TextEdit', 'Pop': 'TextEdit', 'c20_tasso': 'TextEdit', 'c40_tasso': 'TextEdit', });
lyr_Milano_mortalita_2.set('fieldLabels', { 'ID_NIL': 'inline label', 'AreaHA': 'inline label', 'AreaMQ': 'inline label', 'NIL_lower': 'header label', 'Pop': 'inline label', 'c20_tasso': 'header label', 'c40_tasso': 'inline label', });
lyr_Milano_mortalita_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});