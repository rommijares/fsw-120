import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Info.js';

function App() {
  return (
    <div className="App">

      <Info 
        text = {{title: 'The Castle of Otranto', subtitle: 'A Gothic Story', information: 'A novel by Horace Walpole, published under a pseudonym in 1764 (though first editions bear the next year’s date). It is considered the first Gothic novel in the English language, and it is often said to have founded the horror story as a legitimate literary form.', color:'red' }}
      />

      <Info 
        text = {{title: 'Frankenstein', subtitle: 'The Modern Prometheus', information: `Portentous, perhaps, but Mary Shelley's subtitle to Frankenstein fearlessly declared that its author was making a modern myth. Now the gods are gone, humans make their own destroyers. Shelley was handing an essay title to generations of students.`, color:'gray' }}
      /> 

      <Info 
        text = {{title: ' Madame Bovary', subtitle: 'Moeurs de Province', information: `Flaubert's quietly sardonic subtitle for Madame Bovary was calculated to make the book even more provoking to its ﬁrst readers. The story of adultery, stupidity and despair was presented as a study of "provincial habits". It was like saying, "this is what goes on in lovely Normandy"`, color:'blue' }}
      />

      <Info 
        text = {{title: 'The Good Soldier ', subtitle: 'A Tale of Passion', information: `A 1915 novel by the British writer Ford Madox Ford. It is set just before World War I, and chronicles the tragedy of Edward Ashburnham, the soldier to whom the title refers, and his seemingly perfect marriage, along with that of his two American friends. The novel is told using a series of flashbacks in non-chronological order, a literary technique that formed part of Ford's pioneering view of literary impressionism. Ford employs the device of the unreliable narrator to great effect, as the main character gradually reveals a version of events that is quite different from what the introduction leads the reader to believe. The novel was loosely based on two incidents of adultery and on Ford's messy personal life.`, color:'lightGreen' }}
      />

      <Info 
        text = {{title: 'Vanity Fair', subtitle: 'A Novel Without a Hero', information: 'Vanity Fair may be set during the Napoleonic wars, but Vanity Fair, Thackeray tells us, is where we all live, all the time. It is indeed an unheroic place. The subtitle lets us know in advance that no one will ride in on a charger to rescue the virtuous or punish the vicious.', color:'orange' }}
      />

      <Info 
        text = {{title: 'The Wanderer', subtitle: 'Female Diffculties', information: 'When she gave this subtitle to The Wanderer, it was almost as if Fanny Burney foresaw all those academics writing feminist articles on her oeuvre. Juliet, a mysterious and penniless émigrée from revolutionary France, tries to make her way in London and encounters every kind of "diffculty" - but the subtitle indicates that this is a lengthy parable of the female condition', color:'purple' }}
      />

      <Info 
        text = {{title: 'The Secret Agent', subtitle: 'A Simple Tale', information: 'Joseph Conrad insisted on this mordant subtitle for The Secret Agent, in which nothing is simple and the police are almost as sinister as the terrorists. By a bleak irony, the unwitting "agent" who carries the bomb to its destination - and gets blown to smithereens - is the simple-minded Stevie.', color:'yellow' }}
      />

      <Info 
        text = {{title: 'Twelfth Night', subtitle: 'What You Will', information: `A romantic comedy by William Shakespeare, believed to have been written around 1601–1602 as a Twelfth Night's entertainment for the close of the Christmas season. The play centres on the twins Viola and Sebastian, who are separated in a shipwreck. Viola (who is disguised as Cesario) falls in love with Duke Orsino, who in turn is in love with Countess Olivia. Upon meeting Viola, Countess Olivia falls in love with her thinking she is a man.`, color:'lightGray' }}
      />

      <Info 
        text = {{title: `Tess of the d'Urbervilles`, subtitle: 'A Pure Woman', information: `A novel by Thomas Hardy. It initially appeared in a censored and serialised version, published by the British illustrated newspaper The Graphic in 1891, then in book form in three volumes in 1891, and as a single volume in 1892. Though now considered a major 19th-century English novel, even Hardy's fictional masterpiece, Tess of the d'Urbervilles received mixed reviews when it first appeared, in part because it challenged the sexual morals of late Victorian England.`, color:'#800020' }}
      />  

      <Info 
        text = {{title: 'Peter Pan', subtitle: 'The Boy Who Wouldn’t Grow Up', information: 'A fictional character created by Scottish novelist and playwright J. M. Barrie. A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland.', color:'#A67B5B' }}
      />
      
    </div>
  );
}

export default App;
