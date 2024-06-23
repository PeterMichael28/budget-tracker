import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export const NavItems = [
 { label: 'Dashboard', link: '/' },
 { label: 'Transactions', link: '/transactions' },
 { label: 'Manage', link: '/manage' },
];
