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
          <img src="public/Hero.png" alt="Larder app icon" className="hero-icon" />
          <img src="/pot.png" alt="" className="hero-pot" aria-hidden="true" />
        </div>
      </section>

      <div className="rule-row">
        <span className="rule-dash" />
        <img src="/Carrot.png" alt="" className="rule-illustration" aria-hidden="true" />
        <span className="rule-dash" />
      </div>

      <section className="features">
        <div className="feature">
          <span className="feature-num">01</span>
          <h2 className="feature-title">Collect from anywhere</h2>
          <p className="feature-body">Import from Mela, Crouton, and other apps. Paste a URL or a block of text and Larder parses it intelligently. Your recipes, finally in one place.</p>
        </div>
        <div className="feature">
          <span className="feature-num">02</span>
          <h2 className="feature-title">Cook with clarity</h2>
          <p className="feature-body">A cook mode built for the kitchen. Large text, step-by-step flow, built-in timers. No ads, no clutter, nothing between you and the recipe.</p>
        </div>
        <div className="feature">
          <span className="feature-num">03</span>
          <h2 className="feature-title">Keep a cooking log</h2>
          <p className="feature-body">Note what you changed, how it went, when you last made it. A quiet record of a life spent cooking.</p>
        </div>
        <div className="feature">
          <span className="feature-num">04</span>
          <h2 className="feature-title">Share what you love</h2>
          <p className="feature-body">Send recipes to friends with a tap. No account needed to receive them. Cooking is more fun when it is shared.</p>
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
          <a href="mailto:hello@getlarder.app">hello@getlarder.app</a>
          <a href="#">Privacy</a>
        </div>
        <p className="footer-copy">2025 Larder. Made in London.</p>
      </footer>

    </div>
  )
}

export default App
