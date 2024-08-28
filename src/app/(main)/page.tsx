import MainImage from "@/components/pages/main/HomeImage";
import ButtonList from "@/components/pages/main/ButtonList";
import MainTest from "@/components/pages/main/MainTest";

function maininit() {
  return (
    <main>
      <MainTest />
      <MainImage></MainImage>

      <ButtonList />
    </main>
  );
}

export default maininit;
