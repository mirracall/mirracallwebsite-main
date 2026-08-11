import { howItWorks } from "@/data/product";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/mirracallwebsite-main" : "";

function StepVisual({ mode }: { mode: string }) { 
  return (
    <div className={`step-visual ${mode}`} aria-hidden="true">
      {mode === 'session' ? (
        <img src={`${basePath}/images/start-session.gif`} alt="Start your session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : mode === 'tracking' ? (
        <img src={`${basePath}/images/move-naturally.gif`} alt="Move naturally" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : mode === 'feedback' ? (
        <img src={`${basePath}/images/get-feedback.png`} alt="Get feedback as you move" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : mode === 'progress' ? (
        <img src={`${basePath}/images/progress.png`} alt="Understand your progress" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div className="mini-mirror">
          <div className="mini-person"><i></i><b></b></div>
        </div>
      )}
    </div>
  );
}

export function HowItWorks() { 
  return (
    <section className="how-section section" id="how-it-works">
      <div className="container">
        <p className="eyebrow">How it works</p>
        <h2>Therapy, reflected<br />back differently.</h2>
        <div className="steps">
          {howItWorks.map((step, i) => (
            <article className="step" key={step.title}>
              <div className="step-copy">
                <span>0{i+1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
              <StepVisual mode={step.mode} />
            </article>
          ))}
        </div>
      </div>
    </section>
  ); 
}
