import Precio from './components/Precio'
import MasterPage from './components/Master';
import fetch from 'isomorphic-unfetch'
import Noticias from './components/Noticias'

const Index = (props) =>(
 <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio Bitcoin</h2>
        <Precio
          precio= {props.precioBitcoin}
        />
      </div>
      <div className="col-md-8">
          <h2>Noticias sobre Bitcoin</h2>
          {console.log(props.noticias)}
          <Noticias
            noticias = {props.noticias}
          />
      </div>
      <div className="col-md-4">
          <h2>Proximos Eventos</h2>
      </div>
    </div>
    
 </MasterPage>
);
Index.getInitialProps = async () =>{
  const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')
  const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-02&sortBy=publishedAt&apiKey=6802b23db7914b93afb37d151361dae2&language=es');

  const resPrecio = await precio.json()
  const resNoticias = await noticias.json()

  return {
    precioBitcoin: resPrecio.data.quotes.USD,
    noticias: resNoticias.articles
  }


}

export default Index