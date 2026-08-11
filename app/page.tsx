import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { ProductMirror } from "@/components/ProductMirror";
import { Waitlist } from "@/components/Waitlist";
import { news, specs } from "@/data/product";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/mirracallwebsite-main" : "";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="interface-section" id="about">
          <div className="container statement-grid reveal">
            <p className="eyebrow">A new self-care and movement interface</p>
            <h2>The mirror is your interface.</h2>
            <p className="statement-copy">Mirrors have always shown us how we move. Mirra Call goes a step further by understanding that movement and responding with guidance in real time.</p>
            <p className="manifesto">A mirror should do more than show your movement. <em>It should help you understand it.</em></p>
          </div>
        </section>

        <HowItWorks />

        <section className="technology dark-section" id="technology">
          <div className="container">
            <p className="eyebrow light">Technology</p>
            <div className="section-heading-row">
              <h2>Intelligence behind<br />the reflection.</h2>
              <p>As you move, Mirra Call uses computer vision to understand body position and movement. That analysis can then be translated into clear visual and auditory guidance directly through the mirror.</p>
            </div>
            <div className="tech-flow" aria-label="How Mirra Call processes movement">
              {['You move', 'Camera sees movement', 'Motion is analyzed', 'Mirra Call responds'].map((item, index) => (
                <div className="flow-step" key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
              ))}
            </div>
            <div className="edge-grid">
              <div className="edge-visual" aria-hidden="true"><img src={`${basePath}/images/edge-ai.png`} alt="Edge AI Vision Processing" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} /></div>
              <div className="edge-copy"><p className="eyebrow light">Edge AI</p><h3>Designed to think locally.</h3><p>Mirra Call is being designed around edge computing, allowing movement analysis to happen close to the person using the device rather than depending entirely on a remote cloud service.</p><dl><div><dt>Vision</dt><dd>Pose estimation and movement tracking</dd></div><div><dt>Compute</dt><dd>NVIDIA hardware</dd></div><div><dt>Coaching</dt><dd>Real-time visual and auditory feedback and guidance</dd></div></dl></div>
            </div>
          </div>
        </section>

        <section className="validation section" id="validation">
          <div className="container">
            <p className="eyebrow">Validation</p>
            <div className="section-heading-row"><h2>Built with the people<br />who will use it.</h2><p>Mirra Call has been tested with older adults. Their experience is helping shape an interface that feels calm, legible, and human.</p></div>
            <div className="metrics" aria-label="Pilot information"><div><strong>136</strong><span>Pilot participants</span></div><div><strong>100%</strong><span>User interest</span></div><div><strong>11</strong><span>Coaching &amp; clinical collaborators</span></div></div>
            <p className="note">Verified pilot figures and clinician perspectives will be added as validation continues.</p>
          </div>
        </section>

        <section className="news-section section" id="news">
          <div className="container"><p className="eyebrow">News &amp; features</p><h2>Mirra Call in motion.</h2><div className="news-grid">{news.map((item) => <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="news-item"><div className="news-art" style={item.image ? { background: '#fff' } : undefined}>{item.image ? <img src={`${basePath}${item.image}`} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <span>{item.mark}</span>}</div><p>{item.type} · {item.date}</p><h3>{item.title}</h3><span className="text-link">Read feature ↗</span></a>)}</div></div>
        </section>

        <section className="specs-section section" id="specifications">
          <div className="container"><p className="eyebrow">Specifications</p><div className="section-heading-row"><h2>A self-care mirror,<br />with human-centered AI and hardware.</h2><p>Product specifications will vary based on your site. Contact us to learn more.</p></div><div className="spec-list">{specs.map((group, i) => <article className="spec-group" key={group.title}><span>0{i + 1}</span><h3>{group.title}</h3><dl>{group.items.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl></article>)}</div></div>
        </section>

        <section className="ecosystem section">
          <div className="container ecosystem-grid"><div><p className="eyebrow">Ecosystem</p><h2>One experience.<br />Two perspectives.</h2><p>Mirra Call is your home coaching interface. A planned companion experience may help coaches or clinicians review routine history, movement trends, and progress over time.</p><p className="note">Clinician &amp; coach platform features are in development.</p></div><div className="dashboard-placeholder" aria-label="Conceptual clinician dashboard placeholder" style={{ background: 'transparent', padding: 0, boxShadow: 'none' }}><img src={`${basePath}/images/dashboard.png`} alt="Clinician Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 20px 60px rgba(30,50,40,.12)' }} /></div></div>
        </section>

        <section className="mission dark-section"><div className="container mission-inner"><p className="eyebrow light">Our direction</p><h2>Self-care, movement and wellness continue<br />beyond appointments.</h2><p>Mirra Call is being developed to make guided movement more present, more understandable, and easier to revisit—wherever rehabilitation happens.</p></div></section>
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
