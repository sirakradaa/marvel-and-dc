import { marvelChars } from './../../../images/marvel-images';

export const MarvelHeroes = () => {

    return(
        [
            {
                name: 'Spider-Man',
                img: marvelChars.Spiderman,
                description: `Sometimes student, sometimes scientist and sometimes photographer, 
                Peter Parker is a full-time super hero better known as the web-slinging and 
                wall-crawling Spider-Man. As an orphaned child, Peter was raised by his Uncle 
                Ben and Aunt May. At a science expo, Peter was bitten by an errant radioactive 
                spider which granted him an array of arachnid powers.  At a science expo, Peter was bitten 
                by an errant radioactive spider which granted him an array of arachnid powers.`,
                affiliations: `	Avengers, 
                Fantastic Four, 
                Secret Defenders, 
                Future Foundation, 
                Daily Bugle, 
                Heroes for Hire, 
                X-Men, 
                League of Realms, 
                Mighty Avengers, 
                New Avengers, 
                S.H.I.E.L.D., 
                Spider-Army/Web-Warriors.`,
                placement: 0,
            },
            
            {
                name: 'Iron Man',
                img: marvelChars.Ironman,
                description: `Tony Stark is a genius inventor and billionaire industrialist, 
                who suits up in his armor of cutting-edge technology to become the super hero Iron Man. 
                The adopted son of weapons manufacturer Howard Stark, Tony inherited his family's 
                company at a young age following his parents' death. While overseeing a manufacturing 
                plant in a foreign country, Stark was kidnapped by local terrorists. Instead of giving in 
                to his captors' demands to build weapons for them, Stark created a powerful suit of armor 
                for himself to escape. Returning to America, Stark further upgraded the armor and put 
                his vast resources and intellect to use for the betterment of the world as Iron Man.`,
                affiliations: `Avengers,
                A.I. Army,
                Department of Defense,
                Force Works,
                New Avengers,
                Guardians of the Galaxy,
                Illuminati,
                Mighty Avengers,
                S.H.I.E.L.D.,
                Stark Industries,
                Stark Resilient.`,
                placement: 0,
            },
            
            {
                name: 'Doctor Strange',
                img: marvelChars.Drstrange,
                description: `Dr. Stephen Strange, M.D., a.k.a. Doctor Strange, was the Sorcerer 
                Supreme for Earth-616. Strange was once a brilliant but arrogant neurosurgeon, 
                until a car accident crippled his hands. When modern medicine failed him, he 
                embarked on a journey to Kamar-Taj in Tibet, where he was trained by the Ancient One.
                 He healed his hands and learned more about Magic, eventually becoming a Master 
                of the Mystic Arts. He settled in the Sanctum Sanctorum in Greenwich Village, 
                New York City, becoming the Earth's protector from any mystical threats.`,
                affiliations: `Avengers,
                Defenders,
                Illuminati,
                Infinity Watch,
                Midnight Sons,
                New Avengers,
                The Order.`,
                placement: 0,
            },
            
            {
                name: 'Wolverine',
                img: marvelChars.Wolverine,
                description: `Wolverine (born James "Jimmy" Howlett), also referred to as The 
                Wolverine and also known as Logan, was a mutant born with retractable forearm 
                claws, enhanced physical parameters, and a powerful healing factor. The co-leader 
                of the X-Men, he was also a famous hero and warrior being a veteran of multiple wars.
                After leading the X-Men for many years and earning a legendary reputation, Logan 
                became old and vulnerable due to the poisoning of his admantium skeleton, resulting in his healing factor failing.`,
                affiliations: `X-Men,
                Avengers,
                Canadian Army,
                OSS/CIA,
                Avengers Unity Squad,
                Alpha Flight,
                New Avengers,
                New Fantastic Four,
                Savage Avengers,
                Weapon X,
                X-Force.`,
                placement: 0,
            }
        ]
    )
}