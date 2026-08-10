export const navigation = [
  { label: "How it works", href: "#how-it-works" }, { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" }, { label: "News", href: "#news" }, { label: "FAQ", href: "#faq" },
];

export const howItWorks = [
  { title: "Start your session", copy: "Sit or stand in front of Mirra Call and begin your guided self-care and upper extremity wellness routine. The coaching interface appears directly in the mirror screen in front of you.", mode: "session" },
  { title: "Move naturally", copy: "The integrated camera tracks movement during your routine. Computer vision helps Mirra Call understand how your body is moving.", mode: "tracking" },
  { title: "Get feedback as you move", copy: "Movement is analyzed in real time and translated into visual and auditory coaching that stays clear without distracting from your routine.", mode: "feedback" },
  { title: "Understand your progress", copy: "Session information can help users and coaching partners understand movement patterns and routine progress over time.", mode: "progress" },
];

export const specs = [
  { title: "Form", items: [{ label: "Product type", value: "Smarter mirror for self-care" }, { label: "Dimensions", value: "32cm x 53cm" }, { label: "Screen finish", value: "Reflective" }] },
  { title: "Sensing", items: [{ label: "Camera", value: "Integrated 3D and RGB options avaliable" }, { label: "Tracking", value: "Pose estimation" }, { label: "Feedback", value: "Real-time visual and auditory coaching" }] },
  { title: "Compute", items: [{ label: "Module", value: "NVIDIA hardware" }, { label: "Processing", value: "Edge AI inference" }, { label: "Connectivity", value: "[TBD]" }] },
  { title: "Status", items: [{ label: "Availability", value: "In development" }, { label: "Production status", value: "App coming soon!" }, { label: "Pricing", value: "[TBD]" }] },
];

export const news = [{ title: "Mirra Call featured by MindFuel", type: "Feature", date: "2026", mark: "MF", href: "https://www.instagram.com/p/DZIZrqhGR67/", image: "/images/logo/mindfuel-logo.png" }];

export const faqs = [
  ["What is Mirra Call?", "Mirra Call is an intelligent self-care and coaching mirror that uses computer vision to understand movement and provide visual and auditory coaching during wellness, upper extremity movement and self-care routines."],
  ["How does Mirra Call work?", "A camera tracks movement while the user performs a routine. Computer vision analyzes body position and movement, allowing Mirra Call to provide visual and auditory coaching directly through the mirror."],
  ["Why use a smart mirror for self-care?", "A smart mirror provides immediate visual and auditory feedback during movement routines. It helps users maintain proper form, build consistency, and gain insight into their movement patterns at home."],
  ["Who is Mirra Call designed for?", "Mirra Call is being developed for home self-care, wellness, and movement coaching contexts where guided routines and mirror-based tracking are beneficial."],
  ["Can Mirra Call be used at home?", "Home self-care and wellness routines are the core focus of the product direction. Exact availability and recommended use will depend on development, validation, and product guidance."],
  ["Does Mirra Call replace a professional coach, trainer, or therapist?", "No. Mirra Call is intended to support guided home self-care, not replace professional coaches, trainers, occupational therapists, physiotherapists, or other qualified professionals."],
  ["Is Mirra Call a medical device?", "Regulatory status: [TBD]. Final regulatory classifications will be confirmed as the product develops."],
  ["How is my data handled?", "Mirra Call is being developed with privacy-by-design principles, including minimizing unnecessary cloud transfer by relying on local edge processing. Specific policies and technical safeguards will be published when confirmed."],
  ["Where is movement data processed?", "Mirra Call is being designed around edge AI and local computation. The final data architecture and any cloud-dependent functions are still being defined."],
  ["How can coaches or clinicians use Mirra Call?", "A planned companion experience may allow coaches, trainers, or clinicians to review routine history, movement trends, and progress over time. The platform features are in development."],
  ["When will Mirra Call be available?", "Mirra Call is currently in development. Join the waitlist to receive product updates and information about future pilot opportunities."],
  ["How can I participate in a pilot?", "Join the waitlist and tell us what interests you about Mirra Call. We’ll share information about future pilot opportunities as they become available."],
] as const;
