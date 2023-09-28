import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="420" rx="10" ry="10" width="95" height="30" /> 
    <rect x="0" y="312" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="276" rx="10" ry="10" width="280" height="18" /> 
    <rect x="123" y="414" rx="25" ry="25" width="152" height="45" /> 
    <circle cx="138" cy="132" r="125" />
  </ContentLoader>
)

export default Skeleton