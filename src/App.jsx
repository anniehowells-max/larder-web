import { useState } from 'react'
import './App.css'

const faqs = [
  {
    q: 'Is Larder free?',
    a: 'Yes — the app is free to download and use. A Founding Member subscription unlocks unlimited recipes, cross-device sync, and social features.',
  },
  {
    q: 'Can I import recipes from other apps?',
    a: 'Yes. Larder imports directly from Paprika, Crouton, and Mela, or you can paste in a URL, a screenshot, or plain text and Larder will extract the recipe for you.',
  },
  {
    q: 'Does Larder work on Android?',
    a: 'Not yet — Larder is currently iOS only. We may look at Android in future depending on demand.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

function PrivacyPolicy() {
  return (
    <div className="page">
      <nav className="nav">
        <a href="/" className="nav-logo-link">
          <img src="/larder-logo.png" alt="Larder" className="nav-logo" />
        </a>
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
  // Show privacy page if URL is /privacy
  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicy />
  }

  // TODO: replace with your real App Store link once you have your App ID
  const appStoreUrl = 'https://apps.apple.com/app/idYOUR_APP_ID'

  return (
    <div className="page">

      <nav className="nav">
        <a href="/" className="nav-logo-link">
          <img src="/larder-logo.png" alt="Larder" className="nav-logo" />
        </a>
        <div className="nav-links">
          <a href="#faq">faq</a>
          <a href="#about">about</a>
          <a href="#reviews">reviews</a>
        </div>
        <a href={appStoreUrl} className="nav-cta">try for free</a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            More than a recipe app.
            <br />
            A cooking community.
          </h1>
          <p className="hero-body">
            Collect recipes from anywhere. Cook with a calm, beautiful interface.
            Keep a log of what you have made, and share the meals that matter.
          </p>
          <a href={appStoreUrl} className="hero-btn">try for free</a>
        </div>
        <div className="hero-right">
          <img src="/Hero.png" alt="" className="hero-collage" aria-hidden="true" />
        </div>
      </section>

      <div className="rule-row">
        <img src="/Carrot.png" alt="" className="rule-illustration" aria-hidden="true" />
      </div>

      <section className="features">
        <div className="feature">
          <img src="/home-screen.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <h2 className="feature-title">Your recipes, beautifully kept</h2>
            <p className="feature-body">Collect recipes from anywhere; paste a URL, import from Mela or Crouton, or type your own. Everything lives in one calm, considered place, ready when you need it.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
        <div className="feature">
          <img src="/journal-stats.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <h2 className="feature-title">Your cooking, at a glance</h2>
            <p className="feature-body">See how many recipes you have saved, what you cook most, and how active you have been. For people who take their cooking seriously, a little data goes a long way.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
        <div className="feature">
          <img src="/journal-diary.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <h2 className="feature-title">A diary of every meal</h2>
            <p className="feature-body">Every time you cook something, Larder remembers it. Scroll back through months of evenings; what you made, who you fed, what you changed. A quiet record of a life spent cooking.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
        <div className="feature">
          <img src="/groceries.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <h2 className="feature-title">From recipe to trolley</h2>
            <p className="feature-body">Add ingredients to your grocery list straight from a recipe. Larder syncs with your Reminders app so your shopping list is always with you, wherever you shop.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="rule-row rule-row--dark">
          <img src="/Carrot.png" alt="" className="rule-illustration" aria-hidden="true" />
        </div>
        <div className="reviews-grid">
          {/* Placeholder reviews — replace with real ones when you have them */}
          {[1, 2, 3].map((i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">★★★★★</div>
              <h3 className="review-title">Review title</h3>
              <p className="review-body">This is a really good review.</p>
              <p className="review-name">— Anna Andersson</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <h2 className="faq-heading">FAQs</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <span className="footer-logo">Larder</span>
        <a href={appStoreUrl} className="footer-badge">
          {/* Replace with the official Apple "Download on the App Store" badge asset */}
          <img src="/app-store-badge.svg" alt="Download on the App Store" />
        </a>
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