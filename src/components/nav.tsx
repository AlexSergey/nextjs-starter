import Link from 'next/link';

interface LinkInterface {
  href: string;
  label: string;
  key?: string;
}

const links: LinkInterface[] = [{ href: '//github.com/create-next-app/create-next-app', label: 'Github' }].map(
  (link: LinkInterface) => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  },
);

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }

        nav {
          text-align: center;
        }

        ul {
          display: flex;
          justify-content: space-between;
        }

        nav > ul {
          padding: 4px 16px;
        }

        li {
          display: flex;
          padding: 6px 8px;
        }

        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}
    </style>
  </nav>
);

export { Nav };
