const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedPlan = button.dataset.plan;
    alert(`Ótima escolha! Você selecionou o ${selectedPlan}. Em breve você será redirecionado para o pagamento.`);
  });
});
