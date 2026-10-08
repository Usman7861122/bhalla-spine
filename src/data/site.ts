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
  hours: 'Monday to Friday, 8:00 AM to 5:00 PM',
  /** Short video about Dr. Bhalla, opened in a pop up from the About section. */
  video: {
    facebookUrl: 'https://www.facebook.com/watch/?v=347033505960862',
    title: 'Dr. Bhalla in the news',
  },
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
};

export { services } from './services';
export type { Service, ServiceContent } from './services';

/** Conditions and procedures, grouped for the Conditions mega menu. */
export const conditionGroups = [
  {
    id: 'conditions',
    slug: 'spine-conditions',
    intro: 'Pain, wear, infection and tumors of the spine itself. Most are managed without surgery, and all begin with a clear diagnosis.',
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
    slug: 'spinal-deformities',
    intro: 'Curves and loss of balance in the spine, from adolescent scoliosis to adult flatback. Watched when mild, corrected when they limit life.',
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
    slug: 'cervical-spine',
    intro: 'The neck carries the head and every signal to the body. Conditions here show up in the arms, hands and balance, and respond well to modern treatment.',
    title: 'Cervical spine',
    overview: 'The neck. Conditions and procedures from the base of the skull to the shoulders.',
    items: [
      { slug: 'cervical-herniated-disc', title: 'Cervical herniated disc', kind: 'Disc' },
      { slug: 'cervical-radiculopathy', title: 'Cervical radiculopathy', kind: 'Pinched nerve' },
      { slug: 'cervical-myelopathy', title: 'Cervical myelopathy', kind: 'Cord compression' },
      { slug: 'cervical-trauma', title: 'Cervical trauma', kind: 'Injury' },
      { slug: 'cervical-fusion', title: 'Cervical fusion', kind: 'Procedure' },
    ],
  },
  {
    id: 'lumbar',
    slug: 'lumbar-spine',
    intro: 'The lower back carries the most load and causes the most pain we see. Nearly all of it improves without surgery; the rest has excellent minimally invasive options.',
    title: 'Lumbar spine',
    overview: 'The lower back. The most common source of pain we see.',
    items: [
      { slug: 'lumbar-herniated-disc', title: 'Lumbar herniated disc', kind: 'Disc' },
      { slug: 'lumbar-radiculopathy', title: 'Lumbar radiculopathy', kind: 'Sciatica' },
      { slug: 'lumbar-stenosis', title: 'Lumbar stenosis', kind: 'Narrowing' },
      { slug: 'lumbar-trauma', title: 'Lumbar trauma', kind: 'Injury' },
    ],
  },
  {
    id: 'thoracic',
    slug: 'thoracic-spine',
    intro: 'The mid back is protected by the rib cage, so problems here are uncommon. When they involve the spinal cord they need expert attention.',
    title: 'Thoracic spine',
    overview: 'The mid back, between the neck and the lower back.',
    items: [{ slug: 'thoracic-stenosis-myelopathy', title: 'Thoracic stenosis and myelopathy', kind: 'Cord compression' }],
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
  { title: 'Newsweek, 150 Best Spine Surgeons in America', year: '2024' },
  { title: 'Los Angeles Top Doctors', year: '2022' },
  { title: 'Los Angeles Top Doctors', year: '2021' },
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
  { label: 'News', href: '/press' },
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
  { id: 'press', label: 'News' },
  { id: 'testimonials', label: 'Patients' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];
