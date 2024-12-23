import React from 'react'

export const Title = ({title, subtitle, center}) => {
  return (
    <div>
          <p style={{ fontSize: "16px", textAlign: center?  "center" : "left" }} data-aos="fade">
            {title}
          </p>
          <p style={{ fontSize: "40px", textAlign: center?  "center" : "left" }} data-aos="fade">
            {subtitle}
          </p>
        </div>
  )
}
