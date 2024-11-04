import TodoApp from "./components/Todo";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { faCat } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
import { faDog } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'
export default function App(){
    return(
        <div className="App">
            <h1>MY Todo-list</h1>
            <TodoApp/>
        </div>
    )
}