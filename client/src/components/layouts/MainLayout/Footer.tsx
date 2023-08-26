import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons'

import { useAppSelector } from '@state/hooks'
import { selectSummaryGames } from '@state/features/games/gamesSelectors'


const footerNavigation = {
    support: [
        { name: 'Contact', href: 'https://github.com/callumndev' },
    ],
    legal: [
        { name: 'Privacy', href: '/legal/privacy' },
        { name: 'Terms', href: '/legal/terms' },
    ],
    social: [
        {
            name: 'GitHub',
            href: 'https://github.com/callumndev',
            icon: (props: any) => (
                <SiGithub {...props} />
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/cn-dev',
            icon: (props: any) => (
                <SiLinkedin {...props} />
            ),
        },
    ],
}


const Footer: React.FC = () => {
    const summaryGames = useAppSelector(selectSummaryGames);

    return (
        <footer className="mt-12 bg-gray-900 sm:mt-36" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Logo */}
                    <img
                        className="h-7"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Mini Game Arcade"
                    />

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            {/* Empty to fill left column */}
                            <div></div>

                            {/* Games */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Games</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {summaryGames.map((item) => (
                                        <li key={item.id}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.displayName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            {/* Support */}
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                    {/* Social media icons */}
                    <div className="flex space-x-6 md:order-2">
                        {footerNavigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                className="text-gray-500 hover:text-gray-400"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright notice */}
                    <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                        &copy; {new Date().getFullYear()} Mini Game Arcade, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
