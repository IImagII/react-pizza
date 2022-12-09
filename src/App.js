import { Categories } from './components/Categories/Categories'
import { Header } from './components/Header/Header'
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock'
import { Sorties } from './components/Sorties/Sorties'
import './scss/app.scss'

function App() {
   return (
      <div className='wrapper'>
         <Header />
         <div className='content'>
            <div className='container'>
               <div className='content__top'>
                  <Categories />
                  <Sorties />
               </div>
               <h2 className='content__title'>Все пиццы</h2>
               <div className='content__items'>
                  <PizzaBlock title='Чизбургер-пицца' price='395' />
                  <PizzaBlock title='Просто-пицца' price='495' />
                  <PizzaBlock title='Пиперони' price='585' />
                  <PizzaBlock />
                  <PizzaBlock />
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
