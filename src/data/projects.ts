import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "churn-analysis",
    title: "Customer Churn Prediction",
    category: "Data Science / Machine Learning",
    description: "Vorhersage von Kundenabwanderung mittels Random Forest auf unbalancierten Daten.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    notebookPath: "/portfolio/notebooks/churn_analysis.html",
    githubUrl: "https://github.com/dein-username/portfolio",
  },
  {
    id: "time-series",
    title: "Zeitreihenanalyse & Forecasting",
    category: "Data Analytics",
    description: "Analyse von Verkaufszahlen und Prognose mithilfe von ARIMA-Modellen.",
    tags: ["Python", "Statsmodels", "Seaborn"],
    notebookPath: "/portfolio/notebooks/time_series.html",
    githubUrl: "https://github.com/dein-username/portfolio",
  },
  {
  id: "two-tank-model",
  title: "Zweitank-System Modellierung & Regelung",
  category: "Process Engineering / Simulation",
  description: "Datengestützte Modellierung und Simulation eines dynamischen Zweitank-Systems.",
  tags: ["Python", "NumPy", "SciPy", "Matplotlib"],
  notebookPath: "/portfolio/notebooks/TwoTankModel.html",
  }
];