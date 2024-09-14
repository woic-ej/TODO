import LargeNavBar from "@/app/_components/navbars/LargeNavBar";
import MediumNavBar from "./_components/navbars/MediumNavBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <LargeNavBar />
      <MediumNavBar />
    </div>
  );
}
