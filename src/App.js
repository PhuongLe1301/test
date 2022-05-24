import logo from './logo.svg';
import './App.css';
import Test from './test';

function App() {
  const m1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12]
  m1.sort((a, b) => b - a);
  const m2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]
  m2.sort((a, b) => b - a);
  const m3 = [1, 10, 19, 11, 13, 16, 19]
  m3.sort((a, b) => b - a);
  console.log('Mảng1 ' + m1.join(''))
  console.log('Mảng2 ' + m2.join(''))
  console.log('Mảng3 ' + m3.join(''))

  return (
   <Test/>
  );
}

export default App;
