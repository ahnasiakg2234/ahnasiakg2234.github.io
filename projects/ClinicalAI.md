---
layout: project
type: project
image: img/heart.jpg
title: "LLM-powered Clinical AI Assistant using RAG"
date: 2025-08-01
published: true
labels:
  - Medical Technology
  - Python
  - OpenAI
  - ChromaDb
summary: "This Clinical AI Assistant is an automated system for analyzing ASCVD treatment gaps using a RAG pipeline."
---
<img src = "img/ascvd.png">
## What is ASCVD and why is it important?
Atherosclerotic Cardiovascular Disease is an umbrella term for many conditions that stem from a buildup and hardening of plaque in your arteries.
ASCVD encompasses cardiac events from heart attacks to strokes and/or aneurysms. It is currently the leading cause of death worldwide due to a lack of individual knowledge and preventative measures.
Accurate and timely diagnosis and therefore treatment can significantly impact patient outcomes and healthcare efficiency.

## Setbacks with medical care
However, the assessment of this type of disease is non- linear and specific to any one person, which makes it difficult to evaluate patients with true efficacy. 
Recent advances in Large Language Models (LLMs) have shown promise in supporting clinical tasks such as risk assessment and treatment planning. 
In particular, clinicians are beginning to use LLMs to identify early signs of disease and to recommend interventions, especially for patients at borderline or high risk.

## Purpose of this Research Project
This project explores the integration of a Retrieval- Augmented Generation (RAG) pipeline using LLMs to detect treatment gaps in ASCVD care by comparing patient data with up-to-date clinical guidelines.

#### Research question: 
Can LLM-based RAG systems accurately identify treatment gaps by comparing patient data against current ASCVD guidelines?

Here is a few lines of code that illustrates how we prompted the large language model:
```python
system_prompt = """
    You are a clinical decision support assistant. Your role is to analyze a patient's cardiovascular risk and provide treatment recommendations aligned with the latest clinical guidelines for ASCVD prevention and management and the BHC text.

    You will be given excerpts from clinical guidelines and the BHC text. Each excerpt is preceded by its source URL or "BHC Text".

    You must perform the following steps:
    1.  **Analyze Patient Data:** Review the patient's age, sex, race, cholesterol levels, blood pressure, and diabetic status to understand their baseline risk profile.
    2.  **Incorporate Risk Enhancers:** Consider all provided risk enhancers (e.g., family history, CKD, metabolic syndrome) as they are critical for refining treatment decisions, especially for patients in borderline or intermediate risk categories.
    3.  **Assess Current Medications:** Evaluate the patient's current medication list.
    4.  **Query Clinical Guidelines and BHC Text:** Use the `retriever_tool` to find the specific guideline recommendations for statin intensity (e.g., "high-intensity statin," "moderate-intensity statin") and follow-up plans based on the patient's calculated risk category and other clinical factors.
    Also, use the tool to find relevant patient cases and outcomes in the BHC text.
    5.  **Synthesize Recommendations:** Generate a comprehensive clinical analysis. When you use information from the retrieved excerpts, you MUST cite it by embedding the source URL or "BHC Text" from the 'Source:' line directly into the text using the format <CITATION:source_url_or_BHC_Text>. Do not number the citations yourself.

    Always end your entire response with the disclaimer: "This is not a substitute for professional medical advice."
    """
```
