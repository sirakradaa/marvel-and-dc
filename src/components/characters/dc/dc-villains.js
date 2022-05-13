import { dcChars } from './../../../images/dc-images';

export const DCVillains = () => {

    return(
        [
            {
                name: 'Joker',
                img: dcChars.Joker,
                description: `The Joker is a homicidal maniac and the arch-nemesis of Batman. 
                Though his precise origin is unknown even to him, he is known to have been 
                forced to swim through a vat of chemicals which turned his skin white, his 
                hair green and left his face permanently locked in a rictus grin.`,
                affiliations: `League of Villainy,
                Legion of Doom ·
                Formerly Red Hood Gang.`,
            },

            {
                name: 'Lex Luthor',
                img: dcChars.Lexluthor,
                description: `Lex Luthor is the genius, ego-centered Metropolis
                 businessman who, with his company LexCorp, and scientifically 
                 advanced Warsuit, has acted as both an antagonist and ally to 
                 Superman and the Justice League.`,
                affiliations: `Batman Incorporated,
                Legion of Doom,
                LexCorp,
                PerForm,
                Totality ·
                Formerly A.R.G.U.S.,
                Daily Planet,
                Justice League,
                Injustice League,
                Apokolips,
                Justice League: Team Entropy,
                Superman Family.`,
            },

            {
                name: 'Darkseid',
                img: dcChars.Darkseid,
                description: `Darkseid is the tyrannical ruler of Apokolips, a sadistic, 
                aggressive and merciless tyrant who has invaded and conquered countless 
                worlds throughout the universe. As the God of Tyranny, Darkseid seeks to 
                enslave all things to his will using the Anti-Life Equation.`,
                affiliations: `
                Great Darkness,
                Dark Army ·
                Formerly Apokolips.`,
            },

            {
                name: 'Bane',
                img: dcChars.Bane,
                description: `Bane was an international super-criminal who used his intellect 
                and immense strength, enhanced by a drug called Venom, in his furious and 
                violent pursuit for power. He once set his sights on Gotham City, making 
                him an enemy of Batman.`,
                affiliations: `
                Task Force Z ·
                Formerly League of Assassins,
                Secret Society of Super-Villains.`,
            }
        ]
    )
}