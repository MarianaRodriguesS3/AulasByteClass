import streamlit as st
from PIL import Image
from src.backend import buscar_dados # Importa a lógica do backend

st.set_page_config(layout="wide", page_title="Cine&Livro")

# Carregar CSS (Frontend)
with open("src/styles.css") as f:
    st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)

# Navegação e busca
query_params = st.query_params
navegacao = query_params.get("p", "Home")

# Navbar HTML
st.markdown(f"""
    <div class="nav-custom">
        <div class="nav-item"><a href="/?p=Home" target="_self">Home</a></div>
        <div class="nav-item"><a href="/?p=Filme" target="_self">🎬 Filmes</a></div>
        <div class="nav-item"><a href="/?p=Livro" target="_self">📚 Livros</a></div>
    </div>
""", unsafe_allow_html=True)

st.title("🎬📚 Cine&Livro")
search = st.text_input("🔍 Pesquisar...")

# Filtro de categoria (Frontend UI)
categoria_sel = "Todas"
if navegacao != "Home":
    categorias = ["Todas", "Ação", "Comédia", "Ficção Científica", "Romance", "Terror"]
    categoria_sel = st.selectbox("Filtrar por categoria", categorias)

# CHAMADA AO BACKEND
itens = buscar_dados(tipo=navegacao, categoria=categoria_sel, busca=search)

# Renderização dos Cards (Frontend)
st.divider()
if itens:
    for i in range(0, len(itens), 3):
        cols = st.columns(3)
        for j, item in enumerate(itens[i:i+3]):
            with cols[j]:
                # Lógica de imagem simplificada
                st.image(item['imagem'], use_container_width=True)
                st.markdown(f"""
                <div class="card">
                    <h3>{item['titulo']}</h3>
                    <p>{item['descricao']}</p>
                    <span class="badge">{item['tipo']}</span>
                </div>
                """, unsafe_allow_html=True)
else:
    st.info("Nenhum resultado encontrado.")

    