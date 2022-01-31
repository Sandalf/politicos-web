import http from './http'
import { PoliticianCategory } from '../models/politician'

export default {
    getAll() {
        return http.get('politicians')
    },
    getStateDeputies(stateCode: string) {
        return http.get('politicians', {
            params: {
                state_code: stateCode,
                category: PoliticianCategory.FederalDeputy,
            },
        })
    },
    findById(id: string | number) {
        return http.get('politicians/' + id)
    },
}
