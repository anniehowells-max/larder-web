import { useState } from 'react'
import './App.css'

function PrivacyPolicy() {
  return (
    <div className="page">
      <nav className="nav">
        <a href="/" className="nav-logo">Larder</a>
      </nav>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: '#888', marginBottom: '48px' }}>Last updated: June 2026</p>

        {[
          ['Overview', 'Larder is a recipe management and food community app. We take your privacy seriously and give you full control over what you share publicly and what stays private.'],
          ['Data stored on your device', "Your recipes, collections, grocery lists, cooking logs and nutrition data are stored locally on your device using Apple's SwiftData framework. Private recipes and logs never leave your device unless you explicitly choose to make them public."],
          ['Your account', 'When you sign in with Apple, we store your account information securely using Supabase Auth. Your public profile — including your username, display name, bio, and avatar — is visible to other Larder users. You can edit or delete this information at any time from your profile settings.'],
          ['Public content', 'Recipes and cooking logs you choose to make public are stored on our servers and visible to all Larder users. You can make content private again at any time, which will remove it from public view. Public content may appear in other users\' feeds and on your public profile.'],
          ['Recipe sharing and copyright', 'By making a recipe public on Larder, you confirm that you have the right to share it. You are responsible for ensuring that any recipes you share do not infringe on third-party copyrights, including recipes from cookbooks or other published sources. Larder is not responsible for user-submitted content but will respond promptly to valid copyright complaints.'],
          ['Anthropic API', "When you use the URL import, photo import, paste import or social media import features, the content you submit is sent to Anthropic's API to extract recipe information. This data is processed by Anthropic in accordance with their privacy policy at anthropic.com/privacy. We do not store or log any data sent to or received from the API."],
          ['Third party services', 'Larder uses Supabase to store account data, public recipes, and cooking logs. When importing recipes from YouTube, the YouTube Data API is used to retrieve video information. These services are subject to their own privacy policies.'],
          ['Data we do not collect', 'We do not use analytics or tracking, serve advertisements, or sell your data to third parties.'],
          ['Your rights', 'You can export all your recipes at any time from the Settings tab. You can delete your account and all associated data by contacting us. You can make any public content private at any time from within the app.'],
          ['Contact', 'If you have any questions about this privacy policy or a copyright complaint, please contact us at hello@cookwithlarder.com.'],
        ].map(([title, body]) => (
          <div key={title} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', marginBottom: '8px' }}>{title}</h2>
            <p style={{ lineHeight: '1.7', color: '#444' }}>{body}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <span className="footer-logo">Larder</span>
        <div className="footer-links">
          <a href="mailto:hello@cookwithlarder.com">hello@cookwithlarder.com</a>
          <a href="/privacy">Privacy</a>
        </div>
        <p className="footer-copy">2026 Larder. Made in London.</p>
      </footer>
    </div>
  )
}

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Show privacy page if URL is /privacy
  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicy />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch(`https://cookwithlarder.us8.list-manage.com/subscribe/post?u=a9e1d1e4b32d2097cde04e978&id=47ebcbd712&f_id=00d005e0f0&EMAIL=${encodeURIComponent(email)}`, {
        method: 'POST',
        mode: 'no-cors',
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
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
            <p className="feature-body">Collect recipes from anywhere; paste a URL, import from Mela or Crouton, or type your own. Everything lives in one calm, considered place, ready when you need it.</p>
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
            <p className="feature-body">Every time you cook something, Larder remembers it. Scroll back through months of evenings; what you made, who you fed, what you changed. A quiet record of a life spent cooking.</p>
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
          <a href="/privacy">Privacy</a>
        </div>
        <p className="footer-copy">2026 Larder. Made in London.</p>
      </footer>

    </div>
  )
}

export default App