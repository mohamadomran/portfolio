import { BriefcaseIcon } from '@/components/icons/BriefcaseIcon'
import { Cta } from './Cta'

type Work = {
    company: string
    title: string
    start: {
        label: string
        dateTime: string
    }
    end: {
        label: string
        dateTime: string
    },
    companyURL?: string,
    tasks: string[]
}

export function Resume() {
    const work: Work[] = [
        {
            company: 'SpeedLane (previously known as Postlight Lebanon)',
            title: 'Fullstack Engineer',
            start: {
                label: 'April 2021',
                dateTime: 'April 2021'
            },
            end: {
                label: 'present',
                dateTime: new Date().getFullYear().toString(),
            },
            companyURL: 'https://postlight.com',
            tasks: [
                'Develop and maintain full-stack web applications using Node.js, React.js/Next.js, PSQL, WordPress, and PHP.',
                'Collaborate with cross-functional teams, including project managers, designers, and other engineers, to develop and deliver high-quality software solutions that meet customer requirements and expectations.',
                'Implement and monitor continuous integration and continuous delivery (CI/CD) pipelines using tools such as GitLab CI, or CircleCI to automate the build, test, and deployment of software.',
                'Develop RESTful APIs that enable seamless communication between the front-end and back-end systems.',
                'Integrate third-party services and APIs into the application to enhance its functionality and provide a seamless user experience.',
                'Utilize AWS services such as EC2, S3, RDS, and Lambda to deploy, host, and scale web applications',
                'Set up and configure monitoring and logging tools such as CloudWatch and ELK Stack to track application performance and troubleshoot issues.',
                'Utilize AWS Elastic Beanstalk or Docker to simplify the deployment of applications to AWS',
                'Implement DevOps practices such as continuous integration and continuous deployment (CI/CD) to streamline the development, testing, and deployment of software.',
                'Implement automated testing and quality assurance processes to ensure code quality and reduce the risk of introducing bugs or errors.',
                'Participate in code reviews, testing, and debugging to ensure the quality of the code and the functionality of the application.',
                'Adhere to coding standards and best practices, as well as keeping up-to-date with the latest technologies and industry trends.',
                'Troubleshoot and resolve production issues, ensuring timely resolution and minimizing downtime for end-users.',
                'Utilize version control systems such as Git to manage code changes and collaborate with other developers on the same project.',
                'Work closely with UI/UX designers to implement responsive designs that provide an optimal user experience on all devices and screen sizes.',
        ]
        },
        {
            company: 'Netways',
            title: 'Software Engineer',
            start: {
                label: 'November 2018',
                dateTime: 'November 2018'
            },
            end: {
                label: 'March 2021',
                dateTime: 'March 2021'
            },
            companyURL: 'https://netways.com',
            tasks: [
                'Design, develop, and maintain software solutions for government clients using React.js/Next.js, Redux, and SCSS.',
                'Collaborate with cross-functional teams, including project managers, designers, and other engineers, to understand client requirements and develop software solutions that meet their needs.',
                'Utilize Azure products such as Azure App Service, Azure Functions, and Azure Blob Storage to deploy, host, and scale web applications.',
                'Build custom chatbots using Azure services such as Azure Bot Service and Cognitive Services to enhance the functionality and user experience of the software solutions.',
                'Participate in code reviews, testing, and debugging to ensure the quality of the code and the functionality of the application.',
                'Collaborate with cross-functional teams to establish agile methodologies for software development and implement DevOps best practices, such as continuous integration and continuous deployment (CI/CD).',
                'Conduct performance tests and implement optimizations to improve the speed and responsiveness of the software solutions.',
                'Participate in meetings and presentations with clients to gather requirements, provide updates, and demonstrate software solutions.',
                'Ensure compliance with government regulations and standards in the development and deployment of software solutions.',

            ]
        },
        {
            company: 'PSPlatform (International Diamond Trading Platform',
            title: 'Frontend Developer (Freelance)',
            start: {
                label: 'June 2018',
                dateTime: 'June 2018'
            },
            end: {
                label: 'November 2018',
                dateTime: 'November 2018'
            },
            tasks: [
                'Worked closely with the client to understand their business needs and requirements, and developed a customized frontend solution using technologies such as React.js, CSS, and HTML to enhance the user experience and meet the client\'s goals.',
                'Implemented responsive designs that ensured the platform was optimized for use on all devices and screen sizes.',
                'Utilized various libraries and frameworks such as Material UI, Bootstrap, and Styled Components to create an intuitive and modern user interface.',
                'Conducted user acceptance testing to ensure that the frontend solution met the client\'s requirements and provided a seamless user experience.',
                'Provided ongoing maintenance and support for the frontend solution, ensuring that any issues or bugs were promptly resolved to ensure optimal performance of the platform.'
            ]
        }
    ]

    return (
        <Cta icon={BriefcaseIcon} title="Work">
            <ol className="mt-6 space-y-16  text-lg">
                {work.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-md font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-md text-zinc-500 dark:text-zinc-200">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-md text-zinc-500 dark:text-zinc-200"
                                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
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
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                <ul className="mt-4 space-y-2">
                                    {role.tasks?.map((task, taskIndex) => (
                                        <li key={taskIndex} className="flex gap-2">
                                            <span className="flex-shrink-0">
                                                <svg

                                                    className="h-4 w-4 mt-5 stroke-current text-zinc-500 dark:text-zinc-800"
                                                    viewBox="0 0 4 4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M0 2h4" />
                                                </svg>
                                            </span>
                                            <span className="text-zinc-500 dark:text-zinc-500">
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
        </Cta>
    )
}
