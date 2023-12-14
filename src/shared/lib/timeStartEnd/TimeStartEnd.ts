export const timeStart = (date: Date, number: number) => {
    switch (number){
        case(1): {
            return new Date(date.setHours(8))
        }
        case(2): {
            return new Date(new Date(date.setHours(9)).setMinutes(45))
        }
        case(3): {
            return new Date(new Date(date.setHours(11)).setMinutes(30))
        }
        case(4): {
            return new Date(new Date(date.setHours(13)).setMinutes(50))
        }
        case(5): {
            return new Date(new Date(date.setHours(15)).setMinutes(35))
        }
        case(6): {
            return new Date(new Date(date.setHours(17)).setMinutes(20))
        }
    }
}
export const timeEnd = (date: Date, number: number) => {
    switch (number){
        case(1): {
            return new Date(new Date(date.setHours(9)).setMinutes(30))

        }
        case(2): {
            return new Date(new Date(date.setHours(11)).setMinutes(15))
        }
        case(3): {
            return new Date(new Date(date.setHours(13)).setMinutes(0))
        }
        case(4): {
            return new Date(new Date(date.setHours(15)).setMinutes(20))
        }
        case(5): {
            return new Date(new Date(date.setHours(17)).setMinutes(5))
        }
        case(6): {
            return new Date(new Date(date.setHours(18)).setMinutes(50))
        }
    }
}
