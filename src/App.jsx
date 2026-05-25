import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="page">

      <nav className="nav">
        <span className="nav-logo">Larder</span>
        <a href="#early-access" className="nav-cta">Get early access</a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Coming soon to iOS</p>
          <h1 className="hero-title">
            A recipe app for<br/>
            <em>people who love</em><br/>
            to cook.
          </h1>
          <p className="hero-body">
            Collect recipes from anywhere. Cook with a calm, beautiful interface.
            Keep a log of what you have made, and share the meals that matter.
          </p>
          <a href="#early-access" className="hero-btn">Join the waitlist</a>
        </div>
        <div className="hero-right">
          <img src="/home-screen.png" alt="Larder app home screen" className="hero-icon" />
          <img src="/pot.png" alt="" className="hero-pot" aria-hidden="true" />
        </div>
      </section>

      <div className="rule-row">
        <img src="/Carrot.png" alt="" className="rule-illustration" aria-hidden="true" />
      </div>

      <section className="features">
  <div className="feature">
    <img src="/Hero.png" alt="" className="feature-img" aria-hidden="true" />
    <div className="feature-content">
      <span className="feature-num">01</span>
      <h2 className="feature-title">Your recipes, beautifully kept</h2>
      <p className="feature-body">Collect recipes from anywhere — paste a URL, import from Mela or Crouton, or type your own. Everything lives in one calm, considered place, ready when you need it.</p>
    </div>
  </div>
  <div className="feature">
    <img src="/journal-stats.png" alt="" className="feature-img" aria-hidden="true" />
    <div className="feature-content">
      <span className="feature-num">02</span>
      <h2 className="feature-title">Your cooking, at a glance</h2>
      <p className="feature-body">See how many recipes you have saved, what you cook most, and how active you have been. For people who take their cooking seriously, a little data goes a long way.</p>
    </div>
  </div>
  <div className="feature">
    <img src="/journal-diary.png" alt="" className="feature-img" aria-hidden="true" />
    <div className="feature-content">
      <span className="feature-num">03</span>
      <h2 className="feature-title">A diary of every meal</h2>
      <p className="feature-body">Every time you cook something, Larder remembers it. Scroll back through months of evenings — what you made, who you fed, what you changed. A quiet record of a life spent cooking.</p>
    </div>
  </div>
  <div className="feature">
    <img src="/groceries.png" alt="" className="feature-img" aria-hidden="true" />
    <div className="feature-content">
      <span className="feature-num">04</span>
      <h2 className="feature-title">From recipe to trolley</h2>
      <p className="feature-body">Add ingredients to your grocery list straight from a recipe. Larder syncs with your Reminders app so your shopping list is always with you, wherever you shop.</p>
    </div>
  </div>
</section>

      <div className="cow-row">
        <img src="/Larder-cow.png" alt="" className="cow-illustration" aria-hidden="true" />
        <blockquote className="cow-quote">
          Good food is very often, even most often, simple food.
          <cite>Anthony Bourdain</cite>
        </blockquote>
      </div>

      <section className="about">
        <div className="about-inner">
          <h2 className="about-title">Made with care,<br/><em>by someone who cooks.</em></h2>
          <p className="about-body">
            Larder is an independent iOS app made in London. It started as a personal project —
            a way to keep the recipes I love without losing them to browser tabs and screenshots.
            It grew into something worth sharing.
          </p>
          <p className="about-body">
            Alongside the app, Larder has a food journal: short writing about restaurants visited,
            things cooked at home, meals that stuck. Somewhere between a notebook and a dispatch.
          </p>
        </div>
      </section>

      <section className="waitlist" id="early-access">
        <div className="waitlist-inner">
          <h2 className="waitlist-title">Be first to the table.</h2>
          <p className="waitlist-body">
            Larder is launching soon. Join the waitlist for early access and the occasional note from the kitchen.
          </p>
          {submitted ? (
            <p className="waitlist-success">You are on the list. Talk soon.</p>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="waitlist-input"
                required
              />
              <button type="submit" className="waitlist-btn" disabled={loading}>
                {loading ? '...' : 'Join waitlist'}
              </button>
            </form>
          )}
          <p className="waitlist-note">No spam. Unsubscribe whenever.</p>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-logo">Larder</span>
        <div className="footer-links">
          <a href="mailto:hello@cookwithlarder.com">hello@cookwithlarder.com</a>
          <a href="#">Privacy</a>
        </div>
        <p className="footer-copy">2025 Larder. Made in London.</p>
      </footer>

    </div>
  )
}

export default App
