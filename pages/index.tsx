import NavbarComponent from "@/components/NavbarComponent";
import GridBoxComponent from "@/components/GridBoxComponent";
import HeaderTitleComponent from "@/components/HeaderTitleComponent";



export default function Home() {
  return (
    <section
      className={`bg-zinc-900 text-gray-100 antialiased flex flex-col min-h-screen overflow-x-hidden`}>
      <NavbarComponent />
      <div className="px-4">
        <HeaderTitleComponent />
        <GridBoxComponent />
      </div>

    </section>
  )
}
