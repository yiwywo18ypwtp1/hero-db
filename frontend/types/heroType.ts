export type HeroType = {
    _id: number,
    nickname: string,
    real_name: string,
    origin_description: string,
    superpowers: string,
    catch_phrase: string,
    images: string[] | null,
}

export type HeroList = HeroType[]