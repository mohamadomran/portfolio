import { Layout } from '@/components/global/Layout';
import { Certificate } from '@/components/pages/work/Certificate';
import { Resume } from '@/components/pages/work/Resume';
import { Technologies } from '@/components/pages/work/Technologies';

export default async function About() {
  return (
    <Layout>
      <h1 className="mb-16 text-5xl font-bold">About Me!</h1>
      <h2 className="mb-8 mt-8 text-3xl">Background</h2>

      <p className="mb-4 break-all text-lg">
        I&apos;m a Full Stack Engineer currently based in Beirut, Lebanon. I
        have always been fascinated by technology and coding, and I knew from a
        young age that I wanted to pursue a career in software engineering. I
        obtained my Bachelor&apos;s and Master&apos;s degrees in Science of
        Computer and Communication Engineering, with a specialization in AI and
        Machine Learning. Through my academic pursuits, I gained a solid
        grounding in programming and a thorough comprehension of AI and Machine
        Learning methodologies, which have gained immense relevance in the field
        of software engineering After completing my academic qualifications, I
        began my professional journey in software development. With extensive
        experience in full-stack web development, I have worked on diverse
        projects for clients across the globe, including governments and private
        corporations. Notably, I contributed to the development of cutting-edge
        software solutions for various clients while working at{' '}
        <a className="text-white underline" href="https://speedlane.co">
          SpeedLane
        </a>{' '}
        (site is under construction and it&apos;s formerly called Postlight
        Lebanon). In addition to my work as a software engineer, I&apos;m also
        an avid traveler and photographer. I love exploring new places, meeting
        new people, and checking out different cultures. I&apos;m always on the
        lookout for new adventures to embark on. I&apos;m constantly seeking new
        challenges and opportunities to improve my skills and expand my
        knowledge. I&apos;m passionate about using technology to solve
        real-world problems, and I believe that software engineering has the
        power to change the world.
      </p>

      <Resume />

      <Technologies />

      <Certificate />
    </Layout>
  );
}
