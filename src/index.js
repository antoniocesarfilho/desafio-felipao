// Função para classificar o herói com base no XP
function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = 'Prata';
    } else if (xp >= 6001 && xp <= 6000) {
        nivel = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = 'Platina Diamante';
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = 'Imortal';
    } else if (xp >= 10001) {
        nivel = 'Radiante';
    } else {
        nivel = 'XP inválido';
    }

    // Exibindo a mensagem final no formato solicitado
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**.`);
}

// Teste da função
classificarHeroi("Antonio", 8500);  // Exemplo de uso

