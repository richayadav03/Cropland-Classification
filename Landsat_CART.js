var ROI=roi
Map.addLayer(ROI)
Map.centerObject(ROI,7)
var l8=ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")

var image=l8.filterBounds(ROI).filterDate('2020-01-01','2020-12-31').sort('CLOUDY_PIXEL_PERCENTAGE',false).mosaic().clip(ROI)
Map.addLayer(image)

var sample=Cropland.merge(non)
var bands=['SR_B4','SR_B3','SR_B2','SR_B6','SR_B5']

var training=image.select(bands).sampleRegions({
  collection : sample,
  properties : ['Class'],
  scale : 10,})

print(training)

var dataset=training.randomColumn()
var trainSet=dataset.filter(ee.Filter.lessThan('random',0.8))
var testSet=dataset.filter(ee.Filter.greaterThanOrEquals('random',0.8))

var Classifier=ee.Classifier.smileCart().train({
  features:trainSet,
  classProperty:'Class',
  inputProperties:bands
})

var classified = image.select(bands).classify(Classifier)

Map.addLayer(classified,{min:0,max:1,palette:['green','blue']})

var cm=ee.ConfusionMatrix(testSet.classify(Classifier)
        .errorMatrix({
          actual: 'Class',
          predicted : 'classification'
        }))
        
print('Confusion Matrix :',cm)
print('Overall Accuaracy :',cm.accuracy())
print('Producers Accuracy :',cm.producersAccuracy())
print('Consumer Accuracy :',cm.consumersAccuracy())

Export.image.toDrive({
  
  image:classified,
  description:'Landsat_Classified_CART',
  scale:30,
  region:ROI,
  maxPixels:1e13
})
