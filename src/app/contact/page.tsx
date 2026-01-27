import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Dairon Jan Lamprea Rotelo',
	description: 'Get in touch with Dairon Jan Lamprea Rotelo, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}