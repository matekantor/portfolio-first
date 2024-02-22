const quotes = [
    {
        quote: "In war, truth is the first casualty",
        author: "- Aeschylus"
    },

    {
        quote: "Incoming fire has the right of way.",
        author: "- Unknown"
    },

    {
        quote: "Mankind must put an end to war, or war will put an end to mankind.",
        author: "- John F.Kennedy"
    },

    {
        quote: "War does not determine who is right author: - only who is left",
        author: "- Burtrand Russell"
    },

    {
        quote: "A ship without Marines is like a garment without buttons.",
        author: "- Admiral David D.Porter, USN"
    },

    {
        quote: "The press is our chief ideological weapon.",
        author: "- Nikita Khrushchev"
    },

    {
        quote: "Whether you like it or not, history is on our side. We will bury you!",
        author: "- Nikita Khrushchev"
    },
    {
        quote: "If the enemy is in range, so are you.",
        author: "- Infantry Journal"
    },

    {
        quote: "So long as there are men, there will be wars.",
        author: "- Albert Einstein"
    },

    {
        quote: "Aim towards the Enemy.",
        author: "- Instruction printed on US Rocket Launcher"
    },
    {
        quote: "I think the human race needs to think about killing. How much evil must we do to do good?",
        author: "- Robert McNamara"
    },

    {
        quote: "Any military commander who is honest will admit he makes mistakes in the application of military power.",
        author: "- Robert McNamara"
    },

    {
        quote: "You can make a throne of bayonets, but you cant sit on it for long.",
        author: "- Boris Yeltsin"
    },

    {
        quote: "The deadliest weapon in the world is a Marine and his rifle!",
        author: "- General John J.Pershing"
    },

    {
        quote: "Concentrated power has always been the enemy of liberty.",
        author: "- Ronald Reagan"
    },

    {
        quote: "Whoever stands by a just cause cannot possibly be called a terrorist.",
        author: "- Yassar Arafat"
    },

    {
        quote: "Nothing in life is so exhilarating as to be shot at without result.",
        author: "- Winston Churchill"
    },

    {
        quote: "War is delightful to those who have not yet experienced it.",
        author: "- Erasmus"
    },

    {
        quote: "Friendly fire - isn't.",
        author: "- Unknown"
    },

    {
        quote: "Diplomats are just as essential in starting a war as soldiers are for finishing it.",
        author: "- Will Rogers"
    },

    {
        quote: "I think that technologies are morally neutral until we apply them. It's only when we use them for good or evil that they become good or evil.",
        author: "- William Gibson"
    },

    {
        quote: "All that is necessary for evil to succeed is for good men to do nothing.",
        author: "- Edmund Burke"
    },

    {
        quote: "Older men declare war. But it is the youth that must fight and die.",
        author: "- Herbert Hoover"
    },

    {
        quote: "The commander in the field is always right and the rear echelon is wrong, unless proved otherwise.",
        author: "- Colin Powell"
    },

    {
        quote: "Freedom is not free, but the U.S. Marine Corps will pay most of your share.",
        author: "- Ned Dolan"
    },

    {
        quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
        author: "- Albert Einstein"
    },

    {
        quote: "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
        author: "- Norman Schwarzkopf"
    },

    {
        quote: "If you know the enemy and know yourself you need not fear the results of a hundred battles.",
        author: "- Sun Tzu"
    },

    {
        quote: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
        author: "- Abraham Lincoln"
    },
    {
        quote: "If we can't persuade nations with comparable values of the merits of our cause, we'd better reexamine our reasoning.",
        author: "- Robert McNamara"
    },

    {
        quote: "The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.",
        author: "- Thomas Jefferson"
    },

    {
        quote: "If the wings are traveling faster than the fuselage, it's probably a helicopter author: -author: - and therefore, unsafe.",
        author: "- Unknown"
    },
    {
        quote: "Five second fuses only last three seconds.",
        author: "- Infantry Journal"
    },

    {
        quote: "If your attack is going too well, you're walking into an ambush.",
        author: "- Infantry Journal"
    },
    {
        quote: "No battle plan survives contact with the enemy.",
        author: "- Colin Powell"
    },

    {
        quote: "When the pin is pulled, Mr. Grenade is not our friend.",
        author: " - U.S.Army Training Notice"
    },

    {
        quote: "A man may die, nations may rise and fall, but an idea lives on.",
        author: "- John F.Kennedy"
    },

    {
        quote: "A leader leads by example, not by force.",
        author: "- Sun Tzu"
    },

    {
        quote: "If you can't remember, the claymore is pointed toward you.",
        author: "- Unknown"
    },

    {
        quote: "There are only two kinds of people that understand Marines: Marines and the enemy. Everyone else has a secondauthor: -hand opinion.",
        author: "- General William Thornson"
    },

    {
        quote: "The more marines I have around, the better I like it.",
        author: "- General Clark, U.S.Army"
    },

    {
        quote: "Never forget that your weapon was made by the lowest bidder.",
        author: "- Unknown"
    },
    {
        quote: "Keep looking below surface appearances. Don't shrink from doing so just because you might not like what you find.",
        author: "- Colin Powell"
    },

    {
        quote: "Try to look unimportant; they may be low on ammo.",
        author: "- Infantry Journal"
    },

    {
        quote: "The world will not accept dictatorship or domination.",
        author: "- Mikhail Gorbachev"
    },
    {
        quote: "Tyrants have always some slight shade of virtue; they support the laws before destroying them. ",
        author: "- Voltaire"
    },

    {
        quote: "Heroes may not be braver than anyone else. They're just brave five minutes longer.",
        author: "- Ronald Reagan"
    },

    {
        quote: "In the end, it was luck. We were *this* close to nuclear war, and luck prevented it.",
        author: "- Robert McNamara"
    },

    {
        quote: "Some people live an entire lifetime and wonder if they have ever made a difference in the world, but the Marines don't have that problem.",
        author: "- Ronald Reagan"
    },

    {
        quote: "It is generally inadvisable to eject directly over the area you just bombed.",
        author: "- U.S.Air Force Marshal"
    },

    {
        quote: "We sleep safely in our beds because rough men stand ready in the night to visit violence on those who would harm us.",
        author: "- George Orwell"
    },

    {
        quote: "If at first you don't succeed, call an air strike.",
        author: "- Unknown"
    },

    {
        quote: "Tracers work both ways.",
        author: "- U.S.Army Ordinance"
    },

    {
        quote: "Teamwork is essential, it gives them other people to shoot at.",
        author: "- Unknown"
    },

    {
        quote: "The real and lasting victories are those of peace, and not of war.",
        author: "- Ralph Waldo Emmerson"
    },

    {
        quote: "We're in a world in which the possiblity of terrorism, married up with technology, could make us very, very sorry we didn't act.",
        author: "- Condoleeza Rice"
    },

    {
        quote: "All warfare is based on deception.",
        author: "- Sun Tzu"
    },
    {
        quote: "The indefinite combination of human fallibility and nuclear weapons will lead to the destruction of nations.",
        author: "- Robert McNamara"
    },

    {
        quote: "In war, you win or lose, live or die author: - and the difference is just an eyelash.",
        author: "- General Douglas MacArthur"
    },

    {
        quote: "You cant say civilization dont advance author: - for in every war, they kill you in a new way.",
        author: "- Will Rogers"
    },

    {
        quote: "They'll be no learning period with nuclear weapons. Make one mistake and you're going to destroy nations.",
        author: "- Robert McNamara"
    },

    {
        quote: "It doesn't take a hero to order men into battle. It takes a hero to be one of those men who goes into battle.",
        author: "- General Norman Schwarzkopf"
    },

    {
        quote: "Any soldier worth his salt should be antiauthor: -war. And still, there are things worth fighting for.",
        author: "- General Norman Schwarzkopf"
    },

    {
        quote: ",It is fatal to enter any war without the will to win it.",
        author: "- General Douglas MacArthur"
    },
    {
        quote: ",Let your plans be as dark and impenetrable as night, and when you move, fall like a thunderbolt.",
        author: "- Sun Tzu"
    },

    {
        quote: ",Anyone, who truly wants to go to war, has truly never been there before!",
        author: "- Larry Reeves"
    },

    {
        quote: ",Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.",
        author: "- General Douglas MacArthur"
    },
    {
        quote: ",Whoever does not miss the Soviet Union has no heart. Whoever wants it back has no brain.",
        author: "- Vladimir Putin"
    },
    {
        quote: ",My first wish is to see this plague of mankind, war, banished from the earth.",
        author: "- George Washington"
    },

    {
        quote: ",Cluster bombing from Bauthor: -52s are very, very, accurate. The bombs are guaranteed to always hit the ground.",
        author: "- USAF Ammo Troop"
    },

    {
        quote: ",If a man has done his best, what else is there?",
        author: "- General George S.Patton"
    },

    {
        quote: ",The bursting radius of a handauthor: -grenade is always one foot greater than your jumping range.",
        author: "- Unknown"
    },
    {
        quote: ",The tyrant always talks as if he's preserving the best interests of his people when he actually acts to undermine them.",
        author: "- Ramman Kenoun"
    },

    {
        quote: "Every tyrant who has lived has believed in freedom author: - for himself.",
        author: "- Elbert Hubbard"
    },



]

