import TopLeft from './topLeft'
import TopRight from './topRight'

const Top = () => {
  return (
    <div className='flex justify-start px-10 py-10 gap-10'>
      <TopLeft />
      <TopRight />
    </div>
  )
}

export default Top
