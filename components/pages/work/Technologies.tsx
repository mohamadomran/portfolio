import {
  SiAmazonaws,
  SiAngular,
  SiCss3,
  SiDocker,
  SiGit,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si';

export const Technologies = () => {
  return (
    <>
      <h2 className="mb-8 mt-8 text-3xl">Technologies</h2>

      <div className="flex flex-wrap justify-center">
        <SiReact size={90} style={{ fill: '#61DAFB' }} className="px-3" />
        <SiNextdotjs size={90} style={{ fill: '#000000' }} className="px-3" />
        <SiAngular size={90} style={{ fill: '#DD0031' }} className="px-3" />
        <SiTypescript size={90} style={{ fill: '#007ACC' }} className="px-3" />
        <SiJavascript size={90} style={{ fill: '#F7DF1E' }} className="px-3" />
        <SiPython size={90} style={{ fill: '#3776AB' }} className="px-3" />
        <SiCss3 size={90} style={{ fill: '#1572B6' }} className="px-3" />
        <SiTailwindcss size={90} style={{ fill: '#38B2AC' }} className="px-3" />
        <SiGit size={90} style={{ fill: '#F05032' }} className="px-3" />
        <SiJest size={90} style={{ fill: '#C21325' }} className="px-3" />
        <SiPostgresql size={90} style={{ fill: '#336791' }} className="px-3" />
        <SiMysql size={90} style={{ fill: '#4479A1' }} className="px-3" />
        <SiMongodb size={90} style={{ fill: '#47A248' }} className="px-3" />
        <SiWordpress size={90} style={{ fill: '#21759B' }} className="px-3" />
        <SiPhp size={90} style={{ fill: '#777BB4' }} className="px-3" />
        <SiAmazonaws size={90} style={{ fill: '#FF9900' }} className="px-3" />
        <SiDocker size={90} style={{ fill: '#2496ED' }} className="px-3" />
        <SiKubernetes size={90} style={{ fill: '#326CE5' }} className="px-3" />
        <SiLinux size={90} style={{ fill: '#FCC624' }} className="px-3" />
      </div>
    </>
  );
};
