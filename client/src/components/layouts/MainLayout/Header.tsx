import { Fragment, useState } from 'react'

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const icons = {
    strategy: '\u265F',
    board: '\uD83C\uDFB2',
    guessing: '\uD83D\uDCDA',
}
const games = [
    {
        name: 'Tic Tac Toe',
        description: 'Tic Tac Toe is a classic two-player paper-and-pencil game played on a 3x3 grid',
        href: '/games/tic-tac-toe',
        icon: icons.strategy,
    },
    {
        name: 'Board Strategy Game',
        description: 'Connect 4 is a strategic board game played by two players on a vertical grid with six rows and seven columns',
        href: '/games/board-strategy-game',
        icon: icons.board,
    },
    {
        name: 'Word Guessing Game',
        description: 'Hangman is a word-guessing game usually played with two or more players',
        href: '/games/word-guessing-game',
        icon: icons.guessing,
    },
]
const callsToAction = [
    { name: 'View all games', href: '/games' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    {/* Home button */}
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Mini Game Arcade</span>
                        {/* Logo */}
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop navigation */}
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        {/* Games dropdown button */}
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Games
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            {/* Games popover */}
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                {/* Games */}
                                <div className="p-4">
                                    {games.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                {item.icon}
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTAs */}
                                <div className="bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    {/* Hub */}
                    <a href="/hub" className="text-sm font-semibold leading-6 text-gray-900">
                        Hub
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/callumndev/Mini-Game-Arcade" target="_blank" className="text-sm font-semibold leading-6 text-gray-900">
                        GitHub
                    </a>
                </Popover.Group>

                {/* Desktop login button */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/auth/login" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Mobile menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />

                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        {/* Home button */}
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Mini Game Arcade</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>

                        {/* Close menu button */}
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            {/* Games button */}
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Games
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>

                                            {/* Games list with CTAs */}
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...games, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                {/* Hub */}
                                <a
                                    href="/hub"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Hub
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/callumndev/Mini-Game-Arcade"
                                    target="_blank"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    GitHub
                                </a>
                            </div>

                            {/* Mobile login button */}
                            <div className="py-6">
                                <a
                                    href="/auth/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header;
