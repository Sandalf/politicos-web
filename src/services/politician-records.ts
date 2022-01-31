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
}
