import { useState } from 'react'
import './App.css'

const appStoreUrl = 'https://apps.apple.com/us/app/larder-recipe-journal/id6773922851'

const reviews = [
  {
    title: "Finally, an app that doesn't feel like a spreadsheet",
    body: "I've tried every recipe app going. This is the first one that actually feels like it was made by someone who cooks, not someone who builds software.",
    name: 'Tom Ellery',
  },
  {
    title: 'The cooking log changed how I cook',
    body: "I didn't think I needed a place to write notes on recipes until I had one. Now I actually remember what worked last time instead of guessing again.",
    name: 'Priya Nandan',
  },
  {
    title: 'The best-designed app on my phone',
    body: "No clutter, no ads, no nonsense. Just a calm place to keep the recipes I care about. I've recommended it to everyone I know who actually cooks.",
    name: 'Sam Okafor',
  },
]

const faqs = [
  {
    q: 'Is Larder free?',
    a: 'The app is free to download and use. A Founding Membership (£0.99/month or £7.99/year) unlocks unlimited recipes, cloud sync, and the social features.',
  },
  {
    q: 'Can I import recipes from other apps?',
    a: 'Yes, Larder imports directly from Paprika, Crouton, and Mela. You can also paste in a URL, a screenshot, or plain text, and Larder will pull out the ingredients and method for you.',
  },
  {
    q: "What's the difference between Shelves, Margins, and the rest of the app?",
    a: 'Recipes are where everything starts. Shelves let you group them however makes sense to you. Margins is your cooking log, notes on what you actually did the second, third, tenth time you made something.',
  },
  {
    q: 'Do I need an account?',
    a: 'Not to use the app privately, recipes stay on your device either way. An account (via Sign in with Apple) is only needed for cloud backup and the social side of things, like following other cooks.',
  },
  {
    q: 'Is my data private?',
    a: 'By default, yes. Nothing is shared unless you choose to make a recipe or cooking log public. You control that per item, not all-or-nothing.',
  },
  {
    q: 'Does Larder work on Android?',
    a: 'Not currently. Larder is iOS only for now.',
  },
  {
    q: 'Can other people see what I cook?',
    a: 'Only what you choose to share. Public recipes and cooking logs appear on your profile and in the feed of people who follow you; everything else stays private.',
  },
  {
    q: 'How do I cancel my membership?',
    a: 'Through your Apple ID subscription settings, same as any other App Store subscription — cancel any time, at least 24 hours before renewal to avoid being charged.',
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

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="nav">
      <button
        className="nav-hamburger"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Menu"
        aria-expanded={mobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a href="/" className="nav-logo-link">
        <img src="/larder-logo.png" alt="Larder" className="nav-logo" />
      </a>

      <div className="nav-right">
        <div className="nav-links">
          <a href="/#faq">faq</a>
          <a href="/#reviews">reviews</a>
        </div>
        <a href={appStoreUrl} className="nav-cta">try for free</a>
      </div>

      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
          <a href="/#faq" onClick={() => setMobileMenuOpen(false)}>faq</a>
          <a href="/#reviews" onClick={() => setMobileMenuOpen(false)}>reviews</a>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="/larder-logo.png" alt="Larder" className="footer-logo" />
          <div className="footer-links">
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/#faq">FAQs</a>
          </div>
        </div>
        <a href={appStoreUrl} className="footer-badge">
          <img src="/AppStoreWhite.svg" alt="Download on the App Store" />
        </a>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">2026 Larder. Made in London.</p>
        <div className="footer-social">
          <span className="footer-social-label">Follow us on social</span>
          <a href="https://www.instagram.com/larder.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

function PrivacyPolicy() {
  return (
    <div className="page">
      <Nav />
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">Last updated: June 2026</p>

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
          <div key={title} className="privacy-section">
            <h2 className="privacy-section-title">{title}</h2>
            <p className="privacy-section-body">{body}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

function App() {
  // Show privacy page if URL is /privacy
  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicy />
  }

  return (
    <div className="page">

      <Nav />

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
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mobile.png" />
          <img src="/Hero.png" alt="" className="hero-bg" aria-hidden="true" />
        </picture>
      </section>

      <section className="features">
        <div className="feature feature--dark">
          <img src="/recipes.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <img src="/carrot.svg" alt="" className="feature-icon" aria-hidden="true" />
            <h2 className="feature-title">Your recipes, beautifully kept</h2>
            <p className="feature-body">Collect recipes from anywhere; paste a URL, import from Mela or Crouton, or type your own. Everything lives in one calm, considered place, ready when you need it.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
        <div className="feature">
          <img src="/stats.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <img src="/tool.svg" alt="" className="feature-icon" aria-hidden="true" />
            <h2 className="feature-title">Your cooking, at a glance</h2>
            <p className="feature-body">See how many recipes you have saved, what you cook most, and how active you have been. For people who take their cooking seriously, a little data goes a long way.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
        <div className="feature feature--dark">
          <img src="/feed.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <img src="/spoon.png" alt="" className="feature-icon" aria-hidden="true" />
            <h2 className="feature-title">A diary of every meal</h2>
            <p className="feature-body">Every time you cook something, Larder remembers it. Scroll back through months of evenings; what you made, who you fed, what you changed. A quiet record of a life spent cooking.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
        <div className="feature">
          <img src="/groceries.png" alt="" className="feature-img" aria-hidden="true" />
          <div className="feature-content">
            <img src="/knife.svg" alt="" className="feature-icon" aria-hidden="true" />
            <h2 className="feature-title">From recipe to trolley</h2>
            <p className="feature-body">Add ingredients to your grocery list straight from a recipe. Larder syncs with your Reminders app so your shopping list is always with you, wherever you shop.</p>
            <a href={appStoreUrl} className="feature-btn">try for free</a>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.name}>
              <div className="review-stars">★★★★★</div>
              <h3 className="review-title">{review.title}</h3>
              <p className="review-body">{review.body}</p>
              <p className="review-name">— {review.name}</p>
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

      <Footer />

    </div>
  )
}

export default App
