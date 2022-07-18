import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface props {
    text: string;
    href: string;
}

export const ActiveLink: FC<props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};



