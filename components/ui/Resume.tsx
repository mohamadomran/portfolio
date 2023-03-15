import { BriefcaseIcon } from '@/components/icons/BriefcaseIcon'
import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon'
import { Button } from './Button'
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
    tasks?: string[]
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
            tasks: [
                'Developing and maintaining full-stack web applications using a variety of technologies, including but not limited to, Node.js, React.js/Next,js, PSQL, WordPress and PHP.',
                'Collaborating with cross-functional teams, including project managers, designers, and other engineers, to develop and deliver high-quality software solutions that meet customer requirements and expectations.',
                'Designing and implementing complex backend systems that can handle large amounts of data and traffic, while ensuring scalability and high performance',
                'Implementing and monitoring continuous integration and continuous delivery (CI/CD) pipelines using tools such as Jenkins, GitLab CI, or CircleCI to automate the build, test, and deployment of software.',
                'Developing RESTful APIs that enable seamless communication between the front-end and back-end systems.',
                'Integrating third-party services and APIs into the application to enhance its functionality and provide a seamless user experience',
                'Participating in code reviews, testing, and debugging to ensure the quality of the code and the functionality of the application.',
                'Adhering to coding standards and best practices, as well as keeping up-to-date with the latest technologies and industry trends',
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
            tasks: [
                'Designing and developing user-friendly web interfaces using HTML, CSS, and JavaScript.',
                'Collaborating with the design team to ensure that the web interface meets the requirements of the design specifications.',
                'Writing clean, efficient, and reusable code to optimize the performance of the web interface.',
                'Testing the web interface across multiple browsers and devices to ensure compatibility and responsiveness.',
                'Troubleshooting and debugging issues with the web interface to ensure that it is running smoothly and error-free.',
                'Implementing security measures to protect the web interface and its users from potential security threats.',
            ]
        },
        {
            company: 'PSPlatform (International Diamond  Trading Platform',
            title: 'Frontend Developer (Freelance)',
            start: {
                label: 'June 2018',
                dateTime: 'June 2018'
            },
            end: {
                label: 'November 2018',
                dateTime: 'November 2018'
            },
        }
    ]

    return (
        <Cta icon={BriefcaseIcon} title="Work">
            <Button href="/mohamad-omran-CV.pdf" variant="secondary" className="group mt-6 w-full">
                Download CV
                <ArrowDownIcon
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
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
