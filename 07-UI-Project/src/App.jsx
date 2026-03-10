import React from 'react'
import Section1 from './components/section1'

const App = () => {

  const cardData = [
{
"id": "couples_therapy",
"title": "Couples Therapy",
"description": "Strengthen your relationship and communication",
"badge": {
"left": "19:48",
"right": "Family"
},
"colors": {
"card_background": "#F7F6E5",
"badge_background": "#E8F6F2",
"text_color": "#1A1A1A"
},
"image": "/images/couples-therapy.jpg",
"cta": {
"label": "Read More",
"icon": "arrow-right"
}
},
{
"id": "anger_management",
"title": "Anger Management",
"description": "Improve communication and deepen your connection",
"badge": {
"left": "Person",
"right": "Group"
},
"colors": {
"card_background": "#CFEDE8",
"badge_background": "#F7F1EA",
"text_color": "#1A1A1A"
},
"image": "/images/anger-management.jpg",
"cta": {
"label": "Read More",
"icon": "arrow-right"
}
},
{
"id": "teenage_sessions",
"title": "Teenage Sessions",
"description": "Support and guide you toward a brighter tomorrow",
"badge": {
"left": "15-25",
"right": "Teens"
},
"colors": {
"card_background": "#EDF7BD",
"badge_background": "#FAF3EC",
"text_color": "#1A1A1A"
},
"image": "/images/teenage-sessions.jpg",
"cta": {
"label": "Read More",
"icon": "arrow-right"
}
},
{
"id": "addiction_therapy",
"title": "Addiction Therapy",
"description": "Confidential space for self-reflection and growth",
"badge": {
"left": "18:00",
"right": "Private"
},
"colors": {
"card_background": "#FE9EC7",
"badge_background": "#F7EFE8",
"text_color": "#1A1A1A"
},
"image": "/images/addiction-therapy.jpg",
"cta": {
"label": "Read More",
"icon": "arrow-right"
}
}
]

  return (
    <div>
      <Section1 cardData={cardData} />
    </div>
  )
}

export default App
