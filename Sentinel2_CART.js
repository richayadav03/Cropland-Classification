var ROI=table
Map.addLayer(ROI)
Map.centerObject(ROI,7)

var image=sentinel2.filterBounds(ROI).filterDate('2020-01-01','2020-12-31').sort('CLOUDY_PIXEL_PERCENTAGE',false).mosaic().clip(ROI)
Map.addLayer(image,imageVisParam)

var sample=Cropland.merge(non)
var bands=['B12','B8A','B2','B3','B4']

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
  description:'Sentinel2_Classified_CART',
  scale:30,
  region:ROI,
  maxPixels:1e13
})
