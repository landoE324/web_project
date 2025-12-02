import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";


export default function AboutPage() {
return (
<div className={styles.aboutContainer}>
{/* Top Bar */}
<div className={styles.topBar}>
<Link to="/" className={styles.logo}>
Quotable
</Link>


<div className={styles.navDropdown}>
<details>
<summary className={styles.menuIcon}>☰</summary>
<ul className={styles.menuList}>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/folders">Folders</Link></li>
</ul>
</details>
</div>
</div>


{/* About Content */}
<div className={styles.contentWrapper}>
<h1>About Quotable</h1>
<p>
Quotable is a digital library designed for readers who love discovering,
organizing, and saving meaningful quotes. Whether you're researching,
studying, or simply collecting inspiration, our tools make it easy to
browse authors, search for quotes, and sort them into folders.
</p>


<p>
Our mission is to create a clean and simple experience for
exploring wisdom from all eras and authors. We believe in empowering
students, writers, and lifelong learners with quick access to knowledge
and inspiration.
</p>


<p>
Future updates include custom user accounts, personalized quote
recommendations, and collaborative folders for sharing your favorite
collections.
</p>


<p className={styles.signature}>— The Quotable Team</p>
</div>
</div>
);
}