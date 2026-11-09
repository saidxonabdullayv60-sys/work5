import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// ============================================
// ShopHub — Login / Welcome sahifasi
// ============================================
// Bu hozircha faqat BITTA ekran. Keyingi safar shu yerga
// boshqa ekranlarni (Marketplace, Product va h.k.) qo'shib boramiz.

function App() {
  // useState — foydalanuvchi kiritgan telefon raqamini "eslab qolish" uchun.
  // Har safar input o'zgarsa, React avtomatik qayta chizadi (re-render).
  const [phone, setPhone] = useState('')

  function handleContinue() {
    // Hozircha shunchaki konsolga chiqaramiz — keyinroq bu yerga
    // "keyingi ekranga o'tish" logikasini qo'shamiz.
    console.log('Continue bosildi. Telefon:', phone)
  }

  return (
    <div className="login-page">
      <div className="login-card">

        {/* ---------- CHAP PANEL (binafsha) ---------- */}
        <div className="login-left">
          <div className="brand">
            <div className="brand-icon">
              <ShoppingBag size={20} color="#5842E7" strokeWidth={2.5} />
            </div>
            <span className="brand-name">ShopHub</span>
          </div>

          <p className="tagline">Your one-stop shop for the best products</p>

          {/* Animatsiya: public/phone.lottie faylini o'zingiz joylashtiring.
              Fayl topilmasa, brauzer shunchaki bo'sh joy ko'rsatadi — sayt buzilmaydi. */}
          <div className="illustration">
            <DotLottieReact src="/phone.lottie" loop autoplay />
          </div>
        </div>

        {/* ---------- O'NG PANEL (forma) ---------- */}
        <div className="login-right">
          <h1>Welcome Back</h1>
          <p className="subtitle">Sign in to continue or create a new account</p>

          <label className="field-label">Phone Number</label>
          <div className="phone-input">
            <span className="flag">🇺🇿</span>
            <input
              type="tel"
              placeholder="+998 90 123 45 67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className="btn-primary" onClick={handleContinue}>
            Continue
          </button>

          <div className="divider"><span>or</span></div>

          <button className="btn-outline">
            <FcGoogle size={18} />
            Continue with Google
          </button>

          <button className="btn-outline">
            <FaApple size={18} />
            Continue with Apple
          </button>

          <p className="signup-line">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default App
