import ButtonNext from "@/components/ButtonNext"
import QuoteCard from "@/components/QuoteCard"



const HomePage = () => {
  return (
    <div className=" bg-image-green h-screen w-screen bg-no-repeat bg-cover">
      <div>
        <p className="w-[443.26px] text-center text-white text-4xl text-[400] font-fredokaOne">GALLETAS DE LA FORTUNA</p>
        <QuoteCard />
        <ButtonNext/>
      </div>
    </div>
  )
}

export default HomePage