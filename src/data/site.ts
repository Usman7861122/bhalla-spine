/**
 * All site content lives here. Change text/images once, updates everywhere.
 * Images are in /public/images.
 */

export const images = {
  logo: '/images/logo_text-1.png',
  logoDark: '/images/logo_text-1.png',
  /** Main hero photo (16:9, shown uncropped). */
  hero: '/images/bhalla-main.jpg',
  /** Wide headshot, doctor on the right. */
  headshotWide: '/images/C1A3602-2-scaled-e1747238929259.jpg',
  /** Commons Clinic (parent company) logos. */
  commonsLogo: '/images/commons-logo-black.svg',
  commonsLogoWhite: '/images/commons-logo-white.svg',
  /** Portrait, arms crossed. */
  doctorPortrait: '/images/C1A3602-scaled-e1747304153775.jpg',
  /** Explaining a spine model to a patient (standing). */
  spineModel: '/images/C1A3704-scaled-e1747239020857.jpg',
  /** Seated consultation with spine model. */
  consultSeated: '/images/C1A4022-scaled-e1747319220831.jpg',
  /** Talking with a patient by the window. */
  consultWindow: '/images/C1A3700-scaled-e1747321966109.jpg',
  /** Handshake with a patient. */
  handshake: '/images/C1A4046-scaled-e1747322027611.jpg',
  /** Handshake with imaging on the screen. */
  handshakeScreen: '/images/C1A4003-scaled-e1747321991364.jpg',
  /** Waiting room with patients. */
  waitingRoom: '/images/C1A4389-scaled-e1747321839188.jpg',
  /** Spine MRI close-up. */
  stenosis: '/images/Canal-Stenosis.webp',
  gallery: [
    { src: '/images/C1A4389-scaled-e1747321839188.jpg', alt: 'Waiting room at Commons Clinic, Long Beach' },
    { src: '/images/C1A4003-scaled-e1747321991364.jpg', alt: 'Dr. Bhalla greeting a patient in the consultation room' },
    { src: '/images/C1A4022-scaled-e1747319220831.jpg', alt: 'Dr. Bhalla explaining a spine model to a patient' },
    { src: '/images/C1A3700-scaled-e1747321966109.jpg', alt: 'Dr. Bhalla talking with a patient' },
    { src: '/images/C1A4046-scaled-e1747322027611.jpg', alt: 'Dr. Bhalla shaking hands with a patient' },
    { src: '/images/C1A3704-scaled-e1747239020857.jpg', alt: 'Dr. Bhalla showing a spine model' },
  ],
};

export const site = {
  affiliation: { name: 'Commons Clinic', url: 'https://commonsclinic.com/' },
  name: 'Amandeep Bhalla, MD',
  shortName: 'Bhalla Spine',
  doctor: 'Dr. Amandeep Bhalla',
  role: 'Board-Certified, Fellowship-Trained Orthopedic Spine Surgeon',
  tagline: 'Get back to activities you enjoy',
  description:
    'Dr. Amandeep Bhalla is a board-certified, fellowship-trained orthopedic spine surgeon in Long Beach, CA, specializing in minimally invasive, motion-preserving and robotic-assisted spine surgery.',
  phone: '(562) 427-8119',
  phoneHref: 'tel:+15624278119',
  fax: '(562) 546-1227',
  email: 'drbhallaoffice@commonsclinic.com',
  address: {
    line1: '3610 Long Beach Blvd, Suite 202',
    line2: 'Long Beach, CA 90807',
    mapsUrl: 'https://maps.google.com/?q=3610+Long+Beach+Blvd+Suite+202+Long+Beach+CA+90807',
  },
  hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
};

/** Long-form content for a service detail page. Optional per service. */
export interface ServiceContent {
  /** Photos used across the page: [hero, overview, candidates]. */
  photos: string[];
  intro: string;
  whatIs: { title: string; text: string[] };
  candidates: { title: string; text: string; conditions: string[]; symptoms: string[] };
  benefits: { title: string; text: string; items: { title: string; text: string }[] };
  recovery: { title: string; text: string; steps: { label: string; title: string; text: string }[] };
  safety: { title: string; text: string };
  faqs: { q: string; a: string }[];
}

const cervicalFusionContent: ServiceContent = {
  photos: [
    '/images/service-pages/cervical-fusion/cervical-fusion-2.jpg',
    '/images/service-pages/cervical-fusion/cervical-fusion-1.jpg',
    '/images/service-pages/cervical-fusion/cervical-fusion-3.jpg',
  ],
  intro:
    'Cervical fusion is an advanced surgical procedure designed to stabilize the cervical spine and relieve chronic neck pain, nerve compression and spinal instability. It is recommended when conservative treatments such as medication, physical therapy or injections have not worked.',
  whatIs: {
    title: 'What is cervical fusion surgery?',
    text: [
      'Cervical fusion is a surgical procedure that joins two or more vertebrae in the neck into a single, stable unit. It treats pain caused by spinal instability, herniated discs, degenerative disc disease or nerve compression.',
      'During the procedure, bone graft and small implants such as plates or screws are placed to hold the vertebrae together while they heal. Once fusion occurs, the affected vertebrae no longer move independently, which reduces painful motion and protects the spinal cord and nerves.',
    ],
  },
  candidates: {
    title: 'Who is a candidate?',
    text: 'Patients may be candidates for cervical fusion when non-surgical treatments have not provided adequate relief. A thorough examination, imaging studies and a review of your medical history determine whether surgery is the right step.',
    conditions: [
      'Cervical radiculopathy',
      'Cervical myelopathy',
      'Spinal instability',
      'Severe degenerative disc disease',
      'Traumatic injuries of the neck',
    ],
    symptoms: ['Persistent neck pain', 'Numbness or tingling', 'Weakness in the arms', 'Signs of spinal cord compression'],
  },
  benefits: {
    title: 'What are the benefits?',
    text: 'The primary goal is to stabilize the spine and take pressure off the affected nerves or spinal cord. Most patients report improved mobility and a better quality of life, with the trade-off that the fused segment no longer moves.',
    items: [
      { title: 'Less neck and arm pain', text: 'Painful motion at the treated level stops once the vertebrae fuse.' },
      { title: 'Improved strength and sensation', text: 'Relieving nerve compression lets numbness, tingling and weakness recover.' },
      { title: 'Better spinal alignment', text: 'Implants restore and hold the natural curve of the neck.' },
      { title: 'Prevents further damage', text: 'A stable segment protects against progressive degeneration or instability.' },
    ],
  },
  recovery: {
    title: 'How long is the recovery?',
    text: 'Recovery depends on the number of levels treated, your overall health and the surgical technique used. Regular follow-up visits track your progress and confirm the bone is healing.',
    steps: [
      { label: 'First days', title: 'Home and moving', text: 'Most patients go home within a day or two and walk from the start. A cervical collar may be worn for support.' },
      { label: 'First weeks', title: 'Light activity', text: 'Light activities usually resume within a few weeks. Structured rehabilitation begins as healing allows.' },
      { label: 'Several months', title: 'Solid fusion', text: 'Complete bone fusion takes several months. Follow-up imaging confirms the segment has healed.' },
    ],
  },
  safety: {
    title: 'Is cervical fusion safe?',
    text: 'Cervical fusion is a well-established and commonly performed spine surgery with a strong track record of success when performed by experienced spine specialists. As with any surgery there are potential risks, including infection, bleeding, nerve irritation or delayed bone healing. Advances in surgical technology, imaging and minimally invasive techniques have significantly improved safety and outcomes.',
  },
  faqs: [
    {
      q: 'Who is a candidate for cervical fusion?',
      a: 'Patients whose neck pain, numbness, tingling or arm weakness has not improved with medication, physical therapy or injections, and whose imaging shows instability, severe disc degeneration, nerve compression or injury. Dr. Bhalla confirms with an examination, imaging and your history.',
    },
    {
      q: 'What are the benefits of cervical fusion?',
      a: 'Reduced neck and arm pain, improved strength and sensation, better spinal alignment, and protection against further degeneration or instability. The fused segment loses motion, but most patients find their overall mobility and quality of life improve.',
    },
    {
      q: 'How long is the recovery after cervical fusion surgery?',
      a: 'Light activities typically resume within a few weeks. Complete bone fusion takes several months. You may wear a cervical collar for a period and take part in structured rehabilitation, with regular follow-up visits to monitor healing.',
    },
    {
      q: 'Is cervical fusion a safe procedure?',
      a: 'Yes. It is a well-established spine surgery with a strong track record when performed by experienced specialists. Risks such as infection, bleeding, nerve irritation or delayed healing exist but are uncommon, and modern techniques have improved safety and outcomes.',
    },
  ],
};

export const services: {
  slug: string;
  image: string;
  title: string;
  short: string;
  description: string;
  content?: ServiceContent;
}[] = [
  {
    slug: 'cervical-fusion',
    image: '/images/service-pages/cervical-fusion/cervical-fusion-2.jpg',
    title: 'Cervical Fusion',
    short: 'Stabilizes the neck by joining vertebrae to relieve pain and restore alignment.',
    description:
      'Cervical fusion is a surgical procedure that stabilizes the neck by joining vertebrae, relieving pain, restoring alignment and improving spinal function.',
    content: cervicalFusionContent,
  },
  {
    slug: 'cervical-herniated-disc',
    image: '/images/Canal-Stenosis.webp',
    title: 'Cervical Herniated Disc',
    short: 'Minimally invasive relief for neck pain, numbness and nerve compression.',
    description:
      'A cervical herniated disc occurs when a disc in the neck bulges or ruptures, compressing nerves and causing pain, numbness or weakness.',
  },
  {
    slug: 'cervical-myelopathy',
    image: '/images/C1A3704-scaled-e1747239020857.jpg',
    title: 'Cervical Myelopathy',
    short: 'Treats spinal cord compression in the neck before nerve damage progresses.',
    description:
      'Cervical myelopathy is spinal cord compression in the neck causing pain, weakness, numbness, balance issues and possible neurological dysfunction.',
  },
  {
    slug: 'lumbar-fusion',
    image: '/images/C1A4022-scaled-e1747319220831.jpg',
    title: 'Lumbar Fusion',
    short: 'Joins lower-spine vertebrae for stability and lasting relief from chronic back pain.',
    description:
      'Lumbar fusion joins lower-spine vertebrae to stabilize movement, relieve chronic back pain and improve spinal alignment.',
  },
  {
    slug: 'disc-replacement-surgery',
    image: '/images/C1A4003-scaled-e1747321991364.jpg',
    title: 'Disc Replacement Surgery',
    short: 'Motion-preserving artificial disc replacement that keeps you moving naturally.',
    description:
      'Disc replacement surgery replaces damaged spinal discs with artificial implants to preserve motion and reduce pain.',
  },
  {
    slug: 'minimally-invasive-spine-surgery',
    image: '/images/C1A4046-scaled-e1747322027611.jpg',
    title: 'Minimally Invasive Spine Surgery',
    short: 'Small incisions and advanced tools for less pain and a faster recovery.',
    description:
      'Minimally invasive spine surgery uses small incisions and advanced tools to treat spinal conditions, reducing pain, recovery time and complications.',
  },
];

/** Conditions and procedures, grouped for the Conditions mega menu. */
export const conditionGroups = [
  {
    id: 'conditions',
    title: 'Spine conditions',
    overview: 'Pain, wear and disease of the spine itself. Most are managed without surgery.',
    items: [
      { slug: 'chronic-neck-and-back-pain', title: 'Chronic neck and back pain', kind: 'Pain' },
      { slug: 'degenerative-disc-disease', title: 'Degenerative disc disease', kind: 'Wear and tear' },
      { slug: 'spinal-infections', title: 'Spinal infections', kind: 'Infection' },
      { slug: 'spinal-tumors', title: 'Spinal tumors', kind: 'Tumor' },
      { slug: 'sacroiliac-joint-dysfunction', title: 'Sacroiliac joint dysfunction', kind: 'Joint' },
    ],
  },
  {
    id: 'deformities',
    title: 'Spinal deformities',
    overview: 'Curves and imbalance of the spine, in adolescents and adults.',
    items: [
      { slug: 'scoliosis', title: 'Scoliosis', kind: 'Sideways curve' },
      { slug: 'kyphosis', title: 'Kyphosis', kind: 'Forward curve' },
      { slug: 'flatback', title: 'Flatback', kind: 'Loss of curve' },
    ],
  },
  {
    id: 'cervical',
    title: 'Cervical spine',
    overview: 'The neck. Conditions and procedures from the base of the skull to the shoulders.',
    items: [
      { slug: 'acdf', title: 'Anterior cervical discectomy and fusion (ACDF)', kind: 'Procedure' },
      { slug: 'cervical-disc-replacement', title: 'Cervical disc replacement', kind: 'Motion preserving' },
      { slug: 'cervical-herniated-disc', title: 'Cervical herniated disc', kind: 'Disc' },
      { slug: 'cervical-radiculopathy', title: 'Cervical radiculopathy', kind: 'Pinched nerve' },
      { slug: 'cervical-myelopathy', title: 'Cervical myelopathy', kind: 'Cord compression' },
      { slug: 'cervical-trauma', title: 'Cervical trauma', kind: 'Injury' },
      { slug: 'cervical-fusion', title: 'Cervical fusion', kind: 'Procedure' },
    ],
  },
  {
    id: 'lumbar',
    title: 'Lumbar spine',
    overview: 'The lower back. The most common source of pain we see.',
    items: [
      { slug: 'lumbar-disc-replacement', title: 'Lumbar disc replacement', kind: 'Motion preserving' },
      { slug: 'lumbar-facet-and-epidural-injections', title: 'Lumbar facet and epidural injections', kind: 'Non-surgical' },
      { slug: 'lumbar-herniated-disc', title: 'Lumbar herniated disc', kind: 'Disc' },
      { slug: 'lumbar-radiculopathy', title: 'Lumbar radiculopathy', kind: 'Sciatica' },
      { slug: 'lumbar-stenosis', title: 'Lumbar stenosis', kind: 'Narrowing' },
      { slug: 'lumbar-trauma', title: 'Lumbar trauma', kind: 'Injury' },
      { slug: 'lumbar-fusion', title: 'Lumbar fusion', kind: 'Procedure' },
    ],
  },
  {
    id: 'thoracic',
    title: 'Thoracic spine',
    overview: 'The mid back, between the neck and the lower back.',
    items: [{ slug: 'thoracic-stenosis-myelopathy', title: 'Thoracic stenosis and myelopathy', kind: 'Cord compression' }],
  },
  {
    id: 'surgery',
    title: 'Spinal surgery',
    overview: 'Procedures we offer when non-surgical care is not enough.',
    items: [
      { slug: 'minimally-invasive-spinal-surgery', title: 'Minimally invasive spinal surgery', kind: 'Procedure' },
      { slug: 'osteoporotic-compression-fractures', title: 'Osteoporotic compression fractures', kind: 'Fracture' },
      { slug: 'revision-spinal-surgery', title: 'Revision spinal surgery', kind: 'Procedure' },
      { slug: 'spinal-cord-stimulation', title: 'Spinal cord stimulation', kind: 'Pain management' },
      { slug: 'minimally-invasive-scoliosis-surgery', title: 'Minimally invasive scoliosis surgery', kind: 'Procedure' },
      { slug: 'balloon-kyphoplasty', title: 'Balloon kyphoplasty', kind: 'Fracture repair' },
      { slug: 'sacroiliac-joint-fusion', title: 'Sacroiliac joint minimally invasive fusion', kind: 'Procedure' },
    ],
  },
];

/** Flat list of every condition (used by the Services menu and the conditions page). */
export const conditions = conditionGroups.flatMap((g) => g.items);

/** Short list shown in the Services mega menu side column. */
export const featuredConditions = [
  'chronic-neck-and-back-pain',
  'degenerative-disc-disease',
  'lumbar-herniated-disc',
  'lumbar-stenosis',
  'scoliosis',
  'spinal-tumors',
]
  .map((slug) => conditions.find((c) => c.slug === slug))
  .filter((c): c is { slug: string; title: string; kind: string } => Boolean(c));


export const education = [
  { stage: 'Medical School', place: 'David Geffen School of Medicine at UCLA' },
  { stage: 'Internship', place: 'Harbor–UCLA Medical Center' },
  { stage: 'Residency', place: 'Orthopaedic Surgery, David Geffen School of Medicine at UCLA' },
  {
    stage: 'Fellowship',
    place: 'Harvard Spine Fellowship, Massachusetts General Hospital & Brigham and Women’s Hospital',
  },
];

export const boards = ['American Board of Orthopaedic Surgery'];

export const awards = [
  { title: 'Los Angeles Top Doctors', year: '2021' },
  { title: 'Los Angeles Top Doctors', year: '2022' },
];

export const appointments = [
  'Medical Director, Spine Center, MemorialCare Long Beach Medical Center',
  'Vice Chair, Orthopaedic Surgery, MemorialCare Long Beach Medical Center',
];

export const whyChoose = [
  {
    title: 'Expertise & leadership',
    text: 'Board-certified and fellowship-trained at Harvard, with extensive experience treating complex spinal disorders. Leads the Spine Center at MemorialCare Long Beach.',
  },
  {
    title: 'Advanced technology',
    text: 'Minimally invasive, motion-preserving and robotic-assisted techniques that mean smaller incisions, less pain and a faster return to life.',
  },
  {
    title: 'Patient-centered care',
    text: 'Evidence-based decisions made together with you. Every plan starts with listening, and surgery is only recommended when it is the right answer.',
  },
];

export const testimonials = [
  {
    name: 'Michelle Fajardo',
    treatment: 'Back surgery',
    quote:
      'Dr. Bhalla is an awesome doctor. I definitely would recommend him to anyone who is having back issues. Thank you Dr. Bhalla for curing my back and giving me my active lifestyle back!',
  },
  {
    name: 'John Gee',
    treatment: 'Lumbar surgery',
    quote: 'Meeting him has changed my whole life. After three operations, I finally have no back pain.',
  },
  {
    name: 'Donald Demoray',
    treatment: 'Cervical disc replacement',
    quote:
      'This is the best place you are going to find, as far as I’m concerned, to get fixed. My recovery was faster than I ever expected.',
  },
  {
    name: 'Laura Jones-Miller',
    treatment: 'Lumbar stabilization & fusion',
    quote: 'Dr. Bhalla is an amazing surgeon. The pain was gone immediately after surgery.',
  },
  {
    name: 'Cheryl Cooke',
    treatment: 'Epidural procedure',
    quote:
      'The entire staff should be commended for fast, courteous and friendly interactions. I felt cared for at every step.',
  },
];

export const posts = [
  {
    slug: 'microdiscectomy-herniated-disc-bixby-knolls',
    title: 'Relief from sciatica: microdiscectomy for a herniated disc in Bixby Knolls',
    excerpt:
      'When a herniated disc presses on a nerve root, a small outpatient procedure can bring relief the same day. Here is how microdiscectomy works and who it helps.',
    date: '2025-06-12',
    readTime: '5 min read',
    category: 'Procedures',
    image: '/images/C1A3704-scaled-e1747239020857.jpg',
  },
  {
    slug: 'sciatica-treatment-long-beach',
    title: 'Burning pain shooting down your leg? Sciatica treatment in Long Beach',
    excerpt:
      'Sciatica has many causes and most of them do not need surgery. Learn the warning signs, what to try first, and when to see a spine specialist.',
    date: '2025-05-28',
    readTime: '4 min read',
    category: 'Conditions',
    image: '/images/Canal-Stenosis.webp',
  },
  {
    slug: 'motion-preserving-vs-fusion',
    title: 'Disc replacement or fusion? How we decide together',
    excerpt:
      'Both procedures relieve pain, but they change how your spine moves in different ways. A guide to the questions we walk through before choosing.',
    date: '2025-05-02',
    readTime: '6 min read',
    category: 'Decisions',
    image: '/images/C1A4022-scaled-e1747319220831.jpg',
  },
];

/** Header navigation. `mega` names the mega menu an item opens. */
export const nav: { label: string; href: string; mega?: 'services' | 'conditions' }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', mega: 'services' },
  { label: 'Conditions', href: '/conditions', mega: 'conditions' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/** Sections tracked by the "spine rail" on the home page (in page order). */
export const homeSections = [
  { id: 'hero', label: 'Welcome' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Care' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'why', label: 'Why us' },
  { id: 'legacy', label: 'Legacy' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Patients' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];
