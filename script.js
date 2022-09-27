const input = document.querySelector('.form__input');
const card = document.querySelector('.card');

const showData = (data) => {
  card.innerHTML = `
  <p>Cep: ${data.cep}</p>
  <p>Logradouro: ${data.logradouro}</p>
  <p>Complemento: ${data.complemento}</p>
  <p>Bairro: ${data.bairro}</p>
  <p>Localidade: ${data.localidade}</p>
  <p>UF: ${data.uf}</p>
  <p>IBGE: ${data.ibge}</p>
  <p>GIA: ${data.gia}</p>
  <p>DDD: ${data.ddd}</p>
  <p>siafi: ${data.siafi}</p>
  `;
};

const getAddress = async (event) => {
  event.preventDefault();
  const CEP = input.value;

  if (CEP.length === 8) {
    card.innerHTML = '<strong>Carregando...</strong>';
    const request = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    const data = await request.json();

    showData(data);
  } else {
    alert('CEP inválido');
  }
};
