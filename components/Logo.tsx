const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/mirracallwebsite-main" : "";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand ${inverse ? "brand-inverse" : ""}`}>
      <span className="brand-mark">
        <img src={`${basePath}/images/logo/mirra-call-logo.jpg`} alt="" width="40" height="40" />
      </span>
      <span>Mirra Call</span>
    </span>
  );
}


