const Title = ({text1, text2}) => {
  return (
    <div className=" inline-flex gap-2 items-center mb-3">
    <p className=" bg-gradient-to-r from-yellow-500 via-pink-100 to-pink-400 bg-clip-text text-transparent">{text1}<span className=" bg-gradient-to-r from-pink-300 via-red-400 to-pink-400 bg-clip-text text-transparent font-medium">{text2}</span></p>
    <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray=700"></p>
    </div>
  )
}

export default Title