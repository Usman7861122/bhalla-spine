/**
 * Six articles carried over from the previous website. They keep their ORIGINAL web addresses
 * (for example /recovery-after-disc-replacement-what-to-expect/) so search rankings carry over.
 * The text is the original text. Photos use the site's own photos until the originals are supplied.
 */
/* Site photos (same files as `images` in site.ts; not imported to avoid a circular import). */
const images = {
  spineModel: '/images/C1A3704-scaled-e1747239020857.jpg',
  consultSeated: '/images/C1A4022-scaled-e1747319220831.jpg',
  consultWindow: '/images/C1A3700-scaled-e1747321966109.jpg',
  handshake: '/images/C1A4046-scaled-e1747322027611.jpg',
  handshakeScreen: '/images/C1A4003-scaled-e1747321991364.jpg',
};

export interface LegacyPost {
  /** Original address on the old site, no slashes. */
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  /** Article body as HTML. */
  body: string;
}

export const legacyPosts: LegacyPost[] = [
  {
    slug: 'recovery-after-disc-replacement-what-to-expect',
    title: 'Recovery After Disc Replacement: What to Expect',
    excerpt:
      'Most patients walk within hours and many return to light office work in one to two weeks. Here is a typical recovery timeline after artificial disc replacement.',
    date: '2026-03-11',
    readTime: '2 min read',
    category: 'Articles',
    image: images.consultSeated,
    body: `
<p>One of the most common questions patients ask Dr. Bhalla is, “How soon can I get back to my normal life?” Because disc replacement is typically performed using minimally invasive techniques, the recovery trajectory is often more rapid than traditional open spinal surgeries.</p>
<h2>How long is the recovery for artificial disc replacement?</h2>
<p>Most patients are able to walk within hours of the procedure and often return home the same day or after a single overnight stay. While initial soreness is expected, many patients return to light office work within 1 to 2 weeks. Full recovery, including a return to high-impact sports or heavy lifting, typically occurs between 6 to 12 weeks, depending on the individual’s healing process and the specific level of the spine treated (cervical vs. lumbar).</p>
<h3>Milestones in your recovery journey</h3>
<p>Dr. Bhalla emphasizes a personalized recovery plan, but most patients follow a similar timeline:</p>
<ul>
<li><strong>Weeks 1-2:</strong> Focus on walking and gentle movement. Patients are encouraged to avoid heavy lifting or excessive twisting of the spine.</li>
<li><strong>Weeks 3-6:</strong> Physical therapy may begin to strengthen the core and supporting spinal muscles. Range of motion gradually increases.</li>
<li><strong>Week 12 and Beyond:</strong> Most restrictions are lifted. Patients often report a significant “restoration of mobility” that allows them to return to hobbies they had previously abandoned due to pain.</li>
</ul>
<h2>Why Choose Dr. Amandeep Bhalla for Your Recovery?</h2>
<p>Restoring mobility and relieving pain are at the heart of Dr. Bhalla’s practice. As a leading spine surgeon in <strong>Long Beach, California</strong>, he combines technical excellence in complex spinal procedures with a compassionate, patient-centered approach. By choosing a surgeon who specializes in minimally invasive microsurgery, you are choosing a path designed for long-term relief and improved function.</p>
<p><strong>Visit Us for an Evaluation:</strong> Dr. Amandeep Bhalla, M.D. 3610 Long Beach Blvd, Suite 202, Long Beach, CA 90807</p>`,
  },
  {
    slug: 'what-are-the-primary-symptoms-of-an-osteoporotic-compression-fracture',
    title: 'What are the primary symptoms of an osteoporotic compression fracture?',
    excerpt:
      'Sudden back pain that eases when you lie down, a loss of height or a curved posture can all point to a spinal compression fracture. Learn the warning signs.',
    date: '2026-03-11',
    readTime: '2 min read',
    category: 'Articles',
    image: images.spineModel,
    body: `
<p>For many adults in <strong>Long Beach</strong>, an osteoporotic compression fracture can occur without a major fall or trauma. In a spine weakened by osteoporosis, simple daily movements like reaching for a shelf, sneezing, or lifting a grocery bag can cause a vertebra to collapse. Because these fractures can happen gradually, the symptoms are sometimes mistaken for general age-related back pain, making it vital to recognize the specific warning signs of a spinal fracture.</p>
<h2>How can I tell if my back pain is a compression fracture?</h2>
<p>The most common symptom of an osteoporotic compression fracture is sudden, localized back pain that worsens when standing or walking and feels significantly better when lying down. Unlike a typical muscle strain, this pain is often centered directly over the spine. Over time, as multiple vertebrae are affected, patients may notice a gradual loss of height or the development of a curved posture, often referred to as a “dowager’s hump” or kyphosis. If you experience sharp pain that radiates around the ribcage or have difficulty twisting your torso, these are strong indicators that a vertebral collapse has occurred.</p>
<p>Early diagnosis is key to preventing further spinal deformity. When a vertebra collapses, it changes the alignment of the spine, which puts increased pressure on the surrounding bones and increases the risk of “linked” fractures. <strong>Dr. Amandeep Bhalla</strong> specializes in diagnosing these fractures through advanced imaging and providing personalized treatment plans that focus on stabilizing the spine and managing pain quickly. By addressing the fracture early, we can often stop the cycle of progressive height loss and restore your ability to move comfortably.</p>
<p><strong>Visit Our Long Beach Office:</strong> 3610 Long Beach Blvd, Suite 202, Long Beach, CA 90807</p>`,
  },
  {
    slug: 'can-a-spinal-compression-fracture-heal-without-surgery',
    title: 'Can a spinal compression fracture heal without surgery?',
    excerpt:
      'Most osteoporotic compression fractures heal with bracing, activity changes, therapy and treatment of the bone loss. Here is when a procedure may be needed.',
    date: '2026-03-11',
    readTime: '2 min read',
    category: 'Articles',
    image: images.handshake,
    body: `
<p>When a patient is diagnosed with an osteoporotic compression fracture, the first question is often whether surgery is a necessity. The answer depends largely on the severity of the collapse and the level of pain the patient is experiencing. In many cases, conservative, non-surgical management is the first line of defense, but it requires a structured approach to ensure the bone heals correctly without leading to long-term postural issues.</p>
<h2>What are the non-surgical treatment options for a compression fracture?</h2>
<p>Most osteoporotic compression fractures can heal without surgery through a combination of bracing, activity modification, and medical management. A specialized back brace is often used to limit motion at the fracture site, allowing the bone to stabilize. This is paired with a short period of rest and a transition into physical therapy to strengthen the supporting core muscles. Additionally, treating the underlying osteoporosis with calcium, Vitamin D, and bone-strengthening medications is essential to prevent future fractures. However, if the pain remains debilitating after a few weeks of conservative care, or if the fracture is causing a significant forward hunch, minimally invasive procedures like kyphoplasty may be recommended to restore bone height.</p>
<p><strong>Dr. Amandeep Bhalla</strong> focuses on a patient-centered approach, ensuring that surgery is only considered when non-surgical methods do not provide adequate relief or stability. For patients in the Long Beach area, our goal is to achieve long-term relief and improved function. Whether through conservative bracing or advanced minimally invasive techniques, we work to stabilize the spine and address the underlying bone density issues that caused the fracture in the first place, helping you return to your quality of life with confidence.</p>
<p><strong>Schedule a Consultation:</strong> 3610 Long Beach Blvd, Suite 202, Long Beach, CA 90807</p>`,
  },
  {
    slug: 'what-causes-cervical-radiculopathy-and-can-it-be-treated-without-surgery',
    title: 'What causes cervical radiculopathy, and can it be treated without surgery?',
    excerpt:
      'A pinched nerve in the neck is usually caused by wear and tear, and most people improve within 6 to 12 weeks without an operation. Here is what helps.',
    date: '2026-03-11',
    readTime: '3 min read',
    category: 'Articles',
    image: images.consultWindow,
    body: `
<p>Cervical radiculopathy, commonly referred to as a “pinched nerve” in the neck, occurs when a nerve root in the cervical spine becomes compressed or inflamed. This condition can lead to sharp pain, numbness, or a “pins and needles” sensation that radiates from the neck down into the shoulder, arm, or hand. For many patients in <strong>Long Beach</strong>, understanding the root cause is the first step toward effective relief.</p>
<h2>What are the primary causes of a pinched nerve in the neck?</h2>
<p>The most frequent causes of cervical radiculopathy are <strong>degenerative changes</strong> in the spine. As we age, spinal discs may lose height and bulge (herniated disc), or the body may develop bone spurs (osteophytes) to compensate for joint instability. Both of these conditions can narrow the space where the nerve roots exit the spinal canal, leading to direct pressure on the nerves. In younger patients, this is often the result of a sudden injury or disc herniation, whereas in older adults, it is typically a gradual result of spinal wear and tear or arthritis.</p>
<h2>Can cervical radiculopathy be treated non-surgically?</h2>
<p>The good news is that the majority of patients with cervical radiculopathy do not require surgery. Most cases resolve with conservative management within 6 to 12 weeks. Initial treatment typically focuses on reducing inflammation through:</p>
<ul>
<li><strong>Physical Therapy:</strong> Specific exercises to strengthen neck muscles and improve flexibility.</li>
<li><strong>Activity Modification:</strong> Avoiding postures or lifting that aggravate the nerve.</li>
<li><strong>Medications:</strong> Anti-inflammatory drugs or muscle relaxants to manage acute symptoms.</li>
<li><strong>Epidural Steroid Injections:</strong> Targeted injections to reduce swelling directly around the affected nerve root.</li>
</ul>
<p><strong>Expert Care with Dr. Amandeep Bhalla.</strong> Dr. Amandeep Bhalla, M.D., specializes in restoring mobility for patients suffering from complex spinal conditions. By combining a compassionate, patient-centered approach with advanced diagnostic tools, he ensures each individual receives a personalized treatment plan designed for long-term relief. Whether through conservative care or minimally invasive techniques, the goal is to return you to your daily activities without the burden of chronic pain.</p>
<p><strong>Contact Our Long Beach Office:</strong> 3610 Long Beach Blvd, Suite 202, Long Beach, CA 90807. Phone: (562) 427-8119</p>`,
  },
  {
    slug: 'when-is-surgery-necessary-for-a-pinched-nerve-in-the-neck',
    title: 'When is surgery necessary for a pinched nerve in the neck?',
    excerpt:
      'Surgery is considered when there is muscle weakness, severe numbness or pain that does not improve after 6 to 12 weeks of care. Here are the warning signs.',
    date: '2026-03-11',
    readTime: '3 min read',
    category: 'Articles',
    image: images.handshakeScreen,
    body: `
<p>While non-surgical treatments are the starting point for most patients, there are specific instances where conservative measures are not enough to resolve the symptoms of cervical radiculopathy. When pain becomes debilitating or neurological function is at risk, surgical intervention may be the most effective path to preventing permanent nerve damage and restoring quality of life.</p>
<h2>What are the warning signs that I might need surgery for cervical radiculopathy?</h2>
<p>Surgery is typically considered when a patient experiences “progressive neurological deficits” or pain that fails to respond to 6–12 weeks of physical therapy and medication. Key indicators that surgery may be necessary include:</p>
<ul>
<li><strong>Muscle Weakness:</strong> Difficulty lifting the arm or a noticeable loss of grip strength in the hand.</li>
<li><strong>Severe Numbness:</strong> A persistent loss of sensation that interferes with fine motor skills, like buttoning a shirt or typing.</li>
<li><strong>Intractable Pain:</strong> Chronic, severe pain that prevents sleep or basic daily functioning despite aggressive conservative treatment.</li>
<li><strong>Diagnostic Evidence:</strong> MRI or CT scans showing significant compression on the spinal cord or nerve roots that is unlikely to resolve on its own.</li>
</ul>
<h2>What surgical options are available?</h2>
<p>Dr. Amandeep Bhalla specializes in advanced, <strong>minimally invasive techniques</strong> designed to decompress the nerve with minimal disruption to the surrounding tissues. Common procedures include <strong>Anterior Cervical Discectomy and Fusion (ACDF)</strong> or <strong>Cervical Disc Replacement</strong>. These procedures aim to remove the source of the pressure, whether it is a bone spur or a herniated disc, and stabilize the spine to prevent future issues.</p>
<h2>Why Choose Dr. Bhalla in Long Beach?</h2>
<p>As a board-certified spine surgeon, Dr. Amandeep Bhalla is known for his commitment to excellence and innovation in spinal care. He takes the time to understand each patient’s unique needs, ensuring that surgery is only recommended when it is truly the best option for long-term function and pain relief. By utilizing the most advanced care available, Dr. Bhalla helps patients in the Southern California community regain their independence and mobility.</p>
<p><strong>Schedule a Consultation:</strong> Dr. Amandeep Bhalla, M.D. 3610 Long Beach Blvd, Suite 202, Long Beach, CA 90807. Phone: (562) 427-8119</p>`,
  },
  {
    slug: 'when-should-you-see-an-orthopedic-surgeon-in-long-beach',
    title: 'When Should You See an Orthopedic Surgeon in Long Beach?',
    excerpt:
      'Instability, shooting pain, night pain or trouble bearing weight are red flags. Here is how to tell everyday aches from problems that need a specialist.',
    date: '2026-03-11',
    readTime: '3 min read',
    category: 'Articles',
    image: images.consultSeated,
    body: `
<p>Whether you are an active athlete or simply trying to navigate your daily routine pain-free, musculoskeletal health is the foundation of your mobility. Many people in <strong>Long Beach</strong> live with nagging joint pain or back stiffness for months, assuming it is just a natural part of aging. However, persistent pain is often the body’s way of signaling that an underlying issue, such as a ligament tear, degenerative disc disease, or osteoarthritis, needs professional attention. Recognizing the difference between a minor strain and a condition requiring expert orthopedic care is essential to preventing long-term damage.</p>
<h2>What is the difference between general joint pain and an orthopedic emergency?</h2>
<p>While minor aches often resolve with rest and over-the-counter anti-inflammatories, certain “red flag” symptoms indicate that you should schedule an evaluation with an orthopedic specialist immediately. You should seek expert care if you experience:</p>
<ul>
<li><strong>Instability or Giving Way:</strong> If your knee, ankle, or hip feels unstable or “locks” during movement.</li>
<li><strong>Radiating Pain or Numbness:</strong> Sharp, shooting pain that travels from the spine into the extremities (often a sign of nerve compression).</li>
<li><strong>Inability to Bear Weight:</strong> If you cannot put pressure on a limb without significant pain.</li>
<li><strong>Night Pain:</strong> Discomfort that is severe enough to wake you from sleep or prevent you from finding a comfortable resting position.</li>
<li><strong>Visible Deformity:</strong> Any noticeable change in the alignment of a joint or limb following an injury.</li>
</ul>
<h2>The benefit of a specialist’s approach to “Coordinated Care”</h2>
<p>Choosing an orthopedic surgeon like <strong>Dr. Amandeep Bhalla</strong> means moving beyond “quick fixes” and toward a comprehensive joint health pathway. Modern orthopedic care in 2026 focuses on <strong>motion preservation</strong> and personalized recovery. This means that surgery is rarely the first step. Instead, a specialist evaluates your full episode of care, considering everything from your diagnostic imaging (MRIs and X-rays) to your long-term activity goals. By coordinating physical therapy, minimally invasive techniques, and advanced surgical options when necessary, a specialist ensures the most efficient route back to your quality of life.</p>
<h2>Why Long Beach Patients Trust Dr. Amandeep Bhalla</h2>
<p>As a board-certified spine surgeon with deep expertise in both minimally invasive techniques and complex spinal procedures, Dr. Amandeep Bhalla is dedicated to restoring mobility and relieving pain for the Long Beach community. Known for his compassionate, patient-centered approach, Dr. Bhalla takes the time to understand each individual’s needs, combining innovation with excellence in care. Whether you are dealing with a trauma-related injury or a chronic degenerative disorder, our office provides the advanced care necessary for long-term relief and improved function.</p>
<p>Don’t let persistent pain dictate your lifestyle. Early intervention by an orthopedic specialist can often prevent the progression of joint and spinal conditions, allowing for more conservative treatment options.</p>
<p><strong>Visit Our Long Beach Office:</strong> 3610 Long Beach Blvd, Suite 202 Long Beach, CA 90807. <strong>Phone:</strong> (562) 427-8119</p>`,
  },
];
