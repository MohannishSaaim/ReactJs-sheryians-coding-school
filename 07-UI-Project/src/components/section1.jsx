import Center from './center'
import Top from './top'

const Section1 = (props) => {

  return (
    <div>
      <Top/>
      <Center cardData={props.cardData}/>
    </div>
  )
}

export default Section1
