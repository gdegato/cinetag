
import Banner from 'components/Banner';
import Card from 'components/Cards';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';

function Favoritos({imagem}) {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='gato' capa='https://www.github.com/gdegato.png' />
            </section>
        </>
    )
}

export default Favoritos;