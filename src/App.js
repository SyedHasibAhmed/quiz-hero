// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Background from './components/Background/Background';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
// import QuizComp from './QuizComponent/QuizComp'
import Quiz from './components/Quiz/Quiz';
import Rechart from './components/Rechart/Rechart';
import Toasts from './components/Toasts/Toasts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Background></Background>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/topics',
          loader: () => fetch('topics.json'),
          element: <Topics></Topics>,
        },
        {
          path: '/statistics',
          loader: () => fetch('quiz.json'),
          element: <Statistics></Statistics>
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/rechart',
          element: <Rechart></Rechart>
        },
        {
          path: '/toasts',
          element: <Toasts></Toasts>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
