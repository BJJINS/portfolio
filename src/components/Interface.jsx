import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
    >
      {children}
    </motion.section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-h1l font-bold">Hi, I'm Jinbao</h1>
      <p className="text-p1l">
        I'm a software engineer based in San Francisco. I love building products
        that solve real problems.
      </p>
      <p className="text-p1l">
        I'm a software engineer based in San Francisco. I love building products
        that solve real problems.
      </p>
      <p className="text-p1l">
        I'm a software engineer based in San Francisco. I love building products
        that solve real problems.
      </p>
      <p className="text-p1l">
        I'm a software engineer based in San Francisco. I love building products
        that solve real problems.
      </p>
      <p className="text-p1l">
        I'm a software engineer based in San Francisco. I love building products
        that solve real problems.
      </p>
      <p className="text-p1l">
        I'm a software engineer based in San Francisco. I love building products
        that solve real problems.
      </p>
      <div className="flex flex-row items-center justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jinbaojia"
          className="text-p1l"
        >
          GitHub
        </a>
        <div className="w-1 h-1 bg-p1l rounded-full"></div>
        <a href="https://www.linkedin.com/in/jinbaojia/" className="text-p1l">
          LinkedIn
        </a>
        <div className="w-1 h-1 bg-p1l rounded-full"></div>
        <a href="mailto:jinbaojia@berkeley.edu" className="text-p1l">
          Email
        </a>
      </div>
      <button className="bg-indigo-600 text-white rounded-lg py-4 px-8 font-bold text-lg mt-16">
        contact me
      </button>
    </Section>
  );
};

const SkillSection = () => {
  return (
    <Section>
      <h1 className="text-h1l font-bold">Skills</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="w-1/3">
          <h2 className="text-h2l font-bold">Frontend</h2>
          <p className="text-p1l">
            React, Next.js, TypeScript, Tailwind CSS, CSS, HTML
          </p>
        </div>
        <div className="w-1/3">
          <h2 className="text-h2l font-bold">Backend</h2>
          <p className="text-p1l">Node.js, Express, MongoDB, PostgreSQL</p>
        </div>
        <div className="w-1/3">
          <h2 className="text-h2l font-bold">Tools</h2>
          <p className="text-p1l">
            Git, Docker, AWS, Firebase, Figma, Jira, Confluence
          </p>
        </div>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  return (
    <Section>
      <h1 className="text-h1l font-bold">Projects</h1>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h1 className="text-h1l font-bold">Contact</h1>
      <p className="text-p1l">
        If you want to work together or just say hi, feel free to reach out to
        me.
      </p>
      <button className="bg-indigo-600 text-white rounded-lg py-4 px-8 font-bold text-lg mt-16">
        contact me
      </button>
      <div className="flex flex-row items-center justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jinbaojia"
          className="text-p1l"
        >
          GitHub
        </a>
        <div className="w-1 h-1 bg-p1l rounded-full"></div>
        <a href="https://www.linkedin.com/in/jinbaojia/" className="text-p1l">
          LinkedIn
        </a>
        <div className="w-1 h-1 bg-p1l rounded-full"></div>
        <a href="mailto:jinbaojia@berkeley.edu" className="text-p1l">
          Email
        </a>
      </div>
      <p className="text-p1l">© 2023 Jinbao Jia. All rights reserved.</p>
    </Section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
