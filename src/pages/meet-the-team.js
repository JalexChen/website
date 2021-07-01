import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import { IconButton } from '@material-ui/core'

export default function MyReactPage() {
  const [githubLogo, setGithubLogo] = useState("../img/github-white.png")
  useEffect(() => {
    const darkTheme = document.getElementsByTagName('html')[0].attributes[2].nodeValue === 'dark'
    (darkTheme) ? setGithubLogo("../img/github-white.png") : setGithubLogo("../img/github-black.png")
    window.addEventListener('click', () => {
    (darkTheme) ? setGithubLogo("../img/github-white.png") : setGithubLogo("../img/github-black.png")
    })
  }, [])

  const teamProfiles = [
    {
      name: "Andy Kahn",
      picture: "../img/andy.jpeg",
      github: "https://github.com/adkahn",
      linkedIn: "",
    },
    {
      name: "Jeff Chen",
      picture: "../img/jeff.png",
      github: "https://github.com/JalexChen",
      linkedIn: "https://www.linkedin.com/in/jalexchen/"
    },
    {
      name: "Lawrence Han",
      picture: "../img/larry.jpeg",
      github: "https://github.com/lawrencehan650",
      linkedIn: "https://www.linkedin.com/in/lawrence-han"
    },
    {
      name: "Mika Todd",
      picture: "../img/mika.jpeg",
      github: "https://github.com/mikatodd",
      linkedIn: "https://www.linkedin.com/in/mika-todd-b37328105/"
    },
    {
      name: "Patrick Allen",
      picture: "../img/patrick.png",
      github: "https://github.com/PatrickAllen1",
      linkedIn: "https://www.linkedin.com/in/patrickallendfs/"
    },
  ]
  const cards = [];
  teamProfiles.forEach(person => {
    cards.push(
      <div className="team-cards">
        <div className="photo">
          <img className="portraits" src={person.picture}/>
        </div>
        <div className="info">
          <h2 className="name">{person.name}</h2>
          <i>Software Engineer</i>
          <br/>
        <div>
            <IconButton color="secondary" onClick={()=>window.open(person.github, '_blank')}>
              <img className="logos" src={githubLogo}/>
            </IconButton>
          <a href={person.linkedIn} target="_blank">
            <IconButton color="secondary">
              <img className="logos" src="../img/linkedin.png"/>
            </IconButton>
          </a>
        </div>
        </div>
      </div>
    )
  })


  return (
    <Layout>
      <div id="meet-the-team">
        <center><h1 id="ohana-team">The Ohana Team</h1></center>
        <div id="cards-container">
          {cards}
        </div>
      </div>
    </Layout>
  );
}