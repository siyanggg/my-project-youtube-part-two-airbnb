import React from "react";

export default function Contact(props) {
  /**
   * Challenge: Fix the code below to use the `props`
   * object values in place of the hardcoded values below
   */
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/
