import { MyHeader, MyMainContent, MyFooter } from "./MainComponent";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <main className="container-fluid m-0 p-0" data-bs-theme="light">
      <MyHeader />
      <MyMainContent />
      <MyFooter />
    </main>
  );
}

export default App;