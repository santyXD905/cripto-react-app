import styled from '@emotion/styled'

const Resultado = ({resultado}) => {
  
  const {PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE} = resultado

  const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato',sans-serif;

    display: flex;
    align-items: start;
    gap: 1rem;
  `
  const Texto = styled.p`
   font-size: 18px;
   span {
    font-weight: 700;
   }
  `
  const Precio = styled.p`
   font-size: 30px;
   span {
    font-weight: 700;
   }
  `
  const Imagen = styled.img`
    display: block;
    width: 150px;
  `

  return (
    <Contenedor>

        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto'/>
        
        <div>

            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>

        </div>
    </Contenedor>
  )
}

export default Resultado