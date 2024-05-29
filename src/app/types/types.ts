export type CarModelDTO = {
    code: string,
    description: string
    colors: CarColorDTO[]
}

export type CarColorDTO = {
    code: string
    description: string
    price: number
}

export type CarConfigurationDTO = {
    configs: CarInfoTypoDTO[]
    towHitch: boolean
    yoke: boolean
}

export type CarInfoTypoDTO = {
    id: number
    description: string
    range: number
    speed: number
    price: number
}

export type CarDetails = {
    code?: string,
    description?: string
    color?: CarColorDTO
    config?: CarInfoTypoDTO
    towHitch?: boolean
    yoke?: boolean
}