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

    // Função para criar uma nova lista
    function createListElement(titleText, listId) {
        const list = document.createElement('div');
        list.classList.add('list');
        list.dataset.listId = listId || generateUniqueId(); // Atribui um ID à lista

        const listHeader = document.createElement('div');
        listHeader.classList.add('list-header');
        listHeader.textContent = titleText;

        const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-container');

        const addCardBtn = document.createElement('button');
        addCardBtn.classList.add('add-card-btn');
        addCardBtn.textContent = '+ Adicionar um cartão';

        list.append(listHeader, cardsContainer, addCardBtn);

        // --- Eventos da Lista ---

        // Edição do título da lista
        listHeader.addEventListener('click', () => {
            const currentText = listHeader.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.classList.add('list-header-input');
            listHeader.replaceWith(input);
            input.focus();

            const saveTitle = () => {
                const newTitle = input.value.trim() || 'Título da Lista';
                listHeader.textContent = newTitle;
                input.replaceWith(listHeader);
            };

            input.addEventListener('blur', saveTitle);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    saveTitle();
                }
            });
        });

        // Adicionar Cartão - Botão
        addCardBtn.addEventListener('click', () => {
            addCardBtn.style.display = 'none'; // Esconde o botão

            const form = document.createElement('div');
            form.classList.add('add-card-form');

            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Digite um título para este cartão...';
            textarea.rows = 3;

            const addBtn = document.createElement('button');
            addBtn.textContent = 'Adicionar cartão';

            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'X';

            form.append(textarea, addBtn, cancelBtn);
            list.insertBefore(form, addCardBtn); // Insere o formulário antes do botão

            textarea.focus();

            // Adicionar Cartão - Lógica
            addBtn.addEventListener('click', () => {
                const cardText = textarea.value.trim();
                if (cardText) {
                    const newCard = createCardElement(cardText);
                    cardsContainer.appendChild(newCard);
                    textarea.value = ''; // Limpa o campo
                    textarea.focus();
                }
            });

            // Cancelar Adição de Cartão
            cancelBtn.addEventListener('click', () => {
                form.remove();
                addCardBtn.style.display = 'block'; // Mostra o botão novamente
            });
        });

        // --- Drag and Drop para Listas (Target de Drop) ---
        cardsContainer.addEventListener('dragover', (e) => {
            e.preventDefault(); // Permite o drop
            const afterElement = getDragAfterElement(cardsContainer, e.clientY);
            const currentCard = draggedCard;

            if (currentCard && currentCard.parentElement !== cardsContainer) {
                // Se o cartão veio de outra lista, move-o
                if (afterElement == null) {
                    cardsContainer.appendChild(currentCard);
                } else {
                    cardsContainer.insertBefore(currentCard, afterElement);
                }
            } else if (currentCard) {
                // Se o cartão está na mesma lista, reordena
                if (afterElement == null) {
                    cardsContainer.appendChild(currentCard);
                } else {
                    cardsContainer.insertBefore(currentCard, afterElement);
                }
            }
        });

        return list;
    }

    // Função auxiliar para determinar onde inserir o elemento arrastado
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }


    // --- Lógica Principal ---

    // Adicionar Nova Lista - Botão
    addListBtn.addEventListener('click', () => {
        addListBtn.style.display = 'none'; // Esconde o botão

        const form = document.createElement('div');
        form.classList.add('add-list-form');

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Digite o título da lista...';

        const addBtn = document.createElement('button');
        addBtn.textContent = 'Adicionar lista';

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'X';

        form.append(input, addBtn, cancelBtn);
        board.insertBefore(form, addListBtn.parentElement); // Insere o formulário antes do contêiner do botão

        input.focus();

        // Adicionar Lista - Lógica
        addBtn.addEventListener('click', () => {
            const listTitle = input.value.trim();
            if (listTitle) {
                const newList = createListElement(listTitle);
                board.insertBefore(newList, form); // Insere a nova lista antes do formulário
                form.remove();
                addListBtn.style.display = 'block'; // Mostra o botão novamente
            }
        });

        // Cancelar Adição de Lista
        cancelBtn.addEventListener('click', () => {
            form.remove();
            addListBtn.style.display = 'block'; // Mostra o botão novamente
        });
    });

    // --- Drag and Drop para o Quadro (Reordenar Listas) ---
    board.addEventListener('dragover', (e) => {
        e.preventDefault(); // Permite o drop
        if (draggedCard && draggedCard.classList.contains('card')) {
            // Se um cartão está sendo arrastado sobre o board (fora de um cards-container), não faz nada para evitar bagunça
            return;
        }

        const afterElement = getDragAfterElement(board, e.clientX, true); // True para indicar que é horizontal
        const currentList = draggedCard && draggedCard.closest('.list');

        if (currentList && currentList.parentElement === board) { // Apenas reordena se for uma lista do board
            if (afterElement == null) {
                board.insertBefore(currentList, addListBtn.parentElement); // Move para o final antes do botão add-list
            } else {
                board.insertBefore(currentList, afterElement);
            }
        }
    });

    // Adapta getDragAfterElement para reordenar listas horizontalmente
    function getDragAfterElement(container, x, isHorizontal = false) {
        const draggableElements = [...container.querySelectorAll('.list:not(.dragging)')];

        if (!isHorizontal) { // Se for vertical (para cartões)
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = x - box.top - box.height / 2; // Aqui seria y
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        } else { // Se for horizontal (para listas)
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = x - box.left - box.width / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }
    }
});