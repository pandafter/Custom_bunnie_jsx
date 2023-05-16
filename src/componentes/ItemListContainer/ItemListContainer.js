import imagen_insta from './klipartz.com.png';

const ItemListContainer = ({ greeting }) => {
        return(
            <main>
                
                    
                        <footer id="greeting">
                            <h3 id='saludo'>{greeting}</h3>
                            
                            <img src={imagen_insta} alt='iamgen_insta' id='imagen_insta'/>
                            
                        </footer>
                    
                   
            </main>
        )
}

export default ItemListContainer;