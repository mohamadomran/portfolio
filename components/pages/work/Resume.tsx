import { Work } from '@/types/Work';

export function Resume() {
  const work: Work[] = [
    {
      company: 'SpeedLane (previously known as Postlight Lebanon)',
      title: 'Fullstack Engineer',
      start: {
        label: 'April 2021',
        dateTime: 'April 2021',
      },
      end: {
        label: 'present',
        dateTime: new Date().getFullYear().toString(),
      },
      companyURL: 'https://postlight.com',
      tasks: [
        'Developed and maintained full-stack web applications utilizing cutting-edge technologies such as Node.js, React.js/Next.js, PSQL, WordPress, and PHP to deliver high-performance software solutions that meet customer needs and expectations.',
        'Collaborated with cross-functional teams to drive the development and delivery of high-quality software solutions that exceeded customer expectations.',
        'Implemented and monitored robust CI/CD pipelines using industry-leading tools such as GitLab CI or CircleCI to automate build, testing, and deployment processes and achieve efficient software delivery.',
        'Developed and integrated RESTful APIs that enabled seamless communication between front-end and back-end systems to enhance functionality and provide a smooth user experience.',
        'Utilized AWS services such as EC2, S3, RDS, and Lambda to deploy, host, and scale web applications, delivering efficient and cost-effective solutions that met customer needs.',
        'Set up and configured monitoring and logging tools such as CloudWatch and ELK Stack to track application performance and troubleshoot issues, ensuring high availability and reliable performance.',
        'Implemented automated testing and quality assurance processes to ensure code quality and reduce the risk of introducing bugs or errors, delivering high-quality software solutions.',
        'Worked closely with UI/UX designers to implement responsive designs that provided an optimal user experience on all devices and screen sizes, delivering software solutions that were user-friendly and met or exceeded customer expectations.',
      ],
    },
    {
      company: 'Netways',
      title: 'Software Engineer',
      start: {
        label: 'November 2018',
        dateTime: 'November 2018',
      },
      end: {
        label: 'March 2021',
        dateTime: 'March 2021',
      },
      companyURL: 'https://netways.com',
      tasks: [
        'Designed, developed, and maintained innovative software solutions for government clients utilizing React.js/Next.js, Redux, and SCSS, delivering high-quality software solutions that met or exceeded client requirements.',
        'Utilized Azure products such as Azure App Service, Azure Functions, and Azure Blob Storage to deploy, host, and scale web applications, delivering efficient and cost-effective software solutions.',
        'Built custom chatbots using Azure services such as Azure Bot Service and Cognitive Services to enhance software functionality and user experience, delivering software solutions that exceeded client expectations.',
        'Collaborated with cross-functional teams to gather and understand client requirements, and then designed and developed software solutions that met their needs, delivering customized solutions that met specific client needs.',
        'Participated in code reviews, testing, and debugging to ensure high-quality code and the functionality of the application, ensuring that software solutions met or exceeded client expectations.',
        'Conducted performance tests and implemented optimizations to improve the speed and responsiveness of software solutions, ensuring that the software was efficient and delivered excellent performance.',
        'Ensured compliance with government regulations and standards in the development and deployment of software solutions, delivering software solutions that were compliant with government regulations and standards.',
      ],
    },
    {
      company: 'PSPlatform (International Diamond Trading Platform',
      title: 'Frontend Developer (Freelance)',
      start: {
        label: 'June 2018',
        dateTime: 'June 2018',
      },
      end: {
        label: 'November 2018',
        dateTime: 'November 2018',
      },
      tasks: [
        'Collaborated closely with clients to understand their business needs and requirements, and designed and developed a customized frontend solution using cutting-edge technologies such as React.js, CSS, and HTML, delivering software solutions that exceeded client expectations and met their goals.',
        'Implemented responsive designs that ensured the platform was optimized for use on all devices and screen sizes, delivering software solutions that provided an optimal user experience.',
        'Utilized various libraries and frameworks such as Material UI, Bootstrap, and Styled Components to create an intuitive and modern user interface, delivering software solutions that were visually appealing and easy to use.',
        "Conducted user acceptance testing to ensure that the frontend solution met the client's requirements and provided a seamless user experience, delivering high-quality software solutions that met or exceeded client expectations.",
        'Provided ongoing maintenance and support for the frontend solution, ensuring that any issues or bugs were promptly resolved to ensure optimal performance of the platform, and delivering reliable and efficient software solutions that met client needs.',
      ],
    },
  ];

  return (
    <ol className="mt-6 space-y-16  text-lg">
      {work.map((role, roleIndex) => (
        <li
          key={roleIndex}
          className="border-mustard-500 flex gap-4 border-l pl-4 md:pl-12"
        >
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Role @ Company</dt>
            <dd className="w-full text-xl text-zinc-900 dark:text-zinc-100">
              {role.title} @ {role.company}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="md:text-md text-black-950 dark:text-black-950 mb-3 mt-3 rounded-md bg-yellow-100 p-1 text-sm font-bold"
              aria-label={`${role.start.label ?? role.start} until ${
                role.end.label ?? role.end
              }`}
            >
              <time dateTime={role.start.dateTime ?? role.start}>
                {role.start.label ?? role.start}
              </time>
              <span aria-hidden="true"> – </span>
              <time dateTime={role.end.dateTime ?? role.end}>
                {role.end.label ?? role.end}
              </time>
            </dd>
            <dt className="sr-only">Tasks</dt>
            <dd className="text-md w-full flex-none font-medium text-zinc-900 dark:text-zinc-100">
              <ul className="mt-4 space-y-2">
                {role.tasks?.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex gap-4">
                    <span className="flex-shrink-0">
                      <svg
                        className="mt-2 h-4 w-4 stroke-current text-zinc-500 dark:text-zinc-800"
                        viewBox="0 0 4 4"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 2h4" />
                      </svg>
                    </span>
                    <span className="text-sm text-zinc-900 dark:text-zinc-100">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </li>
      ))}
    </ol>
  );
}