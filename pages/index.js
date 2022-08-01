import HomeContainer from "../components/container/HomeContainer";
import Content from "../components/container/Content";

export default function Home() {
  return (
    <>
      <Content content={<HomeContainer />} />
    </>
  );
}
