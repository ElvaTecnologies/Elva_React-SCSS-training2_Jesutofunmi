
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
            <strong>Try it free 7 days tthen</strong>\n $20/mo. thereafter
         </button>
         <form>
             <div className="input-group">
                 <input type="text" name="firstname" id="firstname" value="" placeholder="First Name" />
             </div>
             <div className="input-group">
                 <input type="text" name="lastname" value="" placeholder="Last Name" />
             </div>
             <div className="input-group">
                 <input type="email" name="Email Address"  value="" />
             </div>
             <div className="input-group">
                 <input type="password" name="firstname" value="" placeholder="Password" />
             </div>
             <button type="submit">
                 claim your free trial
             </button>
             <small>by clicking the button, you agree to our <a>terms snd services</a></small>
            </form>
         </section>
     </main>
     );
};

export default App;
