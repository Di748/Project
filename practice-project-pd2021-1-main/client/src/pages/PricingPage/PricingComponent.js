import React, { useState } from 'react';

const planToHeaderText = (plan) => {
    const lower = plan.toLowerCase()

    return `${lower.slice(0, 1).toUpperCase()}${lower.slice(1)}`
}

const Header = (props) => {
    const {
        type,
        text,
        amount,
    } = props

    return (
        <StyledHeaderContainer type={type}>
            <StyledHeaderText>{text}</StyledHeaderText>
            <StyledHeaderPrice>${amount}</StyledHeaderPrice>
        </StyledHeaderContainer>
    )

}


const Features = (props) => {
    const {
        type,
        includes,
    } = props

    return (
        <StyledFeaturesContainer>
            <StyledFeaturesList>
                {includes.map(({ text }, index) => {
                    return (
                        <StyledFeaturesListItem key={`includes-${index}`}>
                            <StyledFeaturesListItemText type={type} $isIncluded>
                                {text}
                            </StyledFeaturesListItemText>
                            <StyledFeaturesListItemText type={type} $isIncluded>
                                {text}
                                <StyledFeaturesListItemIcon type={type} icon='check' />
                            </StyledFeaturesListItemText>

                            <StyledFeaturesListItemText type={type} >
                                {text}
                            </StyledFeaturesListItemText>
                        </StyledFeaturesListItem>
                    )
                })}
            </StyledFeaturesList>
        </StyledFeaturesContainer>
    )
}

const Footer = (props) => {
    const {
      type,
      text,
      url
    } = props
  
    return (
      <StyledFooterContainer type={type}>
        <StyledFooterButton type={type} href={url}>
          {text}
        </StyledFooterButton>
      </StyledFooterContainer>
    )
  }



  const PricingCard = (props) => {
    const {
      plan,
      price,
      includes,
    } = props
  
    return (
      <StyledPricingCardContainer>
        <Header type={plan} text={planToHeaderText(plan)} amount={price}  />
        <Features type={plan} includes={includes} />
        <Footer type={plan} text={} />
      </StyledPricingCardContainer>
    )
  }
  
  const PricingComponent = ({ data }) => {
    return (
      <StyledPricingCards>
        {data.map((ar, index) => <PricingCard key={index} {...ar} />)}
      </StyledPricingCards>
    )
  }
  
  export default PricingComponent;