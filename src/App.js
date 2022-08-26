
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
            <form>
             <div className="input-group">
                 <input type="text" name="firstname" id="firstname"  placeholder="First Name" required />
             </div>
             <div className="input-group">
                 <input type="text" name="lastname"  placeholder="Last Name" required/>
             </div>
             <div className="input-group">
                 <input type="email" name="email" placeholder="Email Address" required />
             </div>
             <div className="input-group">
                 <input type="password" name="password" placeholder="Password" required/>
             </div>
             <button type="submit">
                 claim your free trial
             </button>
             <small>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></small>
            </form>
         </section>
     </main>
     );
};

export default App;
