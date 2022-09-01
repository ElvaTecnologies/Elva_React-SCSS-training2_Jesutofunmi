import SignUpForm from "./SignUpForm";

function App() {
  return (
     <main className="app">
        <section className="text">
        <h1>
            Learn to code by watching others
        </h1>
        <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. 
        </p>
        </section>
        <section className="form">
            <button>
                <strong>Try it free 7 days then</strong> $20/mo. thereafter
            </button>
            <SignUpForm/>
         </section>
     </main>
     );
};

export default App;
