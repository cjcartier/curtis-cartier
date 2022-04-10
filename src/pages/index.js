import * as React from "react";

import Hero from "../components/hero/hero.components";
import AboutMe from "../components/sections/about-me/about-me.components";
import Clients from "../components/sections/clients/clients.components";
import Skills from "../components/sections/skills/skills.components";
import History from "../components/sections/history/history.components";
import Education from "../components/sections/education/education.components";
import MyTools from "../components/sections/my-tools/my-tools.components";
import Contact from "../components/hero/contact/contact.components";
import Template from "../components/template/template.compontent";

const IndexPage = () => {
  return (
    <Template>
      <Hero />
      <AboutMe />
      <Clients />
      <Skills />
      <History />
      <Education />
      <MyTools />
      <Contact formSlug="curtiscartier" />
    </Template>
  );
};

export default IndexPage;
