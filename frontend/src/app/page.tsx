import ButtonLink from "./components/ButtonLink";
import ButtonFetch from "./components/ButtonFetch";
import Table from "./components/Table";

export default function HomePage() {

  return (
    <main className="mainPage">
      <div className="mainPage__buttons">
        <ButtonLink href="/form">Stwórz pokemona</ButtonLink>
        <ButtonFetch />
      </div>
      <Table/>
    </main>
  );
}
