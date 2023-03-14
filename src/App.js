
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
      <Button disabled />
      <Button color="primary" startIcon="local_grocery_store" />
      <Button color="primary" endIcon="local_grocery_store" />
      <Button size="sm" />
      <Button size="md" />
      <Button size="lg" />
      <Button color="default" />
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />


    </div>
  );
}

export default App;
