import pandas as pd

'''
df = pd.read_csv("dataset/training_data.csv")
# Print all the data in the "prognosis" column
unique_prognosis = df["prognosis"].unique()
for value in unique_prognosis:
    print(value)
'''
specialized_doctors = {
    "Fungal infection": "Dermatologist",
    "Allergy": "Allergist/Immunologist",
    "GERD": "Gastroenterologist",
    "Chronic cholestasis": "Hepatologist",
    "Drug Reaction": "Allergist/Immunologist",
    "Peptic ulcer disease": "Gastroenterologist",
    "AIDS": "Infectious Disease Specialist",
    "Diabetes": "Endocrinologist",
    "Gastroenteritis": "Gastroenterologist",
    "Bronchial Asthma": "Pulmonologist",
    "Hypertension": "Cardiologist",
    "Migraine": "Neurologist",
    "Cervical spondylosis": "Orthopedic Surgeon",
    "Paralysis (brain hemorrhage)": "Neurologist/Rehabilitation Specialist",
    "Jaundice": "Hepatologist",
    "Malaria": "Infectious Disease Specialist",
    "Chicken pox": "Pediatrician",
    "Dengue": "Internal Medicine Specialist",
    "Typhoid": "Internal Medicine Specialist",
    "hepatitis A": "Hepatologist",
    "Hepatitis B": "Hepatologist",
    "Hepatitis C": "Hepatologist",
    "Hepatitis D": "Hepatologist",
    "Hepatitis E": "Hepatologist",
    "Alcoholic hepatitis": "Hepatologist",
    "Tuberculosis": "Infectious Disease Specialist",
    "Common Cold": "Internal Medicine Specialist",
    "Pneumonia": "Pulmonologist",
    "Dimorphic hemmorhoids(piles)": "Proctologist/Colorectal Surgeon",
    "Heart attack": "Emergency Medicine Physician",
    "Varicose veins": "Vascular Surgeon",
    "Hypothyroidism": "Endocrinologist",
    "Hyperthyroidism": "Endocrinologist",
    "Hypoglycemia": "Endocrinologist",
    "Osteoarthristis": "Rheumatologist",
    "Arthritis": "Rheumatologist",
    "(vertigo) Paroymsal  Positional Vertigo": "Otolaryngologist",
    "Acne": "Dermatologist",
    "Urinary tract infection": "Urologist",
    "Psoriasis": "Rheumatologist",
    "Impetigo": "Dermatologist"
}

print(specialized_doctors["Fungal infection"])  # Output: Dermatologist
