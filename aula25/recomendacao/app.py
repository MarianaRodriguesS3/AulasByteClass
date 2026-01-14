import streamlit as st

# Configuração da página
st.set_page_config(
    page_title="Sistema de Recomendação",
    layout="wide"
)

# Título
st.title("🎬📚 Sistema de Recomendação")
st.write("Descubra filmes e livros de acordo com seu gosto")

# 🔍 Barra de pesquisa geral
search = st.text_input("🔍 Pesquisar filmes ou livros")

st.divider()

# 🎬📚 Opções de busca
col1, col2 = st.columns(2)

with col1:
    buscar_filmes = st.button("🎬 Buscar por Filmes", use_container_width=True)

with col2:
    buscar_livros = st.button("📚 Buscar por Livros", use_container_width=True)

# Controle de estado
if "tipo" not in st.session_state:
    st.session_state.tipo = None

if buscar_filmes:
    st.session_state.tipo = "Filme"

if buscar_livros:
    st.session_state.tipo = "Livro"

# 🎯 Filtro por categoria
if st.session_state.tipo:
    st.subheader(f"Buscar {st.session_state.tipo}s por categoria")

    categoria = st.selectbox(
        "Categoria",
        ["Ação", "Drama", "Comédia", "Ficção Científica", "Romance", "Fantasia"]
    )

st.divider()

# 🃏 Cards de filmes e livros
st.subheader("📌 Recomendações")

# Dados mockados (temporários)
itens = [
    {
        "titulo": "Interestelar",
        "descricao": "Uma jornada épica pelo espaço e pelo tempo.",
        "imagem": "https://via.placeholder.com/300x200",
        "tipo": "Filme"
    },
    {
        "titulo": "O Senhor dos Anéis",
        "descricao": "Uma aventura fantástica na Terra Média.",
        "imagem": "https://via.placeholder.com/300x200",
        "tipo": "Livro"
    },
    {
        "titulo": "Matrix",
        "descricao": "A realidade pode não ser o que parece.",
        "imagem": "https://via.placeholder.com/300x200",
        "tipo": "Filme"
    }
]

# Layout dos cards
cols = st.columns(3)

for idx, item in enumerate(itens):
    with cols[idx % 3]:
        st.image(item["imagem"], use_container_width=True)
        st.markdown(f"### {item['titulo']}")
        st.write(item["descricao"])
        st.caption(item["tipo"])
