import React from 'react';

const Letter = props => {
  let addressee = props.addressee;
  let accepted = props.accepted;
  let body;

  if (accepted){
    body = <p>We are pleased to inform you that you have a place at Hogwarts School of
    Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
    equipment.

    Term begins on 1 September. We await your owl by no later than 31 July.</p>

  } else {
    body = <p>We regret to inform you that we are unable to offer you a place at Hogwarts
    School of Witchcraft and Wizardry. After reviewing your application and
    Github profile, we recognize that you are indeed a "coding wizard".
    Unfortunately, we have concluded that you do not have actual magical
    abilities, which you must have to be admitted into Hogwarts.</p>
  }

  return(
    <div>
      <h1>Hogwarts School of Whitchcraft and Wizardry</h1>
      <h2>Headmaster: Albus Dumbledore</h2>
      <h3>(Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)</h3>
      <p>Dear {addressee},</p>
      {body}
      <p>Yours sincerely,

      Minerva McGonagall
      Deputy Head Mistress
      </p>
    </div>
  )
}

export default Letter;
