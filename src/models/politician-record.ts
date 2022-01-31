enum PoliticianRecordType {
    CommitteeHistory = 1,
    AdministrativeHistory = 2,
    LegislativeHistory = 3,
    PoliticalHistory = 4,
    AcademicHistory = 5,
    PrivateExperience = 5,
    OtherExperience = 6,
}

interface PoliticianRecord {
    id: string | number
    start_date: string
    end_date: string
    description: string
    type: PoliticianRecordType
}

export default PoliticianRecord
