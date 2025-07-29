document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const addListBtn = document.getElementById('add-list-btn');
    let draggedCard = null; // Variável para armazenar o cartão que está sendo arrastado

    // --- Funções Auxiliares ---

    // Função para gerar um ID único
    function generateUniqueId() {
        return 'id-' + Date.now() + Math.random().toString(16).substr(2, 5);
    }

    // Função para criar um novo cartão
    function createCardElement(text, cardId) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('draggable', 'true'); // Torna o cartão arrastável
        card.dataset.cardId = cardId || generateUniqueId(); // Atribui um ID ao cartão
        card.textContent = text;

        // Eventos de Drag and Drop para o cartão
        card.addEventListener('dragstart', (e) => {
            draggedCard = card;
            setTimeout(() => {
                card.classList.add('dragging'); // Adiciona classe para estilização durante o arrasto
            }, 0); // Pequeno atraso para a classe ser aplicada após o clone visual do drag
        });

        card.addEventListener('dragend', () => {
            draggedCard.classList.remove('dragging');
            draggedCard = null;
        });

        // Edição de cartão (simples: transforma em textarea)
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'DIV' && !e.target.querySelector('textarea')) {
                const currentText = card.textContent;
                const textarea = document.createElement('textarea');
                textarea.value = currentText;
                textarea.classList.add('card-edit-input');
                card.innerHTML = '';
                card.appendChild(textarea);
                textarea.focus();

                textarea.addEventListener('blur', () => {
                    card.textContent = textarea.value.trim() || 'Novo cartão';
                });

                textarea.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter') {
                        textarea.blur();
                    }
                });
            }
        });

        return card;
    }
});