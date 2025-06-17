import streamlit as st
import pandas as pd
from transformers import pipeline

# --- Configuración de la página ---
st.set_page_config(
    page_title="Colegios Valencia con IA",
    page_icon="📚",
    layout="wide",
    initial_sidebar_state="expanded"
)

# --- Cargar y preparar datos ---
df = pd.read_csv("centros-educativos-en-valencia.csv", sep=";")
df[['lat', 'lon']] = df['Geo Point'].str.split(',', expand=True).astype(float)

# --- Cargar modelo de IA local ---
generador_ia = pipeline("text-generation", model="distilgpt2")

# --- Layout con logo y título ---
col1, col2 = st.columns([1, 4])
with col1:
    st.image("images/valencia (1).png", width=80)
with col2:
    st.markdown("<h1 style='text-align: left;'>Colegios de la Comunidad Valenciana</h1>", unsafe_allow_html=True)

# --- Filtros ---
tipo_mapeo = {
    "Todos": None,
    "Colegio Público": "PÚBLICO",
    "Colegio Concertado": "CONCERTADO",
    "Colegio Privado": "PRIVADO"
}

tipo_visible = st.selectbox("Selecciona el tipo de colegio:", list(tipo_mapeo.keys()))
tipo = tipo_mapeo[tipo_visible]

localidades_disponibles = df[df["regimen"] == tipo]["municipio_"].unique() if tipo else df["municipio_"].unique()
localidad = st.selectbox("Selecciona una localidad:", localidades_disponibles)

df_filtrado = df[df["municipio_"] == localidad]
if tipo:
    df_filtrado = df_filtrado[df_filtrado["regimen"] == tipo]

colegios_opciones = ["Todos"] + df_filtrado["dlibre"].unique().tolist()
colegio_seleccionado = st.selectbox("Selecciona un colegio:", colegios_opciones)

if colegio_seleccionado != "Todos":
    df_filtrado = df_filtrado[df_filtrado["dlibre"] == colegio_seleccionado]

# --- Mostrar mapa y datos ---
if df_filtrado.empty:
    st.warning("No hay colegios que coincidan con los filtros.")
else:
    st.map(df_filtrado[['lat', 'lon']])

    if colegio_seleccionado != "Todos":
        escuela = df_filtrado.iloc[0]
        st.markdown(f"""
        ### Información del colegio seleccionado:
        **Nombre:** {escuela['dlibre']}  
        **Dirección:** {escuela['direccion']}  
        **Localidad:** {escuela['municipio_']}  
        **Regimen:** {escuela['regimen']}  
        **Teléfono:** {escuela['telef']}  
        **Email:** {escuela['mail']}  
        """)

        # --- Generar introducción con IA local ---
        prompt = f"Escribe una introducción sobre el colegio {escuela['dlibre']}, que es un colegio de tipo {escuela['regimen']} situado en {escuela['municipio_']}"
        with st.spinner("Generando texto con IA..."):
            resultado = generador_ia(prompt, max_new_tokens=50, do_sample=True, temperature=0.7)
            st.markdown("### Introducción generada con IA:")
            st.write(resultado[0]['generated_text'])

