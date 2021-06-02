let famousQuotes = [
  'The two most important days in your life are the day you are born and the day you find out why.', 
  'Humor is mankind’s greatest blessing.', 
  'It usually takes me more than three weeks to prepare a good impromptu speech.', 
  'Twenty years from now you will be more disappointed by the things you didn’t do than by the things you did.', 
  'The secret to getting ahead is getting started.', 
  'Get your facts first, then you can distort them as you please.',
  'Writing is easy.  All you have to do is cross out the wrong words.',
  'There are lies, damned lies and statistics.',
  'Go to Heaven for the Climate, Hell for the company.',
  'When in doubt, tell the truth.', 
  'Kindness is a language which the deaf can hear and the blind can see.', 
  'Always do what is right.  It will gratify half of mankind and astound the other.', 
  'It’s no wonder that truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities.  Truth isn’t.', 
  'It’s better to keep your mouth shut and appear stupid than to open it and remove all doubt.', 
  'If you tell the truth, you don’t have to remember anything.',
  'Courage is resistance to fear, master of fear, not absence of fear.', 
  'Human beings can be awful cruel to one another.',
  'Honesty: The best of all the lost arts.',
  'Conservatism is the blind and fear-filled worship of dead radicals.', 
  'The source of all humor is not laughter, but sorrow.',
  'Never have a battle of wits with an unarmed person.', 
  'The more things are forbidden, the more popular they become.',
  'All you need in this life is ignorance and confidence; then success is sure.', 
  'Loyalty to a petrified opinion never yet broke a chain or freed a human soul.', 
  'I didn\'t attend the funeral, but I sent a nice letter saying I approved of it.',
  'Ours is a terrible religion. The fleets of the world could swim in spacious comfort in the innocent blood it has spilt.', 
  'A wise man does not waste so good a commodity as lying for naught.',
  'Whenever I get the urge to write, I lie down and it usually passes.',
  'A full belly is of little worth where the mind is starved, and the heart.',
  'Be careful about reading health books. You may die of a misprint.',
  'If you hold a cat by the tail, you learn things you can\'t learn any other way.',
  'The reports of my death have been greatly exaggerated.', 
  'The best way to cheer yourself up is to try to cheer somebody else up.',
  'Suppose you were an idiot, and suppose you were a member of Congress; but I repeat myself.',
  'Wrinkles should merely indicate where smiles have been.', 'Action speaks louder than words but not nearly as often.', 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.', 
  'Giving up smoking is the easiest thing in the world. I know because I’ve done it thousands of times.', 
  'Part of the secret of a success in life is to eat what you like and let the food fight it out inside.', 
  'You can’t depend on your eyes when your imagination is out of focus.', 
  'There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.', 
  'When I was younger I could remember anything, whether it happened or not.', 
  'If it’s your job to eat a frog, it’s best to do it first thing in the morning. And If it’s your job to eat two frogs, it’s best to eat the biggest one first.', 
  'Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.', 
  'A man’s character may be learned from the adjectives which he habitually uses in conversation.', 
  'The man who does not read good books has no advantage over the man who cannot read them.', 
  'The most interesting information comes from children, for they tell all they know and then stop.', 
  'Thousands of geniuses live and die undiscovered – either by themselves or by others.', 
  'All you need in this life is ignorance and confidence, and then success is sure.', 
  'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.', 
  'Age is an issue of mind over matter. If you don’t mind, it doesn’t matter.', 
  'The lack of money is the root of all evil.', 
  'Clothes make the man. Naked people have little or no influence on society.', 
  'It’s not the size of the dog in the fight, it’s the size of the fight in the dog.', 
  'Why is it that we rejoice at a birth and grieve at a funeral? It is because we are not the person involved.', 
  'Never put off ‘til tomorrow what you can do the day after tomorrow.', 
  'Let us make a special effort to stop communicating with each other, so we can have some conversation.', 
  'Write without pay until somebody offers to pay.', 
  'Action speaks louder than words but not nearly as often.'
];

//ORIGINAL
// function newQuote() {
//   let randomNumber = Math.floor(Math.random() * (famousQuotes.length));
//   document.getElementById('quoteDisplay').innerHTML = famousQuotes[randomNumber];
// }


//second try
//array to hold viewed quotes
let viewedQuotes = [];
let splicedQuote = [];

function newQuote() {
  if (famousQuotes.length == 0) {
  // if empty, reload the main list and empty the viewed list
    famousQuotes = viewedQuotes.splice(0, viewedQuotes.length)};
  let randNum = Math.floor(Math.random() * famousQuotes.length);
  document.getElementById('quoteDisplay').innerHTML = famousQuotes[randNum]
  let splicedQuote = famousQuotes.splice(randNum, 1);
  console.log("splicedQuote", splicedQuote);
  // take it out of the main list and add it to the viewed list
  viewedQuotes.push(splicedQuote); 
  console.log("viewedQuotes", viewedQuotes);
}
