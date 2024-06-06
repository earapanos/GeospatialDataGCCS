ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([561630.000000, 6742261.773050, 631911.197599, 6834660.000000]);
var wms_layers = [];

var lyr_raster_cortado_recorte_srtm30_utm22s_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "raster_cortado_recorte_srtm30_utm22s",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/raster_cortado_recorte_srtm30_utm22s_0.png",
    attributions: ' ',
                                projection: 'EPSG:31982',
                                alwaysInRange: true,
                                imageExtent: [561630.000000, 6742290.000000, 631890.000000, 6834660.000000]
                            })
                        });
var format_unidades_morfoestruturais_1 = new ol.format.GeoJSON();
var features_unidades_morfoestruturais_1 = format_unidades_morfoestruturais_1.readFeatures(json_unidades_morfoestruturais_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_unidades_morfoestruturais_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unidades_morfoestruturais_1.addFeatures(features_unidades_morfoestruturais_1);
var lyr_unidades_morfoestruturais_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_unidades_morfoestruturais_1, 
                style: style_unidades_morfoestruturais_1,
                popuplayertitle: "unidades_morfoestruturais",
                interactive: true,
                title: 'unidades_morfoestruturais'
            });
var format_geologia_125000_2 = new ol.format.GeoJSON();
var features_geologia_125000_2 = format_geologia_125000_2.readFeatures(json_geologia_125000_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_geologia_125000_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologia_125000_2.addFeatures(features_geologia_125000_2);
var lyr_geologia_125000_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologia_125000_2, 
                style: style_geologia_125000_2,
                popuplayertitle: "geologia_125000",
                interactive: true,
    title: 'geologia_125000<br />\
    <img src="styles/legend/geologia_125000_2_0.png" /> Depositos Continentais<br />\
    <img src="styles/legend/geologia_125000_2_1.png" /> Depositos Transicionais<br />\
    <img src="styles/legend/geologia_125000_2_2.png" /> Depositos Transicionais<br />\
    <img src="styles/legend/geologia_125000_2_3.png" /> Formacao Botucatu<br />\
    <img src="styles/legend/geologia_125000_2_4.png" /> Formacao Rio do Rasto<br />\
    <img src="styles/legend/geologia_125000_2_5.png" /> Grupo Serra Geral<br />\
    <img src="styles/legend/geologia_125000_2_6.png" /> <br />'
        });
var format_unidades_morfoesculturais_3 = new ol.format.GeoJSON();
var features_unidades_morfoesculturais_3 = format_unidades_morfoesculturais_3.readFeatures(json_unidades_morfoesculturais_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_unidades_morfoesculturais_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unidades_morfoesculturais_3.addFeatures(features_unidades_morfoesculturais_3);
var lyr_unidades_morfoesculturais_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_unidades_morfoesculturais_3, 
                style: style_unidades_morfoesculturais_3,
                popuplayertitle: "unidades_morfoesculturais",
                interactive: true,
    title: 'unidades_morfoesculturais<br />\
    <img src="styles/legend/unidades_morfoesculturais_3_0.png" /> PLANICIE LITORANEA<br />\
    <img src="styles/legend/unidades_morfoesculturais_3_1.png" /> PLANICIE COLUVIO ALUVIONAR<br />\
    <img src="styles/legend/unidades_morfoesculturais_3_2.png" /> MACICO RESIDUAL<br />\
    <img src="styles/legend/unidades_morfoesculturais_3_3.png" /> PATAMARES DA SERRA GERAL<br />\
    <img src="styles/legend/unidades_morfoesculturais_3_4.png" /> ESCARPAS DA SERRA GERAL<br />\
    <img src="styles/legend/unidades_morfoesculturais_3_5.png" /> PLANALTO DISSECADO RIO DAS ANTAAS<br />\
    <img src="styles/legend/unidades_morfoesculturais_3_6.png" /> PLANALTO SERRA GERAL<br />'
        });
var format_estruturas_cber4a_1100000_4 = new ol.format.GeoJSON();
var features_estruturas_cber4a_1100000_4 = format_estruturas_cber4a_1100000_4.readFeatures(json_estruturas_cber4a_1100000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_estruturas_cber4a_1100000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estruturas_cber4a_1100000_4.addFeatures(features_estruturas_cber4a_1100000_4);
var lyr_estruturas_cber4a_1100000_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estruturas_cber4a_1100000_4, 
                style: style_estruturas_cber4a_1100000_4,
                popuplayertitle: "estruturas_cber4a_1100000",
                interactive: true,
    title: 'estruturas_cber4a_1100000<br />\
    <img src="styles/legend/estruturas_cber4a_1100000_4_0.png" /> negativa<br />\
    <img src="styles/legend/estruturas_cber4a_1100000_4_1.png" /> positiva<br />'
        });
var format_limite_municipal_5 = new ol.format.GeoJSON();
var features_limite_municipal_5 = format_limite_municipal_5.readFeatures(json_limite_municipal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_limite_municipal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_municipal_5.addFeatures(features_limite_municipal_5);
var lyr_limite_municipal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_municipal_5, 
                style: style_limite_municipal_5,
                popuplayertitle: "limite_municipal",
                interactive: true,
                    title: '<img src="styles/legend/limite_municipal_5.png" /> limite_municipal'
                });
var format_limite_gccs_6 = new ol.format.GeoJSON();
var features_limite_gccs_6 = format_limite_gccs_6.readFeatures(json_limite_gccs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_limite_gccs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_gccs_6.addFeatures(features_limite_gccs_6);
var lyr_limite_gccs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_gccs_6, 
                style: style_limite_gccs_6,
                popuplayertitle: "limite_gccs",
                interactive: true,
                    title: '<img src="styles/legend/limite_gccs_6.png" /> limite_gccs'
                });
var group_mapa_detalhe = new ol.layer.Group({
                                layers: [lyr_limite_municipal_5,lyr_limite_gccs_6,],
                                fold: "open",
                                title: "mapa_detalhe"});
var group_vetorial_cientifico = new ol.layer.Group({
                                layers: [lyr_unidades_morfoestruturais_1,lyr_geologia_125000_2,lyr_unidades_morfoesculturais_3,lyr_estruturas_cber4a_1100000_4,],
                                fold: "open",
                                title: "vetorial_cientifico"});
var group_declividade_morfoesculturas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "declividade_morfoesculturas"});
var group_raster_cientifico = new ol.layer.Group({
                                layers: [lyr_raster_cortado_recorte_srtm30_utm22s_0,],
                                fold: "open",
                                title: "raster_cientifico"});

lyr_raster_cortado_recorte_srtm30_utm22s_0.setVisible(true);lyr_unidades_morfoestruturais_1.setVisible(false);lyr_geologia_125000_2.setVisible(false);lyr_unidades_morfoesculturais_3.setVisible(true);lyr_estruturas_cber4a_1100000_4.setVisible(false);lyr_limite_municipal_5.setVisible(false);lyr_limite_gccs_6.setVisible(true);
var layersList = [group_raster_cientifico,group_vetorial_cientifico,group_mapa_detalhe];
lyr_unidades_morfoestruturais_1.set('fieldAliases', {'UNI_MRFSTR': 'UNI_MRFSTR', 'UNI_MRFSCL': 'UNI_MRFSCL', 'AREA_KM2': 'AREA_KM2', });
lyr_geologia_125000_2.set('fieldAliases', {'SIGLA_UNID': 'SIGLA_UNID', 'COD_UNI_ES': 'COD_UNI_ES', 'SIGLAS_ANT': 'SIGLAS_ANT', 'NOME_UNIDA': 'NOME_UNIDA', 'HIERARQUIA': 'HIERARQUIA', 'IDADE_MAX': 'IDADE_MAX', 'ERRO_MAX': 'ERRO_MAX', 'EON_IDAD_M': 'EON_IDAD_M', 'ERA_MAXIMA': 'ERA_MAXIMA', 'PERIODO_MA': 'PERIODO_MA', 'EPOCA_MAX': 'EPOCA_MAX', 'SISTEMA_GE': 'SISTEMA_GE', 'METODO_GEO': 'METODO_GEO', 'QLDE_INFER': 'QLDE_INFER', 'IDADE_MIN': 'IDADE_MIN', 'ERRO_MIN': 'ERRO_MIN', 'EON_IDAD_1': 'EON_IDAD_1', 'ERA_MINIMA': 'ERA_MINIMA', 'PERIODO_MI': 'PERIODO_MI', 'EPOCA_MIN': 'EPOCA_MIN', 'SISTEMA__1': 'SISTEMA__1', 'METODO_G_1': 'METODO_G_1', 'QLDE_INF_1': 'QLDE_INF_1', 'AMBSEDIMEN': 'AMBSEDIMEN', 'SISTSEDIME': 'SISTSEDIME', 'TIPO_DEPOS': 'TIPO_DEPOS', 'ASSOC_MAGM': 'ASSOC_MAGM', 'NIVEL_CRUS': 'NIVEL_CRUS', 'TEXTURA_IG': 'TEXTURA_IG', 'FONTE_MAGM': 'FONTE_MAGM', 'MORFOLOGIA': 'MORFOLOGIA', 'AMBIENTE_T': 'AMBIENTE_T', 'METAMORFIS': 'METAMORFIS', 'METODO_G_2': 'METODO_G_2', 'TEMP_PICO': 'TEMP_PICO', 'ERRO_TEMP_': 'ERRO_TEMP_', 'PRESSAO_PI': 'PRESSAO_PI', 'ERRO_PRESS': 'ERRO_PRESS', 'TIPO_BARIC': 'TIPO_BARIC', 'TRAJETORIA': 'TRAJETORIA', 'AMBIENTE_1': 'AMBIENTE_1', 'LITOTIPO1': 'LITOTIPO1', 'LITOTIPO2': 'LITOTIPO2', 'CLASSE_ROC': 'CLASSE_ROC', 'CLASSE_R_1': 'CLASSE_R_1', 'BB_SUBCLAS': 'BB_SUBCLAS', 'BB_SUBCL_1': 'BB_SUBCL_1', 'NOME_SIMPL': 'NOME_SIMPL', });
lyr_unidades_morfoesculturais_3.set('fieldAliases', {'UNI_MRFSTR': 'UNI_MRFSTR', 'UNI_MRFSCL': 'UNI_MRFSCL', 'AREA_KM2': 'AREA_KM2', });
lyr_estruturas_cber4a_1100000_4.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'compr_metr': 'compr_metr', });
lyr_limite_municipal_5.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', });
lyr_limite_gccs_6.set('fieldAliases', {'TERRITORIO': 'TERRITORIO', 'AREA_KM2': 'AREA_KM2', });
lyr_unidades_morfoestruturais_1.set('fieldImages', {'UNI_MRFSTR': 'TextEdit', 'UNI_MRFSCL': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_geologia_125000_2.set('fieldImages', {'SIGLA_UNID': 'TextEdit', 'COD_UNI_ES': 'Hidden', 'SIGLAS_ANT': 'Hidden', 'NOME_UNIDA': 'TextEdit', 'HIERARQUIA': 'Hidden', 'IDADE_MAX': 'Hidden', 'ERRO_MAX': 'Hidden', 'EON_IDAD_M': 'Hidden', 'ERA_MAXIMA': 'Hidden', 'PERIODO_MA': 'Hidden', 'EPOCA_MAX': 'Hidden', 'SISTEMA_GE': 'Hidden', 'METODO_GEO': 'Hidden', 'QLDE_INFER': 'Hidden', 'IDADE_MIN': 'Hidden', 'ERRO_MIN': 'Hidden', 'EON_IDAD_1': 'Hidden', 'ERA_MINIMA': 'Hidden', 'PERIODO_MI': 'Hidden', 'EPOCA_MIN': 'Hidden', 'SISTEMA__1': 'Hidden', 'METODO_G_1': 'Hidden', 'QLDE_INF_1': 'Hidden', 'AMBSEDIMEN': 'Hidden', 'SISTSEDIME': 'Hidden', 'TIPO_DEPOS': 'Hidden', 'ASSOC_MAGM': 'Hidden', 'NIVEL_CRUS': 'Hidden', 'TEXTURA_IG': 'Hidden', 'FONTE_MAGM': 'Hidden', 'MORFOLOGIA': 'Hidden', 'AMBIENTE_T': 'Hidden', 'METAMORFIS': 'Hidden', 'METODO_G_2': 'Hidden', 'TEMP_PICO': 'Hidden', 'ERRO_TEMP_': 'Hidden', 'PRESSAO_PI': 'Hidden', 'ERRO_PRESS': 'Hidden', 'TIPO_BARIC': 'Hidden', 'TRAJETORIA': 'Hidden', 'AMBIENTE_1': 'Hidden', 'LITOTIPO1': 'Hidden', 'LITOTIPO2': 'Hidden', 'CLASSE_ROC': 'Hidden', 'CLASSE_R_1': 'Hidden', 'BB_SUBCLAS': 'Hidden', 'BB_SUBCL_1': 'Hidden', 'NOME_SIMPL': 'Hidden', });
lyr_unidades_morfoesculturais_3.set('fieldImages', {'UNI_MRFSTR': 'TextEdit', 'UNI_MRFSCL': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_estruturas_cber4a_1100000_4.set('fieldImages', {'id': 'TextEdit', 'tipo': 'TextEdit', 'compr_metr': 'TextEdit', });
lyr_limite_municipal_5.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', });
lyr_limite_gccs_6.set('fieldImages', {'TERRITORIO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_unidades_morfoestruturais_1.set('fieldLabels', {'UNI_MRFSTR': 'inline label - visible with data', 'UNI_MRFSCL': 'hidden field', 'AREA_KM2': 'inline label - visible with data', });
lyr_geologia_125000_2.set('fieldLabels', {'SIGLA_UNID': 'inline label - visible with data', 'COD_UNI_ES': 'inline label - visible with data', 'SIGLAS_ANT': 'no label', 'NOME_UNIDA': 'inline label - visible with data', 'HIERARQUIA': 'inline label - visible with data', 'IDADE_MAX': 'no label', 'ERRO_MAX': 'no label', 'EON_IDAD_M': 'no label', 'ERA_MAXIMA': 'no label', 'PERIODO_MA': 'no label', 'EPOCA_MAX': 'no label', 'SISTEMA_GE': 'no label', 'METODO_GEO': 'no label', 'QLDE_INFER': 'no label', 'IDADE_MIN': 'no label', 'ERRO_MIN': 'no label', 'EON_IDAD_1': 'no label', 'ERA_MINIMA': 'no label', 'PERIODO_MI': 'no label', 'EPOCA_MIN': 'no label', 'SISTEMA__1': 'no label', 'METODO_G_1': 'no label', 'QLDE_INF_1': 'no label', 'AMBSEDIMEN': 'no label', 'SISTSEDIME': 'no label', 'TIPO_DEPOS': 'no label', 'ASSOC_MAGM': 'no label', 'NIVEL_CRUS': 'no label', 'TEXTURA_IG': 'no label', 'FONTE_MAGM': 'no label', 'MORFOLOGIA': 'no label', 'AMBIENTE_T': 'no label', 'METAMORFIS': 'no label', 'METODO_G_2': 'no label', 'TEMP_PICO': 'no label', 'ERRO_TEMP_': 'no label', 'PRESSAO_PI': 'no label', 'ERRO_PRESS': 'no label', 'TIPO_BARIC': 'no label', 'TRAJETORIA': 'no label', 'AMBIENTE_1': 'no label', 'LITOTIPO1': 'no label', 'LITOTIPO2': 'no label', 'CLASSE_ROC': 'no label', 'CLASSE_R_1': 'no label', 'BB_SUBCLAS': 'no label', 'BB_SUBCL_1': 'no label', 'NOME_SIMPL': 'no label', });
lyr_unidades_morfoesculturais_3.set('fieldLabels', {'UNI_MRFSTR': 'inline label - visible with data', 'UNI_MRFSCL': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_estruturas_cber4a_1100000_4.set('fieldLabels', {'id': 'hidden field', 'tipo': 'inline label - visible with data', 'compr_metr': 'inline label - visible with data', });
lyr_limite_municipal_5.set('fieldLabels', {'NM_MUNICIP': 'inline label - visible with data', 'CD_GEOCMU': 'hidden field', });
lyr_limite_gccs_6.set('fieldLabels', {'TERRITORIO': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_limite_gccs_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});