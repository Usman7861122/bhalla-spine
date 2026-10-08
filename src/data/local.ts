/**
 * City focus used on service and condition pages. One place to edit the cities and the wording.
 * A service can still override this with its own `local` block in services.ts.
 */

export const localCity = 'Long Beach, CA';

/** Communities patients travel from. Edit freely. */
export const localAreas = [
  'Long Beach',
  'Signal Hill',
  'Lakewood',
  'Seal Beach',
  'Los Alamitos',
  'Cypress',
  'Bellflower',
  'Torrance',
  'Huntington Beach',
  'Carson',
];

export interface LocalFocus {
  city: string;
  eyebrow: string;
  banner: string;
  areas: string[];
  sectionTitle: string;
  text: string[];
}

type Kind = 'service' | 'condition' | 'group';

const lc = (s: string) => s.toLowerCase();

export function localFor(topic: string, kind: Kind): LocalFocus {
  const area = 'with patients welcome from across South Bay, Orange County and the greater Los Angeles area.';
  const spine = 'Dr. Bhalla leads the Spine Center at MemorialCare Long Beach Medical Center.';

  if (kind === 'service') {
    return {
      city: localCity,
      eyebrow: `Care services · ${localCity}`,
      banner: `${topic} in Long Beach, ${area}`,
      areas: localAreas,
      sectionTitle: `${topic} in ${localCity}`,
      text: [
        `Dr. Bhalla provides ${lc(topic)} for people in Long Beach and the surrounding cities. ${spine}`,
        'If you live in Signal Hill, Lakewood, Seal Beach, Orange County or anywhere nearby, a consultation is a short drive away.',
      ],
    };
  }
  if (kind === 'condition') {
    return {
      city: localCity,
      eyebrow: '',
      banner: `${topic} care in Long Beach, ${area}`,
      areas: localAreas,
      sectionTitle: `${topic} treatment in ${localCity}`,
      text: [
        `If you are living with ${lc(topic)} in Long Beach or a nearby city, Dr. Bhalla can examine you, explain your options and plan the least invasive treatment that will work. ${spine}`,
        'Most people start with a consultation and imaging. Patients come from Signal Hill, Lakewood, Seal Beach, Orange County and across Southern California.',
      ],
    };
  }
  return {
    city: localCity,
    eyebrow: '',
    banner: `${topic} care in Long Beach, ${area}`,
    areas: localAreas,
    sectionTitle: `${topic} care in ${localCity}`,
    text: [
      `Dr. Bhalla diagnoses and treats ${lc(topic)} for people in Long Beach and the surrounding cities. ${spine}`,
      'Patients come from Signal Hill, Lakewood, Seal Beach, Orange County and across Southern California for an expert second opinion or a first consultation.',
    ],
  };
}
