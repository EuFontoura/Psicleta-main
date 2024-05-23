import React from 'react'

const BodyForm = () => {
  return (
    <div className='flex justify-center mt-20 bg-white/60 w-fit m-auto rounded-2xl text-xl'>
      <form action="" className='p-10'>
        <div>
        <label for="name"  className='block'>Nome Completo</label>
          <input type="text" id="name" name="name" placeholder="Insira seu nome" className='mt-3 rounded-md text-center outline-none w-full p-2'/>
        </div>

        <div className='mt-3'>
        <label for="email" className='block' >Email</label>
          <input type="text" id='email' name='email' placeholder="Insira seu email" className='mt-3'/>
        </div>

        <div className='mt-3'>
        <label for="phone" className='block' >
        Whatsapp:<br />
        </label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder='(35) 9 9999-9999' />
        </div>

        <div className='mt-3'>
        <label for="idade" class="label-radio">Idade</label>

              <div className='mt-3'>
                <input type="radio" id="idade" name="idade" value="-18"/>
                <label for="18" class="label-radio">Menor de 18 (necessário autorização)</label>
              </div>
              <div>
                <input type="radio" id="idade" name="idade" value="18 a 30"/>
                <label for="18" class="label-radio">18 a 30</label>
              </div>
              <div>
                <input type="radio" id="idade" name="idade" value="31 a 40"/>
                <label for="18" class="label-radio">31 a 40</label>
              </div>
              <div>
                <input type="radio" id="idade" name="idade" value="41 a 50"/>
                <label for="18" class="label-radio">41 a 50</label>
              </div>
              <div>
                <input type="radio" id="idade" name="idade" value="51 a 60"/>
                <label for="18" class="label-radio">51 a 60</label>
              </div>
              <div>
                <input type="radio" id="idade" name="idade" value="61 ou mais"/>
                <label for="18" class="label-radio">61 ou mais</label>
              </div>

        </div>

        <div className='mt-3'>
        <label for="genero" class="label-radio">Gênero</label>

              <div>
                <input type="radio" id="genero" name="genero" value="Masculino"/>
                <label for="masculino" class="label-radio">Masculino</label>
              </div>

              <div>
                <input type="radio" id="genero" name="genero" value="Feminino"/>
                <label for="feminino" class="label-radio">Feminino</label>
              </div>
              
              <div>
                <input type="radio" id="genero" name="genero" value="Prefiro não responder"/>
                <label for="naoresponder"class="label-radio"> Prefiro não responder</label>
              </div>

              <div>
                <input type="radio" id="genero" name="genero" value="Outro"/>
                <label for="outro" class="label-radio">Outro:</label>
                <input type="text" id="outrogen_text" name="outro" placeholder="Insira aqui" className='block'/>
              </div>
        </div>
      
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>




      </form>
    </div>
  )
}

export default BodyForm