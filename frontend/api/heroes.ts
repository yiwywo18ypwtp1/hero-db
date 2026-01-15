import axios from "axios";
import { HeroList } from "@/types/heroType";

// export const getHeroesList = async () => {
//     const res: HeroList = [
//         {
//             _id: 1,
//             nickname: "Superman",
//             real_name: "Clark Kent",
//             origin_description: `
//             he was born Kal-El on the planet Krypton, before being
//             rocketed to Earth as an infant by his scientist father Jor-El, moments before
//             Krypton's destruction...
//         `,
//             superpowers: `
//             solar energy absorption and healing factor, solar flare and heat vision,
//             solar invulnerability, flight...
//         `,
//             catch_phrase: `“Look, up in the sky, it's a bird, it's a plane, it's Superman!`,
//             images: [
//                 "/heroes/superman-1.jpg",
//             ]
//         },
//         {
//             _id: 2,
//             nickname: "Batman",
//             real_name: "Bruce Wayne",
//             origin_description: `
//         As a child, Bruce Wayne witnessed the murder of his parents in a dark Gotham alley.
//         Traumatized by their deaths, he dedicated his life to training his mind and body to
//         wage a one-man war on crime as the masked vigilante known as Batman...
//     `,
//             superpowers: `
//         peak human physical and mental condition, genius-level intellect,
//         mastery of martial arts, advanced technology and tactical expertise...
//     `,
//             catch_phrase: `“I am vengeance. I am the night. I am Batman.”`,
//             images: [
//                 "/heroes/batman-1.jpg",
//             ]
//         },
//         {
//             _id: 3,
//             nickname: "Wonder Woman",
//             real_name: "Diana Prince",
//             origin_description: `
//         Diana was sculpted from clay by Queen Hippolyta and brought to life by the Greek gods.
//         Raised on the hidden island of Themyscira, she left her homeland to protect humanity
//         and bring peace to a world consumed by war...
//     `,
//             superpowers: `
//         superhuman strength, speed and durability, divine combat skills,
//         enhanced senses, immortality and mastery of magical weapons...
//     `,
//             catch_phrase: `“I will fight for those who cannot fight for themselves.”`,
//             images: [
//                 "/heroes/wonder-woman-1.jpg",
//             ]
//         },
//         {
//             _id: 4,
//             nickname: "The Flash",
//             real_name: "Barry Allen",
//             origin_description: `
//         Barry Allen was struck by lightning after being doused in chemicals during a storm.
//         The accident granted him access to the Speed Force, allowing him to move faster than
//         the speed of light and become Central City’s fastest hero...
//     `,
//             superpowers: `
//         superhuman speed, accelerated healing, time travel,
//         phasing through objects and enhanced reflexes...
//     `,
//             catch_phrase: `“Life doesn’t give us purpose. We give life purpose.”`,
//             images: [
//                 "/heroes/flash-1.jpg",
//             ]
//         },
//         {
//             _id: 5,
//             nickname: "Iron Man",
//             real_name: "Tony Stark",
//             origin_description: `
//         Genius inventor and billionaire industrialist Tony Stark was captured by terrorists
//         and gravely injured. Using his intellect, he built a powered suit of armor to escape,
//         later refining it to become the high-tech hero known as Iron Man...
//     `,
//             superpowers: `
//         powered exoskeleton granting superhuman strength and flight,
//         advanced weaponry, artificial intelligence systems and engineering genius...
//     `,
//             catch_phrase: `“I am Iron Man.”`,
//             images: [
//                 "/heroes/ironman-1.jpg",
//             ]
//         },
//         {
//             _id: 6,
//             nickname: "Spider-Man",
//             real_name: "Peter Parker",
//             origin_description: `
//         Peter Parker gained extraordinary abilities after being bitten by a radioactive spider.
//         Struggling to balance his personal life with heroism, he learned that with great power
//         comes great responsibility as he protects New York City...
//     `,
//             superpowers: `
//         superhuman strength and agility, wall-crawling,
//         spider-sense, enhanced reflexes and web-shooting technology...
//     `,
//             catch_phrase: `“With great power comes great responsibility.”`,
//             images: [
//                 "/heroes/spiderman-1.jpg",
//             ]
//         },
//         {
//             _id: 7,
//             nickname: "Spider-Man",
//             real_name: "Peter Parker",
//             origin_description: `
//         Peter Parker gained extraordinary abilities after being bitten by a radioactive spider.
//         Struggling to balance his personal life with heroism, he learned that with great power
//         comes great responsibility as he protects New York City...
//     `,
//             superpowers: `
//         superhuman strength and agility, wall-crawling,
//         spider-sense, enhanced reflexes and web-shooting technology...
//     `,
//             catch_phrase: `“With great power comes great responsibility.”`,
//             images: [
//                 "/heroes/spiderman-1.jpg",
//             ]
//         },
//     ];

//     return res;
// };

export const getAll = async (page: number = 1, limit: number = 6) => {
    return await axios.get("http://localhost:5001/heroes", {
        params: { page, limit },
    });
};