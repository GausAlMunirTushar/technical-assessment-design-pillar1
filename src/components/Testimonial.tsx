import React from "react";
import { QuoteIcon } from "./icons/QuoteIcon";

/**
 * Client testimonial quote card featured in the hero section.
 */
export const Testimonial: React.FC = () => {
	return (
		<div className="flex flex-col gap-3 max-w-44 sm:max-w-60 text-left">
			<QuoteIcon className="w-6 h-6 text-black/80" />
			<blockquote className="text-xs sm:text-sm font-medium text-black/80 leading-snug">
				&ldquo;Jenny&apos;s exceptional product design ensures our website&apos;s success. Highly recommended.&rdquo;
			</blockquote>
		</div>
	);
};

