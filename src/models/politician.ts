import PoliticianRecord from './politician-record'
import SocialLink from './social-link'
import State from './state'

export enum PoliticianCategory {
    Senator = 1,
    FederalDeputy = 2,
}

export enum Party {
    MC = 1,
    MORENA = 2,
    NUEVA_ALIANZA = 3,
    PAN = 4,
    PARTIDO_VERDE = 5,
    PRD = 6,
    PRI = 7,
    PT = 8,
    PVEM = 9,
}

export const PartyName = {
    [Party.MC]: 'Movimiento Ciudadano',
    [Party.MORENA]: 'Morena',
    [Party.NUEVA_ALIANZA]: 'Nueva Alianza',
    [Party.PAN]: 'PAN',
    [Party.PARTIDO_VERDE]: 'Partido Verde',
    [Party.PRD]: 'PRD',
    [Party.PRI]: 'PRI',
    [Party.PT]: 'PT',
    [Party.PVEM]: 'Partido verde',
}

interface Politician {
    id: number
    name: string
    email: string
    legislature: string
    active: boolean
    party: Party
    birth_date: Date
    telephone: string
    photo_url: string
    legislative_experience: string
    swearing_date: Date
    academic_preparation: string
    location: ''
    last_degree_of_studies: string
    state: State
    district: string
    city: string
    relative_majority: boolean
    committee_history: PoliticianRecord[]
    administrative_history: PoliticianRecord[]
    legislative_history: PoliticianRecord[]
    political_history: PoliticianRecord[]
    academic_history: PoliticianRecord[]
    private_experience: PoliticianRecord[]
    other_experience: PoliticianRecord[]
    category: PoliticianCategory
    social_links: SocialLink[]
}

export default Politician
