
cards = []


function LoadDeck() {

// THE MAJOR ARCANA
card = {
    "name":"The Fool",
    "arcana":"Major",
    "suit":"none",
    "description":"We are often ignorant of the path ahead. Innocence can lead us into uncertainty. Tread lightly.",
    "rank":"0",
    "symbols":"Youth. Innocence. Naivety.",
    "url":"00-TheFool",
}
cards.push(card)

card = {
    "name":"The Magician",
    "arcana":"Major",
    "suit":"none",
    "description":"Magick begins with the singular act of creation. To find our way, we often must look inward for the spark.",
    "rank":"1",
    "symbols":"Creativity. Infinity. Beginnings.",
    "url":"01-TheMagician",
}
cards.push(card)

card = {
    "name":"The High Priestess",
    "arcana":"Major",
    "suit":"none",
    "description":"Following our intuition is often the best course of action. Our unconscious often sees things our eyes miss, or choose not to see.",
    "rank":"2",
    "symbols":"The Moon. Intuition. Mystery.",
    "url":"02-TheHighPriestess",
}
cards.push(card)

card = {
    "name":"The Empress",
    "arcana":"Major",
    "suit":"none",
    "description":"This card indicates fertility and love. It is a good time to look for comfort in one's home.",
    "rank":"3",
    "symbols":"Venus. Beauty. Harmony.",
    "url":"03-TheEmpress",
}
cards.push(card)

card = {
    "name":"The Emperor",
    "arcana":"Major",
    "suit":"none",
    "description":"A sign of authority and domination, or administrative powers. The father-like Emperor seeks power at all cost.",
    "rank":"4",
    "symbols":"Aggression. Power. Maturity.",
    "url":"04-TheEmperor",
}
cards.push(card)

card = {
    "name":"The Hierophant",
    "arcana":"Major",
    "suit":"none",
    "description":"Traditional values dominate under the influence of Taurus. Religious ceremonies are implied.",
    "rank":"5",
    "symbols":"Tradition. Gatherings. Endurance.",
    "url":"05-TheHierophant",
}
cards.push(card)

card = {
    "name":"The Lovers",
    "arcana":"Major",
    "suit":"none",
    "description":"A strong relationship is implied, one that values communication and charity. Happiness follows.",
    "rank":"6",
    "symbols":"Choice. Love. Intensity.",
    "url":"06-TheLovers",
}
cards.push(card)

card = {
    "name":"The Chariot",
    "arcana":"Major",
    "suit":"none",
    "description":"The chariot is a vehicle for travel. Movement and success are indicated, but may require a great effort.",
    "rank":"7",
    "symbols":"Determination. Travel. Determination.",
    "url":"07-TheChariot",
}
cards.push(card)

card = {
    "name":"Strength",
    "arcana":"Major",
    "suit":"none",
    "description":"Control and courage are shown. You have what it takes to endure any challenge and overcome any obstacle.",
    "rank":"8",
    "symbols":"Patience. Fortitude. Confidence.",
    "url":"08-Strength",
}
cards.push(card)

card = {
    "name":"The Hermit",
    "arcana":"Major",
    "suit":"none",
    "description":"A time of study is indicated, where the analytical mind can be nurtured. Solitude and meditation can be helpful.",
    "rank":"9",
    "symbols":"Study. Discrimination. Concern.",
    "url":"09-TheHermit",
}
cards.push(card)

card = {
    "name":"The Wheel of Fortune",
    "arcana":"Major",
    "suit":"none",
    "description":"Destiny has intervened. Now is the time to act because luck is on your side. You can't fail.",
    "rank":"10",
    "symbols":"Good Luck. Expansion. Destiny.",
    "url":"10-WheelOfFortune",
}
cards.push(card)

card = {
    "name":"Justice",
    "arcana":"Major",
    "suit":"none",
    "description":"A symbol of the scales. All things are measured and accountable. Legal matters are implied.",
    "rank":"11",
    "symbols":"Balance. Estimation. Debt.",
    "url":"11-Justice",
}
cards.push(card)

card = {
    "name":"The Hanged Man",
    "arcana":"Major",
    "suit":"none",
    "description":"Neptune offers enlightenment. A reversal is in order. Personal struggle and sacrifice lead to seeing things from a new perspective.",
    "rank":"12",
    "symbols":"Neptune. Insight. Delusion.",
    "url":"12-TheHangedMan",
}
cards.push(card)

card = {
    "name":"Death",
    "arcana":"Major",
    "suit":"none",
    "description":"All things must come to end. We many experience several spiritual deaths in our life. They are often a chance to start fresh.",
    "rank":"13",
    "symbols":"Regeneration. Phoenix. Change.",
    "url":"13-Death",
}
cards.push(card)

card = {
    "name":"Temperance",
    "arcana":"Major",
    "suit":"none",
    "description":"All things in moderation. Balance the intellectual with the spiritual. It may be time to exercise caution.",
    "rank":"14",
    "symbols":"Rules. Limitations. Refinement.",
    "url":"14-Temperance",
}
cards.push(card)

card = {
    "name":"The Devil",
    "arcana":"Major",
    "suit":"none",
    "description":"Feelings of entrapment surround you. You are focusing so much on the goal you've neglected everything else.",
    "rank":"15",
    "symbols":"Sex. Restrictions. Addiction.",
    "url":"15-TheDevil",
}
cards.push(card)

card = {
    "name":"The Tower",
    "arcana":"Major",
    "suit":"none",
    "description":"Mars, the god of war, has brought havoc to your world. Sudden, massive change sweeps everything away.",
    "rank":"16",
    "symbols":"Upheaval. War. Destruction.",
    "url":"16-TheTower",
}
cards.push(card)

card = {
    "name":"The Star",
    "arcana":"Major",
    "suit":"none",
    "description":"A good sign for those seeking success! Everyone will see your talent soon. Get ready for the big time!",
    "rank":"17",
    "symbols":"Communication. Art. Inspiration.",
    "url":"17-TheStar",
}
cards.push(card)

card = {
    "name":"The Moon",
    "arcana":"Major",
    "suit":"none",
    "description":"Something is lurking beneath the surface. Your unconscious is trying to open your eyes to something hidden.",
    "rank":"18",
    "symbols":"Secrets. Deception. Darkness.",
    "url":"18-TheMoon",
}
cards.push(card)

card = {
    "name":"The Sun",
    "arcana":"Major",
    "suit":"none",
    "description":"This card represents a person's full life force. Vitality, regeneration, and joy are all suggested by The Sun.",
    "rank":"19",
    "symbols":"Victory. Ego. Warmth.",
    "url":"19-TheSun",
}
cards.push(card)

card = {
    "name":"Judgement",
    "arcana":"Major",
    "suit":"none",
    "description":"The god of the underworld brings something up from below. A revelation is at hand. Prepare for an awakening.",
    "rank":"20",
    "symbols":"Pluto. Subconscious desires. Revival.",
    "url":"20-Judgement",
}
cards.push(card)

card = {
    "name":"The World",
    "arcana":"Major",
    "suit":"none",
    "description":"The World is the final goal of the Major Arcana. It represents completion and wisdom. An open mind is indicated.",
    "rank":"21",
    "symbols":"Saturn. Reward. Growth.",
    "url":"21-TheWorld",
}
cards.push(card)

// THE MINOR ARCANA
//WANDS
card = {
    "name":"Ace of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"A new opportunity will be presented, but it's up to you to act upon it.",
    "rank":"1",
    "symbols":"Change. Inspiration. Possibility.",
    "url":"Wands01",
}
cards.push(card)

card = {
    "name":"Two of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"What does one do with success? Learning to take maters into your own hands is not always easy.",
    "rank":"2",
    "symbols":"Property. Success. Planning.",
    "url":"Wands02",
}
cards.push(card)

card = {
    "name":"Three of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"Sometimes it's necessary to turn your back on a situation and cut ties with the past. It can lead to long-term improvements.",
    "rank":"3",
    "symbols":"Stability. Home. Instinct.",
    "url":"Wands03",
}
cards.push(card)

card = {
    "name":"Four of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"It's time for relaxing and socializing with friends. Use this opportunity to get out and live your life.",
    "rank":"4",
    "symbols":"Celebration. Friendship. Joy.",
    "url":"Wands04",
}
cards.push(card)

card = {
    "name":"Five of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"Conflict is everywhere. Your struggle feels epic and unwinnable, but it's important to keep fighting and not give up.",
    "rank":"5",
    "symbols":"Conflict. Stress. Anger.",
    "url":"Wands05",
}
cards.push(card)

card = {
    "name":"Six of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"This is the card of victory over one's enemies. It can indicate great leadership skills.",
    "rank":"6",
    "symbols":"Victory. Leadership. Hope.",
    "url":"Wands06",
}
cards.push(card)

card = {
    "name":"Seven of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"You are feeling defensive. Imaginary assailants comes at you from the dark. Some of them may be in your imagination.",
    "rank":"7",
    "symbols":"Tension. Anxiety. Defense.",
    "url":"Wands07",
}
cards.push(card)


card = {
    "name":"Eight of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"This is the card of speed. It could mean travel, or a sudden change of course. Fear not, the end is near.",
    "rank":"8",
    "symbols":"Movement. Speed. Resolution.",
    "url":"Wands08",
}
cards.push(card)

card = {
    "name":"Nine of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"When you feel your back against the wall, you may be facing more than you can handle. It is the time for caution.",
    "rank":"9",
    "symbols":"Fear. Caution. Pressure.",
    "url":"Wands09",
}
cards.push(card)

card = {
    "name":"Ten of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"The journey will soon come to and end, the destination is in sight, but a huge effort is needed now to finish the job.",
    "rank":"10",
    "symbols":"Trouble. Endings. Resolve.",
    "url":"Wands10",
}
cards.push(card)

card = {
    "name":"Page of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"New ideas are formulation. This card suggest youthful energy and a good start to new projects.",
    "rank":"Page",
    "symbols":"Youth. Inspiration. Talent.",
    "url":"Wands11",
}
cards.push(card)

card = {
    "name":"Knight of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"The Knight is a champion of ideals and philosophical beliefs. He will not back down from a challenge.",
    "rank":"Knight",
    "symbols":"Fire. Idealism. Aggression.",
    "url":"Wands12",
}
cards.push(card)

card = {
    "name":"Queen of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"Calm and collected, the Queen is stable in her position and need not fear anyone. She trusts her instincts.",
    "rank":"Queen",
    "symbols":"Fire. Security. Instinct.",
    "url":"Wands13",
}
cards.push(card)

card = {
    "name":"King of Wands",
    "arcana":"Minor",
    "suit":"Wands",
    "description":"This King represents strength and inspiration. He brings matters to their conclusion once and for all.",
    "rank":"King",
    "symbols":"Fire. Strength. Satisfaction.",
    "url":"Wands14",
}
cards.push(card)

//CUPS
card = {
    "name":"Ace of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description":"This card often represents a new love or relationship. You will have the chance to fall in love.",
    "rank":"1",
    "symbols":"Intensity. Family. Pleasure.",
    "url":"Cups01",
}
cards.push(card)

card = {
    "name":"Two of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description":"Harmony and balance are implied. Your communication skills may lead to unexpected gains.",
    "rank":"2",
    "symbols":"Intensity. Family. Pleasure.",
    "url":"Cups02",
}
cards.push(card)

card = {
    "name":"Three of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "A celebration is at hand. You could see an invitation to a party, or a dance. Now is a good time to enjoy oneself.",
    "rank":"3",
    "symbols":"Friendship. Celebration. Happiness.",
    "url":"Cups03",
}
cards.push(card)

card = {
    "name":"Four of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "Something unexpected is offered. Do you accept it? Or do you let the opportunity slip by?",
    "rank":"4",
    "symbols":"Chance. Balance. Bitter.",
    "url":"Cups04",
}
cards.push(card)

card = {
    "name":"Five of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "Difficulties and disappointment come for us all. The sadness washes over us, and takes our pain with it.",
    "rank":"5",
    "symbols":"Melancholy. Failure. Loss.",
    "url":"Cups05",
}
cards.push(card)

card = {
    "name":"Six of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "People from your past may suddenly resurface, or feelings of nostalgia may be playing an important role. Listen to your dreams for guidance.",
    "rank":"6",
    "symbols":"Insight. Family. Nostalgia.",
    "url":"Cups06",
}
cards.push(card)

card = {
    "name":"Seven of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "You are lost in a world of illusions. Your mind wonders between nightmares and dreams. Stay focused to escape the phantasm.",
    "rank":"7",
    "symbols":"Dreams. Sanity. Sin.",
    "url":"Cups07",
}
cards.push(card)

card = {
    "name":"Eight of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "It could be a good idea to distance yourself from your problems at this time. It's okay to take time for yourself.",
    "rank":"8",
    "symbols":"Wandering. Abandonment. Loss.",
    "url":"Cups08",
}
cards.push(card)

card = {
    "name":"Nine of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "Emotional satisfaction and contentment are indicated. Feelings of self-worth are well earned. Experience shows itself in your work.",
    "rank":"9",
    "symbols":"The Sun. Valor. Success.",
    "url":"Cups09",
}
cards.push(card)

card = {
    "name":"Ten of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "This could be a family gathering or other celebration. Either way, it shows happiness and contentment: a life with meaning.",
    "rank":"10",
    "symbols":"The Sun. Love. Family.",
    "url":"Cups10",
}
cards.push(card)

card = {
    "name":"Page of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "New feelings of love, new anticipations, and uncharted territories come with this card. Your emotions will guide you into a new experience.",
    "rank":"Page",
    "symbols":"Fish. Love. Hope.",
    "url":"Cups11",
}
cards.push(card)

card = {
    "name":"Knight of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "Being able to voice your feelings is important. The Knight of Cups feels no shame in his feelings. He hold his cup with a steady hand.",
    "rank":"Knight",
    "symbols":"Expansion. Support. Stability.",
    "url":"Cups12",
}
cards.push(card)

card = {
    "name":"Queen of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "This card shows contentment, especially with one's home. The Queen is stable in her domain, but filled with passion.",
    "rank":"Queen",
    "symbols":"Strength. Support. Passion.",
    "url":"Cups13",
}
cards.push(card)

card = {
    "name":"King of Cups",
    "arcana":"Minor",
    "suit":"Cups",
    "description": "An emotional event has come to and end, and the King's passion is renewed. He is full of feelings of resolution.",
    "rank":"King",
    "symbols":"Growth. Completion. Time.",
    "url":"Cups14",
}
cards.push(card)

//SWORDS
card ={
    "name":"Ace of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "This is the card of triumph and victory. It can indicate that one is starting down a new path and in control.",
    "rank":"1",
    "symbols":"The Sky. Confidence. Victory.",
    "url":"Swords01",
}
cards.push(card)

card = {
    "name":"Two of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "Patience is needed. Sometimes it's best to let's events flow of their own accord. A choice may be required of you.",
    "rank":"2",
    "symbols":"Water. Secrets. Calmness.",
    "url":"Swords02",
}
cards.push(card)

 card = {
    "name":"Three of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "Heartache strikes like a bolt of lightning. Distance and detachment come after a terrible loss.",
    "rank":"3",
    "symbols":"Delay. Separation. Melancholy.",
    "url":"Swords03",
}
cards.push(card)

card = {
    "name":"Four of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "When this card appears, it can mean a physical death is near. Patience and rest are necessary now.",
    "rank":"4",
    "symbols":"Death. Illness. Anguish.",
    "url":"Swords04",
}
cards.push(card)

card = {
    "name":"Five of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "A card of battles. Victory comes, but at what cost? This card can mean someone is watching you.",
    "rank":"5",
    "symbols":"Battle. Compromise. Challenge.",
    "url":"Swords05",
}
cards.push(card)

card = {
    "name":"Six of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "Like a flowing river, change is constant. A change of perspective may be coming. Expect to travel.",
    "rank":"6",
    "symbols":"Water. Travel. Change.",
    "url":"Swords06",
}
cards.push(card)

card = {
    "name":"Seven of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "This is a card of deception. Someone could be playing you for the fool, or you may be behind enemy lines.",
    "rank":"7",
    "symbols":"Intrigue. Danger. Secrets.",
    "url":"Swords07",
}
cards.push(card)

card = {
    "name":"Eight of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "You may feel surrounded, cut off from allies. The path of escape is hidden from view. Look inward. What you seek is near you.",
    "rank":"8",
    "symbols":"Subconscious. Deception. Prisoner.",
    "url":"Swords08",
}
cards.push(card)

 card = {
    "name":"Nine of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "Anxiety and despair engulf you. Life feels like a nightmare. You stand on the edge of a dark abyss.",
    "rank":"9",
    "symbols":"Mars. Darkness. Suffering.",
    "url":"Swords09",
}
cards.push(card)

card = {
    "name":"Ten of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "The end has arrived. The hero is dismembered and a great catharsis occurs. A spiritual awakening may follow.",
    "rank":"10",
    "symbols":"Death. Sacrifice. Suffering.",
    "url":"Swords10",
}
cards.push(card)

 card = {
    "name":"Page of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "New paths need steady hands to forge them. The Page of Swords knows what he wants and he seeks it ambitiously.",
    "rank":"Page",
    "symbols":"Idealism. Industry. Talent.",
    "url":"Swords11",
}
cards.push(card)

card = {
    "name":"Knight of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "No other Knight can compete with this one. When he puts his mind to something, the world trembles in anticipation.",
    "rank":"Knight",
    "symbols":"Resolve. Leadership. Courage.",
    "url":"Swords12",
}
cards.push(card)

card = {
    "name":"Queen of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "The Queen of Swords seeks truth. Her resolve is unbreakable. Her mind is fixed. Her ideals are strong.",
    "rank":"Queen",
    "symbols":"The Moon. Stability. Idealism.",
    "url":"Swords13",
}
cards.push(card)

card = {
    "name":"King of Swords",
    "arcana":"Minor",
    "suit":"Swords",
    "description": "The master of rational thought, the King of Swords sits on the edge of his throne. He has fought hard battles. He has paid the price of power.",
    "rank":"King",
    "symbols":"Earth. Strength. Logic.",
    "url":"Swords14",
}
cards.push(card)

//PENTACLES

card = {
    "name":"Ace of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "A material reward is on its way. It could be a raise at work, an unexpected gift, or a new opportunity.",
    "rank":"1",
    "symbols":"Wealth. Success. Fulfillment.",
    "url":"Pentacles01",
}
cards.push(card)

card = {
    "name":"Two of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "This card can indicate problems with money. It can also mean instability, and the need to look at both sides of the coin, so to speak.",
    "rank":"2",
    "symbols":"Loss. Anxiety. Instability.",
    "url":"Pentacles02",
}
cards.push(card)

card = {
    "name":"Three of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "Artistic talent and creativity reach their maturity in the diligent craftsman. One's work is judged by the masters, and well received.",
    "rank":"3",
    "symbols":"Creativity. Talent. Work.",
    "url":"Pentacles03",
}
cards.push(card)

card = {
    "name":"Four of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "A miserly attitude is indicated. One holds onto material things at the expense of spiritual fulfillment. Flexibility is necessary.",
    "rank":"4",
    "symbols":"Wealth. Risk. Property.",
    "url":"Pentacles04",
}
cards.push(card)

card = {
    "name":"Five of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "This card represents insecurity. Hard times have come, and one's resources are limited. Without support from family and friends, you may be left in the cold.",
    "rank":"5",
    "symbols":"Loss. Travel. Anxiety.",
    "url":"Pentacles05",
}
cards.push(card)

card = {
    "name":"Six of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "When this card shows up, it can mean winning money. An unexpected gift may also be coming, or a major debt will be repaid.",
    "rank":"6",
    "symbols":"Saturn. Wealth. Justice.",
    "url":"Pentacles06",
}
cards.push(card)

card = {
    "name":"Seven of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "It's time to look back and appreciate your hard work. Part of growth is analyzing that growth and learning from your past.",
    "rank":"7",
    "symbols":"Ambition. Wealth. Perspective.",
    "url":"Pentacles07",
}
cards.push(card)

card = {
    "name":"Eight of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "Diligence and hard work are implied. You may be getting a second job or working long hours. Difficult, but rewarding times are here.",
    "rank":"8",
    "symbols":"Resolve. Talent. Work.",
    "url":"Pentacles08",
}
cards.push(card)

card = {
    "name":"Nine of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "Reaping one's reward is the meaning of this card. Your hard work has paid off and now you can enjoy the fruits of your labor.",
    "rank":"9",
    "symbols":"Success. Reward. Growth.",
    "url":"Pentacles09",
}
cards.push(card)

card = {
    "name":"Ten of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "One meaning of this card is getting recognized for one's talents. It could also mean winning a large sum of money, or receiving an inheritance.",
    "rank":"10",
    "symbols":"Wealth. Good Luck. Family.",
    "url":"Pentacles10",
}
cards.push(card)

card = {
    "name":"Page of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "This card represents a practical minded person who is good with their finances. They have a talent for making money and the ambition to use it.",
    "rank":"Page",
    "symbols":"Wealth. Status. Youth.",
    "url":"Pentacles11",
}
cards.push(card)

card = {
    "name":"Knight of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "This Knight cares only about what it can hold in his hands. His actions must have results. His movements are taken with the utmost determination.",
    "rank":"Knight",
    "symbols":"Resolve. Speed. Power.",
    "url":"Pentacles12",
}
cards.push(card)

card = {
    "name":"Queen of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "She touches the earth from her throne. She has the confidence that comes from material comfort. She may be a widower.",
    "rank":"Queen",
    "symbols":"Earth. Wealth. Security.",
    "url":"Pentacles13",
}
cards.push(card)

card = {
    "name":"King of Pentacles",
    "arcana":"Minor",
    "suit":"Pentacles",
    "description": "This King is the master of the Earth. His rule is as old as time, and as bountiful. He brings growth and prosperity to everything he touches.",
    "rank":"King",
    "symbols":"Earth. Time. Growth.",
    "url":"Pentacles14",
}
cards.push(card)
}

function ShuffleDeck(){
  for ( var i = 0; i < 1000; i++){
    var loc1 = Math.floor(Math.random()*cards.length);
    var loc2 = Math.floor(Math.random()*cards.length);

    var temp = cards[loc1];
    cards[loc1] = cards[loc2];
    cards[loc2] = temp;
  }
}

LoadDeck();
ShuffleDeck();
