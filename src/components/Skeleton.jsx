import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={259}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
      <rect x="69" y="238" rx="8" ry="8" width="196" height="21" /> 
    <rect x="63" y="270" rx="11" ry="11" width="207" height="83" /> 
    <rect x="69" y="374" rx="10" ry="10" width="77" height="25" /> 
    <rect x="154" y="370" rx="15" ry="15" width="115" height="29" /> 
    <rect x="102" y="238" rx="0" ry="0" width="1" height="8" /> 
    <circle cx="165" cy="113" r="111" />
  </ContentLoader>
)

export default Skeleton

