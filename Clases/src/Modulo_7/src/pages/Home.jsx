import React from 'react'
import ArticlesInputs from '../components/ArticlesInputs'
import TasksInput from '../components/TasksInput'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Home = () => {
    const articles = useSelector(state => state.articles)
    const tasks = useSelector((state) => state.tasks);

  return (
    <div className="flex justify-stretch">
      <div className="w-full">
        <ArticlesInputs />
        {articles.map(({ id, description, stock, price }) => (
          <div key={id} className="m-4 w-1/2 border p-2">
            <p>ID: {id}</p>
            <p>Descripcion: {description}</p>
            <p>Stock: {stock}</p>
            <p>Precio: {price}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <TasksInput />
        {tasks.map(({ id, content }) => (
          <div key={id} className="m-4 w-1/2 border p-2">
            <p>ID: {id}</p>
            <p>Contenido: {content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home