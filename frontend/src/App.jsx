import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
   return (
      <div className="app">
         <header className="app-header py-6">
            <h1>Book Library App</h1>
         </header>
         <main className="app-main">
            <div className="app-left-column">
               <BookForm />
            </div>
            <div className="app-right-column">
               <BookList />
            </div>
         </main>
      </div>
   );
}

export default App;
