import http from './http'

export default {
    getCommitteeHistory(politicianId: string | number) {
        return http.get('politician_records/committee_history', {
            params: {
                politician_id: politicianId,
            },
        })
    },

    getAdministrativeHistory(politicianId: string | number) {
        return http.get('politician_records/administrative_history', {
            params: {
                politician_id: politicianId,
            },
        })
    },

    getLegislativeHistory(politicianId: string | number) {
        return http.get('politician_records/legislative_history', {
            params: {
                politician_id: politicianId,
            },
        })
    },

    getPoliticalHistory(politicianId: string | number) {
        return http.get('politician_records/political_history', {
            params: {
                politician_id: politicianId,
            },
        })
    },

    getAcademicHistory(politicianId: string | number) {
        return http.get('politician_records/academic_history', {
            params: {
                politician_id: politicianId,
            },
        })
    },

    getPrivateExperience(politicianId: string | number) {
        return http.get('politician_records/private_experience', {
            params: {
                politician_id: politicianId,
            },
        })
    },

    getOtherExperience(politicianId: string | number) {
        return http.get('politician_records/other_experience', {
            params: {
                politician_id: politicianId,
            },
        })
    },
}
