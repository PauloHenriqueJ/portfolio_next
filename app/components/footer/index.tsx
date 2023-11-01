import {IoMdHeart} from 'react-icons/io'

export const Footer = () => {
    return(
        <footer className="h-14 h-full flex items-center justify-center bg-gray-950">
            <span className="flex items-center gap-1.5 text-xs sm: font-mono text-gray-400">
                Criado com
                <IoMdHeart size={13} className='text-emerald-500'/>
                por
                <strong className='font-medium'>Paulo Henrique</strong>
            </span>

        </footer>
    )
}