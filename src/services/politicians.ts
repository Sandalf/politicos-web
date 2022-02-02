import http from './http'
import { PoliticianCategory } from '../models/politician'

export default {
    findById(id: string | number) {
        return http.get('politicians/' + id)
    },
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
    getStateSenators(stateCode: string) {
        return http.get('politicians', {
            params: {
                state_code: stateCode,
                category: PoliticianCategory.Senator,
            },
        })
    },
    search(text: string) {
        return http.get('politicians/search', {
            params: {
                text,
            },
        })
    },
    image(url: string) {
        const id = new URL(url).pathname.substr(-11, 7)
        return http.get('politicians/image', {
            params: {
                image_id: id,
            },
        })
    },
}
