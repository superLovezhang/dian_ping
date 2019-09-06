import axios from 'axios'

export const clickToChangeCity = (data) => {
    return {
        value: data.value,
        type: data.type
    }
}