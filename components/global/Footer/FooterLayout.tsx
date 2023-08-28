import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import { siteConfig } from 'config/site';
import { de } from 'date-fns/locale';

const Footer = () => {
  return (
    <footer>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm data-[active=true]:text-primary sm:text-center">
          © {new Date().getFullYear()} Mohamad Omran - All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm data-[active=true]:font-medium data-[active=true]:text-primary sm:mt-0">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium mr-4 hover:underline md:mr-6',
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
