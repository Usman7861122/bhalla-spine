/**
 * Full page content for conditions. Keyed by the slug used in `conditionGroups` (site.ts).
 * A condition without an entry here still gets a page, with a short "coming soon" note.
 *
 * Images: `photos` = [hero, overview, living well]. Stock photos are from Unsplash
 * (license allows commercial use, no attribution required), stored in
 * /public/images/condition-pages/<slug>/1.jpg, 2.jpg, 3.jpg.
 */

export interface ConditionContent {
  /** Photos used across the page: [hero, overview, living well]. */
  photos: string[];
  intro: string;
  overview: { title: string; text: string[] };
  causes: { title: string; text: string; items: { title: string; text: string }[] };
  symptoms: { title: string; text: string; items: string[]; redFlags: string[] };
  diagnosis: { title: string; text: string; steps: { label: string; title: string; text: string }[] };
  treatment: { title: string; text: string; nonSurgical: string[]; surgical: string[] };
  livingWell: { title: string; text: string; tips: string[] };
  faqs: { q: string; a: string }[];
  /** Service slugs most relevant to this condition, shown at the end of the page. */
  relatedServices: string[];
  /** Optional section eyebrow overrides, for procedure pages that use the same layout. */
  labels?: Partial<{
    causes: string;
    symptoms: string;
    symptomList: string;
    diagnosis: string;
    treatment: string;
    nonSurgical: string;
    nonSurgicalTitle: string;
    surgical: string;
    surgicalTitle: string;
    livingWell: string;
  }>;
}

const dir = '/images/condition-pages';

export const conditionContent: Record<string, ConditionContent> = {
  'chronic-neck-and-back-pain': {
    photos: [
      `${dir}/chronic-neck-and-back-pain/1.jpg`,
      `${dir}/chronic-neck-and-back-pain/2.jpg`,
      `${dir}/chronic-neck-and-back-pain/3.jpg`,
    ],
    intro:
      'Pain that has lasted more than three months is no longer a simple injury. It is a condition of its own, and it deserves a clear diagnosis and a plan that goes beyond painkillers.',
    overview: {
      title: 'What is chronic neck and back pain?',
      text: [
        'Most neck and back pain settles within a few weeks. When it lasts longer than three months, or keeps coming back, it is called chronic. By then the original strain may have healed, but the discs, joints, nerves and muscles of the spine can stay irritated, and the nervous system itself can become more sensitive to pain.',
        'Chronic pain is rarely caused by one thing. It is usually a mix of wear in the discs and facet joints, muscle weakness and tightness, posture, stress and sleep. That is why a quick fix seldom works, and why a careful diagnosis matters so much. Dr. Bhalla looks for the specific source of your pain before recommending any treatment, and surgery is only part of the plan when it is the right answer.',
      ],
    },
    causes: {
      title: 'Common causes',
      text: 'The spine is a stack of bones, discs, joints and nerves that work together. Pain can come from any of them, and often from more than one at once.',
      items: [
        { title: 'Degenerative disc disease', text: 'Discs lose water and height with age. A worn disc can ache on its own and put extra load on the joints around it.' },
        { title: 'Facet joint arthritis', text: 'The small joints at the back of each vertebra wear like any other joint, causing stiffness and deep, localized pain.' },
        { title: 'Herniated discs and pinched nerves', text: 'A bulging disc or bone spur can press on a nerve root, sending pain, numbness or weakness into an arm or leg.' },
        { title: 'Spinal stenosis', text: 'Narrowing of the spinal canal squeezes the nerves, often causing pain or heaviness in the legs when walking.' },
        { title: 'Muscle weakness and posture', text: 'Weak core and neck muscles, long hours at a desk and poor sleep positions keep the spine under strain day after day.' },
        { title: 'Old injuries and previous surgery', text: 'A past accident, fracture or operation can change how the spine moves and leave lasting pain.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'Chronic spine pain shows up in different ways for different people. These are the patterns we hear most often.',
      items: [
        'A dull, constant ache in the neck or lower back',
        'Stiffness that is worst in the morning or after sitting',
        'Pain that flares with bending, lifting or long periods standing',
        'Pain, tingling or numbness spreading into an arm or leg',
        'Headaches that start at the base of the skull',
        'Trouble sleeping or finding a comfortable position',
      ],
      redFlags: [
        'New weakness in an arm or leg',
        'Numbness in the groin or inner thighs',
        'Loss of bladder or bowel control',
        'Pain with fever, unexplained weight loss or after a serious fall',
      ],
    },
    diagnosis: {
      title: 'How we find the cause',
      text: 'A good plan starts with an accurate diagnosis. Your first visit is a conversation, an examination and a careful look at your imaging, in that order.',
      steps: [
        { label: 'Listen', title: 'Your story', text: 'Where the pain is, when it started, what makes it better or worse and what you have already tried.' },
        { label: 'Examine', title: 'Physical examination', text: 'Range of motion, strength, reflexes and sensation to tell a muscle or joint problem from a nerve problem.' },
        { label: 'Image', title: 'Imaging, when it helps', text: 'X rays show alignment and arthritis. An MRI shows discs and nerves. We only order what will change the plan.' },
        { label: 'Plan', title: 'A plan in plain language', text: 'Dr. Bhalla walks you through what the findings mean and the options, from therapy to the least invasive procedure that will work.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most people with chronic neck or back pain never need surgery. Treatment starts with the simplest options and only moves forward when those have had a fair chance to work.',
      nonSurgical: [
        'Physical therapy to build strength and restore movement',
        'Activity changes, posture and ergonomic advice',
        'Anti inflammatory medication for short periods',
        'Targeted injections to calm an inflamed nerve or joint',
        'Radiofrequency ablation for facet joint pain',
      ],
      surgical: [
        'Microdiscectomy for a herniated disc pressing on a nerve',
        'Decompression for spinal stenosis',
        'Disc replacement to relieve pain and keep motion',
        'Fusion for instability or deformity, when needed',
        'Minimally invasive and outpatient techniques whenever possible',
      ],
    },
    livingWell: {
      title: 'Living well with a sensitive spine',
      text: 'Small daily habits make a real difference, whether or not you ever need a procedure. These are the ones Dr. Bhalla recommends to nearly every patient.',
      tips: [
        'Walk every day. Gentle, regular movement is the best medicine for most back pain.',
        'Strengthen your core and the muscles between your shoulder blades.',
        'Change position often. Set a reminder to stand up every 30 to 45 minutes.',
        'Sleep on your side or back with a pillow that keeps your neck level.',
        'Lift with your legs, keep the load close to your body and avoid twisting.',
        'Manage stress and sleep. Both turn the volume of pain up or down.',
      ],
    },
    faqs: [
      {
        q: 'When should I see a spine specialist?',
        a: 'If pain has lasted more than six to eight weeks, keeps returning, spreads into an arm or leg, or is affecting your sleep and work, it is time for an evaluation. See a doctor right away for any of the warning signs listed above.',
      },
      {
        q: 'Does chronic pain mean I will need surgery?',
        a: 'No. The large majority of patients improve with therapy, activity changes and, when needed, injections. Surgery is recommended only when there is a clear structural cause that matches your symptoms and conservative care has not helped.',
      },
      {
        q: 'Will I need an MRI?',
        a: 'Not always. Many people with back pain have changes on an MRI that are normal for their age and not the cause of their pain. Dr. Bhalla orders imaging when the result will change your treatment, for example when nerve symptoms are present or a procedure is being considered.',
      },
      {
        q: 'Is it safe to exercise with back or neck pain?',
        a: 'In most cases, yes, and it is one of the most effective treatments. Start with walking and gentle stretching, then build strength with guidance from a physical therapist. Stop and get advice if exercise causes new numbness or weakness.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'motion-preservation-surgery', 'outpatient-spinal-surgery'],
  },
  'degenerative-disc-disease': {
    photos: [
      `${dir}/degenerative-disc-disease/1.jpg`,
      `${dir}/degenerative-disc-disease/2.jpg`,
      `${dir}/degenerative-disc-disease/3.jpg`,
    ],
    intro:
      'Despite the name, degenerative disc disease is not really a disease. It is the natural wear of the cushions between your vertebrae, and for some people that wear becomes painful.',
    overview: {
      title: 'What is degenerative disc disease?',
      text: [
        'Between each pair of vertebrae sits a disc: a tough outer ring around a soft, water rich center. Discs absorb shock and let the spine bend and twist. From our twenties onward they slowly lose water and height, and small tears can form in the outer ring. Almost everyone shows these changes on an MRI by middle age, and most people never feel them.',
        'When a worn disc becomes a source of pain, we call it degenerative disc disease. The disc itself can ache, the extra movement can irritate the facet joints behind it, and lost height can narrow the openings where nerves leave the spine. It most often affects the lower back and the neck, and it tends to come and go in flares rather than getting steadily worse.',
      ],
    },
    causes: {
      title: 'Why discs wear out',
      text: 'Aging is the main driver, but several things speed it up or make a worn disc more likely to hurt.',
      items: [
        { title: 'Age and drying', text: 'Discs lose water with time, becoming thinner and less able to absorb shock.' },
        { title: 'Small tears in the outer ring', text: 'Repeated bending and lifting can cause tiny tears that heal poorly and carry pain fibers.' },
        { title: 'Genetics', text: 'Disc wear runs in families. Some people simply inherit discs that age faster.' },
        { title: 'Smoking', text: 'Nicotine reduces blood flow to the discs and is one of the strongest avoidable risk factors.' },
        { title: 'Heavy or repetitive loading', text: 'Years of lifting, vibration or contact sport add up, especially with poor technique.' },
        { title: 'Past injury', text: 'A previous disc herniation or back injury can leave the disc weaker and more prone to wear.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'Disc pain has a particular pattern. These are the signs that point toward the disc rather than a muscle or joint.',
      items: [
        'Low back or neck pain that comes and goes in flares',
        'Pain that is worse with sitting, bending or lifting',
        'Relief from walking, changing position or lying down',
        'Stiffness after rest, easing as you move',
        'Aching that spreads to the buttocks or shoulder blades',
        'Occasional tingling into an arm or leg if a nerve is irritated',
      ],
      redFlags: [
        'Progressive weakness in a leg or arm',
        'Numbness around the groin or inner thighs',
        'Trouble controlling bladder or bowel',
        'Severe pain that does not ease in any position',
      ],
    },
    diagnosis: {
      title: 'How we find the cause',
      text: 'Because disc wear is so common, the goal is not to find a worn disc. It is to confirm that the worn disc is actually what is causing your pain.',
      steps: [
        { label: 'Listen', title: 'Your pain pattern', text: 'When it flares, what positions help, how it affects your day. This tells us more than any single test.' },
        { label: 'Examine', title: 'Physical examination', text: 'Movement that reproduces the pain, strength, reflexes and sensation to rule nerve involvement in or out.' },
        { label: 'Image', title: 'X rays and MRI', text: 'X rays show disc height and alignment. An MRI shows the disc itself and any pressure on nerves.' },
        { label: 'Plan', title: 'Match findings to symptoms', text: 'Dr. Bhalla compares the imaging to your exam and only treats what is truly causing the pain.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most people manage degenerative disc disease without surgery. Flares usually settle, and strength and movement keep them further apart.',
      nonSurgical: [
        'Physical therapy focused on core strength and hip mobility',
        'Staying active, with walking as the foundation',
        'Short courses of anti inflammatory medication during flares',
        'Posture and workstation changes for sitting heavy days',
        'Epidural or facet injections for stubborn flares',
      ],
      surgical: [
        'Disc replacement to remove the painful disc and keep motion',
        'Decompression if a nerve is being pinched',
        'Fusion for a single painful level that has failed everything else',
        'Minimally invasive approaches whenever the anatomy allows',
      ],
    },
    livingWell: {
      title: 'Keeping worn discs quiet',
      text: 'The habits that protect a worn disc are simple, and they work best when they become routine.',
      tips: [
        'Move every day. Discs get their nutrition from movement, not rest.',
        'Build your core and glutes so your muscles share the load with your discs.',
        'Break up sitting. Stand, walk or stretch every 30 to 45 minutes.',
        'If you smoke, stopping is the single best thing you can do for your discs.',
        'Keep a healthy weight to reduce the daily load on the lower back.',
        'Lift close to the body with a flat back, and avoid twisting under load.',
      ],
    },
    faqs: [
      {
        q: 'Is degenerative disc disease really a disease?',
        a: 'No. It is a description of normal wear in the discs, which nearly everyone develops with age. The term is used when that wear is causing pain. It is not progressive in the way a true disease is, and many people improve as the disc stiffens over time.',
      },
      {
        q: 'Will it keep getting worse?',
        a: 'Usually not in a straight line. Most people have flares that settle, with long stretches of little or no pain. As a disc stiffens with age it often becomes less painful, not more.',
      },
      {
        q: 'My MRI says I have disc degeneration at several levels. Do I need surgery?',
        a: 'Almost certainly not based on the MRI alone. Multi level wear is normal on imaging and is rarely treated surgically. Surgery is considered only for a specific level that clearly matches your symptoms and has not responded to conservative care.',
      },
      {
        q: 'Can disc replacement help me?',
        a: 'For the right patient, yes. Disc replacement removes a single painful disc and replaces it with an implant that keeps the spine moving. Dr. Bhalla will tell you plainly whether your disc, alignment and bone quality make you a good candidate.',
      },
    ],
    relatedServices: ['lumbar-disc-replacement', 'cervical-disc-replacement', 'motion-preservation-surgery'],
  },

  'spinal-infections': {
    photos: [`${dir}/spinal-infections/1.jpg`, `${dir}/spinal-infections/2.jpg`, `${dir}/spinal-infections/3.jpg`],
    intro:
      'Infections of the spine are uncommon but serious. They can damage bone, discs and nerves if they are missed, and they respond well when they are caught early and treated properly.',
    overview: {
      title: 'What is a spinal infection?',
      text: [
        'A spinal infection happens when bacteria, or less often fungi, reach the spine. The infection can settle in a vertebra (osteomyelitis), in a disc (discitis), or in the space around the spinal cord (an epidural abscess). Germs usually arrive through the bloodstream from somewhere else in the body, such as a skin, urinary or dental infection. Less often they follow a spine procedure or injection.',
        'Because the early symptoms are vague, back pain with a low fever is easy to mistake for a strain, and the diagnosis is often delayed. Dr. Bhalla treats spinal infections together with infectious disease specialists. Most are cured with antibiotics alone. Surgery is reserved for infections that threaten the nerves, destabilize the spine or fail to respond to medication.',
      ],
    },
    causes: {
      title: 'How infections reach the spine',
      text: 'The spine has a rich blood supply, which is how germs from elsewhere in the body can find their way there.',
      items: [
        { title: 'Spread through the blood', text: 'The most common route. An infection in the skin, urinary tract, lungs or heart valves seeds the spine.' },
        { title: 'After a procedure', text: 'Rarely, bacteria enter during spine surgery, an injection or a lumbar puncture.' },
        { title: 'Weakened immune system', text: 'Diabetes, steroid use, chemotherapy, HIV and kidney disease all raise the risk.' },
        { title: 'Intravenous drug use', text: 'A major risk factor, because non sterile injections carry bacteria directly into the bloodstream.' },
        { title: 'Recent infection or sepsis', text: 'A bloodstream infection in the previous weeks can leave bacteria behind in the spine.' },
        { title: 'Older age and poor nutrition', text: 'Both make it harder for the body to clear bacteria before they settle in bone.' },
      ],
    },
    symptoms: {
      title: 'What to watch for',
      text: 'Spinal infections tend to announce themselves slowly. The key clue is back or neck pain that behaves differently from ordinary strain.',
      items: [
        'Back or neck pain that is constant, including at night and at rest',
        'Pain that keeps getting worse over days to weeks',
        'Fever, chills or night sweats',
        'Feeling generally unwell, tired or losing appetite',
        'Tenderness when the spine is pressed',
        'Stiffness and difficulty moving the spine',
      ],
      redFlags: [
        'New weakness, numbness or trouble walking',
        'Loss of bladder or bowel control',
        'High fever with severe back pain',
        'Back pain after a recent bloodstream infection or spine procedure',
      ],
    },
    diagnosis: {
      title: 'How we confirm it',
      text: 'Speed matters. The sooner we know which germ is involved, the sooner the right antibiotic can start.',
      steps: [
        { label: 'Listen', title: 'History and risk factors', text: 'Recent infections, procedures, fevers and conditions that weaken the immune system.' },
        { label: 'Test', title: 'Blood tests', text: 'Inflammation markers and blood cultures, which often identify the bacteria without a biopsy.' },
        { label: 'Image', title: 'MRI with contrast', text: 'The best test for spinal infection. It shows involved bone and discs and any abscess pressing on nerves.' },
        { label: 'Confirm', title: 'Biopsy if needed', text: 'A needle sample under imaging guidance identifies the germ when blood cultures do not.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most spinal infections are cured with medication. Surgery has a clear and limited role, and Dr. Bhalla will explain exactly when it is needed.',
      nonSurgical: [
        'Intravenous antibiotics, usually for six weeks or longer',
        'Oral antibiotics to complete treatment at home',
        'A brace for comfort and to protect weakened bone',
        'Close follow up with repeat blood tests and imaging',
        'Treating the original source of infection',
      ],
      surgical: [
        'Draining an abscess that is pressing on the spinal cord or nerves',
        'Removing infected bone and disc that will not clear with antibiotics',
        'Stabilizing the spine if the infection has destroyed supporting bone',
        'Minimally invasive drainage where possible',
      ],
    },
    livingWell: {
      title: 'Recovering fully',
      text: 'Recovery from a spinal infection takes patience. Finishing treatment completely is what prevents it from coming back.',
      tips: [
        'Take every dose of antibiotics, even once you feel well.',
        'Keep every follow up visit. Blood tests tell us the infection is truly gone.',
        'Control blood sugar carefully if you have diabetes.',
        'Eat enough protein. Bone and tissue need it to rebuild.',
        'Return to activity gradually, guided by your care team.',
        'Report any return of fever or worsening pain the same day.',
      ],
    },
    faqs: [
      {
        q: 'How do I know if my back pain is an infection?',
        a: 'Ordinary back pain eases with rest and changes with position. Infection pain is constant, often worse at night, and keeps building over days or weeks, usually with fever or feeling unwell. If that sounds like your pain, see a doctor promptly.',
      },
      {
        q: 'Will I need surgery?',
        a: 'Most patients do not. Antibiotics cure the majority of spinal infections. Surgery is used when there is an abscess pressing on nerves, when the spine has become unstable, or when the infection does not respond to medication.',
      },
      {
        q: 'How long does treatment take?',
        a: 'Antibiotics typically run for six weeks or more, starting intravenously and often finishing by mouth. Bone heals slowly, so full recovery of strength and comfort can take several months.',
      },
      {
        q: 'Can a spinal infection come back?',
        a: 'It can if treatment is cut short or the original source is not addressed. Completing the full course and attending follow up visits makes recurrence uncommon.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  'spinal-tumors': {
    photos: [`${dir}/spinal-tumors/1.jpg`, `${dir}/spinal-tumors/2.jpg`, `${dir}/spinal-tumors/3.jpg`],
    intro:
      'A tumor in or near the spine is frightening news. Many are benign, and even cancerous tumors can often be treated in ways that relieve pain, protect the nerves and keep you walking.',
    overview: {
      title: 'What is a spinal tumor?',
      text: [
        'A spinal tumor is an abnormal growth in the bones of the spine, inside the spinal canal or within the spinal cord itself. Tumors that start in the spine are rare. Far more often the spine is affected by cancer that has spread from somewhere else, most commonly the breast, lung, prostate, kidney or thyroid. These are called metastatic tumors.',
        'Tumors cause problems in two ways: they weaken bone, which can fracture, and they take up space, which can press on the spinal cord and nerves. Dr. Bhalla works alongside oncologists and radiation specialists so that your plan treats the cancer and protects your spine at the same time. Surgery, when it is needed, is aimed at relieving pressure, stabilizing the spine and preserving your ability to move.',
      ],
    },
    causes: {
      title: 'Types of spinal tumors',
      text: 'Where a tumor sits and where it came from determine how it behaves and how it is treated.',
      items: [
        { title: 'Metastatic tumors', text: 'Cancer that has spread to the spine from another organ. The most common spinal tumor by far.' },
        { title: 'Primary bone tumors', text: 'Tumors that start in the vertebrae, such as chordoma, osteosarcoma or giant cell tumor. Rare.' },
        { title: 'Multiple myeloma and lymphoma', text: 'Blood cancers that can weaken vertebrae and are usually treated with medication and radiation.' },
        { title: 'Benign bone tumors', text: 'Hemangiomas, osteoid osteomas and others that are not cancer and often need no treatment.' },
        { title: 'Tumors inside the canal', text: 'Meningiomas and nerve sheath tumors that grow around the cord. Usually benign but can press on nerves.' },
        { title: 'Tumors within the cord', text: 'Astrocytomas and ependymomas that grow inside the spinal cord itself. Rare and treated by specialized teams.' },
      ],
    },
    symptoms: {
      title: 'What to watch for',
      text: 'Back pain is by far the most common first sign. What sets tumor pain apart is how it behaves.',
      items: [
        'Back or neck pain that is worse at night or wakes you from sleep',
        'Pain that does not ease with rest or changing position',
        'Pain that keeps getting worse over weeks',
        'Pain in someone with a known cancer',
        'Numbness, tingling or weakness in the arms or legs',
        'Difficulty walking or loss of balance',
      ],
      redFlags: [
        'Rapidly worsening weakness in the legs or arms',
        'New trouble with bladder or bowel control',
        'Sudden severe back pain in someone with cancer',
        'Numbness that is spreading or climbing',
      ],
    },
    diagnosis: {
      title: 'How we evaluate it',
      text: 'A clear picture of the tumor, the strength of the bone around it and the overall cancer plan guide every decision.',
      steps: [
        { label: 'Listen', title: 'History and examination', text: 'Your pain pattern, any known cancer, and a careful check of strength, sensation and walking.' },
        { label: 'Image', title: 'MRI and CT', text: 'MRI shows the tumor and any pressure on the cord. CT shows how much bone is involved and whether it is stable.' },
        { label: 'Stage', title: 'Finding the source', text: 'Blood tests, body scans and sometimes a biopsy identify what kind of tumor it is and whether it is elsewhere.' },
        { label: 'Plan', title: 'Team decision', text: 'Dr. Bhalla, your oncologist and radiation specialist agree on a plan and explain it to you in plain language.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Treatment is tailored to the tumor type, your symptoms and your overall health. Many tumors are managed without surgery, and surgery, when needed, is focused on protecting your nerves and your mobility.',
      nonSurgical: [
        'Radiation therapy, including highly focused stereotactic radiosurgery',
        'Chemotherapy, hormone or targeted therapy for the underlying cancer',
        'Steroids to quickly reduce swelling around the cord',
        'Bracing and pain management',
        'Observation with regular imaging for benign tumors',
      ],
      surgical: [
        'Decompression to relieve pressure on the spinal cord or nerves',
        'Stabilization with screws and rods when bone is weakened',
        'Cement augmentation (kyphoplasty) for painful tumor fractures',
        'Tumor removal for selected primary tumors',
        'Minimally invasive techniques to shorten recovery and allow other treatments to continue',
      ],
    },
    livingWell: {
      title: 'Living well through treatment',
      text: 'Treatment for a spinal tumor is a team effort, and you are a central member of that team.',
      tips: [
        'Report new weakness, numbness or bladder changes immediately. Time matters for the nerves.',
        'Keep moving as much as your team allows. It protects strength and mood.',
        'Ask about a brace if sitting or standing is painful.',
        'Bring a family member to visits. Two sets of ears help with complex plans.',
        'Ask about physical therapy to maintain walking and balance.',
        'Lean on support services. Social workers and counselors are part of good cancer care.',
      ],
    },
    faqs: [
      {
        q: 'Does a spinal tumor mean I have cancer?',
        a: 'Not always. Several spinal tumors are benign and may need nothing more than monitoring. When the tumor is cancerous, it is most often spread from another site, and treating it is part of a broader cancer plan.',
      },
      {
        q: 'Will I need surgery?',
        a: 'Many spinal tumors are treated with radiation and medication alone. Surgery is recommended when the tumor is pressing on the spinal cord or nerves, when the spine is unstable, or when a fracture is causing severe pain.',
      },
      {
        q: 'Can surgery cure the tumor?',
        a: 'For some benign and selected primary tumors, yes. For metastatic tumors, the goal of surgery is to relieve pressure, stabilize the spine and preserve function while other treatments address the cancer itself.',
      },
      {
        q: 'How quickly do I need to be seen?',
        a: 'If you have a known cancer and new back pain, within days. If you have weakness, numbness or bladder changes, the same day. Early treatment gives the best chance of protecting the nerves.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  'sacroiliac-joint-dysfunction': {
    photos: [
      `${dir}/sacroiliac-joint-dysfunction/1.jpg`,
      `${dir}/sacroiliac-joint-dysfunction/2.jpg`,
      `${dir}/sacroiliac-joint-dysfunction/3.jpg`,
    ],
    intro:
      'The sacroiliac joints connect your spine to your pelvis. When one of them is irritated or moves abnormally, it causes a low back and buttock pain that is often mistaken for a disc problem.',
    overview: {
      title: 'What is sacroiliac joint dysfunction?',
      text: [
        'You have two sacroiliac (SI) joints, one on each side, where the base of the spine (the sacrum) meets the pelvis. They move only a few millimeters, but they carry the full weight of the upper body and absorb the force of every step. Strong ligaments hold them together.',
        'SI joint dysfunction means the joint has become painful, either because it moves too much (often after pregnancy, injury or a spinal fusion that transfers stress downward) or too little (from arthritis or inflammation). It is responsible for a surprising share of chronic low back pain, up to one in four cases in some studies, and it is frequently overlooked because it mimics lumbar disc and nerve problems.',
      ],
    },
    causes: {
      title: 'Common causes',
      text: 'The SI joint is designed for stability, so anything that changes how it moves or how much load it carries can make it painful.',
      items: [
        { title: 'Injury', text: 'A fall onto the buttocks, a car accident or a heavy misstep can strain the ligaments that hold the joint.' },
        { title: 'Pregnancy and childbirth', text: 'Hormones loosen the pelvic ligaments and the joints carry more weight, which can leave lasting instability.' },
        { title: 'Previous lumbar fusion', text: 'When the lower spine is fused, extra motion and load are passed down to the SI joints.' },
        { title: 'Arthritis', text: 'Wear and tear osteoarthritis, or inflammatory arthritis such as ankylosing spondylitis, can affect the joint.' },
        { title: 'Leg length difference and gait', text: 'Uneven leg length, a limp or a hip problem loads one SI joint more than the other.' },
        { title: 'Repetitive stress', text: 'Running, heavy lifting and jobs with constant bending and twisting add up over years.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'SI joint pain has a recognizable pattern once you know what to look for.',
      items: [
        'Pain low in the back, just to one side of the midline, over the dimple of the buttock',
        'Pain spreading into the buttock, groin or back of the thigh, rarely below the knee',
        'Worse with standing up from sitting, climbing stairs or rolling over in bed',
        'Worse standing on one leg or stepping up with the painful side',
        'Difficulty sitting for long periods, especially on the painful side',
        'A sense of instability or giving way in the pelvis',
      ],
      redFlags: [
        'Fever with severe buttock or pelvic pain',
        'Numbness in the groin or loss of bladder or bowel control',
        'Pain after a serious fall or accident',
        'Progressive weakness in a leg',
      ],
    },
    diagnosis: {
      title: 'How we confirm it',
      text: 'There is no single scan that proves SI joint pain. The diagnosis comes from putting the examination and a diagnostic injection together.',
      steps: [
        { label: 'Listen', title: 'Your pain map', text: 'Where you point to the pain and what movements provoke it already separate SI pain from disc pain in many cases.' },
        { label: 'Examine', title: 'Provocation tests', text: 'A series of specific maneuvers that stress the SI joint. Three or more positive tests strongly suggest the joint is the source.' },
        { label: 'Image', title: 'Rule out other causes', text: 'X rays and MRI of the lumbar spine and hips to exclude a disc, nerve or hip problem that could mimic SI pain.' },
        { label: 'Confirm', title: 'Diagnostic injection', text: 'Numbing medicine placed in the joint under imaging. If your pain drops by 75 percent or more, the joint is confirmed as the source.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most SI joint pain settles with targeted therapy and, when needed, injections. For the small group whose pain persists, a minimally invasive fusion can offer lasting relief.',
      nonSurgical: [
        'Physical therapy to strengthen the glutes and core and correct movement patterns',
        'A pelvic belt for short term support during flares',
        'Anti inflammatory medication',
        'Image guided steroid injection into the joint',
        'Radiofrequency ablation of the small nerves that carry pain from the joint',
      ],
      surgical: [
        'Minimally invasive SI joint fusion through a small incision',
        'Titanium implants placed across the joint under navigation',
        'Outpatient or overnight stay in most cases',
        'Recommended only after a confirmed diagnosis and a fair trial of conservative care',
      ],
    },
    livingWell: {
      title: 'Caring for your SI joints',
      text: 'The SI joint responds well to strength and good movement habits. These are the ones that help most.',
      tips: [
        'Strengthen your glutes. They are the muscles that stabilize the joint.',
        'Avoid sitting cross legged or with weight shifted onto one hip.',
        'Use both legs evenly on stairs and when stepping up.',
        'Sleep on your side with a pillow between your knees.',
        'Keep hips and hamstrings flexible to reduce pull on the pelvis.',
        'Return to running or impact sport gradually, building strength first.',
      ],
    },
    faqs: [
      {
        q: 'How is SI joint pain different from a disc problem?',
        a: 'Disc and nerve pain usually travels below the knee and often comes with tingling or numbness. SI joint pain stays in the low back, buttock, groin or upper thigh, is worse with standing up and stairs, and is tender directly over the joint.',
      },
      {
        q: 'Why was it not found earlier?',
        a: 'SI joint pain looks normal on most scans and mimics lumbar problems, so it is often treated as a disc issue first. The diagnosis depends on a hands on examination and a diagnostic injection rather than imaging alone.',
      },
      {
        q: 'Will I need surgery?',
        a: 'Most patients improve with therapy and injections. SI joint fusion is considered when the diagnosis has been confirmed with an injection and pain still limits your life after a proper trial of non surgical care.',
      },
      {
        q: 'What is recovery like after SI joint fusion?',
        a: 'The procedure is minimally invasive, usually outpatient or one night in hospital. Most people walk the same day with a walker or crutches, ease off them over a few weeks, and return to full activity within about three months as the joint fuses.',
      },
    ],
    relatedServices: ['sacroiliac-joint-fusion', 'minimally-invasive-spinal-surgery', 'outpatient-spinal-surgery'],
  },
  scoliosis: {
    photos: [`${dir}/scoliosis/1.jpg`, `${dir}/scoliosis/2.jpg`, `${dir}/scoliosis/3.jpg`],
    intro:
      'Scoliosis is a sideways curve of the spine. Most curves are small, cause no pain and need nothing more than watching. Larger curves, and curves in adults, deserve an expert plan.',
    overview: {
      title: 'What is scoliosis?',
      text: [
        'Seen from behind, a healthy spine runs straight down the middle of the back. In scoliosis it curves to the side in a C or S shape and the vertebrae rotate, which is why one shoulder blade or one side of the rib cage can stand out. A curve is called scoliosis when it measures more than 10 degrees on an X ray.',
        'Scoliosis comes in two main forms. Adolescent idiopathic scoliosis appears during the growth spurt, usually between ages 10 and 15, and has no known cause. Adult scoliosis is either a childhood curve that has carried on into adulthood or a new curve that develops in later life as the discs and joints wear unevenly. Adult curves are the ones more likely to cause pain, and they are a particular focus of Dr. Bhalla\'s practice.',
      ],
    },
    causes: {
      title: 'Types and causes',
      text: 'Knowing which type of scoliosis you have shapes everything about how it is watched and treated.',
      items: [
        { title: 'Adolescent idiopathic', text: 'The most common form, appearing during growth with no known cause. Runs in families.' },
        { title: 'Adult degenerative', text: 'A new curve in later life as discs and facet joints wear unevenly, often with stenosis and leg pain.' },
        { title: 'Adult idiopathic', text: 'A curve from adolescence that continues into adulthood and may slowly progress.' },
        { title: 'Congenital', text: 'Vertebrae that formed abnormally before birth. Usually diagnosed in childhood.' },
        { title: 'Neuromuscular', text: 'Curves caused by conditions that affect muscle control, such as cerebral palsy or muscular dystrophy.' },
        { title: 'After surgery or injury', text: 'A fracture, infection or previous spine surgery can change the balance of the spine and lead to a curve.' },
      ],
    },
    symptoms: {
      title: 'What to look for',
      text: 'In teenagers scoliosis is usually painless and spotted by its shape. In adults, pain and nerve symptoms are more common than cosmetic change.',
      items: [
        'Uneven shoulders or one shoulder blade that sticks out',
        'An uneven waist, or one hip higher than the other',
        'A rib hump when bending forward',
        'Clothes that hang unevenly',
        'Low back pain and fatigue after standing, especially in adults',
        'Leg pain, numbness or trouble walking distances in adult curves',
      ],
      redFlags: [
        'A curve that is visibly getting worse over months',
        'Shortness of breath with a large curve',
        'New weakness or numbness in the legs',
        'Loss of bladder or bowel control',
      ],
    },
    diagnosis: {
      title: 'How we assess it',
      text: 'The goal is to measure the curve accurately, judge whether it is likely to progress and understand how it affects your balance and nerves.',
      steps: [
        { label: 'Listen', title: 'History and growth', text: 'When the curve was noticed, family history, and in teenagers how much growth is left.' },
        { label: 'Examine', title: 'Physical examination', text: 'The forward bend test, shoulder and pelvic level, overall balance and a neurological check.' },
        { label: 'Image', title: 'Standing full spine X rays', text: 'The curve is measured in degrees. Standing films show how the whole spine balances over the pelvis.' },
        { label: 'Plan', title: 'Watch, brace or treat', text: 'Dr. Bhalla explains the size of the curve, the chance it will progress and what, if anything, needs to be done now.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most curves never need surgery. Treatment depends on the size of the curve, how much growth is left and, in adults, how much pain and nerve pressure it causes.',
      nonSurgical: [
        'Observation with repeat X rays for small curves',
        'Bracing during growth to stop a moderate curve progressing',
        'Scoliosis specific physical therapy and core strengthening',
        'Anti inflammatory medication for adult curves during flares',
        'Injections for nerve pain caused by stenosis within the curve',
      ],
      surgical: [
        'Decompression alone for leg pain in a stable adult curve',
        'Fusion with rods and screws to correct and hold a large or progressing curve',
        'Minimally invasive and lateral approaches for selected adult curves',
        'Navigation and robotic guidance for precise screw placement',
      ],
    },
    livingWell: {
      title: 'Living well with scoliosis',
      text: 'A curve does not have to limit your life. These habits protect your back whether or not you ever need treatment.',
      tips: [
        'Stay active. Sport and exercise do not make curves worse and keep the back strong.',
        'Build core and back strength with a program designed for your curve.',
        'Keep follow up X ray appointments during growth so changes are caught early.',
        'If a brace is prescribed, wear it for the hours recommended. Consistency is what works.',
        'Adults: manage weight and avoid smoking to slow disc wear within the curve.',
        'Tell your doctor about new pain, numbness or a change in balance.',
      ],
    },
    faqs: [
      {
        q: 'Did my child do something to cause this?',
        a: 'No. Adolescent idiopathic scoliosis is not caused by posture, heavy backpacks, sport or anything a child or parent did. It has a genetic component and simply appears during growth.',
      },
      {
        q: 'Will the curve keep getting worse?',
        a: 'In teenagers, progression depends on the size of the curve and how much growth remains, which is why regular X rays matter. Small curves usually stop when growth stops. Adult degenerative curves can slowly progress, typically by a degree or two a year.',
      },
      {
        q: 'When is surgery recommended?',
        a: 'In adolescents, usually for curves beyond about 45 to 50 degrees that are still progressing. In adults, surgery is driven less by the number and more by pain, nerve symptoms and loss of balance that have not improved with other care.',
      },
      {
        q: 'Can adult scoliosis be treated without a big operation?',
        a: 'Often, yes. Many adults are helped by therapy, injections and, when nerve pain is the main problem, a smaller decompression. A full correction is reserved for curves that are causing real disability.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'motion-preservation-surgery'],
  },

  kyphosis: {
    photos: [`${dir}/kyphosis/1.jpg`, `${dir}/kyphosis/2.jpg`, `${dir}/kyphosis/3.jpg`],
    intro:
      'Everyone has a gentle forward curve in the upper back. Kyphosis is when that curve becomes exaggerated, producing a rounded back that can cause pain, stiffness and, in severe cases, trouble standing upright.',
    overview: {
      title: 'What is kyphosis?',
      text: [
        'The thoracic spine, the part behind the rib cage, normally curves forward by 20 to 45 degrees. Kyphosis means that curve is larger than normal. Mild kyphosis is simply a posture, and many people have it without any symptoms. As the curve increases, the muscles of the back have to work harder to hold the head up, which leads to fatigue and pain, and in the most severe cases the chest can be compressed.',
        'Kyphosis has several causes. In teenagers the most common structural form is Scheuermann\'s kyphosis, where the front of several vertebrae grows more slowly than the back. In adults the usual causes are osteoporotic compression fractures, disc wear and the long term effects of previous spine surgery. Dr. Bhalla\'s aim is to find the cause, protect the spinal cord and restore a balanced, upright posture with the least invasive treatment that will achieve it.',
      ],
    },
    causes: {
      title: 'Common causes',
      text: 'The forward curve can come from the shape of the bones, the strength of the bones or the way the spine has been loaded over time.',
      items: [
        { title: 'Postural kyphosis', text: 'A flexible round back from slouching, most common in teenagers and desk workers. Corrects when you stand tall.' },
        { title: 'Scheuermann\'s kyphosis', text: 'Wedge shaped vertebrae that develop during adolescent growth, producing a rigid curve.' },
        { title: 'Osteoporotic fractures', text: 'Weakened vertebrae collapse at the front, each fracture adding to the forward bend.' },
        { title: 'Degenerative changes', text: 'Discs lose height at the front more than the back, slowly tipping the spine forward.' },
        { title: 'After spine surgery', text: 'A fusion that heals in a flat or flexed position, or wear above a fusion, can create or worsen kyphosis.' },
        { title: 'Congenital and other causes', text: 'Vertebrae that formed abnormally, infection, tumor or inflammatory arthritis such as ankylosing spondylitis.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'Symptoms depend on the size and stiffness of the curve and how much the rest of the spine can compensate.',
      items: [
        'A visibly rounded upper back or a hump',
        'Back pain and stiffness, often worse later in the day',
        'Fatigue in the back and neck muscles from holding the head up',
        'Tight hamstrings and difficulty standing fully upright',
        'The head drifting forward of the body',
        'In severe curves, shortness of breath or early fullness when eating',
      ],
      redFlags: [
        'Sudden new back pain in someone with osteoporosis',
        'Numbness, weakness or clumsiness in the legs',
        'Loss of bladder or bowel control',
        'A curve that is clearly increasing over months',
      ],
    },
    diagnosis: {
      title: 'How we assess it',
      text: 'We measure the curve, find out why it is there and check how it is affecting your balance, your nerves and your daily life.',
      steps: [
        { label: 'Listen', title: 'History', text: 'When the curve appeared, any fractures or previous surgery, bone health and how the pain behaves.' },
        { label: 'Examine', title: 'Physical examination', text: 'Whether the curve corrects when you lie down or stand tall, hamstring tightness, overall balance and a neurological check.' },
        { label: 'Image', title: 'Standing X rays, MRI if needed', text: 'Full length standing films measure the curve and your overall alignment. MRI shows the discs and spinal cord. A bone density scan checks for osteoporosis.' },
        { label: 'Plan', title: 'A plan matched to the cause', text: 'Posture, fracture, growth or wear each call for a different approach. Dr. Bhalla explains which applies to you.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most kyphosis is managed without surgery. Treatment targets the cause, strengthens the muscles that hold you upright and protects the bones.',
      nonSurgical: [
        'Posture training and extension based physical therapy',
        'Strengthening the back extensors, core and hip muscles',
        'Bracing for Scheuermann\'s kyphosis during growth',
        'Treating osteoporosis to prevent further fractures',
        'Pain management and short courses of anti inflammatory medication',
      ],
      surgical: [
        'Kyphoplasty to stabilize a painful osteoporotic fracture',
        'Decompression if the spinal cord or nerves are compressed',
        'Fusion with correction for severe, rigid or progressing curves',
        'Osteotomy to realign the spine in selected adult cases',
      ],
    },
    livingWell: {
      title: 'Standing taller every day',
      text: 'The muscles along your spine are the best brace you have. These habits keep them working for you.',
      tips: [
        'Practice extension: lie face down and gently lift your chest a few times a day.',
        'Strengthen the muscles between your shoulder blades with rows and band pulls.',
        'Set your screen at eye level and take a standing break every 30 to 45 minutes.',
        'Stretch tight hamstrings and hip flexors, which pull the pelvis and spine forward.',
        'Protect your bones with calcium, vitamin D, weight bearing exercise and no smoking.',
        'Sleep on a firm mattress with a pillow that does not push your head forward.',
      ],
    },
    faqs: [
      {
        q: 'Is kyphosis the same as a dowager\'s hump?',
        a: 'A dowager\'s hump is an older name for kyphosis caused by osteoporotic compression fractures in the upper back. It is one type of kyphosis, and treating the osteoporosis is a key part of its care.',
      },
      {
        q: 'Can posture exercises fix my round back?',
        a: 'If the curve is flexible, meaning it corrects when you stand tall or lie down, exercise and posture training can make a real difference. A rigid structural curve will not straighten with exercise, but strengthening still reduces pain and prevents it getting worse.',
      },
      {
        q: 'When is surgery needed?',
        a: 'Surgery is considered for curves that are severe or progressing, that compress the spinal cord, or that leave you unable to stand upright and look ahead despite thorough non surgical care. For a single painful fracture, a minimally invasive kyphoplasty is often enough.',
      },
      {
        q: 'My teenager slouches. Is that kyphosis?',
        a: 'Usually it is postural kyphosis, which is flexible and harmless. If the round back does not correct when they stand tall, or there is pain, an examination and X ray can tell postural kyphosis apart from Scheuermann\'s, which may benefit from bracing during growth.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  flatback: {
    photos: [`${dir}/flatback/1.jpg`, `${dir}/flatback/2.jpg`, `${dir}/flatback/3.jpg`],
    intro:
      'Flatback syndrome is the loss of the normal inward curve of the lower back. The spine tips forward, and the body has to work constantly just to stay upright.',
    overview: {
      title: 'What is flatback syndrome?',
      text: [
        'A healthy lower back curves inward (lordosis), which keeps the head balanced over the pelvis with very little effort. In flatback syndrome that curve is lost. The upper body leans forward, and to compensate you bend your knees, tilt your pelvis and strain your back and hip muscles to stay upright. It works for a while, but the effort builds through the day and becomes exhausting and painful.',
        'Flatback most often follows spinal surgery, especially older fusions that were fixed in a flat position, but it also develops from degenerative disc disease, compression fractures and ankylosing spondylitis. It is a problem of overall spinal balance rather than one bad level, which is why it needs a surgeon who looks at the whole picture. Dr. Bhalla sees flatback frequently in patients seeking a second opinion after previous surgery.',
      ],
    },
    causes: {
      title: 'What causes it',
      text: 'Anything that removes the lower back curve or stiffens the spine in a flat position can lead to flatback.',
      items: [
        { title: 'Previous fusion surgery', text: 'The most common cause. A fusion that healed flat, or one done with older rod systems, locks the spine without its curve.' },
        { title: 'Wear above or below a fusion', text: 'Levels next to a fusion take on extra load and collapse forward over time (adjacent segment disease).' },
        { title: 'Degenerative disc disease', text: 'Multiple discs losing height at the front gradually flattens the lumbar curve.' },
        { title: 'Compression fractures', text: 'Osteoporotic fractures wedge the vertebrae forward and reduce the curve.' },
        { title: 'Ankylosing spondylitis', text: 'Inflammatory arthritis that can fuse the spine in a stooped position.' },
        { title: 'Hip and pelvic factors', text: 'Stiff hips and a pelvis that cannot rotate backward leave the spine without its usual compensation.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'The hallmark of flatback is a day that starts fine and gets harder. Standing upright becomes an effort you can feel.',
      items: [
        'Difficulty standing up straight, especially later in the day',
        'A sense of pitching forward when walking',
        'Needing to bend the knees or lean on a cart to stay upright',
        'Low back pain and fatigue that build with standing or walking',
        'Pain in the hips, thighs and neck from compensating',
        'Trouble looking straight ahead without extending the neck',
      ],
      redFlags: [
        'New leg weakness, numbness or difficulty walking',
        'Loss of bladder or bowel control',
        'Sudden severe back pain after a fall or minor injury',
        'Rapid worsening of your ability to stand upright',
      ],
    },
    diagnosis: {
      title: 'How we assess it',
      text: 'Flatback is diagnosed by measuring your whole body alignment, not just one part of the spine.',
      steps: [
        { label: 'Listen', title: 'History and previous surgery', text: 'Earlier operations, how your standing tolerance has changed and what helps you stay upright.' },
        { label: 'Examine', title: 'Standing examination', text: 'Your natural stance, knee bend, pelvic tilt, hip motion and a neurological check, observed as you stand and walk.' },
        { label: 'Image', title: 'Full length standing X rays', text: 'Head to pelvis films measure how far your trunk sits forward of your hips and the curve missing from your lower back. CT and MRI show the fusion, discs and nerves.' },
        { label: 'Plan', title: 'Balance the whole spine', text: 'Dr. Bhalla explains how much correction you need, where it should come from and whether surgery is the right step.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Mild flatback can be managed with therapy and hip and core strength. When the loss of balance is structural and disabling, surgery to restore the curve is one of the most life changing procedures in spine care.',
      nonSurgical: [
        'Physical therapy focused on hip flexor stretching and extensor strength',
        'Core and gluteal strengthening to improve standing endurance',
        'Treatment of stiff hips, which can restore some compensation',
        'Pain management, pacing and walking aids as needed',
        'Osteoporosis treatment to protect against further collapse',
      ],
      surgical: [
        'Osteotomy to restore the lumbar curve, often through or next to a previous fusion',
        'Extending or revising a prior fusion to achieve balanced alignment',
        'Interbody cages from the front or side to rebuild disc height and lordosis',
        'Navigation and intraoperative imaging to confirm correction before closing',
      ],
    },
    livingWell: {
      title: 'Managing flatback day to day',
      text: 'While a plan is made, and after any treatment, these habits reduce the daily effort of staying upright.',
      tips: [
        'Stretch your hip flexors every day. Tight hips pull the pelvis and trunk forward.',
        'Strengthen glutes and back extensors so standing takes less effort.',
        'Break up long periods of standing and walking with short rests.',
        'Use a walking pole or cart for longer outings rather than pushing through.',
        'Avoid soft chairs you sink into. A firm seat with lumbar support helps.',
        'Keep a record of your standing tolerance. It helps track whether things are changing.',
      ],
    },
    faqs: [
      {
        q: 'Why did this happen after my fusion?',
        a: 'Older fusion techniques often fixed the spine in a flat position, and even well done fusions can be followed by wear at the levels next to them. Over years the spine loses its curve and the body runs out of ways to compensate. It is not something you did wrong.',
      },
      {
        q: 'Can exercise fix flatback?',
        a: 'Exercise can improve standing endurance and reduce pain when the loss of curve is mild and your hips and remaining spine can still compensate. It cannot restore a curve that has been lost structurally, but it is still important before and after any surgery.',
      },
      {
        q: 'What does flatback surgery involve?',
        a: 'The spine is realigned by removing a wedge of bone or rebuilding disc spaces to recreate the lower back curve, then stabilized with screws and rods. It is a major operation, planned carefully from your standing X rays, and performed by Dr. Bhalla with navigation to confirm the correction.',
      },
      {
        q: 'Is it worth having another operation?',
        a: 'For patients who cannot stand upright or walk comfortably despite good non surgical care, restoring alignment often returns the ability to stand, walk and look ahead without constant effort. Dr. Bhalla will give you an honest view of the likely benefit and the risks in your specific case.',
      },
    ],
    relatedServices: ['revision-spinal-surgery', 'minimally-invasive-spinal-surgery', 'motion-preservation-surgery'],
  },
  /* ---------------------------------------------------------------- thoracic */
  'thoracic-stenosis-myelopathy': {
    photos: [`${dir}/thoracic-stenosis-myelopathy/1.jpg`, `${dir}/thoracic-stenosis-myelopathy/2.jpg`, `${dir}/thoracic-stenosis-myelopathy/3.jpg`],
    intro:
      'The mid back is the most protected part of the spine, so narrowing there is uncommon. When it does press on the spinal cord, it affects the legs, balance and walking, and it needs expert attention.',
    overview: {
      title: 'What is thoracic stenosis and myelopathy?',
      text: [
        'The thoracic spine is the twelve vertebrae between the neck and the lower back, anchored by the rib cage. Thoracic stenosis is a narrowing of the spinal canal in this region. Because the canal here is naturally tight and the spinal cord fills most of it, even modest narrowing can press on the cord. When the cord is compressed enough to cause symptoms, that is called thoracic myelopathy.',
        'Thoracic myelopathy is rare compared with the same problem in the neck, and because the symptoms are vague at first, it is often diagnosed late. The cord does not have the capacity to repair itself, so the goal is to recognize compression early and relieve it before damage becomes permanent. Dr. Bhalla treats thoracic cord compression with careful imaging and, when needed, precise decompression surgery.',
      ],
    },
    causes: {
      title: 'What narrows the canal',
      text: 'Several different processes can crowd the thoracic spinal cord. Finding out which one is present guides treatment.',
      items: [
        { title: 'Thickened ligaments', text: 'The ligamentum flavum behind the cord can thicken or turn to bone, the most common cause in the mid back.' },
        { title: 'Disc herniation', text: 'A thoracic disc bulging backward into the canal. Rare, but often calcified and hard.' },
        { title: 'Bone spurs and facet arthritis', text: 'Wear in the small joints produces bone that narrows the canal from the sides.' },
        { title: 'Compression fractures', text: 'Collapsed vertebrae from osteoporosis or injury can push bone into the canal.' },
        { title: 'Tumor or infection', text: 'A mass in or around the vertebrae that takes up space in the canal.' },
        { title: 'Congenital narrowing', text: 'Some people are born with a smaller canal and reach symptoms with less wear.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'Thoracic cord compression affects everything below the level of the problem, which is why its signs show up in the legs and trunk.',
      items: [
        'Mid back pain, sometimes wrapping around the chest or ribs',
        'Numbness or tingling in the legs or a band like feeling around the trunk',
        'Heavy, stiff or weak legs',
        'Unsteady walking or needing to look at your feet',
        'Difficulty with stairs or getting out of a chair',
        'Changes in bladder or bowel control in later stages',
      ],
      redFlags: [
        'Rapidly worsening leg weakness',
        'New loss of bladder or bowel control',
        'Sudden inability to walk',
        'Mid back pain with fever or a known cancer',
      ],
    },
    diagnosis: {
      title: 'How we confirm it',
      text: 'Thoracic myelopathy is easy to miss. A careful neurological examination and the right imaging are what make the diagnosis.',
      steps: [
        { label: 'Listen', title: 'Your story', text: 'How walking and balance have changed, any trunk numbness and how quickly things are progressing.' },
        { label: 'Examine', title: 'Neurological examination', text: 'Reflexes, muscle tone, sensation level and gait. Brisk reflexes and a sensory level point to the thoracic cord.' },
        { label: 'Image', title: 'MRI of the whole spine', text: 'Shows the cord, the level and cause of compression and any signal change within the cord. CT adds bone and calcification detail.' },
        { label: 'Plan', title: 'Decide on timing', text: 'Dr. Bhalla weighs the degree of compression against your symptoms and explains whether to watch or to act.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Mild narrowing without cord symptoms can be watched. Once myelopathy is present, surgery to relieve pressure on the cord is usually the right answer, because the cord does not recover from prolonged compression.',
      nonSurgical: [
        'Monitoring with repeat examination and imaging for mild cases',
        'Physical therapy for balance and leg strength',
        'Pain management and activity modification',
        'Treatment of osteoporosis when fractures are the cause',
        'Fall prevention measures at home',
      ],
      surgical: [
        'Laminectomy to remove thickened bone and ligament from behind the cord',
        'Removal of a thoracic disc through a posterolateral or lateral approach',
        'Fusion with instrumentation when bone removal would leave the spine unstable',
        'Neuromonitoring throughout surgery to protect the cord',
      ],
    },
    livingWell: {
      title: 'Protecting your spinal cord',
      text: 'Whether you are being monitored or recovering from surgery, these habits protect the cord and keep you steady on your feet.',
      tips: [
        'Report any change in walking, balance or sensation promptly. Timing matters.',
        'Remove trip hazards at home and use rails on stairs.',
        'Keep legs strong with supervised exercise and balance training.',
        'Avoid heavy lifting and high impact activity while the cord is compressed.',
        'Keep bones strong with calcium, vitamin D and weight bearing exercise.',
        'Attend every follow up visit so progress can be measured over time.',
      ],
    },
    faqs: [
      {
        q: 'Why is thoracic stenosis less common than in the neck or lower back?',
        a: 'The rib cage stiffens the thoracic spine, so it moves less and wears more slowly. That protection is also why thoracic problems are often missed: doctors and patients tend to look at the neck and lower back first.',
      },
      {
        q: 'Will surgery get my walking back to normal?',
        a: 'Surgery reliably stops the condition from getting worse. How much function returns depends on how long and how severely the cord was compressed, which is why early treatment matters. Many patients improve substantially.',
      },
      {
        q: 'Is thoracic spine surgery risky?',
        a: 'The spinal cord makes thoracic surgery more delicate than lumbar surgery. Dr. Bhalla uses neuromonitoring, navigation and approaches that avoid retracting the cord to keep the procedure as safe as possible.',
      },
      {
        q: 'Can I just wait and see?',
        a: 'If you have narrowing without any cord symptoms, watching is reasonable. Once myelopathy is present, waiting risks permanent loss of function. Dr. Bhalla will tell you clearly which situation you are in.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  /* ---------------------------------------------------------------- cervical */
  'cervical-herniated-disc': {
    photos: [`${dir}/cervical-herniated-disc/1.jpg`, `${dir}/cervical-herniated-disc/2.jpg`, `${dir}/cervical-herniated-disc/3.jpg`],
    intro:
      'A herniated disc in the neck can send pain, tingling or weakness down the arm. Most settle without surgery, and the ones that do not can usually be treated with a short, modern procedure.',
    overview: {
      title: 'What is a cervical herniated disc?',
      text: [
        'The discs between the neck vertebrae have a tough outer ring and a soft center. A herniation happens when the center pushes through a weak spot in the ring. In the neck there is little spare room, so even a small herniation can press on a nerve root as it leaves the spine, or in larger cases on the spinal cord itself.',
        'Herniations can appear suddenly after an awkward movement or injury, or build gradually as a disc wears. The nerve it presses on determines where you feel it: the shoulder, the outer arm, the thumb and index finger, or the middle and ring fingers. The good news is that most cervical herniations shrink over weeks to months as the body reabsorbs the disc material, and symptoms improve along with them.',
      ],
    },
    causes: {
      title: 'Common causes',
      text: 'Disc herniations are a mix of long term wear and a final event that pushes the disc past its limit.',
      items: [
        { title: 'Age related wear', text: 'Discs lose water and flexibility over time, making the outer ring easier to tear.' },
        { title: 'Repetitive strain', text: 'Years of looking down at screens, overhead work or heavy lifting load the neck discs.' },
        { title: 'Sudden injury', text: 'Falls, sports collisions, whiplash and car accidents can rupture a disc in an instant.' },
        { title: 'Poor posture', text: 'A forward head position puts constant extra pressure on the lower cervical discs.' },
        { title: 'Genetics', text: 'Some families have discs that wear and herniate earlier than others.' },
        { title: 'Smoking', text: 'Reduces blood supply to the discs and speeds up degeneration.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'The pattern of symptoms tells us which disc and nerve are involved, often before any imaging.',
      items: [
        'Neck pain and stiffness',
        'Sharp or burning pain spreading into the shoulder blade, arm or hand',
        'Numbness or tingling in specific fingers',
        'Weakness in the arm, grip or fingers',
        'Pain that is worse when turning the head or looking up',
        'Relief when resting the hand on top of the head',
      ],
      redFlags: [
        'Weakness that is getting worse',
        'Clumsy hands or trouble with buttons and writing',
        'Unsteady walking or leg symptoms',
        'Loss of bladder or bowel control',
      ],
    },
    diagnosis: {
      title: 'How we find it',
      text: 'The combination of your symptoms, the examination and an MRI confirms which disc is responsible.',
      steps: [
        { label: 'Listen', title: 'Where it travels', text: 'The path of pain and tingling down the arm points to a specific nerve root.' },
        { label: 'Examine', title: 'Neurological examination', text: 'Strength, reflexes and sensation in each nerve distribution, plus tests that reproduce the arm pain.' },
        { label: 'Image', title: 'MRI', text: 'Shows the herniation and how much it is pressing on the nerve or cord. X rays check alignment.' },
        { label: 'Plan', title: 'Match the picture to the pain', text: 'Dr. Bhalla treats the disc that explains your symptoms, not every change on the scan.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most cervical herniations improve within six to twelve weeks with conservative care. Surgery is for persistent arm pain, progressive weakness or pressure on the spinal cord.',
      nonSurgical: [
        'Short period of relative rest, then gentle movement',
        'Physical therapy for posture, mobility and strength',
        'Anti inflammatory medication or a short steroid course',
        'Nerve pain medication for arm symptoms',
        'Epidural steroid injection for stubborn arm pain',
      ],
      surgical: [
        'Cervical disc replacement to remove the herniation and keep motion',
        'Anterior cervical discectomy and fusion (ACDF)',
        'Posterior foraminotomy for a side herniation, through a small incision',
        'Outpatient surgery in most cases, with a short recovery',
      ],
    },
    livingWell: {
      title: 'Helping your neck heal',
      text: 'While the disc settles, these steps ease pressure on the nerve and reduce the chance of another flare.',
      tips: [
        'Bring screens up to eye level and keep your ears over your shoulders.',
        'Take short movement breaks every 30 to 45 minutes.',
        'Sleep on your back or side with a pillow that keeps your neck level.',
        'Avoid heavy overhead lifting and carrying bags on one shoulder during a flare.',
        'Strengthen the deep neck and upper back muscles once pain allows.',
        'Stop smoking to give the disc the best chance to heal.',
      ],
    },
    faqs: [
      {
        q: 'Will the herniated disc go back in?',
        a: 'Not exactly, but the body gradually breaks down and absorbs the herniated material, and the pressure on the nerve eases. Most people improve substantially within a few months.',
      },
      {
        q: 'When is surgery needed?',
        a: 'When arm pain remains severe after six to twelve weeks of good conservative care, when weakness is progressing, or when the disc is compressing the spinal cord. Dr. Bhalla will explain which applies to you.',
      },
      {
        q: 'Disc replacement or fusion?',
        a: 'Both relieve nerve pressure. Disc replacement keeps the level moving and protects the discs above and below, and it is Dr. Bhalla\'s preference for suitable patients. Fusion remains the right choice for some anatomies and for instability.',
      },
      {
        q: 'How long is recovery from surgery?',
        a: 'Arm pain usually eases within days. Most patients go home the same day, return to desk work within one to two weeks and to full activity within six to twelve weeks.',
      },
    ],
    relatedServices: ['cervical-disc-replacement', 'motion-preservation-surgery', 'outpatient-spinal-surgery'],
  },

  'cervical-radiculopathy': {
    photos: [`${dir}/cervical-radiculopathy/1.jpg`, `${dir}/cervical-radiculopathy/2.jpg`, `${dir}/cervical-radiculopathy/3.jpg`],
    intro:
      'Cervical radiculopathy is a pinched nerve in the neck. The pain is felt in the arm, which is why it is often mistaken for a shoulder or elbow problem.',
    overview: {
      title: 'What is cervical radiculopathy?',
      text: [
        'Eight pairs of nerve roots leave the cervical spine through small openings between the vertebrae. Each one supplies a specific area of the shoulder, arm and hand. Radiculopathy means one of those roots is being compressed or irritated where it exits. The result is pain, tingling, numbness or weakness along the path of that nerve.',
        'In younger adults the usual cause is a herniated disc. In people over 50 it is more often bone spurs and disc narrowing that shrink the opening the nerve passes through. Either way, the outlook is good: most people recover with time and conservative care, and those who do not have excellent surgical options.',
      ],
    },
    causes: {
      title: 'What pinches the nerve',
      text: 'Anything that narrows the opening where a nerve root leaves the spine can irritate it.',
      items: [
        { title: 'Herniated disc', text: 'Disc material pressing directly on the nerve root. The most common cause under 50.' },
        { title: 'Bone spurs', text: 'Arthritic bone growth around the disc and facet joints that narrows the nerve opening.' },
        { title: 'Disc narrowing', text: 'A worn disc loses height, which shrinks the space the nerve passes through.' },
        { title: 'Facet joint arthritis', text: 'Enlarged, arthritic joints behind the spine that crowd the nerve from the back.' },
        { title: 'Injury', text: 'A sudden strain or whiplash can inflame a nerve root even without a herniation.' },
        { title: 'Instability', text: 'Excess movement between vertebrae that repeatedly irritates the nerve.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'Arm symptoms are the hallmark. Neck pain may be mild or absent entirely.',
      items: [
        'Sharp, burning or electric pain running from the neck into the arm',
        'Tingling or numbness in part of the hand or specific fingers',
        'Weakness in the shoulder, biceps, triceps or grip',
        'Pain worse when looking up, turning the head or coughing',
        'Relief when lifting the arm and resting the hand on the head',
        'Aching between the shoulder blades',
      ],
      redFlags: [
        'Weakness that is getting worse',
        'Symptoms in both arms or in the legs',
        'Clumsy hands or unsteady walking',
        'Loss of bladder or bowel control',
      ],
    },
    diagnosis: {
      title: 'How we find it',
      text: 'The examination identifies which nerve root is involved. Imaging confirms why.',
      steps: [
        { label: 'Listen', title: 'Mapping the symptoms', text: 'Where the pain travels and which fingers tingle identify the nerve root.' },
        { label: 'Examine', title: 'Neurological examination', text: 'Strength, reflexes and sensation for each root, and provocation tests that reproduce the arm pain.' },
        { label: 'Image', title: 'MRI, sometimes CT', text: 'MRI shows the disc or bone pressing on the root. CT adds bone detail when spurs are suspected.' },
        { label: 'Confirm', title: 'Nerve studies if unclear', text: 'EMG and nerve conduction tests separate a neck problem from carpal tunnel or a shoulder condition.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Between 75 and 90 percent of people with cervical radiculopathy improve without surgery. The rest can be treated with a short procedure that decompresses the nerve.',
      nonSurgical: [
        'Activity modification and a short period of relative rest',
        'Physical therapy, including gentle traction and nerve gliding',
        'Anti inflammatory medication or a short oral steroid course',
        'Medication for nerve pain',
        'Image guided epidural steroid injection',
      ],
      surgical: [
        'Posterior foraminotomy to open the nerve opening through a small incision',
        'Cervical disc replacement when a disc is the cause',
        'Anterior cervical discectomy and fusion for selected cases',
        'Outpatient procedures with same day discharge in most cases',
      ],
    },
    livingWell: {
      title: 'Calming an irritated nerve',
      text: 'Small changes reduce the daily irritation to the nerve while it recovers.',
      tips: [
        'Keep your head balanced over your shoulders, not forward of them.',
        'Avoid prolonged looking up, such as ceiling work, during a flare.',
        'Use a headset instead of cradling a phone between ear and shoulder.',
        'Choose a pillow that keeps your neck level in your usual sleeping position.',
        'Keep moving with walking and gentle neck mobility rather than resting fully.',
        'Build the upper back and deep neck muscles once the acute pain settles.',
      ],
    },
    faqs: [
      {
        q: 'How do I know it is my neck and not my shoulder?',
        a: 'Neck related arm pain usually travels below the elbow, comes with tingling in specific fingers and changes with head position. Shoulder pain stays around the shoulder and changes with arm movement. The examination can tell them apart.',
      },
      {
        q: 'How long does it take to get better?',
        a: 'Most people improve over six to twelve weeks. Numbness can take longer than pain to fade. If symptoms are not improving by then, or weakness is developing, it is time to discuss further options.',
      },
      {
        q: 'Is surgery a big operation?',
        a: 'No. Both posterior foraminotomy and disc replacement are performed through small incisions, usually as outpatient procedures, with most patients back to light activity within a week or two.',
      },
      {
        q: 'Will the numbness go away after surgery?',
        a: 'Pain usually eases quickly. Numbness and weakness recover more slowly as the nerve heals, and a nerve that has been compressed for a long time may not recover completely, which is one reason not to delay treatment when weakness is present.',
      },
    ],
    relatedServices: ['cervical-disc-replacement', 'minimally-invasive-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  'cervical-myelopathy': {
    photos: [`${dir}/cervical-myelopathy/1.jpg`, `${dir}/cervical-myelopathy/2.jpg`, `${dir}/cervical-myelopathy/3.jpg`],
    intro:
      'Cervical myelopathy is pressure on the spinal cord in the neck. It creeps up slowly, affects the hands and walking, and is the one neck condition where waiting can cost you function.',
    overview: {
      title: 'What is cervical myelopathy?',
      text: [
        'The spinal cord carries every signal between the brain and the body. In the neck it passes through a canal that can narrow with age as discs bulge, ligaments thicken and bone spurs form. When that narrowing squeezes the cord, the cord itself begins to malfunction. That is cervical myelopathy, and it is the most common cause of spinal cord dysfunction in adults over 55.',
        'Unlike a pinched nerve, which affects one arm, myelopathy affects everything below the neck: hand coordination, leg strength, balance and in later stages bladder control. Symptoms usually progress in steps, with periods of stability between declines. Because the cord does not repair itself, Dr. Bhalla\'s approach is to diagnose early and relieve the pressure before damage becomes permanent.',
      ],
    },
    causes: {
      title: 'What compresses the cord',
      text: 'Several age related changes can combine to narrow the cervical canal.',
      items: [
        { title: 'Cervical spondylosis', text: 'General wear of the neck: bulging discs, bone spurs and thickened joints that crowd the canal.' },
        { title: 'Large disc herniation', text: 'A central herniation that presses on the cord rather than a single nerve.' },
        { title: 'Ossified ligament', text: 'The ligament behind the vertebral bodies turning to bone (OPLL), more common in people of East Asian descent.' },
        { title: 'Congenital narrow canal', text: 'A canal that was small from birth and reaches a critical size with less wear.' },
        { title: 'Instability or slippage', text: 'Vertebrae that move too much, or have slipped, pinching the cord with motion.' },
        { title: 'Injury', text: 'A neck injury that bruises an already compressed cord, sometimes after a minor fall.' },
      ],
    },
    symptoms: {
      title: 'What to watch for',
      text: 'The early signs are subtle and are often put down to aging. Together they form a pattern that should prompt an evaluation.',
      items: [
        'Clumsy hands: trouble with buttons, writing, coins or typing',
        'Numbness or tingling in the hands, often both',
        'Weak grip or dropping things',
        'Unsteady walking, a wide stance or needing to hold rails',
        'Stiff, heavy legs',
        'Neck pain, though it may be mild or absent',
      ],
      redFlags: [
        'Rapid worsening of hand function or walking',
        'New bladder or bowel problems',
        'Falls',
        'Electric shock sensations down the spine when bending the neck',
      ],
    },
    diagnosis: {
      title: 'How we confirm it',
      text: 'Myelopathy is diagnosed by examination and confirmed by MRI. Catching it early depends on recognizing the signs.',
      steps: [
        { label: 'Listen', title: 'Function over time', text: 'Changes in handwriting, fine tasks, walking distance and balance, and how fast they have appeared.' },
        { label: 'Examine', title: 'Cord signs', text: 'Brisk reflexes, specific hand and foot signs, gait testing and sensation. These findings are what separate myelopathy from a pinched nerve.' },
        { label: 'Image', title: 'MRI of the cervical spine', text: 'Shows how tightly the cord is squeezed and whether there is signal change within it. CT adds bone detail; X rays check alignment and stability.' },
        { label: 'Plan', title: 'Grade and decide', text: 'Dr. Bhalla grades the severity, explains the likely course and recommends monitoring or surgery accordingly.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Very mild myelopathy can be monitored closely. Moderate or progressive myelopathy is treated surgically, because decompression is the only treatment that reliably stops decline.',
      nonSurgical: [
        'Close monitoring with repeat examination for very mild, stable cases',
        'Physical therapy for balance and hand function',
        'Avoiding neck manipulation and high risk activities',
        'Fall prevention at home',
        'Pain management for neck symptoms',
      ],
      surgical: [
        'Anterior decompression and fusion (ACDF) for one or two level compression from the front',
        'Cervical disc replacement in selected cases where motion can be preserved',
        'Laminoplasty or laminectomy and fusion for multi level compression from the back',
        'Neuromonitoring throughout to protect the cord',
      ],
    },
    livingWell: {
      title: 'Protecting your spinal cord',
      text: 'Whether you are being monitored or have had surgery, these steps protect the cord and your independence.',
      tips: [
        'Report new hand clumsiness, numbness or unsteadiness right away.',
        'Avoid chiropractic neck manipulation while the cord is compressed.',
        'Make the home safer: rails, good lighting, no loose rugs.',
        'Keep legs strong and practice balance with a therapist.',
        'Protect your neck in cars and during sport until treated.',
        'Keep every follow up appointment so changes are measured, not guessed.',
      ],
    },
    faqs: [
      {
        q: 'Is cervical myelopathy the same as a pinched nerve?',
        a: 'No. A pinched nerve (radiculopathy) affects one nerve root and one arm, and usually improves on its own. Myelopathy affects the spinal cord itself, involves hands, legs and balance, and tends to progress without treatment.',
      },
      {
        q: 'Do I really need surgery if my symptoms are mild?',
        a: 'Mild, stable symptoms can sometimes be monitored. But myelopathy usually progresses in steps, and function lost during a decline may not return. Dr. Bhalla will give you an honest view of the risk of waiting in your specific case.',
      },
      {
        q: 'Will surgery give me back what I have lost?',
        a: 'Surgery reliably halts progression and many patients improve, particularly in pain, hand function and walking. Recovery is greatest when surgery is done before severe or long standing damage.',
      },
      {
        q: 'What is the recovery like?',
        a: 'Most patients are home within a day or two. Walking begins immediately. Hand function and balance improve over weeks to months, with therapy to support the recovery.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'cervical-disc-replacement', 'revision-spinal-surgery'],
  },

  'cervical-trauma': {
    photos: [`${dir}/cervical-trauma/1.jpg`, `${dir}/cervical-trauma/2.jpg`, `${dir}/cervical-trauma/3.jpg`],
    intro:
      'Neck injuries range from a muscle strain that settles in days to fractures that threaten the spinal cord. Knowing which you have, quickly, is what matters most.',
    overview: {
      title: 'What is cervical trauma?',
      text: [
        'Cervical trauma covers any injury to the bones, discs, ligaments or spinal cord of the neck. The most common are whiplash type sprains from car accidents and falls, which hurt but heal. Less common and more serious are fractures of the vertebrae, torn ligaments that leave the neck unstable, and injuries to the spinal cord itself.',
        'The neck is the most mobile part of the spine and the least protected, which is why it is vulnerable in car accidents, falls, diving and contact sport. In older adults even a simple fall can fracture a vertebra weakened by osteoporosis or arthritis. Dr. Bhalla serves as Vice Chair of Orthopaedic Surgery at MemorialCare Long Beach Medical Center and treats the full range of cervical injuries, from bracing to complex stabilization.',
      ],
    },
    causes: {
      title: 'Common causes',
      text: 'The mechanism of injury tells us a great deal about what structures are likely damaged.',
      items: [
        { title: 'Motor vehicle accidents', text: 'The leading cause of serious neck injury, from whiplash sprains to fractures and dislocations.' },
        { title: 'Falls', text: 'The most common cause in older adults, often with fractures of the upper cervical spine.' },
        { title: 'Sports and diving', text: 'Head first impacts in football, rugby, gymnastics and shallow water diving.' },
        { title: 'Osteoporosis', text: 'Weakened bone that fractures with low energy, such as a fall from standing.' },
        { title: 'Stiff, arthritic spine', text: 'A fused or rigid neck, as in ankylosing spondylitis, breaks like a long bone with minor force.' },
        { title: 'Violence or workplace injury', text: 'Direct blows, crush injuries and falls from height.' },
      ],
    },
    symptoms: {
      title: 'What to watch for',
      text: 'After a neck injury, these symptoms separate a sprain from something that needs urgent imaging.',
      items: [
        'Neck pain and stiffness after an accident or fall',
        'Pain that is severe, central and tender over the bones',
        'Headache at the base of the skull',
        'Muscle spasm and difficulty turning the head',
        'Pain, tingling or numbness into the arms',
        'Dizziness, visual disturbance or trouble swallowing',
      ],
      redFlags: [
        'Weakness or numbness in the arms or legs after an injury',
        'Loss of bladder or bowel control',
        'Severe neck pain after a fall in someone over 65 or with osteoporosis',
        'Any neck injury with loss of consciousness or a head injury',
      ],
    },
    diagnosis: {
      title: 'How we assess it',
      text: 'The first task is to find or rule out an unstable injury. Everything else follows from that.',
      steps: [
        { label: 'Protect', title: 'Immobilize first', text: 'Until a serious injury is excluded, the neck is protected in a collar.' },
        { label: 'Examine', title: 'Neurological examination', text: 'Strength, sensation and reflexes in arms and legs to detect any cord or nerve involvement.' },
        { label: 'Image', title: 'CT and MRI', text: 'CT is the best test for fractures. MRI shows ligaments, discs and the spinal cord. X rays assess alignment and stability.' },
        { label: 'Plan', title: 'Stable or unstable', text: 'Dr. Bhalla classifies the injury and explains whether it can heal in a brace or needs surgical stabilization.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most cervical injuries are stable and heal without surgery. Unstable injuries and those compressing the cord are stabilized surgically to protect the nerves and allow early mobility.',
      nonSurgical: [
        'Rigid or soft collar for stable fractures and sprains',
        'Halo vest for selected upper cervical fractures',
        'Pain management and muscle relaxants',
        'Physical therapy once healing allows, to restore motion and strength',
        'Serial X rays to confirm the injury is healing in a good position',
      ],
      surgical: [
        'Decompression of the spinal cord or nerves',
        'Fusion with plates, screws and rods to stabilize unstable segments',
        'Reduction of dislocations under neuromonitoring',
        'Minimally invasive posterior fixation where the injury allows',
      ],
    },
    livingWell: {
      title: 'Recovering from a neck injury',
      text: 'Healing bone and ligament takes weeks. These steps protect the repair and help you return to normal life.',
      tips: [
        'Wear the collar exactly as prescribed, including the hours you are told.',
        'Keep follow up imaging appointments. They confirm the injury is healing in position.',
        'Start therapy when cleared. Early guided movement prevents long term stiffness.',
        'Avoid driving until you can turn your head freely and have been cleared.',
        'Address bone health if the fracture happened with a low energy fall.',
        'Report any new arm or leg symptoms immediately.',
      ],
    },
    faqs: [
      {
        q: 'I had whiplash. Do I need an X ray?',
        a: 'Not always. Doctors use clear rules based on your age, the mechanism of injury and your examination to decide who needs imaging. Severe midline tenderness, numbness, age over 65 or a high energy accident all call for a scan.',
      },
      {
        q: 'How long does whiplash take to heal?',
        a: 'Most people improve substantially within a few weeks and recover fully within three months. Staying gently active, rather than resting in a collar, speeds recovery for simple sprains.',
      },
      {
        q: 'Will I need surgery for a fracture?',
        a: 'Many cervical fractures are stable and heal in a collar. Surgery is needed when the injury is unstable, the bones are out of alignment, or the cord or nerves are compressed.',
      },
      {
        q: 'Can I return to sport after a neck injury?',
        a: 'Often, yes, once the injury has healed and strength and motion are restored. Return to contact sport after a fracture or fusion is decided case by case, and Dr. Bhalla will give you a clear answer for your situation.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'revision-spinal-surgery', 'outpatient-spinal-surgery'],
  },

  'cervical-fusion': {
    photos: [`${dir}/cervical-fusion/1.jpg`, `${dir}/cervical-fusion/2.jpg`, `${dir}/cervical-fusion/3.jpg`],
    intro:
      'Cervical fusion joins two or more neck vertebrae into one solid bone. It is one of the most reliable operations in spine surgery for relieving nerve and cord pressure and restoring stability.',
    labels: {
      causes: 'When it is used',
      symptoms: 'Is it right for you',
      symptomList: 'Signs fusion may help',
      diagnosis: 'The procedure',
      treatment: 'Your options',
      nonSurgical: 'Alternatives to consider first',
      nonSurgicalTitle: 'When fusion is not the only answer',
      surgical: 'Types of fusion',
      surgicalTitle: 'Matched to your anatomy',
      livingWell: 'Recovery',
    },
    overview: {
      title: 'What is cervical fusion?',
      text: [
        'In a cervical fusion, Dr. Bhalla removes the damaged disc or bone that is pressing on the nerves or spinal cord, then places a spacer filled with bone graft in its place and secures the vertebrae with a small plate and screws. Over the following months the vertebrae grow together into one solid segment. The most common version is anterior cervical discectomy and fusion (ACDF), performed through a small incision at the front of the neck.',
        'Fusion is sometimes seen as old fashioned next to disc replacement, but it remains the right choice in many situations: when the spine is unstable, when there is significant arthritis or deformity, when several levels are involved, or when bone quality or alignment make an artificial disc unsuitable. Dr. Bhalla offers both and recommends fusion when it is the operation most likely to give you a lasting result.',
      ],
    },
    causes: {
      title: 'Conditions treated with fusion',
      text: 'Fusion addresses pressure on the nerves and cord and, unlike other procedures, also restores stability.',
      items: [
        { title: 'Cervical myelopathy', text: 'Compression of the spinal cord, especially across several levels or with poor alignment.' },
        { title: 'Radiculopathy that has not improved', text: 'A pinched nerve from a disc or bone spur when disc replacement is not suitable.' },
        { title: 'Instability and spondylolisthesis', text: 'Vertebrae that move too much or have slipped, which an artificial disc cannot control.' },
        { title: 'Fractures and dislocations', text: 'Traumatic injuries that need rigid stabilization to heal and protect the cord.' },
        { title: 'Deformity', text: 'Kyphosis of the neck that needs to be corrected and held in position.' },
        { title: 'Revision of previous surgery', text: 'A failed disc replacement or a non union from an earlier fusion.' },
      ],
    },
    symptoms: {
      title: 'Who is a candidate?',
      text: 'Fusion is considered when symptoms are clearly caused by a problem that fusion can fix, and when conservative treatment has had a fair chance.',
      items: [
        'Arm pain, numbness or weakness from a pinched nerve that has not improved',
        'Hand clumsiness, balance problems or leg symptoms from cord compression',
        'Neck pain from instability confirmed on imaging',
        'A fracture or dislocation that needs stabilization',
        'Previous neck surgery that has not healed or has failed',
        'Anatomy or bone quality that rules out disc replacement',
      ],
      redFlags: [
        'Rapidly progressing weakness or clumsiness',
        'Loss of bladder or bowel control',
        'Cord compression with signal change on MRI',
        'An unstable injury after trauma',
      ],
    },
    diagnosis: {
      title: 'What happens during surgery',
      text: 'ACDF is a well established procedure that typically takes one to two hours per level and is performed through a small incision in a skin crease at the front of the neck.',
      steps: [
        { label: 'Access', title: 'A small incision at the front', text: 'Dr. Bhalla reaches the spine between the muscles and vessels of the neck without cutting muscle, which is why recovery is quick.' },
        { label: 'Decompress', title: 'Remove the disc and bone spurs', text: 'Under the microscope, the damaged disc and any bone pressing on the nerves or cord are removed.' },
        { label: 'Restore', title: 'Place the spacer', text: 'A spacer filled with bone graft restores the disc height and opens the nerve openings.' },
        { label: 'Secure', title: 'Plate and screws', text: 'A low profile titanium plate holds everything in place while the bone fuses over the following months.' },
      ],
    },
    treatment: {
      title: 'Fusion compared with the alternatives',
      text: 'Fusion is one of several ways to treat the same problems. Dr. Bhalla will explain why he recommends one over another for you.',
      nonSurgical: [
        'Physical therapy, medication and injections are always tried first for nerve pain',
        'Observation for mild, stable myelopathy',
        'Posterior foraminotomy for a single pinched nerve without instability',
        'Cervical disc replacement when motion can be safely preserved',
        'Laminoplasty for multi level cord compression with good alignment',
      ],
      surgical: [
        'ACDF: the gold standard for one or two level disease with instability or arthritis',
        'Multi level ACDF or corpectomy for extensive cord compression',
        'Posterior fusion for trauma, deformity or when the front approach is not suitable',
        'Hybrid surgery: fusion at one level and disc replacement at another',
      ],
    },
    livingWell: {
      title: 'Recovery after cervical fusion',
      text: 'Most patients are surprised by how quickly they feel better. Arm pain often eases immediately; the fusion itself matures over several months.',
      tips: [
        'Home the same day or the next morning in most cases.',
        'Walk from day one. A soft collar may be used for comfort for a short period.',
        'Expect a sore throat and mild swallowing discomfort for a week or so.',
        'Desk work within one to two weeks, driving once you are off strong pain medication.',
        'No heavy lifting or neck extremes for about six weeks while the fusion takes.',
        'Follow up X rays at intervals confirm the bone has fused, usually by three to six months.',
      ],
    },
    faqs: [
      {
        q: 'Will I lose movement in my neck?',
        a: 'A single level fusion removes only a few degrees of motion, which most people never notice. Multi level fusions reduce motion more. This is one reason Dr. Bhalla recommends disc replacement when it is a safe option.',
      },
      {
        q: 'Will the levels next to the fusion wear out?',
        a: 'Adjacent levels carry slightly more load after a fusion, and some patients develop problems there years later. The risk is modest and is lower with good alignment. Disc replacement is designed to reduce it further for suitable patients.',
      },
      {
        q: 'Is fusion safe?',
        a: 'ACDF has a long track record and a low complication rate. Risks include infection, swallowing difficulty, hoarseness, non union and, rarely, nerve injury. Dr. Bhalla will go through these with you in detail.',
      },
      {
        q: 'How do I know the fusion has worked?',
        a: 'Relief of arm or cord symptoms is usually clear within weeks. The bone fusion itself is confirmed on follow up X rays or CT over three to twelve months.',
      },
    ],
    relatedServices: ['cervical-disc-replacement', 'motion-preservation-surgery', 'revision-spinal-surgery'],
  },

  /* ---------------------------------------------------------------- lumbar */
  'lumbar-herniated-disc': {
    photos: [`${dir}/lumbar-herniated-disc/1.jpg`, `${dir}/lumbar-herniated-disc/2.jpg`, `${dir}/lumbar-herniated-disc/3.jpg`],
    intro:
      'A herniated disc in the lower back is the most common cause of sciatica. Most heal on their own within a few months, and when they do not, a small outpatient procedure brings relief.',
    overview: {
      title: 'What is a lumbar herniated disc?',
      text: [
        'The discs of the lower back carry more load than any others in the spine. When the soft center of a disc pushes through a tear in its outer ring, it can press on the nerve root passing behind it. The result is sciatica: pain that travels from the buttock down the leg, often with tingling, numbness or weakness in the foot. The two lowest discs, L4-5 and L5-S1, are involved in the great majority of cases.',
        'Herniations often follow a lift, a twist or simply bending to pick something up, though the disc was usually weakening for some time beforehand. The outlook is good. Most herniations shrink as the body reabsorbs the disc material, and about 90 percent of people improve within six to twelve weeks. For those who do not, microdiscectomy is a short, highly effective procedure.',
      ],
    },
    causes: {
      title: 'Common causes',
      text: 'A disc herniates when the outer ring is weakened by wear and then overloaded.',
      items: [
        { title: 'Lifting and twisting', text: 'Bending and rotating under load is the classic trigger, especially with a rounded back.' },
        { title: 'Age related wear', text: 'Discs between 30 and 50 have lost some water but still have a soft center that can herniate.' },
        { title: 'Prolonged sitting', text: 'Sitting loads the lumbar discs more than standing and weakens the outer ring over time.' },
        { title: 'Sudden injury', text: 'Falls and accidents can rupture a disc in an instant.' },
        { title: 'Genetics', text: 'A family history of disc problems raises the risk.' },
        { title: 'Smoking and excess weight', text: 'Both reduce disc nutrition and increase the load on the lower back.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'Leg symptoms are the signature of a herniated disc. Back pain may be present but is often the lesser complaint.',
      items: [
        'Sharp, shooting or burning pain from the buttock down the back or side of the leg',
        'Tingling or numbness in the leg, foot or toes',
        'Weakness lifting the foot or pushing off the toes',
        'Pain that is worse with sitting, bending forward, coughing or sneezing',
        'Relief when standing or lying down',
        'Low back pain and muscle spasm',
      ],
      redFlags: [
        'Numbness around the groin or inner thighs',
        'Difficulty passing urine or loss of bowel control',
        'Weakness in both legs or rapidly worsening weakness',
        'Severe pain that does not ease in any position',
      ],
    },
    diagnosis: {
      title: 'How we find it',
      text: 'The history and examination usually identify the level. An MRI confirms the herniation and how it relates to the nerve.',
      steps: [
        { label: 'Listen', title: 'Where the pain goes', text: 'The path of leg pain and the area of numbness point to the nerve root involved.' },
        { label: 'Examine', title: 'Nerve tension and strength', text: 'Straight leg raise, reflexes, sensation and strength of specific muscles confirm which root is affected.' },
        { label: 'Image', title: 'MRI when it will change the plan', text: 'Ordered for persistent symptoms, weakness or when a procedure is being considered.' },
        { label: 'Plan', title: 'Treat the person, not the scan', text: 'Many people have herniations on MRI without symptoms. Dr. Bhalla treats the one that matches your pain.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Conservative care works for most people. Surgery is for severe or persistent leg pain, progressive weakness, or the rare emergency of cauda equina syndrome.',
      nonSurgical: [
        'Staying active with walking rather than bed rest',
        'Physical therapy with extension exercises and nerve gliding',
        'Anti inflammatory medication or a short oral steroid course',
        'Medication for nerve pain',
        'Image guided epidural steroid injection for stubborn leg pain',
      ],
      surgical: [
        'Microdiscectomy through a small incision, usually outpatient',
        'Endoscopic discectomy for suitable herniations',
        'Lumbar disc replacement or fusion only for recurrent herniations with disc collapse',
        'Urgent decompression for cauda equina syndrome',
      ],
    },
    livingWell: {
      title: 'Helping the disc settle',
      text: 'The disc heals on its own time, but these habits reduce pressure on the nerve and prevent the next one.',
      tips: [
        'Walk daily. It is the best treatment while the disc shrinks.',
        'Limit sitting to 20 to 30 minutes at a time during a flare.',
        'Lift with your legs, keep the load close and never twist under load.',
        'Build core and hip strength once the leg pain eases.',
        'Sleep on your side with a pillow between your knees or on your back with knees supported.',
        'Keep a healthy weight and stop smoking to protect the discs.',
      ],
    },
    faqs: [
      {
        q: 'Will my herniated disc heal on its own?',
        a: 'Usually, yes. The body breaks down and absorbs the herniated material over weeks to months, and the nerve recovers. About nine in ten people improve without surgery.',
      },
      {
        q: 'When should I consider surgery?',
        a: 'When leg pain remains severe after six to twelve weeks of good conservative care, when weakness is progressing, or immediately for any bladder or bowel symptoms. Earlier surgery is also reasonable for people who cannot work or function because of the pain.',
      },
      {
        q: 'What is microdiscectomy like?',
        a: 'A one inch incision, a microscope and removal of just the piece of disc pressing on the nerve. It takes under an hour, most patients go home the same day, and leg pain is often gone when they wake up.',
      },
      {
        q: 'Can the disc herniate again?',
        a: 'Recurrence happens in roughly five to ten percent of cases, most often in the first few months. Avoiding heavy lifting and bending early on, and building core strength, reduces the risk.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'outpatient-spinal-surgery', 'lumbar-disc-replacement'],
  },

  'lumbar-radiculopathy': {
    photos: [`${dir}/lumbar-radiculopathy/1.jpg`, `${dir}/lumbar-radiculopathy/2.jpg`, `${dir}/lumbar-radiculopathy/3.jpg`],
    intro:
      'Lumbar radiculopathy, better known as sciatica, is a pinched nerve in the lower back felt as pain down the leg. It is common, usually temporary and very treatable.',
    overview: {
      title: 'What is lumbar radiculopathy?',
      text: [
        'Five pairs of nerve roots leave the lumbar spine and join to form the sciatic and femoral nerves that supply the legs. Radiculopathy means one of those roots is compressed or inflamed where it exits the spine. Because the nerve carries signals to and from a specific part of the leg, the pain, tingling and weakness follow that nerve\'s path, often all the way to the foot.',
        'A herniated disc is the usual cause in younger adults; in older adults it is more often spinal stenosis or a slipped vertebra. Whatever the cause, most people recover over weeks with activity, therapy and time. Dr. Bhalla\'s role is to confirm the source, rule out anything serious and offer injections or a small procedure for the minority who do not improve.',
      ],
    },
    causes: {
      title: 'What pinches the nerve',
      text: 'The nerve root can be squeezed by soft tissue, bone or movement, and the treatment differs for each.',
      items: [
        { title: 'Herniated disc', text: 'Disc material pressing on the root, the most common cause under 50.' },
        { title: 'Foraminal stenosis', text: 'Narrowing of the opening where the nerve leaves the spine, from disc collapse and bone spurs.' },
        { title: 'Spondylolisthesis', text: 'A vertebra that has slipped forward, stretching and pinching the nerves below it.' },
        { title: 'Facet joint cysts', text: 'Fluid filled sacs from an arthritic joint that press on a nerve.' },
        { title: 'Piriformis syndrome', text: 'Not from the spine at all: the sciatic nerve irritated by a buttock muscle. Treated differently.' },
        { title: 'Rare causes', text: 'Tumor, infection or a fracture fragment. Uncommon, but part of why evaluation matters.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'The pattern of symptoms often identifies the nerve involved before any imaging.',
      items: [
        'Pain radiating from the buttock down the back, side or front of the leg',
        'Burning, electric or shooting quality to the pain',
        'Numbness or tingling in the leg, foot or toes',
        'Weakness lifting the foot, the big toe, or straightening the knee',
        'Pain worse with sitting, bending, coughing or sneezing',
        'Usually one leg, occasionally both',
      ],
      redFlags: [
        'Numbness in the groin, inner thighs or around the rectum',
        'New difficulty passing urine or controlling the bowel',
        'Progressive or severe leg weakness',
        'Leg pain with fever, weight loss or a history of cancer',
      ],
    },
    diagnosis: {
      title: 'How we find it',
      text: 'A careful examination localizes the nerve. Imaging is used when it will change what we do.',
      steps: [
        { label: 'Listen', title: 'Tracing the pain', text: 'Where the pain travels and which part of the foot tingles identify the root.' },
        { label: 'Examine', title: 'Nerve tests', text: 'Straight leg raise, femoral stretch, reflexes, sensation and the strength of specific muscles.' },
        { label: 'Image', title: 'MRI for persistent symptoms', text: 'Shows whether a disc, bone or slippage is responsible and guides any injection or surgery.' },
        { label: 'Confirm', title: 'Nerve studies if unclear', text: 'EMG separates a spinal cause from peripheral nerve problems such as piriformis syndrome or neuropathy.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'The large majority of sciatica improves without surgery. The small minority with persistent pain or weakness can be treated with a short, minimally invasive procedure.',
      nonSurgical: [
        'Staying active and walking, with short rests as needed',
        'Physical therapy including nerve gliding and core work',
        'Anti inflammatory medication or a short steroid course',
        'Medication for nerve pain',
        'Image guided epidural or nerve root injection',
      ],
      surgical: [
        'Microdiscectomy for a herniated disc',
        'Foraminotomy to open the nerve exit',
        'Decompression with or without fusion for spondylolisthesis',
        'Outpatient procedures in most cases',
      ],
    },
    livingWell: {
      title: 'Calming the nerve',
      text: 'An irritated nerve needs movement, not rest. These habits help it settle and keep it settled.',
      tips: [
        'Walk every day, increasing distance as the leg allows.',
        'Avoid long sitting. Stand and move every 20 to 30 minutes.',
        'Use heat on the lower back and buttock for muscle spasm.',
        'Strengthen the core and glutes as pain allows to unload the spine.',
        'Avoid lifting and twisting while the nerve is inflamed.',
        'Stretch hamstrings and hips gently, without forcing a stretch that increases leg pain.',
      ],
    },
    faqs: [
      {
        q: 'How long does sciatica last?',
        a: 'Most episodes improve within four to six weeks and resolve within three months. Pain that lasts beyond that, or weakness, is the reason to see a specialist.',
      },
      {
        q: 'Should I rest or keep moving?',
        a: 'Keep moving. Bed rest beyond a day or two slows recovery. Walking and gentle activity are the most effective early treatment.',
      },
      {
        q: 'Do injections cure sciatica?',
        a: 'Injections reduce inflammation around the nerve and can give significant relief while the underlying cause settles. They do not remove a herniation, but they often buy the time the body needs to heal.',
      },
      {
        q: 'Will I need surgery?',
        a: 'Only a small minority of people with sciatica need surgery. It is recommended for persistent, disabling leg pain after a fair trial of conservative care, for progressive weakness, or urgently for bladder or bowel symptoms.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'outpatient-spinal-surgery', 'motion-preservation-surgery'],
  },

  'lumbar-stenosis': {
    photos: [`${dir}/lumbar-stenosis/1.jpg`, `${dir}/lumbar-stenosis/2.jpg`, `${dir}/lumbar-stenosis/3.jpg`],
    intro:
      'Lumbar stenosis is a narrowing of the spinal canal in the lower back. Its signature is legs that ache, tire or go numb when you walk, and feel better when you sit or lean forward.',
    overview: {
      title: 'What is lumbar stenosis?',
      text: [
        'The nerves to the legs travel through the lumbar spinal canal. With age, the discs bulge, the facet joints enlarge and the ligaments thicken, all of which narrow that canal. When the nerves are squeezed, they do not get enough blood flow when you stand and walk, and the legs become heavy, painful or numb. Bending forward or sitting opens the canal and relieves the symptoms, which is why people with stenosis lean on a shopping cart and do better on a bicycle than on foot.',
        'Lumbar stenosis is the most common reason for spine surgery in people over 65, but surgery is far from inevitable. Many people manage well for years with activity, therapy and injections. When walking distance shrinks to the point that it limits your life, a minimally invasive decompression is a very effective solution.',
      ],
    },
    causes: {
      title: 'What narrows the canal',
      text: 'Stenosis is usually the sum of several age related changes rather than one single problem.',
      items: [
        { title: 'Facet joint enlargement', text: 'Arthritic joints at the back of the spine grow larger and crowd the canal.' },
        { title: 'Thickened ligaments', text: 'The ligamentum flavum buckles and thickens with age, narrowing the canal from behind.' },
        { title: 'Bulging discs', text: 'Worn discs push backward into the front of the canal.' },
        { title: 'Spondylolisthesis', text: 'A vertebra slipping forward, which kinks the canal and often accompanies stenosis.' },
        { title: 'Bone spurs', text: 'Extra bone around the discs and joints that narrows the nerve openings.' },
        { title: 'Congenital narrowing', text: 'A canal that was small from birth and becomes symptomatic with less wear.' },
      ],
    },
    symptoms: {
      title: 'What it feels like',
      text: 'The pattern is so characteristic that it has its own name: neurogenic claudication.',
      items: [
        'Aching, heaviness, cramping or weakness in the legs when walking or standing',
        'Numbness or tingling in the legs that increases with distance',
        'Relief within minutes of sitting or leaning forward',
        'Walking distance that has gradually shrunk',
        'Easier on a bicycle or pushing a cart than walking upright',
        'Low back pain, often present but not the main problem',
      ],
      redFlags: [
        'Numbness in the groin or inner thighs',
        'Difficulty controlling the bladder or bowel',
        'Rapidly progressing leg weakness',
        'Pain at rest or at night that is getting worse',
      ],
    },
    diagnosis: {
      title: 'How we confirm it',
      text: 'The story usually makes the diagnosis. Imaging confirms where the narrowing is and how severe.',
      steps: [
        { label: 'Listen', title: 'Walking tolerance', text: 'How far you can walk, what brings relief and how this has changed over time.' },
        { label: 'Examine', title: 'Examination', text: 'Strength, reflexes and sensation, posture when walking, and checks on hip and circulation problems that mimic stenosis.' },
        { label: 'Image', title: 'MRI', text: 'Shows the degree and levels of narrowing. Standing X rays check for slippage and instability.' },
        { label: 'Plan', title: 'Match severity to symptoms', text: 'Dr. Bhalla explains how your imaging relates to your walking and lays out the options from therapy to decompression.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Stenosis progresses slowly, so there is time to try conservative care. Surgery is for people whose walking and daily life are significantly limited despite it.',
      nonSurgical: [
        'Physical therapy with flexion based exercises and core strengthening',
        'Walking, cycling and water exercise to stay fit within your limits',
        'Anti inflammatory and nerve pain medication',
        'Epidural steroid injections for flares',
        'Weight management to reduce load on the lower back',
      ],
      surgical: [
        'Minimally invasive laminectomy to remove the thickened bone and ligament',
        'Foraminotomy to open narrowed nerve exits',
        'Decompression with fusion when there is slippage or instability',
        'Outpatient or overnight stay for most decompressions',
      ],
    },
    livingWell: {
      title: 'Walking further with stenosis',
      text: 'Simple strategies keep you active and may delay or avoid the need for surgery.',
      tips: [
        'Keep walking daily, in several shorter sessions if needed.',
        'Cycle or use a recumbent bike for fitness that does not provoke leg symptoms.',
        'Use a walking pole or cart to allow a slight forward lean on longer walks.',
        'Strengthen the core and glutes, which support the spine in a neutral position.',
        'Keep a healthy weight to reduce load on the canal.',
        'Track your walking distance. It is the best measure of whether stenosis is changing.',
      ],
    },
    faqs: [
      {
        q: 'Will stenosis get worse?',
        a: 'It tends to progress slowly over years, with ups and downs. Many people remain stable for long periods. Surgery is a choice based on how much your life is limited, not something that must be done at a certain stage.',
      },
      {
        q: 'Is it my back or my circulation?',
        a: 'Both can cause leg pain with walking. Stenosis pain eases with sitting or bending forward and is often better on a bicycle; circulation pain eases simply with standing still. The examination can tell them apart.',
      },
      {
        q: 'What does decompression surgery involve?',
        a: 'Through a small incision, the thickened bone and ligament pressing on the nerves are removed, creating room for the nerves. It is usually done minimally invasively, often as an outpatient, and walking distance typically improves quickly.',
      },
      {
        q: 'Will I need a fusion?',
        a: 'Not usually. Fusion is added only when a vertebra has slipped or the spine is unstable. Most stenosis is treated with decompression alone, which preserves motion.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'outpatient-spinal-surgery', 'motion-preservation-surgery'],
  },

  'lumbar-trauma': {
    photos: [`${dir}/lumbar-trauma/1.jpg`, `${dir}/lumbar-trauma/2.jpg`, `${dir}/lumbar-trauma/3.jpg`],
    intro:
      'Injuries to the lower back range from strains that settle in days to fractures that need stabilization. A quick, accurate assessment is what separates them.',
    overview: {
      title: 'What is lumbar trauma?',
      text: [
        'Lumbar trauma is any injury to the bones, discs, ligaments or nerves of the lower back. Most are strains and sprains from lifting, twisting or a fall, which hurt but heal. More serious are compression and burst fractures of the vertebrae, injuries to the junction between the mid and lower back, and injuries that damage the nerves of the cauda equina.',
        'Fractures of the lower back happen in two very different groups: younger adults in high energy accidents such as car crashes and falls from height, and older adults with osteoporosis who fracture with a simple fall or sometimes no clear injury at all. Dr. Bhalla treats both, from bracing and kyphoplasty for stable fractures to minimally invasive stabilization for unstable ones, as part of the trauma service at MemorialCare Long Beach Medical Center.',
      ],
    },
    causes: {
      title: 'Common causes',
      text: 'The energy of the injury and the strength of the bone determine what is damaged.',
      items: [
        { title: 'Falls', text: 'From height in younger adults; from standing in older adults with weak bone.' },
        { title: 'Motor vehicle accidents', text: 'Sudden deceleration can fracture or dislocate the vertebrae, especially at the thoracolumbar junction.' },
        { title: 'Osteoporosis', text: 'Weakened vertebrae that compress with minimal force, sometimes just from bending or coughing.' },
        { title: 'Lifting and sport', text: 'Sudden loads that strain muscles and ligaments or, rarely, fracture the small bones at the back of the spine.' },
        { title: 'Workplace and crush injuries', text: 'Heavy objects, machinery and falls at work.' },
        { title: 'Pathological weakness', text: 'Bone weakened by tumor or infection that fractures with ordinary activity.' },
      ],
    },
    symptoms: {
      title: 'What to watch for',
      text: 'After a back injury, the pattern and severity of symptoms guide whether imaging is needed urgently.',
      items: [
        'Sudden severe low back pain after a fall, accident or lift',
        'Pain that is worse with movement and eases lying down',
        'Tenderness directly over the spine',
        'Muscle spasm and difficulty standing upright',
        'Pain wrapping around to the abdomen',
        'Loss of height or a new stoop in older adults',
      ],
      redFlags: [
        'Numbness, tingling or weakness in the legs after an injury',
        'Difficulty passing urine or loss of bowel control',
        'Numbness around the groin or buttocks',
        'Severe back pain after a fall in someone over 65 or with osteoporosis',
      ],
    },
    diagnosis: {
      title: 'How we assess it',
      text: 'The priority is to identify fractures and any threat to the nerves, then classify the injury as stable or unstable.',
      steps: [
        { label: 'Protect', title: 'Immobilize when in doubt', text: 'Until a serious injury is excluded, the spine is protected with a brace or log roll precautions.' },
        { label: 'Examine', title: 'Neurological examination', text: 'Strength, sensation and reflexes in the legs, and checks for bladder, bowel and groin sensation.' },
        { label: 'Image', title: 'X rays, CT and MRI', text: 'CT shows fractures in detail. MRI shows ligaments, discs and the nerves. A bone density scan follows any low energy fracture.' },
        { label: 'Plan', title: 'Stable or unstable', text: 'Dr. Bhalla classifies the injury and explains whether it can heal in a brace or needs stabilization.' },
      ],
    },
    treatment: {
      title: 'How it is treated',
      text: 'Most lumbar injuries, including many fractures, heal without surgery. Unstable injuries and those compressing the nerves are stabilized to protect the nerves and allow early mobility.',
      nonSurgical: [
        'Short rest followed by early walking for strains and stable fractures',
        'A brace for comfort and support while a stable fracture heals',
        'Pain management and muscle relaxants',
        'Physical therapy to restore movement and strength once healing allows',
        'Osteoporosis treatment after any low energy fracture',
      ],
      surgical: [
        'Kyphoplasty to stabilize a painful osteoporotic compression fracture',
        'Minimally invasive percutaneous screws and rods for unstable fractures',
        'Decompression when bone fragments press on the nerves',
        'Open fusion for complex or dislocated injuries',
      ],
    },
    livingWell: {
      title: 'Recovering from a back injury',
      text: 'Healing takes weeks. These steps protect the injury while keeping you moving.',
      tips: [
        'Walk early and often, within the limits your care team sets.',
        'Wear the brace as prescribed, and ask when it is safe to reduce its use.',
        'Avoid bending, lifting and twisting until cleared, then build back gradually.',
        'Keep follow up imaging appointments to confirm the fracture is healing in position.',
        'Treat bone health seriously after a low energy fracture. The next one is preventable.',
        'Report any new leg symptoms or bladder changes immediately.',
      ],
    },
    faqs: [
      {
        q: 'How do I know if I have a fracture or just a strain?',
        a: 'Strain pain is muscular, spreads across the low back and eases over days. Fracture pain is sharp, localized over the spine, severe with movement and often follows a fall or accident. Older adults can fracture with very little force, so pain after even a minor fall deserves an X ray.',
      },
      {
        q: 'Will a compression fracture heal on its own?',
        a: 'Most do, over six to twelve weeks, with a brace and pain control. If pain remains severe or the vertebra keeps collapsing, kyphoplasty, a minimally invasive cement procedure, can stabilize it and relieve pain quickly.',
      },
      {
        q: 'When is surgery needed?',
        a: 'When the fracture is unstable, when bone is pressing on the nerves, when there is a dislocation, or when a stable fracture fails to heal or remains intolerably painful.',
      },
      {
        q: 'Will I be able to return to my job or sport?',
        a: 'Most people return to full activity after a lumbar injury, including after surgery. The timeline depends on the injury and your work. Dr. Bhalla will give you a realistic plan and milestones.',
      },
    ],
    relatedServices: ['minimally-invasive-spinal-surgery', 'outpatient-spinal-surgery', 'revision-spinal-surgery'],
  },
};

export function getConditionContent(slug: string): ConditionContent | undefined {
  return conditionContent[slug];
}
