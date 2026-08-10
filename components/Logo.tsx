export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <span className={`brand ${inverse ? "brand-inverse" : ""}`}><span className="brand-mark"><img src="/images/logo/mirra-call-logo.jpg" alt="" width="40" height="40" /></span><span>Mirra Call</span></span>;
}

