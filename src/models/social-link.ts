export enum SocialLinkType {
    Website = 1,
    Facebook = 2,
    Twitter = 3,
    YouTube = 4,
    Instagram = 5,
}

interface SocialLink {
    type: SocialLinkType
    url: string
}

export default SocialLink
