import { dcChars } from './../../../images/dc-images';

export const DCHeroes = () => {

    return(
        [
            {
                name: 'Batman',
                img: dcChars.Batman,
                description: `The Batman is the superhero protector of Gotham City, a tortured, 
                brooding vigilante dressed as a bat who fights against evil and strikes fear 
                into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, 
                billionaire industrialist and notorious playboy. Although he has no superhuman 
                abilities, he is one of the world's smartest men and greatest fighters. 
                His physical prowess, technical ingenuity, and tactical thinking make him 
                an incredibly dangerous opponent. He is also a founding member of the Justice League.`,
                affiliations: 
                    `Batman Family,
                    Outsiders,  
                    Guild of Detection ·
                    Formerly Wayne Enterprises,
                    Batman Inc.,
                    Justice League,
                    Justice League International,
                    Justice League of America,
                    Gotham Knights,
                    Justice League: Team Entropy.`,
                placement: 0,
            },
            
            {
                name: 'Superman',
                img: dcChars.Superman,
                description: `Superman, born Kal-El and legally named Clark Kent, 
                is the last son of Krypton, sent as the dying planet's last hope 
                to Earth, where he grew to become its protector. `,
                affiliations: `Daily Planet,
                Superman Family,
                The Authority ·
                Formerly Justice League,
                Justice League: Team Mystery,
                Sinestro Corps.`,
                placement: 0,
            },
            
            {
                name: 'Wonder Woman',
                img: dcChars.Wonderwoman,
                description: `Wonder Woman is the princess Diana, the daughter of 
                Hippolyta, Queen of the Amazons and Zeus, the mightiest of the Gods 
                of Olympus. Diana volunteered to leave behind her home of Themyscira
                 and champion the Amazons' message of peace, fighting for justice and 
                 equality in Man's World. She is a founding member of the Justice League.`,
                affiliations: `
                Amazons of Themyscira,
                Justice League ·
                Formerly Justice League Dark,
                Justice Society of America,
                Star Sapphire Corps,
                Female Furies,
                Sinestro Corps,
                Gods of Olympus,
                Justice League: Team Wonder,
                Lords of Chaos,
                All-Star Squadron.`,
                placement: 0,
            },
            
            {
                name: 'Flash',
                img: dcChars.Flash,
                description: `Barry Allen is The Flash,
                 the fastest man alive. Using his super-speed powers, 
                 he taps into the Speed Force and becomes a costumed 
                 crime-fighter. He is a founding member of the Justice League.`,
                affiliations: `Flash Family ·
                Formerly Justice Incarnate ·
                Justice League ·
                Justice League: Team Wisdom.`,
                placement: 0,
            }
        ]
    )
}