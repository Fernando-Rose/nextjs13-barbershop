import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import styles from "./Navigation.module.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  size: "0.5rem",
});

const logohome = [
  {
    route: "/",
  },
];

const links = [
  {
    label: "servicios",
    route: "/servicios",
  },
  {
    label: "tienda",
    route: "/tienda",
  },
];

const login = [
  {
    label: "iniciar sesion",
    route: "",
  },
];

export default function Navigation() {
  return (
    <div className={inter.className}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <ul className={styles.links}>
            {logohome.map(({ route }) => (
              <li key={route}>
                <Link href={route}>
                  <Image src={logo} alt="logo" />
                </Link>
              </li>
            ))}
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
          <ul className={styles.login}>
            {login.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
