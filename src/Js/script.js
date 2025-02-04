async function buscarConselho() {
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    const data = await response.json();
    const id = data.slip.id;
    const conselho = data.slip.advice;
    document.getElementById('conselho-id').textContent = `# ${id}`;
    document.getElementById('descricao').textContent = conselho;
}

buscarConselho();

document.getElementById('atualizar-conselho').addEventListener('click', () => {
    buscarConselho();
})

