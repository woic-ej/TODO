import LargeNavBar from "@/app/_components/navbars/LargeNavBar";
import MediumNavBar from "./_components/navbars/MediumNavBar";
import SmallNavBar from "./_components/navbars/SmallNavBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <LargeNavBar />
      <MediumNavBar />
      <SmallNavBar />
    </div>
  );
}
