/**
 * The seven care services. Each has a short card blurb and full page content.
 *
 * Images: `image` is the card / hero photo, `content.photos` = [hero, overview, candidates].
 * Stock photos are from Unsplash (license allows commercial use, no attribution required),
 * stored in /public/images/service-pages/<slug>/1.jpg, 2.jpg, 3.jpg. Swap a file or change a path here.
 */

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
  /** Optional city focus. Only set on pages that should lead with where care is offered. */
  local?: {
    city: string;
    /** Banner eyebrow, e.g. "Care services · Long Beach, CA". */
    eyebrow: string;
    /** Banner line shown in place of the full contact block. */
    banner: string;
    /** Nearby communities patients come from. */
    areas: string[];
    sectionTitle: string;
    text: string[];
  };
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  content?: ServiceContent;
}

/* Shared image shorthands (all files already in /public/images). */
const img = {
  neck: '/images/service-pages/cervical-fusion/cervical-fusion-1.jpg',
  vertebrae: '/images/service-pages/cervical-fusion/cervical-fusion-2.jpg',
  nerve: '/images/service-pages/cervical-fusion/cervical-fusion-3.jpg',
  mri: '/images/Canal-Stenosis.webp',
  spineModel: '/images/C1A3704-scaled-e1747239020857.jpg',
  consultSeated: '/images/C1A4022-scaled-e1747319220831.jpg',
  consultWindow: '/images/C1A3700-scaled-e1747321966109.jpg',
  handshake: '/images/C1A4046-scaled-e1747322027611.jpg',
  handshakeScreen: '/images/C1A4003-scaled-e1747321991364.jpg',
  waitingRoom: '/images/C1A4389-scaled-e1747321839188.jpg',
};

export const services: Service[] = [
  /* 1 ------------------------------------------------------------------ */
  {
    slug: 'minimally-invasive-spinal-surgery',
    title: 'Minimally Invasive Spinal Surgery',
    short: 'Small incisions, muscle-sparing tools and faster recovery for the neck and back.',
    description:
      'Minimally invasive spinal surgery treats disc herniations, stenosis and instability through small incisions, with less muscle damage, less pain and a quicker return to normal life.',
    image: '/images/service-pages/minimally-invasive-spinal-surgery/1.jpg',
    content: {
      photos: ['/images/service-pages/minimally-invasive-spinal-surgery/1.jpg', '/images/service-pages/minimally-invasive-spinal-surgery/2.jpg', '/images/service-pages/minimally-invasive-spinal-surgery/3.jpg'],
      local: {
        city: 'Long Beach, CA',
        eyebrow: 'Care services · Long Beach, CA',
        banner: 'Minimally invasive spine surgery in Long Beach, with patients welcome from across South Bay, Orange County and the greater Los Angeles area.',
        areas: ['Long Beach', 'Signal Hill', 'Lakewood', 'Seal Beach', 'Los Alamitos', 'Cypress', 'Bellflower', 'Torrance', 'Huntington Beach', 'Carson'],
        sectionTitle: 'Minimally invasive spine surgery in Long Beach, CA',
        text: [
          'Dr. Bhalla performs minimally invasive spine surgery for people in Long Beach and the surrounding cities, and leads the Spine Center at MemorialCare Long Beach Medical Center.',
          'If you live in Signal Hill, Lakewood, Seal Beach, Orange County or anywhere nearby, a consultation is a short drive away. Many procedures are done as outpatient surgery, so you can recover at home.',
        ],
      },
      intro:
        'Minimally invasive spinal surgery treats the same problems as traditional open surgery through incisions often under an inch long. Specialized retractors, a microscope or endoscope and real time imaging let Dr. Bhalla reach the spine between the muscles instead of cutting through them.',
      whatIs: {
        title: 'What is minimally invasive spinal surgery?',
        text: [
          'In a traditional open operation the muscles along the spine are stripped away from the bone to create a view. Minimally invasive techniques instead pass tubular retractors or an endoscope through a small incision and gently spread the muscle fibers apart, preserving their attachments.',
          'Through that narrow corridor Dr. Bhalla can remove a herniated disc, decompress a pinched nerve, treat stenosis or place screws and cages for a fusion. Navigation and robotic guidance confirm every step against your own imaging.',
        ],
      },
      candidates: {
        title: 'Who is a candidate?',
        text: 'Most conditions that need spine surgery can be treated minimally invasively. The deciding factors are the exact anatomy of your problem, your imaging and your goals, which Dr. Bhalla reviews with you before recommending any procedure.',
        conditions: [
          'Herniated discs in the neck or lower back',
          'Spinal stenosis',
          'Degenerative disc disease',
          'Spondylolisthesis and instability',
          'Sciatica that has not improved with therapy',
        ],
        symptoms: ['Persistent back or neck pain', 'Pain radiating to an arm or leg', 'Numbness or tingling', 'Weakness or difficulty walking'],
      },
      benefits: {
        title: 'What are the benefits?',
        text: 'Less disruption to healthy tissue is the whole idea, and it shows up at every stage of recovery.',
        items: [
          { title: 'Smaller incisions', text: 'Often under an inch, with less scarring and less blood loss.' },
          { title: 'Muscle preserved', text: 'Muscles are spread rather than cut, so they keep their strength and attachments.' },
          { title: 'Less pain after surgery', text: 'Smaller wounds and intact muscle mean lower pain medication needs.' },
          { title: 'Faster return', text: 'Most patients walk the same day and many go home within 24 hours.' },
        ],
      },
      recovery: {
        title: 'How long is the recovery?',
        text: 'Recovery depends on the procedure performed through the small incision. A decompression heals faster than a fusion, but both are quicker than their open equivalents.',
        steps: [
          { label: 'Same day', title: 'Up and walking', text: 'You are encouraged to walk within hours. Many procedures are done as an outpatient.' },
          { label: 'First two weeks', title: 'Light activity', text: 'Desk work and gentle walking resume. Incisions are checked at your first follow up.' },
          { label: 'Six to twelve weeks', title: 'Back to full life', text: 'Structured rehabilitation builds strength. Fusion patients continue to heal bone over several months.' },
        ],
      },
      safety: {
        title: 'Is it safe?',
        text: 'Minimally invasive techniques carry the same general risks as any spine surgery, including infection, bleeding and nerve irritation, but the rates are lower because less tissue is disturbed. Dr. Bhalla uses intraoperative navigation and neuromonitoring to protect the nerves throughout the procedure.',
      },
      faqs: [
        { q: 'Is minimally invasive surgery less effective than open surgery?', a: 'No. The goal of the operation is identical. The difference is the path to the spine, not what is done once there. Outcomes for pain relief and nerve recovery are equivalent, with less collateral damage along the way.' },
        { q: 'Will I need a fusion?', a: 'Only if your spine is unstable or a disc must be removed entirely. Many minimally invasive procedures, such as microdiscectomy and laminectomy, decompress the nerve without any fusion.' },
        { q: 'How big is the scar?', a: 'Typically one or two incisions between half an inch and one and a half inches, depending on the procedure.' },
        { q: 'When can I drive?', a: 'Usually once you are off narcotic pain medication and can turn comfortably, often within one to two weeks for decompressions.' },
      ],
    },
  },

  /* 2 ------------------------------------------------------------------ */
  {
    slug: 'motion-preservation-surgery',
    title: 'Motion Preservation Surgery',
    short: 'Relieve pain while keeping the natural movement of your spine.',
    description:
      'Motion preservation surgery treats painful discs and nerve compression without fusing the vertebrae, so the treated level keeps moving and neighboring levels are protected.',
    image: '/images/service-pages/motion-preservation-surgery/1.jpg',
    content: {
      photos: ['/images/service-pages/motion-preservation-surgery/1.jpg', '/images/service-pages/motion-preservation-surgery/2.jpg', '/images/service-pages/motion-preservation-surgery/3.jpg'],
      intro:
        'Fusion stops motion at a painful level. Motion preservation surgery takes a different approach: it removes the source of pain and replaces or supports the disc so the segment keeps moving the way it was designed to.',
      whatIs: {
        title: 'What is motion preservation surgery?',
        text: [
          'Motion preservation is a family of procedures, led by artificial disc replacement in the neck and lower back, that relieve nerve compression and disc pain while keeping the vertebrae mobile. The damaged disc is removed and an implant with a moving core takes its place.',
          'Because the level still bends and rotates, the discs above and below are not asked to work harder. That lowers the risk of adjacent segment disease, the wear that can follow a fusion years later.',
        ],
      },
      candidates: {
        title: 'Who is a candidate?',
        text: 'Motion preservation works best when the pain comes from one or two discs and the joints and bone around them are healthy. Dr. Bhalla confirms this with imaging and a careful exam.',
        conditions: [
          'Cervical or lumbar disc herniation',
          'Degenerative disc disease at one or two levels',
          'Cervical radiculopathy',
          'Early cervical myelopathy from a disc',
        ],
        symptoms: ['Arm or leg pain from a pinched nerve', 'Neck or low back pain that has not improved', 'Numbness or tingling', 'Mild weakness'],
      },
      benefits: {
        title: 'What are the benefits?',
        text: 'Keeping motion changes how the whole spine ages, not just the treated level.',
        items: [
          { title: 'Natural movement kept', text: 'The treated level continues to flex, extend and rotate.' },
          { title: 'Protects neighbors', text: 'Less stress on adjacent discs lowers the chance of future surgery.' },
          { title: 'No bone graft to heal', text: 'Without a fusion, there is no waiting months for bone to knit.' },
          { title: 'Quicker recovery', text: 'Most patients return to normal activity faster than after fusion.' },
        ],
      },
      recovery: {
        title: 'How long is the recovery?',
        text: 'Because there is no fusion to protect, you are encouraged to move early. Most disc replacements are outpatient or a single overnight stay.',
        steps: [
          { label: 'First days', title: 'Home and moving', text: 'Walking begins the same day. A soft collar may be used briefly for neck procedures.' },
          { label: 'Two to four weeks', title: 'Daily life', text: 'Driving, desk work and light activity resume as comfort allows.' },
          { label: 'Six to twelve weeks', title: 'Full activity', text: 'Physical therapy restores range of motion and strength. Most restrictions are lifted.' },
        ],
      },
      safety: {
        title: 'Is it safe?',
        text: 'Artificial discs have been used for more than two decades with long term studies showing durable pain relief and implant survival. Risks are similar to fusion, including infection, nerve irritation and, rarely, implant movement. Dr. Bhalla selects the implant and technique to match your anatomy.',
      },
      faqs: [
        { q: 'How long does an artificial disc last?', a: 'Modern implants are designed to last decades. Long term studies past ten years show low rates of revision.' },
        { q: 'Can I have motion preservation if I was told I need a fusion?', a: 'Sometimes. It depends on why fusion was recommended. If the facet joints are healthy and the problem is the disc itself, replacement may be an option. A second opinion with your imaging is the way to find out.' },
        { q: 'Will I feel the implant?', a: 'No. Once healed, patients do not feel the device. Many report the neck or back feels more natural than before surgery.' },
        { q: 'Is it covered by insurance?', a: 'Cervical disc replacement is widely covered. Lumbar coverage varies by plan. Our office verifies benefits before scheduling.' },
      ],
    },
  },

  /* 3 ------------------------------------------------------------------ */
  {
    slug: 'cervical-disc-replacement',
    title: 'Cervical Disc Replacement',
    short: 'Replace a worn neck disc with a moving implant instead of a fusion.',
    description:
      'Cervical disc replacement removes a damaged disc in the neck and replaces it with an artificial disc that preserves motion, relieving arm pain, numbness and weakness.',
    image: img.nerve,
    content: {
      photos: [img.nerve, '/images/service-pages/cervical-disc-replacement/2.jpg', img.consultWindow],
      intro:
        'Cervical disc replacement, also called cervical arthroplasty, relieves pressure on a pinched nerve or the spinal cord in the neck while keeping the segment mobile. It is the motion preserving alternative to anterior cervical fusion.',
      whatIs: {
        title: 'What is cervical disc replacement?',
        text: [
          'Through a small incision at the front of the neck, Dr. Bhalla removes the damaged disc and any bone spurs pressing on the nerves. In its place he sets an artificial disc made of metal endplates and a polymer or metal core that glides like a healthy disc.',
          'The approach uses natural planes between muscles, so the procedure is quick to recover from and the incision is usually hidden in a skin crease.',
        ],
      },
      candidates: {
        title: 'Who is a candidate?',
        text: 'Good candidates have arm symptoms or early cord compression from one or two discs, with healthy facet joints and no significant instability. Non surgical care such as therapy and injections is tried first in most cases.',
        conditions: ['Cervical herniated disc', 'Cervical radiculopathy', 'Cervical myelopathy from a disc', 'Degenerative disc disease at one or two levels'],
        symptoms: ['Pain radiating into the shoulder or arm', 'Numbness or tingling in the hand', 'Weakness in the arm or grip', 'Neck pain with arm symptoms'],
      },
      benefits: {
        title: 'What are the benefits?',
        text: 'Compared with fusion, disc replacement keeps you moving and protects the rest of your neck.',
        items: [
          { title: 'Keeps neck motion', text: 'The treated level continues to turn and bend naturally.' },
          { title: 'Less adjacent wear', text: 'Neighboring discs are spared the extra load a fusion creates.' },
          { title: 'No collar for months', text: 'Without bone healing to protect, a collar is brief or not needed.' },
          { title: 'Fast relief', text: 'Arm pain often eases immediately once the nerve is decompressed.' },
        ],
      },
      recovery: {
        title: 'How long is the recovery?',
        text: 'Most cervical disc replacements are done as outpatient surgery or with one night in hospital. Swallowing may feel slightly sore for a few days.',
        steps: [
          { label: 'Same day', title: 'Walking and home', text: 'You are up within hours. Most patients go home the same or next day.' },
          { label: 'One to two weeks', title: 'Light activity', text: 'Desk work and driving usually resume. The incision is checked.' },
          { label: 'Six weeks', title: 'Full motion', text: 'Gentle therapy restores range of motion. Most activities are cleared.' },
        ],
      },
      safety: {
        title: 'Is it safe?',
        text: 'Cervical disc replacement has more than twenty years of clinical data, including large studies comparing it directly with fusion that show equal or better outcomes and fewer reoperations. Risks include temporary hoarseness or swallowing discomfort, infection and, rarely, implant issues.',
      },
      faqs: [
        { q: 'Disc replacement or fusion, which is better?', a: 'For a single or two level disc problem with healthy joints, replacement preserves motion and lowers the chance of surgery at the next level. Fusion remains the right choice when there is instability, significant arthritis or deformity. Dr. Bhalla walks through both with your imaging.' },
        { q: 'How long does the surgery take?', a: 'About one to two hours for one level.' },
        { q: 'Will I set off metal detectors?', a: 'Rarely. The implant is small. We provide a card describing it in case you are asked.' },
        { q: 'Can two levels be replaced at once?', a: 'Yes. Two level cervical disc replacement is approved and commonly performed when both discs are the source of symptoms.' },
      ],
    },
  },

  /* 4 ------------------------------------------------------------------ */
  {
    slug: 'lumbar-disc-replacement',
    title: 'Lumbar Disc Replacement',
    short: 'A motion preserving alternative to fusion for painful low back discs.',
    description:
      'Lumbar disc replacement treats discogenic low back pain by replacing the worn disc with an artificial implant that keeps the segment moving.',
    image: '/images/service-pages/lumbar-disc-replacement/1.jpg',
    content: {
      photos: ['/images/service-pages/lumbar-disc-replacement/1.jpg', '/images/service-pages/lumbar-disc-replacement/2.jpg', img.mri],
      intro:
        'Low back pain that comes from a worn out disc can be treated without welding the bones together. Lumbar disc replacement removes the painful disc and inserts a moving implant, keeping the lower back flexible.',
      whatIs: {
        title: 'What is lumbar disc replacement?',
        text: [
          'The procedure is performed through a small incision in the lower abdomen, approaching the spine from the front so the back muscles are never cut. The damaged disc is removed completely, disc height is restored and an artificial disc is seated between the vertebrae.',
          'The implant allows bending and rotation at that level, which spreads load across the spine the way a healthy disc does.',
        ],
      },
      candidates: {
        title: 'Who is a candidate?',
        text: 'Lumbar disc replacement suits patients whose back pain is clearly coming from one or two discs, usually L4 L5 or L5 S1, with healthy facet joints, good bone density and no significant nerve compression from stenosis.',
        conditions: ['Degenerative disc disease at one or two levels', 'Discogenic low back pain', 'Lumbar disc herniation with disc collapse'],
        symptoms: ['Deep low back pain worse with sitting', 'Pain with bending or lifting', 'Stiffness after rest', 'Pain not improved by six months of therapy'],
      },
      benefits: {
        title: 'What are the benefits?',
        text: 'The lower back carries the most load in the spine, so keeping its motion matters.',
        items: [
          { title: 'Motion kept', text: 'The treated level continues to flex and extend.' },
          { title: 'Back muscles untouched', text: 'The front approach leaves the spinal muscles intact.' },
          { title: 'No fusion to heal', text: 'Recovery is not gated by months of bone healing.' },
          { title: 'Protects other levels', text: 'Lower stress on adjacent discs than after fusion.' },
        ],
      },
      recovery: {
        title: 'How long is the recovery?',
        text: 'Most patients stay one or two nights. Walking starts immediately and increases daily.',
        steps: [
          { label: 'First days', title: 'Walking', text: 'Up the day of surgery. Home within one to two days with a walking plan.' },
          { label: 'Two to six weeks', title: 'Daily life', text: 'Driving and light work resume. Bending and lifting are limited while tissues heal.' },
          { label: 'Three months', title: 'Full activity', text: 'Core strengthening through therapy. Most restrictions are lifted.' },
        ],
      },
      safety: {
        title: 'Is it safe?',
        text: 'Lumbar disc replacement has long term data past ten years showing durable pain relief. The front approach is performed with a vascular surgeon when needed to protect the large blood vessels. Risks include bleeding, infection and, rarely, implant migration.',
      },
      faqs: [
        { q: 'Why go through the front?', a: 'The disc sits directly behind the abdominal contents and in front of the nerves. Approaching from the front gives full access to the disc without touching the spinal canal or cutting back muscles.' },
        { q: 'Is it the same as cervical disc replacement?', a: 'The principle is the same, but the lumbar spine carries far more load, so patient selection is stricter and the implants are larger.' },
        { q: 'Can I still have a fusion later if needed?', a: 'Yes. A disc replacement does not prevent future fusion, although revision is uncommon.' },
        { q: 'How soon can I sit comfortably?', a: 'Most patients sit for short periods within days and comfortably within two to three weeks.' },
      ],
    },
  },

  /* 5 ------------------------------------------------------------------ */
  {
    slug: 'outpatient-spinal-surgery',
    title: 'Outpatient Spinal Surgery',
    short: 'Spine procedures done in a day, with recovery at home the same evening.',
    description:
      'Outpatient spinal surgery combines minimally invasive techniques with modern anesthesia so many spine procedures can be completed safely in an ambulatory surgery center, with patients home the same day.',
    image: '/images/service-pages/outpatient-spinal-surgery/1.jpg',
    content: {
      photos: ['/images/service-pages/outpatient-spinal-surgery/1.jpg', '/images/service-pages/outpatient-spinal-surgery/2.jpg', '/images/service-pages/outpatient-spinal-surgery/3.jpg'],
      intro:
        'Advances in minimally invasive technique, anesthesia and pain control mean many spine operations no longer need a hospital stay. Outpatient spinal surgery lets you have the procedure in the morning and sleep in your own bed that night.',
      whatIs: {
        title: 'What is outpatient spinal surgery?',
        text: [
          'Outpatient, or same day, spine surgery is performed in an ambulatory surgery center or a hospital day unit. Procedures such as microdiscectomy, laminectomy, cervical disc replacement and some single level fusions are completed in one to three hours, followed by a short recovery before discharge.',
          'Careful preparation makes it work: a health screening before surgery, a multimodal pain plan that limits opioids, and a clear home plan with direct access to our team.',
        ],
      },
      candidates: {
        title: 'Who is a candidate?',
        text: 'Most healthy adults having a one or two level procedure are candidates. Dr. Bhalla and the anesthesia team review your medical history to confirm a same day plan is right for you.',
        conditions: ['Herniated discs', 'Spinal stenosis at one or two levels', 'Cervical disc disease', 'Select single level fusions', 'Sacroiliac joint dysfunction'],
        symptoms: ['Nerve pain into an arm or leg', 'Numbness or weakness', 'Back or neck pain that has not responded to therapy'],
      },
      benefits: {
        title: 'What are the benefits?',
        text: 'Recovering at home is more comfortable, and it is also safer in several measurable ways.',
        items: [
          { title: 'Home the same day', text: 'Sleep in your own bed with family support from the first night.' },
          { title: 'Lower infection risk', text: 'Less time in a facility means less exposure.' },
          { title: 'Less opioid use', text: 'Multimodal pain plans and smaller incisions reduce the need for narcotics.' },
          { title: 'Lower cost', text: 'Ambulatory centers avoid the expense of an inpatient stay.' },
        ],
      },
      recovery: {
        title: 'How long is the recovery?',
        text: 'Recovery follows the procedure performed, with the first phase at home instead of on a ward. Our team calls you the next morning.',
        steps: [
          { label: 'Surgery day', title: 'Home by evening', text: 'Walk in recovery, meet discharge goals and go home with a companion.' },
          { label: 'First week', title: 'Guided at home', text: 'A follow up call, clear medication plan and a direct line to the office.' },
          { label: 'Two to six weeks', title: 'Return to routine', text: 'Follow up visit, incision check and a graded return to work and activity.' },
        ],
      },
      safety: {
        title: 'Is it safe?',
        text: 'Studies of outpatient spine surgery show complication rates equal to or lower than inpatient surgery for appropriately selected patients. Safety comes from selection, preparation and follow up, all of which are built into how Dr. Bhalla schedules same day procedures.',
      },
      faqs: [
        { q: 'What if I have a problem at home?', a: 'You leave with the direct number for our team, and we call you the morning after surgery. If anything is concerning, you are seen promptly.' },
        { q: 'Will I need someone with me?', a: 'Yes. An adult must drive you home and stay with you the first night.' },
        { q: 'Which procedures cannot be done outpatient?', a: 'Multi level fusions, deformity corrections and surgeries for patients with significant medical conditions are done in the hospital.' },
        { q: 'Where is the surgery performed?', a: 'In an accredited ambulatory surgery center or the day surgery unit at the hospital, depending on the procedure and your insurance.' },
      ],
    },
  },

  /* 6 ------------------------------------------------------------------ */
  {
    slug: 'revision-spinal-surgery',
    title: 'Revision Spinal Surgery',
    short: 'Expert care when a previous spine surgery has not delivered the result you hoped for.',
    description:
      'Revision spinal surgery corrects problems after a prior operation, including failed fusion, recurrent disc herniation, hardware issues and adjacent segment disease.',
    image: '/images/service-pages/revision-spinal-surgery/1.jpg',
    content: {
      photos: ['/images/service-pages/revision-spinal-surgery/1.jpg', '/images/service-pages/revision-spinal-surgery/2.jpg', '/images/service-pages/revision-spinal-surgery/3.jpg'],
      intro:
        'Sometimes spine surgery does not relieve the pain, or new problems develop years later. Revision surgery is a specialized field: scar tissue, altered anatomy and existing hardware all demand experience. Dr. Bhalla sees many patients whose first operation was elsewhere.',
      whatIs: {
        title: 'What is revision spinal surgery?',
        text: [
          'Revision surgery is any operation on a part of the spine that has been operated on before. It may mean removing or replacing hardware, completing a fusion that did not heal, decompressing a nerve trapped in scar, or treating a disc that herniated again or wore out next to a fusion.',
          'Planning starts with understanding exactly why the first surgery fell short. Dr. Bhalla reviews your prior operative reports and imaging, orders new studies where needed, and only recommends surgery when the cause of your pain is clear.',
        ],
      },
      candidates: {
        title: 'Who is a candidate?',
        text: 'Not everyone with pain after surgery needs another operation. Revision is considered when imaging shows a correctable structural problem that matches your symptoms.',
        conditions: ['Failed fusion (pseudarthrosis)', 'Recurrent disc herniation', 'Adjacent segment disease', 'Loose or broken hardware', 'Persistent stenosis or scar compression'],
        symptoms: ['Pain that never improved or returned', 'New arm or leg symptoms', 'Instability or a sense of giving way', 'Progressive numbness or weakness'],
      },
      benefits: {
        title: 'What are the benefits?',
        text: 'A well planned revision can give you the result the first operation was meant to.',
        items: [
          { title: 'Correct the cause', text: 'Treats the specific structural problem, not just the symptoms.' },
          { title: 'Stabilize', text: 'Completes a failed fusion or replaces failed hardware.' },
          { title: 'Free the nerve', text: 'Removes scar or bone pressing on nerves.' },
          { title: 'Minimally invasive when possible', text: 'Many revisions can still use small incisions and navigation.' },
        ],
      },
      recovery: {
        title: 'How long is the recovery?',
        text: 'Revision recovery is often similar to a first operation of the same type, though scar tissue can mean a little more soreness in the first weeks.',
        steps: [
          { label: 'First days', title: 'Hospital or home', text: 'Simple revisions may be outpatient. Larger ones involve a short stay.' },
          { label: 'Two to six weeks', title: 'Early healing', text: 'Walking program, wound checks and a gradual return to light activity.' },
          { label: 'Three to six months', title: 'Rebuilding', text: 'Therapy restores strength. Fusion revisions continue to heal bone over several months.' },
        ],
      },
      safety: {
        title: 'Is it safe?',
        text: 'Revision surgery carries somewhat higher risks than first time surgery because of scar tissue and altered anatomy, which is why experience matters. Dr. Bhalla uses navigation, neuromonitoring and careful preoperative planning to reduce those risks.',
      },
      faqs: [
        { q: 'My first surgery was somewhere else. Can you still help?', a: 'Yes. Bring or have us request your operative reports and imaging. Most of Dr. Bhalla’s revision patients had their first operation elsewhere.' },
        { q: 'How do you know what went wrong?', a: 'A detailed history, a physical exam, and updated imaging such as MRI, CT and flexion extension X rays. Sometimes a diagnostic injection pinpoints the pain source.' },
        { q: 'Will the hardware be removed?', a: 'Only if it is loose, broken, causing pain or in the way. Well positioned hardware is usually left alone.' },
        { q: 'Is a second opinion worth it?', a: 'Always. Revision decisions are complex, and a second set of eyes on your imaging costs nothing but time.' },
      ],
    },
  },

  /* 7 ------------------------------------------------------------------ */
  {
    slug: 'sacroiliac-joint-fusion',
    title: 'Sacroiliac Joint Minimally Invasive Fusion',
    short: 'A small incision procedure for stubborn low back and buttock pain from the SI joint.',
    description:
      'Minimally invasive sacroiliac joint fusion stabilizes a painful SI joint through a small incision using guided implants, relieving low back, buttock and leg pain when conservative care has failed.',
    image: '/images/service-pages/sacroiliac-joint-fusion/1.jpg',
    content: {
      photos: ['/images/service-pages/sacroiliac-joint-fusion/1.jpg', img.consultSeated, '/images/service-pages/sacroiliac-joint-fusion/3.jpg'],
      intro:
        'The sacroiliac joints connect the spine to the pelvis and are a hidden cause of up to a quarter of chronic low back pain. When injections confirm the SI joint as the source and therapy has not helped, a minimally invasive fusion can stabilize it for lasting relief.',
      whatIs: {
        title: 'What is minimally invasive SI joint fusion?',
        text: [
          'Through an incision of about an inch on the side of the buttock, Dr. Bhalla places two or three titanium implants across the sacroiliac joint under live imaging or navigation. The implants stop the painful micro motion immediately and allow the joint to fuse over the following months.',
          'The procedure takes under an hour, uses no large incisions and spares the muscles of the back and hip.',
        ],
      },
      candidates: {
        title: 'Who is a candidate?',
        text: 'Candidates have SI joint pain confirmed by exam and by a diagnostic injection that relieved at least 75 percent of the pain, and have not improved with at least six months of therapy, medication or injections.',
        conditions: ['Sacroiliac joint dysfunction', 'SI joint degeneration', 'Pain after lumbar fusion that localizes to the SI joint', 'Post traumatic SI instability', 'Pelvic pain after pregnancy'],
        symptoms: ['Low back pain below the belt line', 'Buttock pain, sometimes into the thigh', 'Pain when rising from a chair or rolling in bed', 'Pain with standing on one leg'],
      },
      benefits: {
        title: 'What are the benefits?',
        text: 'For a joint that has been overlooked for years, stabilizing it can be life changing.',
        items: [
          { title: 'One inch incision', text: 'Minimal tissue disruption and a quick procedure.' },
          { title: 'Immediate stability', text: 'Implants stop painful motion right away.' },
          { title: 'Outpatient', text: 'Most patients go home the same day.' },
          { title: 'Durable relief', text: 'Studies show pain relief maintained at five years.' },
        ],
      },
      recovery: {
        title: 'How long is the recovery?',
        text: 'Weight bearing is limited briefly to let the implants settle, then activity is built back steadily.',
        steps: [
          { label: 'First three weeks', title: 'Protected walking', text: 'Partial weight bearing with a walker or crutches on the treated side.' },
          { label: 'Three to six weeks', title: 'Full weight', text: 'Walking without aids. Physical therapy begins.' },
          { label: 'Three to six months', title: 'Fusion complete', text: 'Bone grows across the joint. Return to all activities.' },
        ],
      },
      safety: {
        title: 'Is it safe?',
        text: 'Minimally invasive SI fusion has a strong safety record with low complication rates. Navigation protects the nearby nerves. Risks include infection, implant malposition and, rarely, nerve irritation, all uncommon in experienced hands.',
      },
      faqs: [
        { q: 'How do I know my pain is from the SI joint?', a: 'A combination of specific exam maneuvers and a diagnostic injection into the joint. If numbing the joint takes the pain away, the joint is the source.' },
        { q: 'Why was my SI joint missed before?', a: 'SI pain mimics lumbar disc and hip problems and does not show clearly on MRI. It is often found only after other causes are ruled out.' },
        { q: 'Will fusing the joint limit my movement?', a: 'No. The SI joint moves only a few millimeters normally, so fusing it does not change how you walk or bend.' },
        { q: 'Can both sides be done?', a: 'Yes, if both joints are confirmed as pain sources. They are usually treated in separate procedures.' },
      ],
    },
  },
];
