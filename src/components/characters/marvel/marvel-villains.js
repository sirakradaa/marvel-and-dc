import { marvelChars } from './../../../images/marvel-images';

export const MarvelVillains = () => {

    return(
        [
            {
                name: 'Green Goblin',
                img: marvelChars.Greengoblin,
                description: `Norman is the CEO of science company Oscorp. Norman 
                has a strained relationship with his son and often neglects him in favor of 
                Harry's best friend, Peter Parker, because he views himself as the only father 
                figure in the boy's life after his Uncle Ben is killed. When Oscorp faces 
                financial difficulties and Norman is pressured to secure a government contract
                 to save it from bankruptcy, he tests an unstable performance-enhancement serum
                  on himself, developing enhanced physical abilities and a split personality. 
                  This new persona, later dubbed the "Green Goblin" by the Daily Bugle, occasionally 
                  takes over Norman's body to exact revenge on their enemies, using advanced military 
                  equipment stolen from Oscorp.`,
                affiliations: `Oscorp,
                Sinister Twelve,
                Daily Bugle,
                Commission on Superhuman Activities,
                Thunderbolts,
                H.A.M.M.E.R.,
                Dark Avengers,
                Dark X-Men,
                Cabal,
                Goblin Nation,
                Power Elite.`,
                placement: 0,
            },

            {
                name: 'Thanos',
                img: marvelChars.Thanos,
                description: `Thanos was a genocidal warlord from Titan, 
                whose objective was to bring stability to the universe by 
                wiping out half of all life at every level, as he believed 
                its massive population would inevitably use up the universe's 
                entire supply of resources and perish. To complete this goal, 
                Thanos set about hunting down all the Infinity Stones, being 
                confident that the combined force of the Stones would grant him 
                sufficient power.`,
                affiliations: `Infinity Watch,
                Black Order.`,
                placement: 0,
            },

            {
                name: 'Red Skull',
                img: marvelChars.Redskull,
                description: `Johann Schmidt is the former head of HYDRA, the 
                special weapons division of the Nazi Schutzstaffel and a modern-day 
                incarnation of the ancient society. Having become a confidant of
                 Adolf Hitler during World War II, Schmidt gained ambitions to 
                 become the superior man, leading him to test the version of 
                 Abraham Erskine's Super Soldier Serum on himself, resulting with 
                 him becoming hideously disfigured as well as gaining the name of 
                 Red Skull. While he led HYDRA, Red Skull had found the Tesseract 
                 which he had believed could help him to control the world.`,
                affiliations: `HYDRA,
                Nazi Germany (SS-Oberführer),
                Kronas Corporation,
                Exiles,
                U.L.T.I.M.A.T.U.M.,
                Skeleton Crew.`,
                placement: 0,
            },

            {
                name: 'Magneto',
                img: marvelChars.Magneto,
                description: `Known by many names, Erik Lehnsherr is a powerful mutant 
                willing to go to any extreme to protect his species as Magneto, the master 
                of magnetism. During his youth, he suffered atrocities at the hands of 
                the Nazis in Auschwitz. After escaping, he learned at this cost of his own 
                daughter's life that he had the mutant ability to generate and control 
                magnetic fields, a condition that caused additional hate and fear from 
                those who were different from him. Being a target for so long and 
                explicitly rejecting the possibility of any harmony with humans, Magneto 
                aimed to conquer the world to enable mutants, whom he refers to as Homo 
                superior, to become the dominant species on Earth.`,
                affiliations: `Brotherhood of Mutants,
                X-Men,
                New Mutants,
                Hellfire Club,
                Acolytes,
                Astonishing Avengers,
                Quiet Council of Krakoa.`,
                placement: 0,
            }
        ]
    )
}