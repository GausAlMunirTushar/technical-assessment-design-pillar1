"use client";

import React, { useState } from "react";
import { JcLogo } from "./icons/JcLogo";
import { MobileMenu, NavItem } from "./MobileMenu";

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

export const Navbar: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="w-full max-w-360 mx-auto px-4 pt-6 pb-4 flex justify-center sticky top-0 z-40">
			{/* Desktop Navbar */}
			<nav
				className="hidden md:grid grid-cols-3 items-center w-full max-w-240 bg-dark-surface text-white rounded-full px-4 py-2.5 shadow-lg border border-white/10"
				aria-label="Desktop navigation"
			>
				{/* Left items */}
				<div className="flex items-center gap-6 justify-start pl-2">
					{leftNavItems.map((item) =>
						item.active ? (
							<a
								key={item.label}
								href={item.href}
								className="bg-accent-orange text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-orange-hover transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
							>
								{item.label}
							</a>
						) : (
							<a
								key={item.label}
								href={item.href}
								className="text-white/80 hover:text-white font-medium text-sm transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
							>
								{item.label}
							</a>
						)
					)}
				</div>

				{/* Center Logo */}
				<div className="flex justify-center">
					<a
						href="#home"
						className="hover:opacity-90 transition-opacity rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
						aria-label="JCREA Homepage"
					>
						<JcLogo />
					</a>
				</div>

				{/* Right items */}
				<div className="flex items-center gap-6 justify-end pr-2">
					{rightNavItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-white/80 hover:text-white font-medium text-sm transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
						>
							{item.label}
						</a>
					))}
				</div>
			</nav>

			{/* Mobile Navbar Pill (Closed state) */}
			<div className="flex md:hidden items-center justify-between w-full max-w-86.25 bg-dark-surface text-white rounded-full px-5 py-2.5 shadow-lg border border-white/10">
				<a
					href="#home"
					className="rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
					aria-label="JCREA Homepage"
				>
					<JcLogo />
				</a>
				<button
					onClick={() => setMobileMenuOpen(true)}
					className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer"
					aria-label="Open navigation menu"
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-navigation-menu"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
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

			{/* Mobile Menu Dropdown Modal */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				items={mobileNavItems}
			/>
		</header>
	);
};
