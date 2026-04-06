import streamlit as st
import os

# Page configuration
st.set_page_config(
    page_title="Traffic Intelligence System",
    page_icon="🚦",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to hide Streamlit branding and full-width layout
hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            .stDeployButton {display:none;}
            [data-testid="stToolbar"] {display:none;}
            </style>
            """
st.markdown(hide_streamlit_style, unsafe_allow_html=True)

# Read and display the HTML file
try:
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    
    # Display the HTML in an iframe-like component
    st.components.v1.html(html_content, height=5000, scrolling=True)
    
except FileNotFoundError:
    st.error("❌ index.html file not found. Make sure it's in the same directory as streamlit_app.py")
except Exception as e:
    st.error(f"❌ Error loading website: {str(e)}")
