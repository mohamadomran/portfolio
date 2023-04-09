import Head from 'next/head';

import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SimpleLayout } from '@/components/layouts/SimpleLayout';

type ToolSection = {
  title: string;
  children: React.ReactNode;
};

type Tool = {
  title: string;
  href: string;
  children: React.ReactNode;
};

function ToolsSection({ children, ...props }: ToolSection) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }: Tool) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Tools() {
  return (
    <>
      <Head>
        <title>Snippets - Mohamad Omran</title>
        <meta
          name="description"
          content="Handy Code Snippets: Time-Saving Solutions for Developers"
        />
        <meta property="og:title" content="Tools - Mohamad Omran" />
        <meta
          property="og:description"
          content="Handy Code Snippets: Time-Saving Solutions for Developers"
        />
      </Head>
      <SimpleLayout
        title="Handy Code Snippets: Time-Saving Solutions for Developers"
        gradient="bg-gradient-to-r from-sky-500 to-blue-500"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool
              title="PC Build 2022"
              href="https://pcpartpicker.com/b/KXfPxr"
            >
              This is my main Intel-based computer which I built in 2022. This
              build is composed of some new and old parts which I have gathered
              over the years. Click here to see a comprehensive listing of all
              the parts used in this build on PCPartPicker.
            </Tool>
            <Tool
              title="Herman Miller Aeron Chair"
              href="https://hermanmiller.com/en_eur/products/seating/office-chairs/aeron-chairs/"
            >
              I bought this chair second-hand when I started working for Apple,
              it&apos;s extremely comfortable and ergonomic for those long hours
              spent at the desk.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="JetBrains" href="https://jetbrains.com/">
              I use a mix of JetBrain apps for my IDEs depending on what
              I&apos;m working on. For JavaScript projects, I use WebStorm.
              PyCharm for python and IntelliJ IDEA Ultimate for Java. I use the
              same keyboard shortcuts across these apps which is great for
              productivity.
            </Tool>
            <Tool title="Insomnia" href="https://insomnia.rest/">
              Good tool for designing and testing REST APIs. I used to use
              Postman but I found the interface too cluttered and prefer the
              simplicity of Insomnia.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
