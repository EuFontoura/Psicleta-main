import React, { useState, useEffect } from 'react';

const BodyForm = () => {
  const [showOtherGenderInput, setShowOtherGenderInput] = useState(false);
  const [showOtherOrientInput, setShowOtherOrientInput] = useState(false);
  const [showEspecialNecessityInput, setShowEspecialNecessityInput] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Função para buscar os estados do IBGE
    const fetchStates = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const data = await response.json();
        const sortedStates = data.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordena os estados por nome
        setStates(sortedStates);
      } catch (error) {
        console.error('Erro ao buscar estados:', error);
      }
    };

    fetchStates();
  }, []);

  const handleStateChange = async (e) => {
    const stateId = e.target.value;
    setSelectedState(stateId);

    // Função para buscar os municípios do IBGE baseado no estado selecionado
    if (stateId) {
      try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
        const data = await response.json();
        const sortedCities = data.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordena os municípios por nome
        setCities(sortedCities);
      } catch (error) {
        console.error('Erro ao buscar municípios:', error);
      }
    } else {
      setCities([]);
    }
  };


  const handleGenderChange = (e) => {
    setShowOtherGenderInput(e.target.value === 'Outro');
  };
  
  const handleOrientChange = (e) => {
    setShowOtherOrientInput(e.target.value === 'Outro');
  };
  const handleEspecialNecessityChange = (e) => {
    setShowEspecialNecessityInput(e.target.value === 'Sim');
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione lógica para envio do formulário aqui
    console.log("Formulário enviado!");
  };

  const handleReset = () => {
    setShowOtherGenderInput(false);
    // Opcionalmente, pode-se limpar o estado do formulário aqui, se estiver usando useState para controlar os campos
  };

  return (
    <div className='flex justify-center items-center md:mt-20 bg-white/60 w-full max-w-md mx-auto p-8 rounded-2xl shadow-lg text-xl'>
      <form onSubmit={handleSubmit} onReset={handleReset} className='w-full'>
        <div className='mb-4'>
          <label htmlFor="name" className='block text-lg font-semibold'>Nome Completo:</label>
          <input type="text" id="name" name="name" placeholder="Insira seu nome" className='mt-2 rounded-md text-center outline-none w-full p-2 border border-gray-300' required />
        </div>

        <div className='mb-4'>
          <label htmlFor="email" className='block text-lg font-semibold'>Email:</label>
          <input type="email" id='email' name='email' placeholder="Insira seu email" className='mt-2 rounded-md text-center outline-none w-full p-2 border border-gray-300' required />
        </div>

        <div className='mb-4'>
          <label htmlFor="phone" className='block text-lg font-semibold'>Whatsapp:</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder='(35) 9 9999-9999' className='mt-2 rounded-md text-center outline-none w-full p-2 border border-gray-300' required />
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-semibold'>Idade:</label>
          {['Menor de 18 (necessário autorização)', '18 a 30', '31 a 40', '41 a 50', '51 a 60', '61 ou mais'].map(age => (
            <div key={age} className='mt-2'>
              <input type="radio" id={`idade-${age}`} name="idade" value={age} required />
              <label htmlFor={`idade-${age}`} className='ml-2'>{age}</label>
            </div>
          ))}
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-semibold'>Gênero:</label>
          {['Masculino', 'Feminino', 'Prefiro não responder', 'Outro'].map(gender => (
            <div key={gender} className='mt-2'>
              <input 
                type="radio" 
                id={`genero-${gender}`} 
                name="genero" 
                value={gender} 
                onChange={handleGenderChange} 
                required 
              />
              <label htmlFor={`genero-${gender}`} className='ml-2'>{gender}</label>
              {gender === 'Outro' && showOtherGenderInput && (
                <input type="text" id="outrogen_text" name="outro" placeholder="Insira aqui" className='mt-2 ml-2 rounded-md text-center outline-none w-full p-2 border border-gray-300' />
              )}
            </div>
          ))}
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-semibold'>Orientação Sexual:</label>
          {['Heterossexual', 'Homossexual', 'Bissexual','Assexual', 'Outro'].map(orient => (
            <div key={orient} className='mt-2'>
              <input 
                type="radio" 
                id={`orientacaosexual-${orient}`} 
                name="orientacaosexual" 
                value={orient} 
                onChange={handleOrientChange} 
                required 
              />
              <label htmlFor={`orientacaosexual-${orient}`} className='ml-2'>{orient}</label>
              {orient === 'Outro' && showOtherOrientInput && (
                <input type="text" id="outrogen_text" name="outro" placeholder="Insira aqui" className='mt-2 ml-2 rounded-md text-center outline-none w-full p-2 border border-gray-300' />
              )}
            </div>
          ))}
        </div>
        <div className='mb-4'>
          <label htmlFor="state" className='block text-lg font-semibold'>Estado:</label>
          <select 
            id="state" 
            name="state" 
            value={selectedState} 
            onChange={handleStateChange} 
            className='mt-2 rounded-md text-left outline-none w-full p-2 border border-gray-300' 
            required
          >
            <option value="">Selecione o Estado</option>
            {states.map(state => (
              <option key={state.id} value={state.id}>{state.nome}</option>
            ))}
          </select>
        </div>

        <div className='mb-4'>
          <label htmlFor="city" className='block text-lg font-semibold'>Município:</label>
          <select 
            id="city" 
            name="city" 
            className='mt-2 rounded-md text-left outline-none w-full p-2 border border-gray-300' 
            required
          >
            <option value="">Selecione o Município</option>
            {cities.map(city => (
              <option key={city.id} value={city.nome}>{city.nome}</option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-semibold'>Qual a sua raça/etnia:</label>
          {['Branca', 'Parda', 'Negra', 'Indígena', 'Amarela'].map(race => (
            <div key={race} className='mt-2'>
              <input type="radio" id={`raça-${race}`} name="raça" value={race} required />
              <label htmlFor={`raça-${race}`} className='ml-2'>{race}</label>
            </div>
          ))}
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-semibold'>Possui filhos?</label>
          {['Sim', 'Não'].map(sons => (
            <div key={sons} className='mt-2'>
              <input type="radio" id={`filhos-${sons}`} name="filhos" value={sons} required />
              <label htmlFor={`filhos-${sons}`} className='ml-2'>{sons}</label>
            </div>
          ))}
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-semibold'>Possui alguma necessidade especial?</label>
          {['Sim', 'Não'].map(especnecess => (
            <div key={especnecess} className='mt-2'>
              <input 
                type="radio" 
                id={`necessidadeespecial-${especnecess}`} 
                name="necessidadeespecial" 
                value={especnecess} 
                onChange={handleEspecialNecessityChange} 
                required 
              />
              <label htmlFor={`necessidadeespecial-${especnecess}`} className='ml-2'>{especnecess}</label>
              {especnecess === 'Sim' && showEspecialNecessityInput && (
                <input type="text" id="especnecess_text" name="necessidadeespecial" placeholder="Especifique" className='mt-2 ml-2 rounded-md text-center outline-none w-full p-2 border border-gray-300' />
              )}
            </div>
          ))}
        </div>
        


        <div className='flex justify-between mt-6'>
          <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-200'>Enviar</button>
          <button type="reset" className='bg-gray-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-200'>Limpar</button>
        </div>
      </form>
    </div>
  )
}

export default BodyForm;
