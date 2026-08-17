"use client";

import React, { useState } from "react";
import { JcLogo } from "./icons/JcLogo";
import { MobileMenu, NavItem } from "./MobileMenu";
import Link from "next/link";

const leftNavItems: NavItem[] = [
	{ label: "Home", href: "#home", active: true },
	{ label: "About", href: "#about" },
	{ label: "Service", href: "#services" },
];

const rightNavItems: NavItem[] = [
	{ label: "Resume", href: "#resume" },
	{ label: "Project", href: "#project" },
	{ label: "Contact", href: "#contact" },
];

const mobileNavItems: NavItem[] = [
	{ label: "Home", href: "#home", active: true },
	{ label: "About", href: "#about" },
	{ label: "Service", href: "#services" },
	{ label: "Resume", href: "#resume" },
	{ label: "Contact", href: "#contact" },
];

/**
 * Main application navigation header supporting sticky positioning,
 * desktop split navigation links, and mobile menu overlay toggle.
 */
export const Navbar: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="w-full max-w-360 mx-auto px-4 pt-9 pb-4 flex justify-center sticky top-0 z-40">
			<nav
				className="hidden md:flex items-center justify-between w-full max-w-287.5 bg-dark-surface text-white rounded-full p-2 shadow-lg border border-white/10"
				aria-label="Desktop navigation"
			>
				<div className="flex items-center gap-7 lg:gap-7 justify-start">
					{leftNavItems.map((item) =>
						item.active ? (
							<Link
								key={item.label}
								href={item.href}
								className="bg-accent-orange text-white px-10 py-4 rounded-full font-semibold text-md hover:bg-accent-orange-hover transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
							>
								{item.label}
							</Link>
						) : (
							<Link
								key={item.label}
								href={item.href}
								className="text-white hover:bg-slate-800 hover:text-white px-8 py-3 hover:rounded-full font-semibold text-md transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
							>
								{item.label}
							</Link>
						)
					)}
				</div>

				<div className="flex justify-center">
					<Link
						href="#home"
						className="hover:opacity-90 transition-opacity rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
						aria-label="JCREA Logo"
					>
						<JcLogo />
					</Link>
				</div>

				<div className="flex items-center gap-8 lg:gap-20 justify-end pr-8">
					{rightNavItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="text-white hover:text-white font-semibold text-md transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
						>
							{item.label}
						</Link>
					))}
				</div>
			</nav>

			<div className="flex md:hidden items-center justify-between w-full max-w-86.25 bg-dark-surface text-white rounded-full px-4 py-2 shadow-lg border border-white/10">
				<Link
					href="#home"
					className="rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
					aria-label="JCREA Homepage"
				>
					<JcLogo />
				</Link>
				<button
					onClick={() => setMobileMenuOpen(true)}
					className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer"
					aria-label="Open navigation menu"
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-navigation-menu"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				items={mobileNavItems}
			/>
		</header>
	);
};
