import './App.css';

const App = () => {
  return (
      <>
        <nav>
          <a href="#page1">PAGE1</a>
          <a href="#page2">PAGE2</a>
          <a href="#page3">PAGE3</a>
        </nav>
        <section className="content" id="page1">
          <h1 className="body">페이지1번 내용</h1>
        </section>
        <section className="content" id="page2">
          <h1 className="body">페이지2번 내용</h1>
        </section>
        <section className="content" id="page3">
          <h1 className="body">페이지3번 내용</h1>
        </section>
      </>
  );
}

export default App