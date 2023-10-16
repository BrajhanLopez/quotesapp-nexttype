import Image from 'next/image'
import card from '../assets/svgs/card.svg'

type Props = {}

const QuoteCard = (props: Props) => {
    return (
        <div className="w-[627px] h-[245.65px] relative">
            <p className=' absolute top-0 bottom-0 left-0 right-0 m-auto w-[435px] h-[82px] text-center text-neutral-500 text-xl'>No tienes que ser más rápido que el oso, solo tienes que ser más rápido que el chico más lento que corre de él.</p>
            <Image src={card} alt=""/>
      </div>
    )
}

export default QuoteCard