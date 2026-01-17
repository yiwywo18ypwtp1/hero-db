export type HeroType = {
    _id: string,
    nickname: string,
    real_name: string,
    origin_description: string,
    superpowers: string,
    catch_phrase: string,
    images: string[] | null,
}

export type HeroList = HeroType[]

export type HeroUpdate = {
    _id?: string,
    nickname?: string,
    real_name?: string,
    origin_description?: string,
    superpowers?: string,
    catch_phrase?: string,
    images?: string[] | null,
}