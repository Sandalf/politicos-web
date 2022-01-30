import http from './http'

export default {
    getAll() {
        return http.get('politicians')
    },
    findById(id: string | number) {
        return http.get('politicians/' + id)
    },
}
