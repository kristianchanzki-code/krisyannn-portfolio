import Link from "next/link";

export default function NotFound() {
  return <section className="section-pad empty-page"><div className="shell"><p className="eyebrow">404 · misplaced field note</p><h1>This page is not on the workbench.</h1><p>The link may have moved or the page has not been built yet.</p><Link className="button button-primary" href="/">Return home</Link></div></section>;
}
