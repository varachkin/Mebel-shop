import React from 'react';
import Image from "next/image";
import logo from './../../public/logo.png'
import styles from './../styles/Logo.module.css'
import Link from "next/link";

const Logo = () => {
    return (
            <Link href='/'>
                <div className={styles.logo_container}>
                    <Image src={logo} alt='logo' width={80} height={80}/>
                    <span className={styles.logo_text}>Text LOGO</span>
                </div>
            </Link>
    );
};

export default Logo;