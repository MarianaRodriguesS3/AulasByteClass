import streamlit as st

# Configuração da página
st.set_page_config(
    page_title="Cine&Livro",
    layout="wide"
)

# Título
st.title("🎬📚 Cine&Livro")
st.write("Descubra filmes e livros incríveis para adicionar a sua coleção!")

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
        "titulo": "Percy Jackson e O ladrão de Raios - Filme 2010",
        "descricao": "Percy Jackson descobre ser filho de Poseidon e é acusado de roubar o raio de Zeus. Para salvar sua mãe, parte com Grover e Annabeth para o Mundo Inferior enfrentar Hades." ,
        "imagem": "./assets/percyFilme1.jpg",
        "tipo": "Filme"
    },
    {
        "titulo": "Percy Jackson - O ladrão de Raios",
        "descricao": "Primeiro volume da saga Percy Jackson e os olimpianos, O ladrão de raios esteve entre os primeiros lugares na lista das séries mais vendidas do The New York Times.",
        "imagem": "./assets/percyLivro1.jpg",
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
        st.image(item["imagem"], width=300) 
        st.markdown(f"### {item['titulo']}")
        st.write(item["descricao"])
        st.caption(item["tipo"])
