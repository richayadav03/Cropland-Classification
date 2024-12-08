
# Cropland-Classification
Comparing various ML techniques on Sentinel and Landsat data for analyzing cropland over Gujarat.


## Introduction
This project evaluates the performance of three machine learning classifiers—Support Vector Machine (SVM), Classification and Regression Trees (CART), and Random Forest (RF)—on Sentinel-2 and Landsat satellite imagery for cropland extent classification in Gujarat, India.

For Sentinel-2, SVM achieved the highest overall accuracy of **98.05%**, with producer and consumer accuracies ranging from **95.12% to 96.77%**. CART and RF classifiers also performed well, achieving accuracies of **96.11%** and **98.05%**, respectively.

For Landsat data, SVM again reached an overall accuracy of **98.05%**, while CART and RF classifiers achieved **96.11%** and **98.05%**, respectively. These results demonstrate the robustness of machine learning algorithms in satellite image-based land classification.

![image](https://github.com/user-attachments/assets/87a550c7-ad5e-4ec2-859e-f15c05c4ba1c)

## Dataset
This analysis uses high-resolution imagery from Sentinel-2 and Landsat-8 satellites, focusing on cropland extent mapping in Gujarat. These satellites provide multi-spectral data, enabling precise land-cover classification.

To begin with, it is necessary to examine the effects of the pairing of bands which will show the difference in the structure of the image. Hence, they can be seen in a mix of the detectors of plant-based, soil, and ocean parameters. One of the significant advantages of remote sensing is that this technique exploits the differences between the types of land cover using a smart combination of sensors, thus giving much better results.

## Methodology
The following classifiers were implemented for the analysis:
1. **Support Vector Machine (SVM)**
2. **Classification and Regression Trees (CART)**
3. **Random Forest (RF)**

![image](https://github.com/user-attachments/assets/2c589155-e740-4bfc-b67e-91db70bf0ea7)

# Results and Conclusion
## Overall Accuracy Comparison
|           |    SVM (%)   |    CART (%)    |    RF (%)         |
| :-------- | :------- | :-------- | :----------|
| Landsat8  | 97.82 | 97.82 | 95.65 |
| Sentinel2 | 98.05 | 96.11 | 98.05 |

---

## Sentinel-2 Satellite Classification Results

| Classifier       | Overall Accuracy (%) | Producer Accuracy (%) | Consumer Accuracy (%) |
|-------------------|------------------|------------------------|------------------------|
| **SVM**          | 98.05          | 95.12, 96.77          | 95.12, 96.77          |
| **CART**         | 96.11         | 97.56, 98.38          | 97.56, 98.38          |
| **Random Forest**| 98.05         | 97.56, 98.38          | 97.56, 98.38          |

---

## Landsat-8 Satellite Classification Results

| Classifier       | Overall Accuracy (%)  | Producer Accuracy (%) | Consumer Accuracy (%) |
|-------------------|------------------|------------------------|------------------------|
| **SVM**          | 98.05          | 98.60, 96.42          | 94.73, 95.90          |
| **CART**         | 96.11          | 97.22, 98.21          | 97.22, 98.21          |
| **Random Forest**| 98.05         | 94.44, 96.42          | 94.44, 94.42          |



![image](https://github.com/user-attachments/assets/f5916bc0-6884-49e6-8adf-daa9d4cc45d4)

![image](https://github.com/user-attachments/assets/e4737e25-a088-4f35-8a6c-a9d2e3a245fd)

![image](https://github.com/user-attachments/assets/189f45c4-d24b-4fe9-9832-ac5aab6d9922)

![image](https://github.com/user-attachments/assets/831108db-7328-4c81-8dda-9f4be8b7c31c)

![image](https://github.com/user-attachments/assets/16e0a316-5e39-41ea-acc5-634121bf7aad)

![image](https://github.com/user-attachments/assets/4e881ab0-c145-47c7-bac3-b10db0521740)


## Google Earth Engine Codes
[Sentinel2-CART]( https://code.earthengine.google.com/2cc61b0e71cb7e53ded75ccaa3287d0f)

[Sentinel2-RF](https://code.earthengine.google.com/9e4f1443f10fe3f9f01354ee259005d8)

[Sentinel2-SVM](https://code.earthengine.google.com/b5683afcdb0efa19917ba705cfd34ef5)

[Landsat8-CART](https://code.earthengine.google.com/cc21533f7de51f61ee7fb972f2d8709d)

[Landsat8-RF](https://code.earthengine.google.com/2ce50b93aac3ca90a3452cefbe836e97)

[Landsat8-SVM](https://code.earthengine.google.com/11b68cf028ca72ddbd62985bd0a7b377)
