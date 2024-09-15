import NavBar from "@/app/_components/navbars/NavBar";
import SearchBar from "@/app/_components/search/SearchBar";
import LargeButton from "@/app/_components/buttons/LargeButton";
import ListBox from "@/app/(home)/components/list/ListBox";
import SmallButton from "@/app/_components/buttons/SmallButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <div>
        <div className="flex items-center justify-center custom-sm:gap-4 gap-2 mt-6">
          <SearchBar />
          <div className="hidden custom-sm:block">
            <LargeButton title="추가하기" />
          </div>
          <div className="block custom-sm:hidden">
            <SmallButton />
          </div>
        </div>
        <div className="flex custom-md:flex-row flex-col gap-12 custom-md:gap-6 mt-10">
          <ListBox
            label="TO DO"
            list={["비타민 챙겨먹기", "산책가기", "응가하기"]}
          />
          <ListBox
            label="DONE"
            list={["비타민 챙겨먹기", "산책가기", "응가하기"]}
          />
        </div>
      </div>
    </div>
  );
}
