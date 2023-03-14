
import './App.css';
import Button from './Button';
import local_grocery_store from './img/local_grocery_store.png'
import petsIcon from './img/pets.png'

function App() {
  return (
    <div className="App">
      <header>
        <h3>
          Button challenge
        </h3>
      </header>
      <div className='buttons-container'>
        <Button />
        <Button variant="outline" />
        <Button variant="text" />
        <Button disableShadow />
        <Button disabled />
        <Button color="primary" startIcon={local_grocery_store} />
        <Button color="primary" startIcon={petsIcon} />
        <Button color="primary" endIcon={local_grocery_store} />
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />
      </div>

      <footer>created by Shani Mekiten</footer>
    </div>
  );
}

export default App;
