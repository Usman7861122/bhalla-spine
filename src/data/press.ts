/**
 * Press coverage: articles about Dr. Bhalla published by outside outlets.
 *
 * Each feature is written in our own words as a summary of the original article, with a link
 * back to the publisher. Photos are credited to the original photographer and outlet.
 * Images live in /public/images/press/<slug>/.
 *
 * `conditions` and `services` link the feature to pages on this site. A condition or service
 * page shows an "In the news" block for every feature that lists it.
 */

export interface PressImage {
  src: string;
  caption: string;
  credit: string;
}

export interface PressFeature {
  slug: string;
  title: string;
  /** Short line under the title. */
  deck: string;
  outlet: string;
  outletUrl: string;
  /** Link to the original article. */
  url: string;
  date: string;
  author: string;
  /** Card and hero image. */
  image: string;
  images: PressImage[];
  /** Our summary of the article, one paragraph per entry. */
  body: string[];
  /** A few key facts pulled out as a list. */
  highlights: { label: string; value: string }[];
  /** Short quotes from the article, attributed. */
  quotes: { text: string; by: string }[];
  /** Slugs of related condition pages. */
  conditions: string[];
  /** Slugs of related service pages. */
  services: string[];
}

const dir = '/images/press';

export const press: PressFeature[] = [
  {
    slug: 'father-son-surgical-team-long-beach',
    title: 'A "surreal experience": Father and son surgical team repair spines in Long Beach',
    deck: 'The Long Beach Business Journal spent a day in the operating room with Dr. Amandeep Bhalla and his father, Dr. Sarbpaul Bhalla.',
    outlet: 'Long Beach Business Journal',
    outletUrl: 'https://lbbusinessjournal.com/',
    url: 'https://lbbusinessjournal.com/health-care/a-surreal-experience-father-son-surgical-team-repair-spines-in-long-beach-or/',
    date: '2022-05-18',
    author: 'Brandon Richardson',
    image: `${dir}/father-son-surgical-team-long-beach/1.jpg`,
    images: [
      {
        src: `${dir}/father-son-surgical-team-long-beach/1.jpg`,
        caption: 'Dr. Amandeep Bhalla and Dr. Sarbpaul Bhalla working on a patient\'s spine at Long Beach Medical Center, May 12, 2022.',
        credit: 'Photo by Brandon Richardson, Long Beach Business Journal',
      },
      {
        src: `${dir}/father-son-surgical-team-long-beach/2.jpg`,
        caption: 'Dr. Sarbpaul Bhalla scrubbing in for spinal surgery with his son, May 12, 2022.',
        credit: 'Photo by Brandon Richardson, Long Beach Business Journal',
      },
    ],
    body: [
      'In May 2022 the Long Beach Business Journal followed Dr. Amandeep Bhalla and his father, Dr. Sarbpaul Bhalla, into the operating room at Long Beach Medical Center. The two orthopedic spine surgeons operate together most weeks, usually on five or six cases, and by the time of the article had performed more than 1,500 orthopedic surgeries side by side over six years.',
      'The article describes a partnership built on trust. Dr. Sarbpaul Bhalla began his surgical career in India in 1972, moved to the United States in 1976 and completed his orthopedic residency in 1989. Dr. Amandeep Bhalla grew up in Southern California, studied at the University of Pennsylvania, attended the UCLA School of Medicine, completed his residency at Harbor-UCLA and trained in spine surgery during a fellowship at Harvard. Despite decades more experience, the elder Dr. Bhalla defers to his son in the operating room, and his son in turn leans on his father\'s judgment.',
      'A focus of the piece is technology. Two months before the article, the Bhallas completed their 100th procedure using the ExcelsiusGPS robotic arm, a system that lets surgeons plan and navigate screw placement in three dimensions. Long Beach Memorial was the first hospital in Los Angeles County to acquire the robot, and the Bhallas now train surgeons from other hospitals to use it. Robotic assisted and minimally invasive techniques remain central to how Dr. Amandeep Bhalla practices today.',
      'The article closes with Dr. Sarbpaul Bhalla reflecting on eventual retirement and the comfort of knowing his son will carry on his approach to patient care. For the full story and the original photographs, read the article on the Long Beach Business Journal website.',
    ],
    highlights: [
      { label: 'Surgeries together', value: '1,500+' },
      { label: 'Cases most weeks', value: '5 to 6' },
      { label: 'Robotic procedures by March 2022', value: '100' },
      { label: 'First in LA County', value: 'ExcelsiusGPS' },
    ],
    quotes: [{ text: 'A surreal experience.', by: 'Dr. Amandeep Bhalla, on operating alongside his father' }],
    conditions: ['chronic-neck-and-back-pain', 'lumbar-stenosis', 'degenerative-disc-disease', 'scoliosis'],
    services: ['minimally-invasive-spinal-surgery', 'motion-preservation-surgery', 'revision-spinal-surgery'],
  },
  {
    slug: 'newsweek-150-best-spine-surgeons-2024',
    title: 'Named one of the 150 best spine surgeons in America by Newsweek',
    deck: 'Becker\'s Spine Review reported Newsweek\'s 2024 list of America\'s best spine surgeons. Dr. Bhalla is among the surgeons recognized.',
    outlet: 'Becker\'s Spine Review',
    outletUrl: 'https://www.beckersspine.com/',
    url: 'https://www.beckersspine.com/spine/the-150-best-spine-surgeons-in-america-per-newsweek/',
    date: '2024-06-12',
    author: 'Claire Wallace',
    image: '/images/C1A3602-scaled-e1747304153775.jpg',
    images: [
      {
        src: '/images/C1A3602-2-scaled-e1747238929259.jpg',
        caption: 'Dr. Amandeep Bhalla at Commons Clinic in Long Beach.',
        credit: 'Photo: Bhalla Spine',
      },
    ],
    body: [
      'In June 2024 Becker\'s Spine Review published Newsweek\'s annual list of the 150 best spine surgeons in the United States. Dr. Amandeep Bhalla, listed with MemorialCare Long Beach Medical Center, is one of the surgeons named.',
      'Newsweek builds the list from three sources: Medicare data on each surgeon\'s practice, peer ratings of the quality of care they deliver, and whether the surgeon holds certification from the American Board of Orthopaedic Surgery. The 2024 list covers the 20 states with the most practicing physicians, and the surgeons are listed without a numbered order.',
      'Dr. Bhalla is board certified by the American Board of Orthopaedic Surgery and fellowship trained in spine surgery at Harvard. He serves as Medical Director of the Spine Center and Vice Chair of Orthopaedic Surgery at MemorialCare Long Beach Medical Center, and sees patients at Commons Clinic in Long Beach.',
      'The recognition reflects the approach behind every plan in this practice: a clear diagnosis first, the least invasive treatment that will work, and surgery only when it is the right answer. The full list is available on the Becker\'s Spine Review website.',
    ],
    highlights: [
      { label: 'List', value: 'Newsweek 2024' },
      { label: 'Surgeons named nationwide', value: '150' },
      { label: 'Based on', value: 'Medicare data, peer ratings, board certification' },
      { label: 'Listed with', value: 'MemorialCare Long Beach' },
    ],
    quotes: [],
    conditions: ['chronic-neck-and-back-pain', 'degenerative-disc-disease', 'lumbar-stenosis', 'cervical-myelopathy'],
    services: ['minimally-invasive-spinal-surgery', 'motion-preservation-surgery', 'outpatient-spinal-surgery'],
  },
  {
    slug: 'los-angeles-business-journal-top-doctors',
    title: 'Los Angeles\' Top Doctors: Amandeep Bhalla',
    deck: 'The Los Angeles Business Journal profiled Dr. Bhalla as one of Los Angeles\' Top Doctors, a recognition he received in both 2021 and 2022.',
    outlet: 'Los Angeles Business Journal',
    outletUrl: 'https://labusinessjournal.com/',
    url: 'https://labusinessjournal.com/advertorials/los-angeles-top-doctors-amandeep-bhalla/',
    date: '2021',
    author: 'Los Angeles Business Journal',
    image: '/images/C1A3704-scaled-e1747239020857.jpg',
    images: [
      {
        src: '/images/C1A4003-scaled-e1747321991364.jpg',
        caption: 'Dr. Bhalla greeting a patient in the consultation room at Commons Clinic, Long Beach.',
        credit: 'Photo: Bhalla Spine',
      },
    ],
    body: [
      'The Los Angeles Business Journal\'s Top Doctors feature recognizes physicians across the region who are regarded as leaders in their field by their peers and their patients. Dr. Amandeep Bhalla was profiled as one of Los Angeles\' Top Doctors for his work in orthopedic spine surgery at MemorialCare Long Beach Medical Center, and was named again the following year.',
      'The profile highlights the path that brought him to Long Beach: undergraduate studies at the University of Pennsylvania, a medical degree from the David Geffen School of Medicine at UCLA, an orthopaedic surgery residency at Harbor-UCLA Medical Center, and the Harvard Combined Spine Fellowship at Massachusetts General Hospital and Brigham and Women\'s Hospital. He is board certified by the American Board of Orthopaedic Surgery.',
      'At MemorialCare Long Beach Medical Center, Dr. Bhalla serves as Medical Director of the Spine Center and Vice Chair of Orthopaedic Surgery. His practice covers degenerative conditions of the cervical, thoracic and lumbar spine, adult spinal deformity, spine trauma and spinal tumors, with a particular focus on minimally invasive and robotic assisted techniques. He also teaches residents and fellows as faculty at Harbor-UCLA and the David Geffen School of Medicine at UCLA.',
      'What the recognition rewards is the same approach patients meet in clinic: time spent explaining the condition in plain language, a preference for non operative care whenever it will work, and surgery only when it is the right answer. Read the profile on the Los Angeles Business Journal website.',
    ],
    highlights: [
      { label: 'Recognition', value: 'Top Doctors' },
      { label: 'Years named', value: '2021, 2022' },
      { label: 'Fellowship', value: 'Harvard Spine' },
      { label: 'Leads', value: 'Spine Center, MemorialCare Long Beach' },
    ],
    quotes: [{ text: 'Compassionate, evidence-based care.', by: 'Dr. Amandeep Bhalla, on the Spine Center\'s commitment to patients' }],
    conditions: ['scoliosis', 'cervical-trauma', 'spinal-tumors', 'degenerative-disc-disease'],
    services: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'motion-preservation-surgery'],
  },
  /* 4 */
  {
    slug: 'image-guided-spine-surgery-podcast',
    title: 'Improving patient outcomes with image guided spine surgery',
    deck: 'On MemorialCare\'s Daily Dose of Wellness podcast, Dr. Bhalla explains how real time 3D navigation and robotics make spine surgery more precise and recovery faster.',
    outlet: 'MemorialCare',
    outletUrl: 'https://www.memorialcare.org/',
    url: 'https://www.memorialcare.org/blog/improving-patient-outcomes-image-guided-spine-surgery',
    date: '2024-11-25',
    author: 'Daily Dose of Wellness, hosted by Deborah Howell',
    image: '/images/C1A4003-scaled-e1747321991364.jpg',
    images: [
      { src: '/images/C1A4022-scaled-e1747319220831.jpg', caption: 'Dr. Bhalla walking a patient through imaging at Commons Clinic, Long Beach.', credit: 'Photo: Bhalla Spine' },
    ],
    body: [
      'In this episode of MemorialCare\'s Daily Dose of Wellness podcast, Dr. Bhalla, Medical Director of the Spine Health Center at MemorialCare Long Beach Medical Center, explains image guided spine surgery in plain terms: the patient\'s own anatomy is projected onto a screen in the operating room so the surgeon can see exactly where every instrument is going.',
      'The process starts with a CT scan taken in the operating room once the patient is asleep. Software turns it into a virtual 3D model of the spine that updates in real time, letting the surgeon steer around nerves and vessels and place screws and cages precisely. Better placement means stronger, better positioned hardware, which Dr. Bhalla says may lower the chance of needing another operation later. A well planned procedure also runs faster and more smoothly, with less blood loss, lower infection risk and a quicker recovery.',
      'The Long Beach center offers several platforms, including the O-arm, the ExcelsiusGPS robot and a camera based 7D navigation system, and Dr. Bhalla notes that it leads its region in investment in these tools. Every surgeon trains and demonstrates competency on a platform before using it in a case. Recovery is supported by pre operative education, getting patients up and walking early, often the same day, and therapy teams involved from the start.',
      'Looking ahead, he expects lower radiation doses, smaller equipment and predictive analytics that can estimate how surgery at one level affects the levels around it. His closing advice to patients: research your options and ask your surgeon questions, because an informed patient is a better served patient. Listen to the full episode on the MemorialCare website.',
    ],
    highlights: [
      { label: 'Format', value: 'Podcast' },
      { label: 'Platforms discussed', value: 'O-arm, ExcelsiusGPS, 7D' },
      { label: 'Key benefit', value: 'Precise hardware placement' },
      { label: 'Recovery', value: 'Walking the same day' },
    ],
    quotes: [{ text: 'The key is visualization. You can just see more.', by: 'Dr. Amandeep Bhalla' }],
    conditions: ['lumbar-stenosis', 'degenerative-disc-disease', 'scoliosis', 'cervical-myelopathy'],
    services: ['minimally-invasive-spinal-surgery', 'outpatient-spinal-surgery', 'revision-spinal-surgery'],
  },

  /* 5 */
  {
    slug: 'working-to-avoid-spine-injury',
    title: 'Working to avoid spine injury',
    deck: 'Writing for the Long Beach Post, Dr. Bhalla explains why back pain costs American workers 264 million days a year and what to do about it.',
    outlet: 'Long Beach Post',
    outletUrl: 'https://lbpost.com/',
    url: 'https://lbpost.com/news/health/working-to-avoid-spine-injury-2/',
    date: '2019-04-26',
    author: 'Amandeep Bhalla, MD, for the Long Beach Post',
    image: '/images/C1A3700-scaled-e1747321966109.jpg',
    images: [
      { src: '/images/C1A4046-scaled-e1747322027611.jpg', caption: 'Dr. Bhalla with a patient at Commons Clinic, Long Beach.', credit: 'Photo: Bhalla Spine' },
    ],
    body: [
      'In this piece written for the Long Beach Post, Dr. Bhalla looks at back pain as a workplace problem. It is one of the most common reasons people miss work and visit a doctor, costing more than 264 million lost work days a year in the United States, roughly two days for every full time worker, and it often reaches into the neck, shoulders and legs.',
      'He describes three workplace patterns that wear the spine down. Heavy loads lifted with poor technique, which proper lifting, the right tools and a second pair of hands can fix. Repetitive bending, twisting and lifting, which slowly wears the tissues around the spine. And staying in one position for too long, whether sitting, standing or driving, which stiffens muscles, ligaments and tendons, especially under stress. His rule of thumb is to stretch, change position or walk about every 20 minutes.',
      'Chronic pain that goes untreated can worsen spine, neck and shoulder conditions, limit the ability to work and in some cases lead to lasting disability. Dr. Bhalla lays out how the decision about surgery is made: how intense the pain is, how long it has lasted, how much it limits daily life such as working or driving, and whether physical therapy, activity changes, medication and injections have been given a fair chance.',
      'He reminds readers that almost all spine surgery is elective. The decision belongs to the patient, and the surgeon\'s job is to explain the risks and benefits clearly. Anyone with chronic neck, shoulder or back pain should see a spine specialist. Read the full article on the Long Beach Post website.',
    ],
    highlights: [
      { label: 'Lost work days per year', value: '264M' },
      { label: 'Per full time worker', value: '2 days' },
      { label: 'Move every', value: '20 min' },
      { label: 'Spine surgery is', value: 'Almost always elective' },
    ],
    quotes: [{ text: 'Almost all surgeries on the spine are elective.', by: 'Dr. Amandeep Bhalla, Long Beach Post' }],
    conditions: ['chronic-neck-and-back-pain', 'lumbar-herniated-disc', 'degenerative-disc-disease', 'cervical-radiculopathy'],
    services: ['minimally-invasive-spinal-surgery', 'motion-preservation-surgery', 'outpatient-spinal-surgery'],
  },

  /* 6 */
  {
    slug: 'leaders-of-influence-top-los-angeles-doctors',
    title: 'Leaders of Influence: Top Los Angeles Doctors',
    deck: 'The Los Angeles Business Journal\'s Leaders of Influence series profiles Dr. Bhalla among the top doctors in Los Angeles, in the field of orthopedics.',
    outlet: 'Los Angeles Business Journal',
    outletUrl: 'https://labusinessjournal.com/',
    url: 'https://labusinessjournal.com/advertorials/leaders-influence-top-los-angeles-doctors-amandeep/',
    date: '2022',
    author: 'Los Angeles Business Journal',
    image: '/images/C1A3602-2-scaled-e1747238929259.jpg',
    images: [
      { src: '/images/C1A3704-scaled-e1747239020857.jpg', caption: 'Dr. Bhalla explaining a spine model to a patient.', credit: 'Photo: Bhalla Spine' },
    ],
    body: [
      'The Los Angeles Business Journal\'s Leaders of Influence series recognizes professionals who shape their fields across the region. In its Top Los Angeles Doctors edition, Dr. Bhalla is profiled under orthopedics as Medical Director of Spinal Surgery and the Spine Center at MemorialCare Long Beach Medical Center.',
      'The profile describes the breadth of his practice: degenerative conditions of the cervical, thoracic and lumbar spine, adult deformity surgery, traumatic injuries, and primary and metastatic tumors of the spinal column. Where it is appropriate, he uses minimally invasive and robotic assisted techniques, motion preserving technology and outpatient surgery.',
      'What the Journal highlights most is his approach: evidence based, patient centered care, and a commitment to educating patients about their condition and about the non operative options available to them before surgery is ever discussed.',
      'Read the profile on the Los Angeles Business Journal website.',
    ],
    highlights: [
      { label: 'Series', value: 'Leaders of Influence' },
      { label: 'Field', value: 'Orthopedics' },
      { label: 'Role', value: 'Medical Director, Spine Center' },
      { label: 'Approach', value: 'Evidence based' },
    ],
    quotes: [{ text: 'Evidence-based, patient-centered care.', by: 'Dr. Amandeep Bhalla, on his approach' }],
    conditions: ['spinal-tumors', 'cervical-trauma', 'scoliosis', 'degenerative-disc-disease'],
    services: ['minimally-invasive-spinal-surgery', 'motion-preservation-surgery', 'outpatient-spinal-surgery'],
  },

  /* 7 */
  {
    slug: 'father-son-surgeons-high-tech-spinal-care',
    title: 'Father and son surgeons team up to provide high tech spinal care in Long Beach',
    deck: 'The Press-Telegram reported on Dr. Amandeep Bhalla and his father, Dr. Sarbpaul Bhalla, bringing robotic spine surgery to Long Beach Medical Center.',
    outlet: 'Press-Telegram',
    outletUrl: 'https://www.presstelegram.com/',
    url: 'https://www.presstelegram.com/2020/10/21/father-son-surgeons-team-to-provide-high-tech-spinal-care-in-long-beach/',
    date: '2020-10-21',
    author: 'Press-Telegram',
    image: '/images/press/father-son-surgical-team-long-beach/2.jpg',
    images: [
      { src: '/images/press/father-son-surgical-team-long-beach/1.jpg', caption: 'Dr. Amandeep Bhalla and Dr. Sarbpaul Bhalla operating together at Long Beach Medical Center.', credit: 'Photo by Brandon Richardson, Long Beach Business Journal' },
    ],
    body: [
      'In October 2020 the Press-Telegram, Long Beach\'s daily newspaper, reported on an unusual surgical partnership: Dr. Amandeep Bhalla and his father, Dr. Sarbpaul Bhalla, both orthopedic spine surgeons, operating together at Long Beach Medical Center and bringing robotic assisted spine surgery to the city.',
      'The story came as Long Beach Medical Center became the first hospital in Los Angeles County to acquire the ExcelsiusGPS robotic navigation platform, which lets surgeons plan screw placement on a 3D model of the patient\'s spine and guide instruments to within a fraction of a millimeter. The Bhallas were among the first surgeons in the region to adopt it and have since trained surgeons from other hospitals in its use.',
      'The two surgeons went on to perform more than 1,500 orthopedic procedures together and were profiled again by the Long Beach Business Journal in 2022. Robotic and minimally invasive techniques remain at the center of Dr. Amandeep Bhalla\'s practice today.',
      'Read the original story on the Press-Telegram website.',
    ],
    highlights: [
      { label: 'Published', value: 'October 2020' },
      { label: 'Technology', value: 'ExcelsiusGPS' },
      { label: 'First in', value: 'LA County' },
      { label: 'Team', value: 'Father and son' },
    ],
    quotes: [],
    conditions: ['lumbar-stenosis', 'degenerative-disc-disease', 'scoliosis', 'lumbar-herniated-disc'],
    services: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  /* 8 */
  {
    slug: 'newsweek-trust-how-surgeons-kept-what-health-care-lost',
    title: 'Trust: How surgeons kept what health care lost',
    deck: 'Newsweek\'s cover story on why patients still trust surgeons opens with Dr. Bhalla in his Long Beach office, talking about honesty, technology and the gift of being trusted.',
    outlet: 'Newsweek',
    outletUrl: 'https://www.newsweek.com/',
    url: 'https://www.newsweek.com/2024/06/28/trust-how-surgeons-kept-what-health-care-lost-1909720.html',
    date: '2024-06-12',
    author: 'Alexis Kayser, Healthcare Editor, Newsweek',
    image: '/images/C1A3602-scaled-e1747304153775.jpg',
    images: [
      { src: '/images/C1A3700-scaled-e1747321966109.jpg', caption: 'Dr. Bhalla in conversation with a patient at Commons Clinic, Long Beach.', credit: 'Photo: Bhalla Spine' },
    ],
    body: [
      'Public trust in doctors has fallen in recent years, yet patients keep trusting surgeons. Newsweek\'s June 2024 cover story set out to understand why, and it opens in Long Beach with Dr. Bhalla, one of the surgeons on Newsweek\'s America\'s Best Spine Surgeons list for 2024. He describes the operating room as a place of complete focus on the patient, and being trusted with that moment as a tremendous honor and a gift.',
      'Dr. Bhalla speaks candidly about what makes trust harder today. Patients arrive with far more information from the web and social media, some of it accurate and some of it marketing or misinformation, which creates what he calls a huge information asymmetry between doctor and patient. Many patients also fear the unknown and the loss of control. He answers both the same way: by explaining clearly, and by reassuring patients that he, not the technology, is in charge of their surgery, even when robotics and navigation are used.',
      'The article also records a point Dr. Bhalla makes often with his own patients: some of his happiest patients are people who had a complication and felt it was handled openly and well. Honesty when things do not go to plan builds more trust than a perfect run ever could. Small gestures matter too. He lets patients choose the music they hear as they drift off to sleep.',
      'Newsweek\'s conclusion is that surgeons keep trust because they stay close to the patient and have a personal stake in the outcome. That is the standard this practice holds itself to. Read the full cover story on Newsweek\'s website.',
    ],
    highlights: [
      { label: 'Publication', value: 'Newsweek cover story' },
      { label: 'Trust in doctors, 2019 to 2023', value: 'Down 9 points' },
      { label: 'Listed', value: 'Best Spine Surgeons 2024' },
      { label: 'Theme', value: 'Honesty and listening' },
    ],
    quotes: [{ text: 'Some of my happiest patients have had complications.', by: 'Dr. Amandeep Bhalla, to Newsweek' }],
    conditions: ['chronic-neck-and-back-pain', 'lumbar-stenosis', 'cervical-myelopathy', 'flatback'],
    services: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'motion-preservation-surgery'],
  },

  /* 9 */
  {
    slug: 'named-medical-director-spine-center',
    title: 'Dr. Amandeep Bhalla named Medical Director of the Spine Center at MemorialCare Long Beach Medical Center',
    deck: 'The 2021 announcement, distributed by PR Newswire, of Dr. Bhalla\'s appointment to lead the Spine Center.',
    outlet: 'PR Newswire',
    outletUrl: 'https://www.prnewswire.com/',
    url: 'https://www.prnewswire.com/news-releases/amandeep-bhalla-md-named-medical-director-of-the-spine-center-at-memorialcare-long-beach-medical-center-301239904.html',
    date: '2021-03-03',
    author: 'MemorialCare, via PR Newswire',
    image: '/images/C1A4389-scaled-e1747321839188.jpg',
    images: [
      { src: '/images/C1A3602-2-scaled-e1747238929259.jpg', caption: 'Dr. Amandeep Bhalla.', credit: 'Photo: Bhalla Spine' },
    ],
    body: [
      'In March 2021 MemorialCare announced that Dr. Amandeep Bhalla had been named Medical Director of the Spine Center at MemorialCare Long Beach Medical Center. The release, distributed nationally through PR Newswire, described him as board certified and fellowship trained in orthopaedic spine surgery and as a surgeon already well known to the Long Beach community.',
      'The announcement set out his training and roles: undergraduate studies at the University of Pennsylvania, a medical degree from the David Geffen School of Medicine at UCLA, orthopaedic residency at Harbor-UCLA Medical Center and the Harvard Combined Spine Fellowship at Massachusetts General Hospital and Brigham and Women\'s Hospital. At the time he also served as Director of Spine Trauma at Harbor-UCLA and as teaching faculty at Harbor-UCLA and UCLA. He is a member of the North American Spine Society and the American Academy of Orthopaedic Surgeons.',
      'His clinical focus was described as degenerative conditions of the cervical, thoracic and lumbar spine, adult spinal deformity, traumatic injuries and primary and metastatic spinal tumors, using minimally invasive techniques and advanced technology including the ExcelsiusGPS robot and O-arm navigation. Ike Mmeje, the hospital\'s chief operating officer, called him a generational talent, and Dr. Bhalla committed the Spine Center to compassionate, evidence based care.',
      'Read the full release on PR Newswire.',
    ],
    highlights: [
      { label: 'Appointed', value: 'March 2021' },
      { label: 'Role', value: 'Medical Director, Spine Center' },
      { label: 'Also', value: 'Director of Spine Trauma, Harbor-UCLA' },
      { label: 'Societies', value: 'NASS, AAOS' },
    ],
    quotes: [{ text: 'Compassionate, evidence-based care.', by: 'Dr. Amandeep Bhalla, on the Spine Center\'s commitment' }],
    conditions: ['cervical-trauma', 'lumbar-trauma', 'spinal-tumors', 'kyphosis'],
    services: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  /* 10 */
  {
    slug: 'memorialcare-newsweek-150-best-spine-surgeons',
    title: 'MemorialCare: Dr. Bhalla named one of Newsweek\'s 150 best spine surgeons in the nation',
    deck: 'MemorialCare Long Beach Medical Center\'s announcement of Dr. Bhalla\'s place on Newsweek\'s America\'s Best Spine Surgeons 2024 list.',
    outlet: 'MemorialCare',
    outletUrl: 'https://www.memorialcare.org/',
    url: 'https://www.memorialcare.org/press-room/memorialcare-long-beach-medical-center-amandeep-bhalla-md-named-one-newsweeks-150-best',
    date: '2024-06-19',
    author: 'MemorialCare Long Beach Medical Center',
    image: '/images/C1A4046-scaled-e1747322027611.jpg',
    images: [
      { src: '/images/C1A4003-scaled-e1747321991364.jpg', caption: 'Dr. Bhalla greeting a patient at Commons Clinic, Long Beach.', credit: 'Photo: Bhalla Spine' },
    ],
    body: [
      'In June 2024 MemorialCare Long Beach Medical Center announced that Dr. Bhalla, Medical Director of its Spine Center, had been named one of the 150 surgeons on Newsweek\'s America\'s Best Spine Surgeons 2024 list.',
      'Newsweek builds the list with the research firm Statista to help people with chronic back pain find specialized care. The 2024 ranking drew on Medicare data, a survey of more than 30,000 medical experts, peer ratings of quality of care and American Board of Orthopaedic Surgery certification, across the 20 states with the most practicing physicians.',
      'Joe Kim, MD, the hospital\'s chief medical officer, called the recognition a testament to Dr. Bhalla\'s expertise and commitment to patients. Dr. Bhalla said the honor meant a great deal because it reflected the judgment of his peers, and described the trust patients place in him as the true north of every clinical encounter.',
      'The release also notes that the Spine Center was recognized by Blue Shield as a 2023 Blue Distinction Center for spine surgery, and offers extensive pre operative education alongside surgeons trained in advanced techniques including the ExcelsiusGPS platform. Read the full announcement on the MemorialCare website.',
    ],
    highlights: [
      { label: 'List', value: 'Newsweek 2024' },
      { label: 'Experts surveyed', value: '30,000+' },
      { label: 'Spine Center', value: 'Blue Distinction Center 2023' },
      { label: 'Announced', value: 'June 19, 2024' },
    ],
    quotes: [{ text: 'It is a tremendous honor and deeply humbling.', by: 'Dr. Amandeep Bhalla' }],
    conditions: ['chronic-neck-and-back-pain', 'lumbar-stenosis', 'degenerative-disc-disease', 'lumbar-herniated-disc'],
    services: ['minimally-invasive-spinal-surgery', 'motion-preservation-surgery', 'outpatient-spinal-surgery'],
  },
];

export function getPress(slug: string): PressFeature | undefined {
  return press.find((p) => p.slug === slug);
}

/** Press features that mention a given condition slug. */
export function pressForCondition(slug: string): PressFeature[] {
  return press.filter((p) => p.conditions.includes(slug));
}

/** Press features that mention a given service slug. */
export function pressForService(slug: string): PressFeature[] {
  return press.filter((p) => p.services.includes(slug));
}

export function formatPressDate(iso: string): string {
  if (/^\d{4}$/.test(iso)) return iso;
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
