import Image from 'next/image';
import Link from 'next/link';

import { LinkIcon } from '@/components/icons/LinkIcon';
import awsCCPBadge from '@/public/static/images/aws-certified-cloud-practitioner-badge.png';

export default async function About() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-5xl font-bold">About Me!</h1>
      <div className="mt-6 space-y-7 text-base">
        <p>
          I&apos;m a Full Stack Engineer currently based in Beirut, Lebanon. I
          have always been fascinated by technology and coding, and I knew from
          a young age that I wanted to pursue a career in software engineering.
        </p>
        <br />
        <p>
          I obtained my Bachelor&apos;s and Master&apos;s degrees in Science of
          Computer and Communication Engineering, with a specialization in AI
          and Machine Learning. Through my academic pursuits, I gained a solid
          grounding in programming and a thorough comprehension of AI and
          Machine Learning methodologies, which have gained immense relevance in
          the field of software engineering
        </p>
        <br />
        <p>
          After completing my academic qualifications, I began my professional
          journey in software development. With extensive experience in
          full-stack web development, I have worked on diverse projects for
          clients across the globe, including governments and private
          corporations. Notably, I contributed to the development of
          cutting-edge software solutions for various clients while working at{' '}
          <a className="text-white underline" href="https://speedlane.co">
            SpeedLane
          </a>{' '}
          (site is under construction and it&apos;s formerly called Postlight
          Lebanon).
        </p>
        <br />

        <p>
          In addition to my work as a software engineer, I&apos;m also an avid
          traveler and photographer. I love exploring new places, meeting new
          people, and checking out different cultures. I&apos;m always on the
          lookout for new adventures to embark on.
        </p>
        <br />

        <p>
          I&apos;m constantly seeking new challenges and opportunities to
          improve my skills and expand my knowledge. I&apos;m passionate about
          using technology to solve real-world problems, and I believe that
          software engineering has the power to change the world.
        </p>

        <h2 className="mt-4 text-5xl font-bold">My Certifications!</h2>

        <Link href="https://www.credly.com/badges/62b0dd07-a75e-400f-a2ea-f42243f42c90/public_url">
          <Image
            src={awsCCPBadge}
            width="170"
            height="170"
            alt="AWS Certified Cloud Practitioner"
            className="mt-8"
          />
          <span className="flex items-center">
            AWS Certified Cloud Practitioner{' '}
            <LinkIcon className="ml-1 h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
