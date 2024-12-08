# **Cropland Classification**  
Comparing Various ML Techniques on Sentinel-2 and Landsat-8 Data for Analyzing Cropland in Gujarat  

---

## **Introduction**  
This study compares the performance of machine learning algorithms on Sentinel-2 and Landsat-8 satellite imagery for cropland extent classification using Gujarat, India, as a case study. Three classifiers — **Support Vector Machine (SVM)**, **Classification and Regression Trees (CART)**, and **Random Forest (RF)** — were evaluated on Google Earth Engine (GEE) to analyze classification precision.  

For Sentinel-2 data, the **SVM classifier** achieved an impressive overall accuracy of **98.05%**, with producer and consumer accuracies ranging between **95.12% and 96.77%**. Similarly, **CART** and **Random Forest** classifiers demonstrated high accuracies of **96.11%** and **98.05%**, respectively.  

For Landsat-8 data, **SVM** achieved **98.05% overall accuracy**, while **CART** and **Random Forest** attained **96.11%** and **98.05%**, respectively.  

These results highlight the efficiency of machine learning techniques in accurately classifying croplands, providing crucial insights for environmental monitoring and land management.  

---

## **Dataset**  
The study utilizes high-resolution multispectral data from **Sentinel-2** and **Landsat-8** satellites to map cropland extent in Gujarat.  

### **Key Features of Satellite Data**  
1. **Sentinel-2**: Provides high-resolution imagery with multiple spectral bands suited for vegetation and land cover analysis.  
2. **Landsat-8**: Offers spectral diversity with moderate spatial resolution, facilitating effective land cover differentiation.  

### **Band Combination and Analysis**  
By combining specific spectral bands, remote sensing enables the detection of subtle variations in land cover types, improving classification outcomes. This approach exploits sensor-specific strengths to deliver highly accurate results.  

---

## **Methodology**  
The study employed the following classifiers to assess cropland extent:  

1. **Support Vector Machine (SVM)**: Separates classes with a hyperplane in high-dimensional space.  
2. **Classification and Regression Trees (CART)**: A decision tree-based algorithm for classification tasks.  
3. **Random Forest (RF)**: An ensemble learning technique using multiple decision trees for robust predictions.  

The classifiers were applied to both Sentinel-2 and Landsat-8 data using GEE. The methodology includes:  
- Preprocessing satellite images.  
- Applying classification algorithms.  
- Validating results with accuracy metrics.  

---

## **Results and Conclusions**  
### **Overall Accuracy Comparison**  

| Satellite   | SVM (%) | CART (%) | RF (%)   |  
|-------------|---------|----------|----------|  
| Landsat-8   | 98.05   | 96.11    | 98.05    |  
| Sentinel-2  | 98.05   | 96.11    | 98.05    |  

### **Sentinel-2 Classification Accuracy**  

| Classifier        | Overall Accuracy (%) | Producer Accuracy (%) | Consumer Accuracy (%) |  
|--------------------|----------------------|------------------------|------------------------|  
| **SVM**           | 98.05               | 95.12, 96.77          | 95.12, 96.77          |  
| **CART**          | 96.11               | 97.56, 98.38          | 97.56, 98.38          |  
| **Random Forest** | 98.05               | 97.56, 98.38          | 97.56, 98.38          |  

### **Landsat-8 Classification Accuracy**  

| Classifier        | Overall Accuracy (%) | Producer Accuracy (%) | Consumer Accuracy (%) |  
|--------------------|----------------------|------------------------|------------------------|  
| **SVM**           | 98.05               | 98.60, 96.42          | 94.73, 95.90          |  
| **CART**          | 96.11               | 97.22, 98.21          | 97.22, 98.21          |  
| **Random Forest** | 98.05               | 94.44, 96.42          | 94.44, 94.42          |  

### **Conclusion**  
The study demonstrates the robustness of **SVM** and **Random Forest** for cropland classification, with accuracies exceeding **98%**. The results validate the application of machine learning techniques for environmental and agricultural analysis using remote sensing data.  

---

## **Google Earth Engine Codes**  

- **Sentinel-2**  
  - [CART](https://code.earthengine.google.com/2cc61b0e71cb7e53ded75ccaa3287d0f)  
  - [RF](https://code.earthengine.google.com/9e4f1443f10fe3f9f01354ee259005d8)  
  - [SVM](https://code.earthengine.google.com/b5683afcdb0efa19917ba705cfd34ef5)  

- **Landsat-8**  
  - [CART](https://code.earthengine.google.com/cc21533f7de51f61ee7fb972f2d8709d)  
  - [RF](https://code.earthengine.google.com/2ce50b93aac3ca90a3452cefbe836e97)  
  - [SVM](https://code.earthengine.google.com/11b68cf028ca72ddbd62985bd0a7b377)  

---

## **Figures and Visualizations**  

### **Data Flow Diagram**  
![Data Flow](https://github.com/user-attachments/assets/87a550c7-ad5e-4ec2-859e-f15c05c4ba1c)  

### **Model Comparison Chart**  
![Comparison Chart](https://github.com/user-attachments/assets/189f45c4-d24b-4fe9-9832-ac5aab6d9922)  

### **Satellite Image Classification Outputs**  
![Sentinel Classification](https://github.com/user-attachments/assets/831108db-7328-4c81-8dda-9f4be8b7c31c)  
![Landsat Classification](https://github.com/user-attachments/assets/16e0a316-5e39-41ea-acc5-634121bf7aad)  

--- 
